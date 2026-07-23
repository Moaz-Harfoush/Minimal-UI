import dynamic from "next/dynamic";
import { blogPosts } from "@/app/(dashboard)/blog/_components/blogPostsData";
import { Metadata } from "next";
import Button from "@/app/components/ui/Button";

const FeaturedPostGrid = dynamic(
  () => import("@/app/(dashboard)/blog/_components/FeaturedPostGrid"),
);
const BlogPostGrid = dynamic(
  () => import("@/app/(dashboard)/blog/_components/BlogPostGrid"),
);
const BlogSearch = dynamic(
  () => import("@/app/(dashboard)/blog/_components/BlogSearch"),
);
const BlogSort = dynamic(
  () => import("@/app/(dashboard)/blog/_components/BlogSort"),
);
const Pagination = dynamic(() => import("@/app/components/ui/Pagination"));

export const metadata: Metadata = {
  title: "Blog - Minimal-UI",
  description:
    "Explore the latest insights, expert articles, and tech trends. Stay updated with our curated design stories and in-depth development tutorials.",
};

export default function BlogPage() {
  return (
    <div className="flex flex-col w-full gap-4">
      <div className="flex w-full justify-between items-center">
        <h2 className="font-bold text-2xl text-very-dark-gray">Blog</h2>
        <Button variant="primary">+ New Post</Button>
      </div>

      <div className="flex items-center flex-wrap justify-between gap-4 w-full py-4">
        <BlogSearch />
        <BlogSort />
      </div>

      <FeaturedPostGrid />
      <BlogPostGrid posts={blogPosts} />
      <Pagination />
    </div>
  );
}
