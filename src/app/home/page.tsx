"use client";

import { ThemeProvider } from "@mui/material";
import theme from "../theme";

const _ = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="flex flex-col h-full w-full justify-center items-stretch">
        Home Page
      </div>
    </ThemeProvider>
  );
};
export default _;
