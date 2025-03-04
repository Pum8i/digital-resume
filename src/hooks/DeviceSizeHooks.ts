import { Breakpoints, useMediaQuery } from "@mui/material";

export const useDeviceSize = () => {
  const isSmallScreen = useMediaQuery((theme: { breakpoints: Breakpoints }) =>
    theme.breakpoints.down("sm")
  );
  const isMediumScreen = useMediaQuery((theme: { breakpoints: Breakpoints }) =>
    theme.breakpoints.down("md")
  );
  return { isSmallScreen, isMediumScreen };
};
