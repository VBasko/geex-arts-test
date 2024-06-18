import {
  Card,
  CardActions,
  CardContent,
  Divider,
  ImageList,
  ImageListItem,
  Typography,
  Box,
} from "@mui/material";
import ReadMore from "../ui/read-more";
import { IArticle } from "./types";
import { formatDate } from "@/utils/format-date";

import OutlineEyeIcon from "../ui/icons/outline-eye-icon";
import MessageIcon from "../ui/icons/message-icon";
import CommentsList from "./comments-list";

interface IArticleProps {
  article: IArticle;
}

const Article = ({ article }: IArticleProps) => {
  return (
    <Box
      sx={{
        borderRadius: 4,
        backgroundColor: "#FFFFFF",
        paddingX: { xs: "20px", md: "24px" },
        paddingY: { xs: "24px", md: "28px" },
      }}
      component="article"
    >
      <Card sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <CardContent
          sx={{
            padding: 0,
            display: "flex",
            flexDirection: "column",
            gap: { xs: "16px", md: "20px" },
          }}
        >
          <Box
            sx={{
              order: { xs: "1", sm: "unset" },
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            <Typography
              component="p"
              variant="body2"
              sx={{
                display: "flex",
                flexWrap: "wrap",
                color: "#9395B8",
                order: { xs: "1", sm: "unset" },
              }}
            >
              <span>{article.category}</span>
              <Divider
                component="span"
                flexItem
                sx={{
                  "& .MuiDivider-wrapper": {
                    paddingLeft: "6px",
                    paddingRight: "6px",
                    color: "inherit",
                  },
                }}
              >
                &bull;
              </Divider>
              <time dateTime={article.date}>{formatDate(article.date)}</time>
            </Typography>

            <Typography variant="h2">{article.title}</Typography>
          </Box>

          <CardActions sx={{ padding: 0, display: { xs: "none", md: "flex" } }}>
            <ReadMore TypographyProps={{ color: "#7B7EA5" }}>
              {article.description}
            </ReadMore>
          </CardActions>

          <ImageList
            cols={3}
            rowHeight={200}
            sx={{
              display: { xs: "none", md: "grid" },
              gap: "12px 10px !important",
              margin: 0,
            }}
          >
            {article.images.imageList.map((image, index) => (
              <ImageListItem
                key={index}
                sx={{
                  borderRadius: "14px",
                  overflow: "hidden",
                }}
              >
                <img
                  src={image}
                  alt={`Изображение ${index + 1} к статье "${article.title}"`}
                  width="100%"
                />
              </ImageListItem>
            ))}
          </ImageList>

          <Box
            sx={{
              borderRadius: "14px",
              overflow: "hidden",
              display: { xs: "flex", md: "none" },
              height: "240px",
            }}
          >
            <img
              src={article.images.imageMobile}
              style={{ width: "100%", objectFit: "cover" }}
            />
          </Box>
        </CardContent>

        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            gap: "20px",
            alignItems: "center",
          }}
        >
          <Typography
            variant="body1"
            color="#7B7EA5"
            sx={{ display: "flex", gap: "6px", alignItems: "center" }}
          >
            <OutlineEyeIcon /> {article.statistics.views}
          </Typography>

          <Typography
            variant="body1"
            color="#7B7EA5"
            sx={{ display: "flex", gap: "6px", alignItems: "center" }}
          >
            <MessageIcon /> {article.statistics.commentsCount}
          </Typography>
        </Box>

        {article.comments && (
          <>
            <Divider sx={{ display: { xs: "none", md: "flex" } }} />

            <CommentsList
              comments={article.comments}
              wrapperStyles={{ display: { xs: "none", md: "flex" } }}
            />
          </>
        )}
      </Card>
    </Box>
  );
};

export default Article;
