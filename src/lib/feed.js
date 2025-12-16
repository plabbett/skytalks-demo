import { Feed } from 'feed'
import { getAllPosts } from '@/lib/blog'
import { siteConfig } from '@/lib/siteConfig'

export function generateFeed() {
  const posts = getAllPosts()

  const feed = new Feed({
    title: siteConfig.title,
    description: siteConfig.description,
    id: siteConfig.siteUrl,
    link: siteConfig.siteUrl,
    language: siteConfig.language,
    favicon: `${siteConfig.siteUrl}/favicon.ico`,
    copyright: siteConfig.copyright,
    feedLinks: {
      rss: `${siteConfig.siteUrl}/feed`,
    },
    author: siteConfig.author,
  })

  posts.forEach((post) => {
    const postUrl = `${siteConfig.siteUrl}/blog/${post.slug}`

    feed.addItem({
      title: post.frontmatter.title || 'Untitled',
      id: postUrl,
      link: postUrl,
      description: post.frontmatter.description || '',
      author: post.frontmatter.author
        ? [{ name: post.frontmatter.author }]
        : [siteConfig.author],
      date: post.frontmatter.date
        ? new Date(post.frontmatter.date)
        : new Date(),
    })
  })

  return feed
}
