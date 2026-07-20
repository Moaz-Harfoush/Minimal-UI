import { memo } from "react";
import { MessageSquare, Eye, Share2 } from "lucide-react";
import Image from "next/image";
import { BlogPost } from "@/app/(dashboard)/blog/_types/blog.types";

interface BlogPostCardProps {
  post: BlogPost;
  index: number;
}

const BlogPostCard = ({ post, index }: BlogPostCardProps) => {
  const isPriority = index < 2;

  return (
    <div className="bg-pure-white rounded-xl overflow-hidden flex flex-col shadow-[0_8px_30px_rgb(0,0,0,0.04)] h-full group">
      <div className="relative h-44 sm:h-48 w-full overflow-hidden">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          priority={isPriority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
      </div>

      <div className="relative px-6">
        <div className="absolute -top-6 left-6 z-10 w-11 h-11 rounded-full border-4 border-white overflow-hidden">
          <img
            src={post.avatar}
            alt="Author avatar"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="p-6 pt-8 flex flex-col grow justify-between">
        <div className="mb-6">
          <span className="text-xs text-gray-400 font-semibold tracking-wide block mb-2">
            {post.date}
          </span>
          <h3 className="text-dark-gray hover:underline font-semibold text-[15px] leading-snug line-clamp-2">
            {post.title}
          </h3>
        </div>

        <div className="flex items-center justify-end gap-4 flex-wrap text-xs font-semibold text-gray-400 mt-auto">
          <div className="flex items-center gap-1">
            <MessageSquare className="w-4 h-4 opacity-70" />
            <span>{post.comments}</span>
          </div>

          <div className="flex items-center gap-1">
            <Eye className="w-4 h-4 opacity-70" />
            <span>{post.views}</span>
          </div>

          <div className="flex items-center gap-1">
            <Share2 className="w-4 h-4 opacity-70" />
            <span>{post.shares}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(BlogPostCard);
