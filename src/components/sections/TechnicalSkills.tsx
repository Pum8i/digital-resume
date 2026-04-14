import { Stack, Typography } from "@mui/material";
import { useTechSkillsContext } from "src/hooks/ContextHooks";
import { useDeviceSize } from "src/hooks/DeviceSizeHooks";
import Section from "../widgets/Section";

interface IData {
  techSkills: {
    grouping: string;
    label: string;
    skills: { name: string; companies: string[] }[];
  }[];
}

export function TechnicalSkills({ resumeData }: { resumeData: IData }) {
  const { isSmallScreen } = useDeviceSize();
  const { skillGrouping } = useTechSkillsContext();
  const skills = resumeData.techSkills.flatMap((s) =>
    s.skills.map((s) => s.name)
  );
  const isSkillGroupingNone = skillGrouping === "none";

  return (
    <Section sectionTitle="Technical Skills" pb={isSkillGroupingNone ? 0 : 1}>
      {isSkillGroupingNone ? (
        <Typography variant="body1" sx={{ mb: 2, textAlign: "center" }}>
          {skills.join(" | ")}
        </Typography>
      ) : (
        resumeData.techSkills.map((ts) => {
          return (
            <Stack
              sx={{
                flexDirection: { xs: "column", md: "row" },
                alignItems: isSmallScreen ? "flex-start" : "baseline",
                pb: 1
              }}
              spacing={{ md: 2 }}
              key={ts.grouping}
            >
              <Typography
                variant="body1"
                sx={{ fontWeight: "bold", pr: 1 }}
              >{`${ts.label}:`}</Typography>
              <Typography variant="body1">
                {ts.skills.map((s) => s.name).join(" | ")}
              </Typography>
            </Stack>
          );
        })
      )}
    </Section>
  );
}
