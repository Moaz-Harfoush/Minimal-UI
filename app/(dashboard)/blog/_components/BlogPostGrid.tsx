import { memo } from "react";
import BlogPostCard from "@/app/(dashboard)/blog/_components/BlogPostCard";
import { BlogPost } from "@/app/(dashboard)/blog/_types/blog.types";

interface BlogPostGridProps {
  posts: BlogPost[];
}

const BlogPostGrid = ({ posts }: BlogPostGridProps) => {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 list-none p-0 m-0">
      {posts.map((post, index) => (
        <li key={post.id}>
          <BlogPostCard post={post} index={index} />
        </li>
      ))}
    </ul>
  );
};

export default memo(BlogPostGrid);
