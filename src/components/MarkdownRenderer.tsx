import { useMemo, type ReactNode, type JSX } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize, { defaultSchema } from 'rehype-sanitize';

import type { EquipmentType } from '../types';

const sanitizeSchema = {
  ...defaultSchema,
  tagNames: [...(defaultSchema.tagNames ?? []), 'div'],
  attributes: {
    ...defaultSchema.attributes,
    div: [...(defaultSchema.attributes?.div ?? []), 'className', 'class'],
  },
};

interface Props {
  content: string;
  equipmentId?: EquipmentType;
}

/**
 * Pre-processes markdown to wrap Do's / Don'ts patterns in styled callout divs.
 * Detects patterns like "**Do's**" or "**Don'ts**" followed by bullet lists.
 */
function preprocessCallouts(md: string): string {
  // Match **Do's** / **Don'ts** / **Do's:** / **Don'ts:** patterns
  // followed by a list (starting with "- " on the next lines)
  const lines = md.split('\n');
  const result: string[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];
    const dosMatch = line.match(/^\*\*Do[''\u2019]?s:?\*\*\s*$/);
    const dontsMatch = line.match(/^\*\*Don[''\u2019]?ts?:?\*\*\s*$/);

    if (dosMatch || dontsMatch) {
      const type = dosMatch ? 'dos' : 'donts';
      const title = dosMatch ? "Do's" : "Don'ts";
      result.push(`<div class="callout-${type}">`);
      result.push(`<div class="callout-title">${title}</div>`);
      result.push('');
      i++;
      // Collect the list items that follow
      while (i < lines.length && (lines[i].startsWith('- ') || lines[i].startsWith('  ') || lines[i].trim() === '')) {
        result.push(lines[i]);
        i++;
        // Stop if we hit a blank line followed by a non-list line
        if (i < lines.length && lines[i].trim() === '' && i + 1 < lines.length && !lines[i + 1].startsWith('- ') && !lines[i + 1].startsWith('  ')) {
          break;
        }
      }
      result.push('</div>');
      result.push('');
    } else {
      result.push(line);
      i++;
    }
  }

  return result.join('\n');
}

/**
 * Filters markdown content by equipment type.
 * Keeps content inside matching <!-- equipment: xxx --> blocks and
 * removes content inside non-matching blocks. Content outside any
 * equipment block is always kept.
 */
function filterByEquipment(md: string, equipmentId: EquipmentType): string {
  const lines = md.split('\n');
  const result: string[] = [];
  let activeBlock: string | null = null;
  let keeping = true;

  for (const line of lines) {
    const openMatch = line.match(/^<!--\s*equipment:\s*([\w-]+)\s*-->$/);
    const closeMatch = line.match(/^<!--\s*\/equipment\s*-->$/);

    if (openMatch) {
      activeBlock = openMatch[1];
      keeping = activeBlock === equipmentId;
      continue;
    }

    if (closeMatch) {
      activeBlock = null;
      keeping = true;
      continue;
    }

    if (keeping) {
      result.push(line);
    }
  }

  return result.join('\n');
}

const components: Record<string, (props: Record<string, unknown>) => JSX.Element> = {
  table: ({ children, ...props }: { children?: ReactNode }) => (
    <div className="table-wrapper">
      <table {...props}>{children}</table>
    </div>
  ),
  a: ({ href, children, ...props }: { href?: string; children?: ReactNode }) => {
    if (!href) return <span {...props}>{children}</span>;
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
        {children}
        <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" className="inline-block ml-0.5 mb-0.5 opacity-50">
          <path d="M3.5 3a.5.5 0 0 0 0 1h3.793L2.146 9.146a.5.5 0 1 0 .708.708L8 4.707V8.5a.5.5 0 0 0 1 0v-5a.5.5 0 0 0-.5-.5h-5z"/>
        </svg>
      </a>
    );
  },
};

export default function MarkdownRenderer({ content, equipmentId }: Props) {
  const processed = useMemo(() => {
    const filtered = equipmentId ? filterByEquipment(content, equipmentId) : content;
    return preprocessCallouts(filtered);
  }, [content, equipmentId]);

  return (
    <div className="markdown-content">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw, [rehypeSanitize, sanitizeSchema]]}
        components={components}
      >
        {processed}
      </ReactMarkdown>
    </div>
  );
}
