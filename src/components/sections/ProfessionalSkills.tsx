import { Typography } from "@mui/material";
import Section from "../widgets/Section";

interface IData {
  professionalSkills: string[];
}

export function ProfessionalSkills({ resumeData }: { resumeData: IData }) {
  return (
    <Section sectionTitle="Professional Skills">
      <Typography variant="body1" sx={{ mb: 2, textAlign: "center" }}>
        {resumeData.professionalSkills.join(" | ")}
      </Typography>
    </Section>
  );
}
