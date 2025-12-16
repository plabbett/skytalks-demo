'use client'

import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

function processContent(content, siteUrl) {
  return content.replace(/\{\{siteUrl\}\}/g, siteUrl)
}

export function BlogContent({ content, siteUrl = 'https://skytalks.info' }) {
  const processedContent = processContent(content, siteUrl)

  return (
    <div className="prose prose-invert max-w-none prose-headings:font-display prose-headings:tracking-tight prose-headings:text-indigo-400 prose-p:text-indigo-100 prose-a:text-indigo-300 prose-a:underline hover:prose-a:text-indigo-200 prose-strong:text-indigo-200 prose-code:rounded prose-code:bg-indigo-900/50 prose-code:px-1.5 prose-code:py-0.5 prose-code:text-indigo-200 prose-pre:bg-indigo-950/50 prose-pre:border prose-pre:border-indigo-500/20 prose-li:text-indigo-100 prose-blockquote:border-indigo-500 prose-blockquote:text-indigo-200">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{processedContent}</ReactMarkdown>
    </div>
  )
}
