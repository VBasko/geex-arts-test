import { Box, Avatar, Typography } from "@mui/material";
import { IComment } from "../types";
import ButtonLink from "@/components/ui/button-link";

interface ICommentProps {
  comment: IComment;
  depth?: number;
}

const Comment = ({ comment, depth = 0 }: ICommentProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "flex-start",
        ml: `${depth * 32}px`,
        "&:not(:last-child)": {
          mb: "16px",
        },
      }}
    >
      <Avatar src={comment.avatar} />
      <Box sx={{ ml: "12px" }}>
        <Typography variant="body1" color="#7B7EA5" sx={{ mb: "4px" }}>
          {comment.senderName}
        </Typography>
        <Typography variant="body1" color="#06082C" sx={{ mb: "8px" }}>
          {comment.text}
        </Typography>
        <Typography
          variant="body1"
          color="#9395B8"
          sx={{ display: "flex", alignItems: "center", gap: "6px" }}
        >
          {comment.time}

          <ButtonLink onClick={() => {}}>Ответить</ButtonLink>
        </Typography>
      </Box>
    </Box>
  );
};

export default Comment;
