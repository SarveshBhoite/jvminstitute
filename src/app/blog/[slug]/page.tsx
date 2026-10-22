import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import prisma from "@/lib/prisma";
import { blogPosts, mapDBBlogToBlogPost, BlogPost } from "@/data/blogData";
import SingleBlogClientView from "./SingleBlogClientView";

interface PageProps {
  params: { slug: string };
}

// Fetch single blog post by slug with database first, static fallback
async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const dbBlog = await prisma.blogPost.findUnique({
      where: { slug },
    });

    if (dbBlog) {
      return mapDBBlogToBlogPost(dbBlog);
    }
  } catch (error) {
    console.error("Error fetching blog from database:", error);
  }

  // Fallback to static blog data
  const staticPost = blogPosts.find((p) => p.slug === slug);
  return staticPost || null;
}

// Fetch 3 related posts
async function getRelatedPosts(currentSlug: string): Promise<BlogPost[]> {
  try {
    const dbBlogs = await prisma.blogPost.findMany({
      where: {
        slug: { not: currentSlug },
      },
      orderBy: { createdAt: "desc" },
      take: 3,
    });

    if (dbBlogs.length > 0) {
      return dbBlogs.map((b, i) => mapDBBlogToBlogPost(b, i));
    }
  } catch (error) {
    console.error("Error fetching related blogs from database:", error);
  }

  return blogPosts.filter((p) => p.slug !== currentSlug).slice(0, 3);
}

// Dynamic Server-Side SEO Metadata Generation (Googlebot will see this immediately)
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = await getBlogPost(params.slug);

  if (!post) {
    return {
      title: "Article Not Found | JVM Institute",
      description: "The requested blog article could not be found.",
      robots: { index: false, follow: false },
    };
  }

  const postTitle = `${post.title} | JVM Institute`;
  const postDescription = post.excerpt || "Read technical tutorials and career insights from JVM Institute Pune.";
  const canonicalUrl = `https://jvminstitute.com/blog/${post.slug}`;
  const ogImage = post.image || "/course.jpg";

  return {
    title: postTitle,
    description: postDescription,
    keywords: post.tags && post.tags.length > 0 ? post.tags : [post.category, "Data Engineering", "JVM Institute"],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: postTitle,
      description: postDescription,
      url: canonicalUrl,
      siteName: "JVM Institute",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      type: "article",
      publishedTime: post.publishedAt,
      authors: ["JVM Technical Team"],
    },
    twitter: {
      card: "summary_large_image",
      title: postTitle,
      description: postDescription,
      images: [ogImage],
    },
  };
}

// Server Component (Renders complete HTML for search engines and users instantly)
export default async function SingleBlogPage({ params }: PageProps) {
  const post = await getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = await getRelatedPosts(params.slug);

  return <SingleBlogClientView post={post} relatedPosts={relatedPosts} />;
}
