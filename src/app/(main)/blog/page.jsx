import { Container } from '@/components/Container'
import { getAllPosts } from '@/lib/blog'
import Link from 'next/link'

export const metadata = {
  title: 'Blog',
  description: 'News and updates from SKYTALKS.',
}

export default function Blog() {
  const posts = getAllPosts()

  return (
    <div className="relative py-20 sm:py-24">
      <Container>
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <h1 className="font-display text-4xl font-bold tracking-tighter text-indigo-400 sm:text-5xl">
            The Latest
          </h1>
          <p className="mt-4 text-lg text-indigo-100">
            News, updates, and announcements from SKYTALKS.
          </p>

          <div className="mt-10 space-y-8">
            {posts.length === 0 ? (
              <p className="text-indigo-200">No posts yet. Check back soon!</p>
            ) : (
              posts.map((post) => (
                <article
                  key={post.slug}
                  className="group relative rounded-2xl border border-indigo-500/20 bg-indigo-950/50 p-6 transition hover:border-indigo-500/40 hover:bg-indigo-950/70"
                >
                  <Link href={`/blog/${post.slug}`} className="absolute inset-0">
                    <span className="sr-only">Read {post.frontmatter.title}</span>
                  </Link>
                  <time className="text-sm text-indigo-300">
                    {post.frontmatter.date
                      ? new Date(post.frontmatter.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })
                      : 'No date'}
                  </time>
                  <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight text-indigo-400 group-hover:text-indigo-300">
                    {post.frontmatter.title || 'Untitled'}
                  </h2>
                  {post.frontmatter.description && (
                    <p className="mt-2 text-indigo-100">
                      {post.frontmatter.description}
                    </p>
                  )}
                  <div className="mt-4 flex items-center text-sm text-indigo-300">
                    Read more
                    <svg
                      className="ml-1 h-4 w-4 transition group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </article>
              ))
            )}
          </div>
        </div>
      </Container>
    </div>
  )
}
