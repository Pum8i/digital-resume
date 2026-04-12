import {
  FormControl,
  FormLabel,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import * as React from "react";
import { useTechSkillsContext } from "src/hooks/ContextHooks";

export default function SideOptionsTechSkillsGrouping({
  isSmallScreen,
}: {
  isSmallScreen: boolean;
}) {
  const {
    skillGrouping,
    setSkillGrouping,
    showCompanySkills,
    setShowCompanySkills,
  } = useTechSkillsContext();

  const handleChange = (
    _event: React.MouseEvent<HTMLElement>,
    grouping: string
  ) => {
    setSkillGrouping(grouping);
  };

  const handleChangeShowCompanySkills = (
    _event: React.MouseEvent<HTMLElement>,
    showCompanySkills: boolean
  ) => {
    setShowCompanySkills(showCompanySkills);
  };

  return (
    <FormControl fullWidth margin="normal" sx={{ alignItems: "center" }}>
      <FormLabel id="tech-skills-toggle-group-label">
        <Typography sx={{ textAlign: "center", fontWeight: "bold" }}>
          Technical Skills
        </Typography>
        <Typography variant="body1" gutterBottom sx={{ textAlign: "justify", pt: 2 }}>
          List technical skills as one big list or group them by technology.
        </Typography>
      </FormLabel>

      <ToggleButtonGroup
        size="small"
        aria-label="Tech skills button group"
        exclusive
        value={skillGrouping}
        onChange={handleChange}
        orientation={isSmallScreen ? "vertical" : "horizontal"}
      >
        <ToggleButton value={"none"}>{"None"}</ToggleButton>
        <ToggleButton value={"tech"}>{"Technology"}</ToggleButton>
      </ToggleButtonGroup>

      <FormLabel id="tech-skills-toggle-group-label">
        <Typography variant="body1" gutterBottom sx={{ textAlign: "justify", pt: 2 }}>
          Show list of technical skills used at each company.
        </Typography>
      </FormLabel>

      <ToggleButtonGroup
        size="small"
        aria-label="show company tech skills "
        exclusive
        value={showCompanySkills}
        onChange={handleChangeShowCompanySkills}
        orientation={isSmallScreen ? "vertical" : "horizontal"}
      >
        <ToggleButton value={false}>{"Hide"}</ToggleButton>
        <ToggleButton value={true}>{"Show"}</ToggleButton>
      </ToggleButtonGroup>
    </FormControl>
  );
}
