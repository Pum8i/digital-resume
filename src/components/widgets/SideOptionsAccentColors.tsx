import {
  Box,
  FormControl,
  FormLabel,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import * as React from "react";
import { useAccentContext } from "src/hooks/ContextHooks";

export default function SideOptionsAccentColors({
  isSmallScreen,
}: {
  isSmallScreen: boolean;
}) {
  const theme = useTheme();
  const { accentColor, setAccentColor } = useAccentContext();

  const { blue, brown, burgundy, green, orange, purple } =
    theme.palette.accents;

  const handleAlignment = (
    _event: React.MouseEvent<HTMLElement>,
    newAcc: string
  ) => {
    setAccentColor(newAcc);
  };

  const Togs = ({
    accentColor,
    label,
  }: {
    accentColor: string;
    label: string;
  }) => {
    return (
      <ToggleButton value={accentColor}>
        <Stack
          direction="row"
          justifyContent={"flex-start"}
          alignItems="center"
          sx={{ width: "100%" }}
        >
          <Box
            sx={{
              height: 16,
              width: 16,
              pr: 2,
              mr: 1,
              borderRadius: 0.5,
              border: 1,
              borderColor: "black",
              background: accentColor,
            }}
          ></Box>
          {label}
        </Stack>
      </ToggleButton>
    );
  };

  return (
    <FormControl fullWidth margin="normal" sx={{ alignItems: "center" }}>
      <FormLabel id="accent-color-toggle-group-label">
        <Typography align="center" fontWeight="bold">
          Accent Color
        </Typography>
        <Typography variant="body1" paragraph>
          Pick your favorite accent color
        </Typography>
      </FormLabel>

      <ToggleButtonGroup
        size="small"
        aria-label="Accent color toggle group"
        exclusive
        value={accentColor}
        onChange={handleAlignment}
        orientation={isSmallScreen ? "vertical" : "horizontal"}
      >
        <Togs accentColor={blue} label="Blue" />
        <Togs accentColor={brown} label="Brown" />
        <Togs accentColor={burgundy} label="Burgundy" />
        <Togs accentColor={green} label="Green" />
        <Togs accentColor={orange} label="Orange" />
        <Togs accentColor={purple} label="Purple" />
      </ToggleButtonGroup>
    </FormControl>
  );
}
