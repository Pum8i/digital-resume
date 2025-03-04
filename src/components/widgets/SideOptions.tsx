import { Global } from "@emotion/react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { useTheme } from "@mui/material/styles";
import * as React from "react";
import { useAccentContext } from "src/hooks/ContextHooks";
import { useDeviceSize } from "src/hooks/DeviceSizeHooks";
import ChuckNorris from "./ChuckNorris";
import SideOptionsAccentColors from "./SideOptionsAccentColors";
import SideOptionsTechSkillsGrouping from "./SideOptionsTechSkillsGrouping";

interface IData {
  sideOptions: {
    description: string;
  };
}

const drawerBleeding = 48;

export default function SideOptions({ resumeData }: { resumeData: IData }) {
  const theme = useTheme();
  const { accentColor } = useAccentContext();
  const { isSmallScreen, isMediumScreen } = useDeviceSize();
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <div>
      <CssBaseline />
      <Global
        styles={{
          ".MuiDrawer-root > .MuiPaper-root": {
            maxWidth: `calc(${
              isSmallScreen ? "90%" : isMediumScreen ? "605px" : ""
            } - ${drawerBleeding}px)`,
            overflow: "visible",
          },
        }}
      />
      <Drawer
        anchor="left"
        open={open}
        onClose={toggleDrawer(false)}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <Box
          sx={{
            textAlign: "right",
            position: "absolute",
            top: "50%",
            borderTopRightRadius: 8,
            borderBottomRightRadius: 8,
            visibility: "visible",
            right: -drawerBleeding,
            left: 0,
          }}
        >
          <IconButton
            onClick={toggleDrawer(!open)}
            sx={{
              px: 1,
              my: 2,
              mr: 0.5,
              backgroundColor: open ? "white" : "lightgray",
              WebkitTransition: "all .5s ease",
              MozTransition: "all .5s ease",
              transform: !open ? "rotate(0deg)" : "rotate(180deg)",
              transition: theme.transitions.create(
                ["transform", "all .5s ease"],
                {
                  duration: 500,
                }
              ),
              "&:hover": {
                background: accentColor,
              },
            }}
          >
            <ChevronRightIcon />
          </IconButton>
        </Box>
        <Box
          sx={{
            px: 2,
            py: 3,
            height: "-webkit-fill-available",
            overflow: "auto",
          }}
        >
          <Stack spacing={3} p={1} height="-webkit-fill-available">
            <Typography variant="body1" align="center">
              {resumeData.sideOptions.description}
            </Typography>
            <Divider />

            <Typography variant="h1" paragraph align="center">
              Formatting Options
            </Typography>
            <SideOptionsAccentColors isSmallScreen={isSmallScreen} />
            <Divider />
            <SideOptionsTechSkillsGrouping isSmallScreen={isSmallScreen} />
            <Box sx={{ height: "-webkit-fill-available" }}></Box>
            <ChuckNorris />
          </Stack>
        </Box>
      </Drawer>
    </div>
  );
}
