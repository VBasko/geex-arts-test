import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import Favorite from "@/components/favorite";
import Article from "@/components/article";
import FeaturedCard from "@/components/featured-card";
import Filters from "@/components/filters";

import { articles } from "@/consts/articles";
import { favoriteCards } from "@/consts/favorite-cards";

const FeedPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "32px",
        paddingY: { xs: "16px", sm: "26px" },
      }}
    >
      <Favorite cards={favoriteCards} />

      <Container>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(12, 1fr)",
            columnGap: "24px",
            rowGap: "32px",
          }}
        >
          <Box
            sx={{
              gridColumn: {
                xs: "span 12",
                sm: "span 6",
                md: "span 8",
                lg: "span 8",
              },
            }}
          >
            <Box component="main">
              {articles.map((article) => (
                <Article key={article.title} article={article} />
              ))}
            </Box>
          </Box>

          <Box
            sx={{
              gridColumn: {
                xs: "span 12",
                sm: "span 6",
                md: "span 4",
                lg: "span 4",
              },
            }}
          >
            <Box
              component="aside"
              sx={{ display: "flex", flexDirection: "column", gap: "24px" }}
            >
              <Filters />

              <FeaturedCard />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default FeedPage;
