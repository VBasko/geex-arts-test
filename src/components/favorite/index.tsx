import { Box } from "@mui/material";
import FavoriteCard from "./favorite-card";
import { IFavoriteCard } from "@/consts/favorite-cards";

interface IFavoriteProps {
  cards: IFavoriteCard[];
}

const Favorite = ({ cards }: IFavoriteProps) => (
  <Box
    sx={{
      display: { xs: "flex", sm: "none" },
      overflowX: "auto",
      gap: "16px",
      paddingX: "16px",

      "&::-webkit-scrollbar": {
        display: "none",
      },
    }}
  >
    {cards.map((card) => (
      <FavoriteCard key={card.title} card={card} />
    ))}
  </Box>
);

export default Favorite;
