import { MetadataRoute } from 'next'
import prisma from '@/lib/prisma'
import { blogPosts as staticBlogPosts } from '@/data/blogData'

export const revalidate = 3600 // Revalidate sitemap every hour

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://jvminstitute.com'

  // Active website pages & courses only
  const staticRoutes = [
    '',
    '/data-engineering-course-in-pune',
    '/data-engineering-with-genai-course-in-pune',
    '/basic-ai-ml-course-in-pune',
    '/advanced-ai-ml-course-in-pune',
    '/generative-ai-course-in-pune',
    '/claude-ai-course-in-pune',
    '/about-us',
    '/contact-us',
    '/our-courses',
    '/placements',
    '/enroll',
    '/download-brochure',
    '/refer-and-earn',
    '/blog',
    '/privacy-policy',
    '/terms-and-conditions',
    '/refund-policy',
  ]

  // Fetch dynamic blogs from Prisma Database
  let blogSlugs: string[] = []
  try {
    const dbBlogs = await prisma.blogPost.findMany({
      select: { slug: true, updatedAt: true }
    })
    blogSlugs = dbBlogs.map((b) => b.slug)
  } catch (error) {
    console.error('Error fetching blogs for sitemap:', error)
  }

  // Include static fallback blog slugs if not in database
  const staticSlugs = staticBlogPosts.map((b) => b.slug)
  const allBlogSlugs = Array.from(new Set([...blogSlugs, ...staticSlugs]))

  const blogRoutes = allBlogSlugs.map((slug) => `/blog/${slug}`)

  const allRoutes = [...staticRoutes, ...blogRoutes]

  return allRoutes.map((route) => {
    const isDataEngineering = route === '/data-engineering-course-in-pune'
    const isHome = route === ''
    const isBlog = route.startsWith('/blog/')

    return {
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: isHome || isDataEngineering ? 'daily' : isBlog ? 'weekly' : 'monthly',
      priority: isHome ? 1.0 : isDataEngineering ? 0.95 : isBlog ? 0.7 : 0.8,
    }
  })
}

