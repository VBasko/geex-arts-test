import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";

interface IButtonLink {
  children: React.ReactNode;
  onClick: () => void;
}

const ButtonLink = ({ children, onClick }: IButtonLink) => {
  return (
    <ButtonBase
      disableTouchRipple
      sx={{
        background: "none",
        padding: 0,
      }}
      onClick={onClick}
    >
      <Typography component="span" color="#353754">
        {children}
      </Typography>
    </ButtonBase>
  );
};

export default ButtonLink;
