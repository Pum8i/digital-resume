import { Typography } from "@mui/material";
import Section from "../widgets/Section";

interface IData {
  summary: string;
}

export function Summary({ resumeData }: { resumeData: IData }) {
  return (
    <>
      <Section sectionTitle="Professional Summary">
        <Typography variant="body1" sx={{ mb: 2 }}>
          {resumeData.summary}
        </Typography>
      </Section>
    </>
  );
}
