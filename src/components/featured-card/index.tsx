import featuredCardImage from "@/assets/featured-card-img.png";
import featuredCardLogoImage from "@/assets/featured-card-logo-img.png";
import { Card, CardMedia, CardContent, Typography, Box } from "@mui/material";

const FeaturedCard = () => {
  return (
    <Card
      sx={{ boxShadow: "none", position: "relative", borderRadius: "20px" }}
    >
      <CardMedia
        component="img"
        height="540"
        image={featuredCardImage}
        alt="Person with a hamlet sitting on a bike"
      />
      <CardContent
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 1,
          marginBottom: "40px",
          padding: 0,

          "&:last-child": {
            paddingBottom: 0,
          },
        }}
      >
        <Box sx={{ display: "flex" }}>
          <img
            src={featuredCardLogoImage}
            width={32}
            height={32}
            alt="SportRect logo variant"
          />
          <Typography
            variant="h2"
            component="span"
            sx={{
              paddingX: "8px",
              paddingY: "3px",
              backgroundColor: "#FAFAFB",
            }}
          >
            Велоспорт
          </Typography>
          <Box
            sx={{
              paddingX: "8px",
              paddingY: "3px",
              display: "flex",
              gap: "8px",
              backgroundColor: "#9395B8",
            }}
          >
            <Typography variant="h2" component="span" color="#ffffff">
              Москва
            </Typography>
            <Typography
              variant="h2"
              component="time"
              dateTime="2024"
              color="#ffffff"
              sx={{ opacity: 0.5 }}
            >
              2024
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            paddingY: "13px",
            paddingLeft: "32px",
            paddingRight: "22px",
            minHeight: "90px",
            backgroundColor: "#ffffff",
          }}
        >
          <Typography variant="h3" color="#06082C">
            Тур Альп-2024
            <br />
            Этап 3
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default FeaturedCard;
