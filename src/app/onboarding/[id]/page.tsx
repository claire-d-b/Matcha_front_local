"use client";

import React, { useState, useEffect, ChangeEvent } from "react";
import { ThemeProvider, Paper, Button } from "@mui/material";
import Cheader from "../../Cheader";
import Cfooter from "../../Cfooter";
import theme from "../../theme";
import Cstepper from "../../Cstepper";
import { useParams } from "next/navigation";

const lst = ["M", "F", "-"];

const _ = () => {
  const params = useParams();
  const { id } = params; // Access the `id` route parameter
  console.log(id);

  return (
    <ThemeProvider theme={theme}>
      <div className="flex flex-col w-full h-full bg-gray-400">
        <Cheader />
        <div className="flex w-full h-full p-12 bg-gray-400">
          <Cstepper user_uuid={id} className="w-full h-full overflow-scroll" />
        </div>
        <Cfooter />
      </div>
    </ThemeProvider>
  );
};

export default _;
