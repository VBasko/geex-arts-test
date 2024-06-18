export interface IComment {
  avatar: string;
  senderName: string;
  text: string;
  time: string;
  replies?: IComment[];
}

export interface IArticle {
  category: string;
  date: string;
  title: string;
  description: string;
  images: {
    imageList: string[];
    imageMobile: string;
  };
  statistics: {
    views: number | string;
    commentsCount: number;
  };
  comments?: IComment[];
}
