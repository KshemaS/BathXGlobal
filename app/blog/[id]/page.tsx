import { notFound } from "next/navigation";
import { ALL_POSTS } from "../blogData";
import BlogDetailClient from "./BlogDetailClient";

interface PageProps {
  params: Promise<{ id: string }>;
}

// Generate static params for static site pre-rendering at compile time
export async function generateStaticParams() {
  return ALL_POSTS.map((post) => ({
    id: post.id.toString(),
  }));
}

// Generate dynamic metadata for search engines (SEO best practices)
export async function generateMetadata({ params }: PageProps) {
  const { id } = await params;
  const post = ALL_POSTS.find((p) => p.id === parseInt(id));

  if (!post) {
    return {
      title: "Article Not Found | BathX Editorial",
      description: "The requested editorial article was not found.",
    };
  }

  return {
    title: `${post.title} | BathX Editorial`,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | BathX Editorial`,
      description: post.excerpt,
      type: "article",
      publishedTime: new Date(post.date).toISOString(),
      authors: [post.author.name],
    },
  };
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { id } = await params;
  const post = ALL_POSTS.find((p) => p.id === parseInt(id));

  if (!post) {
    notFound();
  }

  // Get up to 3 related posts (excluding the current one)
  const relatedPosts = ALL_POSTS
    .filter((p) => p.id !== post.id)
    .slice(0, 3);

  return (
    <BlogDetailClient post={post} relatedPosts={relatedPosts} />
  );
}
