import img1 from "@/assets/hero-event-1.png";
import img2 from "@/assets/hero-event-2.png";
import img3 from "@/assets/hero-event-3.png";

export interface IFavoriteCard {
  title: string;
  category: string;
  time: string;
  img: string;
  tags: string[];
}

export const favoriteCards: IFavoriteCard[] = [
  {
    title: `Противостояние В Мире Спортивной Борьбы: 
    Атлеты Превращают Тренировочные Арены в Арены Героев`,
    category: "Спортивная Борьба",
    time: "2024-03-12T16:03",
    tags: ["#Борьба", "#Соревнования", "+1"],
    img: img1,
  },
  {
    title: `Звездные конькобежки и тренер сборной России 
    уезжают в Казахстан. Серьезные потери нашей команды`,
    category: "Конькобежный спорт",
    time: "2024-03-12T16:03",
    tags: ["#Коньки", "#Спортсмены", "+1"],
    img: img2,
  },
  {
    title: `Прошла последняя тренировка перед финальным матчем 
    по гандболу`,
    category: "Гандбол",
    time: "2024-03-12T16:03",
    tags: ["#Соревнования", "#Спортсмены", "+1"],
    img: img3,
  },
];
