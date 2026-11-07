import { Box, Container, CssBaseline, GlobalStyles, Paper } from "@mui/material";
import { resumeData } from "src/assets/data";
import Awards from "./components/sections/Awards";
import Education from "./components/sections/Education";
import Header from "./components/sections/Header";
import Links from "./components/sections/Links";
import { ProfessionalExperience } from "./components/sections/ProfessionalExperience";
import { ProfessionalSkills } from "./components/sections/ProfessionalSkills";
import { Summary } from "./components/sections/Summary";
import { TechnicalSkills } from "./components/sections/TechnicalSkills";
import SideOptions from "./components/widgets/SideOptions";
import { useDeviceSize } from "./hooks/DeviceSizeHooks";
import { useEffect } from "react";

function App() {
  const { isSmallScreen } = useDeviceSize();

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.origin !== "https://apumbien.vercel.app") return;
      
      if (event.data === "trigger-print") {
        window.print();
      }
    };
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return (
    <>
      <CssBaseline />
      <GlobalStyles styles={{
        "@media print": {
          body: {
            WebkitPrintColorAdjust: "exact",
            printColorAdjust: "exact",
          },
          ".MuiDrawer-root": {
            display: "none !important",
          },
        }
      }} />
      <SideOptions resumeData={resumeData} />
      <Box sx={{
        backgroundColor: "ghostwhite",
        "@media print": {
          backgroundColor: "white",
        }
      }}>
        <Container maxWidth="md" sx={{
          p: 2,
          "@media print": {
            p: 0,
            mt: 0,
            maxWidth: "100%",
          }
        }}>
          <Paper sx={{
            p: isSmallScreen ? 4 : 8,
            "@media print": {
              p: 0,
              boxShadow: "none",
            }
          }}>
            <Header resumeData={resumeData} />
            <Summary resumeData={resumeData} />
            <TechnicalSkills resumeData={resumeData} />
            <ProfessionalSkills resumeData={resumeData} />
            <ProfessionalExperience resumeData={resumeData} />
            <Education resumeData={resumeData} />
            <Awards resumeData={resumeData} />
            <Links resumeData={resumeData} />
          </Paper>
        </Container>
      </Box>
    </>
  );
}

export default App;
