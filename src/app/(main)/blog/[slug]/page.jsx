import { Container } from '@/components/Container'
import { getPostBySlug, getPostSlugs } from '@/lib/blog'
import { siteConfig } from '@/lib/siteConfig'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { BlogContent } from '@/components/BlogContent'

export async function generateStaticParams() {
  const slugs = getPostSlugs()
  return slugs.map((slug) => ({
    slug: slug.replace(/\.md$/, ''),
  }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: post.frontmatter.title || 'Blog Post',
    description: post.frontmatter.description || '',
  }
}

export default async function BlogPost({ params }) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="relative py-20 sm:py-24">
      <Container>
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <Link
            href="/blog"
            className="inline-flex items-center text-sm text-indigo-300 hover:text-indigo-200"
          >
            <svg
              className="mr-1 h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Blog
          </Link>

          <article className="mt-8">
            <header>
              {post.frontmatter.date && (
                <time className="text-sm text-indigo-300">
                  {new Date(post.frontmatter.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
              )}
              <h1 className="mt-2 font-display text-4xl font-bold tracking-tighter text-indigo-400 sm:text-5xl">
                {post.frontmatter.title || 'Untitled'}
              </h1>
              {post.frontmatter.author && (
                <p className="mt-4 text-indigo-200">By {post.frontmatter.author}</p>
              )}
            </header>

            <div className="mt-10">
              <BlogContent content={post.content} siteUrl={siteConfig.siteUrl} />
            </div>
          </article>
        </div>
      </Container>
    </div>
  )
}
