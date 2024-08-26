"use client";

import React from "react";
import Image from "next/image";
import { ThemeProvider, Paper, Stack, Button } from "@mui/material";
import theme from "../../../theme";
import Ctitle from "../../../Ctitle";
import Cnav from "../../../Cnav";
import Cpagination from "../../../Cpagination";
import Cautocomplete from "../../../Cautocomplete";
import LeafImage from "../../../../../public/images/leaf.png";
import { CardContent, CardActionArea, CardMedia } from "@mui/material";
import { categories } from "../../../Ccheckbox";

const profiles = [
  ["Seb A.", "m"],
  ["Marine O.", "f"],
  ["Sylvie Y.", "f"],
  ["Antoine N.", "m"],
  ["Eugénie A.", "f"],
  ["Seb A.", "m"],
  ["Marine O.", "f"],
  ["Sylvie Y.", "f"],
  ["Antoine N.", "m"],
  ["Eugénie A.", "f"],
];

const _ = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="flex flex-col w-full bg-gray-300">
        <Paper className="p-4 border border-white flex w-full justify-center items-center">
          <Ctitle opts="text-lg font-light" title="Matcha" />
          <Image className="w-6 md:w-10 h-auto" src={LeafImage} alt="leaf" />
          <Cnav className="self-end flex w-full justify-end items-center gap-2 md:gap-4 text-xs md:text-base" />
        </Paper>
        <div className="flex flex-col w-full justify-center items-start gap-2 py-8 px-8 bg-gray-700">
          <div>Search</div>
          <Cautocomplete
            className="w-1/4"
            categories={categories}
            size="small"
          />
        </div>
        <div className="flex flex-col h-full justify-center items-center gap-6 overflow-scroll">
          {profiles.length &&
            profiles.map((p, i) => (
              <CardActionArea
                key={`profile_${i}`}
                className="w-1/3 m-0 p-4 border rounded-lg shadow-lg"
              >
                <div>
                  <CardMedia
                    component="img"
                    image="../../images/people_f.png"
                    alt="persona"
                    className="rounded-lg"
                  />
                  <CardContent className="text-xs md:text-sm font-thin text-gray-800">
                    {p[0]}
                  </CardContent>
                </div>
              </CardActionArea>
            ))}
          <Cpagination rows={10} className="p-6 md:p-12 self-center" />
        </div>
        <Paper className="w-full p-4 border border-white flex flex-col justify-center items-center bg-gray-800">
          Copyright
        </Paper>
      </div>
    </ThemeProvider>
  );
};

export default _;
