import { Link } from "@mui/material";
import Section from "../widgets/Section";

interface IData {
  links: { url: string; label: string }[];
}

export default function Links({ resumeData }: { resumeData: IData }) {
  return (
    <Section sectionTitle="Links" pt={1}>
      <ul>
        {resumeData.links.map((link) => {
          const { url, label } = link;
          return (
            <li key={url}>
              <Link href={url} sx={{ textAlign: "left" }} target="_blank" rel="noreferrer">
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
