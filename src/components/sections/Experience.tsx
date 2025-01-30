import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { useAccentContext } from "src/hooks/ContextHooks";

interface IData {
  company: string;
  period: string;
  title: string;
  duties: string[];
}

export function Experience({
  experience,
  techSkills,
}: {
  experience: IData;
  techSkills: string[];
}) {
  const { accentColor } = useAccentContext();
  const { company, period, title, duties } = experience;
  return (
    <>
      <Typography variant="h4" sx={{ backgroundColor: "#efefef" }}>
        <Grid container direction="row" justifyContent="space-between">
          <Grid>{company}</Grid>
          <Grid pr={1}>{period}</Grid>
        </Grid>
      </Typography>
      <Typography variant="h5" align="left">
        {title}
      </Typography>
      <ul>
        {duties.map((duty) => {
          return <li key={duty}>{duty}</li>;
        })}
      </ul>
      {techSkills?.length > 0 && (
        <>
          <Typography
            variant="body1"
            align="justify"
            pb={2}
            px={2}
            component="div"
          >
            <Box fontWeight="bold" color={accentColor} display="inline" pr={1}>
              Technology Used:
            </Box>
            {techSkills.join(" | ")}
          </Typography>
        </>
      )}
    </>
  );
}
