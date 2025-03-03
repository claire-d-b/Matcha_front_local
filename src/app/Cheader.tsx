"use client";

import React, { useState, useEffect, ChangeEvent } from "react";
import { ThemeProvider, Paper, Button } from "@mui/material";
import Ctitle from "./Ctitle";
import Cnav from "./Cnav";
import Image from "next/image";
import LeafImage from "../../public/images/leaf.png";

const _ = () => {
  return (
    <Paper className="p-4 border border-white flex w-full justify-center items-center">
      <Ctitle opts="text-lg font-light" title="Matcha" />
      <Image className="w-6 md:w-10 h-auto" src={LeafImage} alt="leaf" />
      <Cnav className="self-end flex w-full justify-end items-center gap-2 md:gap-4 text-xs md:text-base" />
    </Paper>
  );
};

export default _;
