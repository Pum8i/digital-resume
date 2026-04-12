import { Typography } from "@mui/material";
import Section from "../widgets/Section";

interface IData {
  awards: string[];
}

export default function Awards({ resumeData }: { resumeData: IData }) {
  return (
    <Section sectionTitle="Awards" pt={1}>
      {resumeData.awards.map((award) => {
        return (
          <Typography variant="body1" sx={{ textAlign: "left" }} key={award}>
            {award}
          </Typography>
        );
      })}
    </Section>
  );
}
