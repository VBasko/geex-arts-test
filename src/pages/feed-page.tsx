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
    <Box sx={styles.feedWrapper}>
      <Favorite cards={favoriteCards} />

      <Container>
        <Box sx={styles.gridContainer}>
          <Box sx={styles.leftColumn}>
            <Box component="main">
              {articles.map((article) => (
                <Article key={article.title} article={article} />
              ))}
            </Box>
          </Box>

          <Box sx={styles.rightColumn}>
            <Box component="aside" sx={styles.aside}>
              <Filters />

              <FeaturedCard />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

const styles = {
  feedWrapper: {
    display: "flex",
    flexDirection: "column",
    gap: "32px",
    paddingY: { xs: "16px", sm: "26px" },
  },

  gridContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
    columnGap: "24px",
    rowGap: "32px",
  },

  leftColumn: {
    gridColumn: {
      xs: "span 12",
      sm: "span 6",
      md: "span 8",
      lg: "span 8",
    },
  },

  rightColumn: {
    gridColumn: {
      xs: "span 12",
      sm: "span 6",
      md: "span 4",
      lg: "span 4",
    },
  },

  aside: { display: "flex", flexDirection: "column", gap: "24px" },
};

export default FeedPage;
