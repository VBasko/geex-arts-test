import { IFavoriteCard } from "@/consts/favorite-cards";
import { formatDate } from "@/utils/format-date";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Divider,
  Stack,
  Typography,
} from "@mui/material";

interface IFavoriteCardProps {
  card: IFavoriteCard;
}

const FavoriteCard = ({ card }: IFavoriteCardProps) => {
  return (
    <Card
      sx={{
        minWidth: "320px",
        height: "287px",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        borderRadius: "18.42px",
        color: "#ffffff",
      }}
    >
      <CardContent
        sx={{
          zIndex: 1,
          padding: "12px",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Stack direction="row" sx={{ gap: "10px" }}>
          {card.tags.map((tag) => (
            <Chip
              key={tag}
              label={<Typography variant="body1">{tag}</Typography>}
              sx={{
                color: "#F1F3F7",
                backgroundColor: "rgba(255, 255, 255, 0.15)",
                paddingY: "7px",
                paddingX: "14px",
                height: "34px",
                backdropFilter: "blur(20px)",

                "& .MuiChip-label": {
                  padding: 0,
                },
              }}
            />
          ))}
        </Stack>

        <Box sx={{ display: "flex", flexDirection: "column", gap: "10.92px" }}>
          <Typography
            variant="h2"
            component="div"
            fontWeight={600}
            sx={{
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 2,
              textOverflow: "ellipsis",
              overflow: "hidden",
            }}
          >
            {card.title}
          </Typography>

          <Typography
            component="p"
            variant="body2"
            sx={{
              display: "flex",
              flexWrap: "wrap",
              color: "#F1F3F7",
            }}
          >
            <span>{card.category}</span>
            <Divider
              component="span"
              flexItem
              sx={{
                "& .MuiDivider-wrapper": {
                  paddingLeft: "4.09px",
                  paddingRight: "4.09px",
                  color: "inherit",
                },
              }}
            >
              &bull;
            </Divider>
            <time dateTime={card.time}>{formatDate(card.time)}</time>
          </Typography>
        </Box>
      </CardContent>

      <CardMedia
        component="img"
        image={card.img}
        sx={{ position: "absolute", inset: 0 }}
      />
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.3), transparent),
          linear-gradient(to bottom, rgba(0, 0, 0, 0.2), transparent)`,
        }}
      />
    </Card>
  );
};

export default FavoriteCard;
