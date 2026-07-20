import { MessageSquare, Eye, Share2 } from "lucide-react";
import Image from "next/image";
import { featuredPosts } from "@/app/(dashboard)/blog/_components/blogPostsData";

const FeaturedPostGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 flex-wrap gap-6 w-full">
      {featuredPosts.map((post, index) => {
        const isPriority = index < 2;

        return (
          <div
            key={post.id}
            className={`relative h-75 rounded-2xl overflow-hidden flex flex-col justify-between p-6 text-pure-white group shadow-lg
              ${post.isLarge ? "sm:col-span-2" : "col-span-1"}
            `}
          >
            <Image
              src={post.coverImage}
              alt=""
              fill
              priority={isPriority}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover z-0 group-hover:scale-105 transition-transform duration-500"
            />

            <div className="absolute inset-0 bg-linear-to-t from-black/60 to-black/60 z-10" />

            <div className="relative z-20">
              <div className="w-11 h-11 rounded-full overflow-hidden">
                <Image
                  src={post.avatar}
                  alt=""
                  width={44}
                  height={44}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="relative -top-2 z-20 flex flex-col gap-3">
              <div>
                <span className="text-xs text-pure-white/60 font-medium tracking-wide">
                  {post.date}
                </span>
                <h2
                  className={`mt-3 leading-snug tracking-tight hover:underline ${
                    post.isLarge ? "text-xl md:text-2xl" : "text-md"
                  }`}
                >
                  {post.title}
                </h2>
              </div>

              <div className="flex items-center flex-wrap justify-end gap-4 text-xs font-semibold text-pure-white/80 mt-2">
                <div className="flex items-center gap-1">
                  <MessageSquare className="w-4 h-4 opacity-75" />
                  <span>{post.comments}</span>
                </div>

                <div className="flex items-center gap-1">
                  <Eye className="w-4 h-4 opacity-75" />
                  <span>{post.views}</span>
                </div>

                <div className="flex items-center gap-1">
                  <Share2 className="w-4 h-4 opacity-75" />
                  <span>{post.shares}</span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FeaturedPostGrid;
