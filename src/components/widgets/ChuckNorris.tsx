import { Paper, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";

interface IData {
  icon_url: string;
  value: string;
}

export default function ChuckNorris() {
  const [chuck, setChuck] = useState<IData>({ icon_url: "", value: "" });

  async function getChuckNorris() {
    const url = "https://api.chucknorris.io/jokes/random";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const json = await response.json();
      setChuck(json);
    } catch (error: unknown) {
      let errorMessage = "Chuck Norris failed...that can't be right?!?";
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      console.log(errorMessage);
    }
  }

  useEffect(() => {
    getChuckNorris();
  }, []);

  return (
    <Paper>
      <Stack sx={{ flexDirection: "row", p: 1, alignItems: "center" }} spacing={1}>
        <img src={chuck.icon_url} />
        <Typography variant="body1" sx={{ maxWidth: "500px" }}>
          {chuck.value}
        </Typography>
      </Stack>
    </Paper>
  );
}
