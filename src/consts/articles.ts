import { IArticle } from "@/components/article/types";

import img1 from "@/assets/article-1-1.png";
import img2 from "@/assets/article-1-2.png";
import img3 from "@/assets/article-1-3.png";
import img4 from "@/assets/article-1-4.png";
import img5 from "@/assets/article-1-5.png";
import img6 from "@/assets/article-1-6.png";
import imgMobile from "@/assets/article-mobile-1-1.png";

import comment1 from "@/assets/comment-1-img.png";
import comment2 from "@/assets/comment-2-img.png";

export const articles: IArticle[] = [
  {
    category: "Спортивная Борьба",
    date: "2024-03-12T16:03:00",
    title: "Илья Бессонов дал интервью для телеканала Россия-1",
    description:
      "Илья Бессонов дал интервью после большого перерыва, где поделился секретом своего успеха и рассказал методики своих тренировок. Спортсмен сделал заявление, что возвращается в спорт и готовится к новым соревнованиям.",
    images: {
      imageList: [img1, img2, img3, img4, img5, img6],
      imageMobile: imgMobile,
    },
    statistics: {
      views: "4.1 K",
      commentsCount: 4,
    },
    comments: [
      {
        avatar: comment1,
        senderName: "Вадим Давыдов",
        text: "Наконец-то! Рад, что он вернулся в спорт",
        time: "15 минут назад",
        replies: [
          {
            avatar: comment2,
            senderName: "Артем Еременко",
            text: "Вадим, согласен! Уже давно ждал интервью!",
            time: "30 секунд назад",
          },
        ],
      },
    ],
  },
];
