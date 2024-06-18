import { useState } from "react";

import Box from "@mui/material/Box";
import Typography, { TypographyProps } from "@mui/material/Typography";

import ButtonLink from "../button-link";

interface IReadMore {
  children: string;
  TypographyProps?: TypographyProps;
}

const ReadMore = ({ children, TypographyProps }: IReadMore) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <Box>
      <Typography component="span" variant="body1" {...TypographyProps}>
        {isReadMore ? text.slice(0, 172) : text}
      </Typography>
      {isReadMore ? "... " : " "}
      <ButtonLink onClick={toggleReadMore}>
        {isReadMore ? "Читать больше" : "Читать меньше"}
      </ButtonLink>
    </Box>
  );
};

export default ReadMore;
