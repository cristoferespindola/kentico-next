'use client';

import type { Elements } from '@kontent-ai/delivery-sdk';

// NOTE: For production, use Kontent rich text resolver to handle links, images, components, etc.
// Here we just output basic HTML as a placeholder.
export function RichText({ richText }: { richText: Elements.RichTextElement }) {
  return <div dangerouslySetInnerHTML={{ __html: richText.value }} />;
}
