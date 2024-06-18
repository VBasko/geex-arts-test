import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";

import * as styles from "./styles";

interface ICustomSwipableDrawer {
  open: boolean;
  onClose: () => void;
  onOpen: () => void;
  children: React.ReactNode;
}

const CustomSwipableDrawer = ({
  open,
  onOpen,
  onClose,
  children,
}: ICustomSwipableDrawer) => {
  const pullerHeight = 33;

  const handleDrawerOpen = () => {
    onOpen();
  };

  const handleDrawerClose = () => {
    onClose();
  };

  return (
    <>
      <Box sx={styles.bottomPuller} />

      <SwipeableDrawer
        anchor="bottom"
        open={open}
        onClose={handleDrawerClose}
        onOpen={handleDrawerOpen}
        swipeAreaWidth={pullerHeight}
        disableSwipeToOpen={false}
        PaperProps={{
          sx: styles.innerPaper,
        }}
      >
        <Box sx={styles.topPuller} />

        <Box>{children}</Box>
      </SwipeableDrawer>
    </>
  );
};

export default CustomSwipableDrawer;
