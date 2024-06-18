import { Box, SxProps } from "@mui/material";
import { IComment } from "../types";
import Comment from "../comment";

interface ICommentsListProps {
  comments: IComment[];
  depth?: number;
  wrapperStyles?: SxProps;
}

const CommentsList = ({
  comments,
  depth = 0,
  wrapperStyles,
}: ICommentsListProps) => {
  return (
    <Box sx={{ ...wrapperStyles }}>
      {comments.map((comment, index) => (
        <Box key={index}>
          <Comment comment={comment} depth={depth} />
          {comment.replies && (
            <CommentsList comments={comment.replies} depth={depth + 1} />
          )}
        </Box>
      ))}
    </Box>
  );
};

export default CommentsList;
