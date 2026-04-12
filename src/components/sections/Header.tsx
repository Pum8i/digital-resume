import { Link, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { useDeviceSize } from "src/hooks/DeviceSizeHooks";
import CornerIcon from "src/assets/CornerIcon";

interface IData {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  linkedIn: string;
}

function Header({ resumeData }: { resumeData: IData }) {
  const { isSmallScreen } = useDeviceSize();
  const { name, title, email, phone, location, linkedIn } = resumeData;
  return (
    <Grid container sx={{ flexDirection: "row", justifyContent: "space-between" }}>
      <Grid>
        <Typography variant="h1" sx={{ textAlign: "left" }}>
          {name}
        </Typography>
        <Typography variant="h2" sx={{ textAlign: "left" }}>
          {title}
        </Typography>
        <Typography variant="body1" sx={{ textAlign: "left" }}>
          <Link href={`mailto:${email}`} target="_blank" rel="noreferrer">
            {email}
          </Link>
          {" | " + phone + " | " + location}
        </Typography>

        <Typography variant="body1" sx={{ textAlign: "left" }} gutterBottom>
          <Link href={linkedIn} target="_blank" rel="noreferrer">
            {linkedIn}
          </Link>
        </Typography>
      </Grid>
      {!isSmallScreen && (
        <Grid>
          <CornerIcon />
        </Grid>
      )}
    </Grid>
  );
}

export default Header;
