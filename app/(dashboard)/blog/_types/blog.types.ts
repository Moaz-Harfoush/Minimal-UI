export interface BlogPost {
  id: number;
  date: string;
  title: string;
  coverImage: string;
  avatar: string;
  comments: string;
  views: string;
  shares: string;
}

export interface FeaturedPost extends BlogPost {
  isLarge: boolean;
}

export interface BlogSortOption {
  value: string;
  label: string;
}
