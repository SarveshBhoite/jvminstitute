import { z } from "zod";

export const blogPostSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  metaTitle: z.string().optional(),
  slug: z.string().min(2, "Slug is required"),
  excerpt: z.string().min(5, "Short description is required"),
  longDescriptionHtml: z.string().optional(),
  category: z.string().default("Data Engineering"),
  authorName: z.string().default("JVM Technical Team"),
  authorRole: z.string().default("Senior Data Architect @ JVM"),
  authorAvatar: z.string().default("/anand.png"),
  publishedAt: z.string().default("Aug 2026"),
  readTime: z.string().default("5 min read"),
  image: z.string().default("/course.jpg"),
  tags: z.string().default("Data Engineering, Python, SQL"),
  featured: z.boolean().default(false),
  contentJson: z.string().default("[]"),
});

export type BlogPostInput = z.infer<typeof blogPostSchema>;
