"use client";

import React from "react";
import { ThemeProvider, Paper, Button } from "@mui/material";
import Alert from "@mui/material/Alert";
import Ctitle from "../Ctitle";
import Cnav from "../Cnav";
import Link from "next/link";
import Image from "next/image";
import LeafImage from "../../../public/images/leaf.png";
import theme from "../theme";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData,
} from "chart.js";
import { Line } from "react-chartjs-2";

// Assurez-vous d'enregistrer CategoryScale avant de l'utiliser
ChartJS.register(
  CategoryScale, // C'est crucial pour l'axe des catégories
  LinearScale, // Nécessaire pour l'axe des valeurs
  PointElement, // Pour les points dans le graphique en ligne
  LineElement, // Pour les lignes dans le graphique en ligne
  BarElement, // Pour les barres
  ArcElement, // Pour les graphiques circulaires
  Title, // Pour les titres
  Tooltip, // Pour les infobulles
  Legend, // Pour les légendes
);

const userData = [
  { date: new Date("2024-01-01"), users: 1200 },
  { date: new Date("2024-01-15"), users: 1550 },
  { date: new Date("2024-02-01"), users: 1900 },
  { date: new Date("2024-02-15"), users: 2350 },
  { date: new Date("2024-03-01"), users: 2800 },
  { date: new Date("2024-03-15"), users: 3500 },
  { date: new Date("2024-04-01"), users: 4200 },
  { date: new Date("2024-04-15"), users: 4800 },
  { date: new Date("2024-05-01"), users: 5500 },
];

const dateOptions: Intl.DateTimeFormatOptions = {
  year: "numeric",
  month: "short",
  day: "numeric",
};

// Formater les dates pour les labels
const formattedDates = userData.map((item) =>
  item.date.toLocaleDateString("fr-FR", dateOptions),
);

// Extraire le nombre d'utilisateurs pour les données
const userCounts = userData.map((item) => item.users);

const labels = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin"];

const options: ChartOptions<"line"> = {
  responsive: true,
  plugins: {
    legend: {
      labels: {
        color: "#1f2937", // Couleur des labels de la légende
      },
    },
  },
  scales: {
    x: {
      ticks: {
        color: "#1f2937", // Couleur des labels de l'axe des X (abscisses)
      },
      grid: {
        color: "transparent", // Couleur de la grille de l'axe des X
      },
    },
    y: {
      ticks: {
        color: "#1f2937", // Couleur des labels de l'axe des Y (ordonnées)
      },
      grid: {
        color: "transparent", // Couleur de la grille de l'axe des Y
      },
    },
  },
};

const donnees: ChartData<"line"> = {
  labels: formattedDates,
  datasets: [
    {
      label: "Nombre d'utilisateurs",
      data: userCounts,
      backgroundColor: "#35bd63",
      tension: 0.3,
      pointRadius: 5,
      pointHoverRadius: 8,
    },
  ],
};

const _ = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="flex flex-col h-full w-full bg-gray-300">
        <Paper className="p-4 border border-white flex w-full justify-center items-center">
          <Ctitle opts="text-lg font-light" title="Matcha" />
          <Image className="w-6 md:w-10 h-auto" src={LeafImage} alt="leaf" />
          <Cnav className="self-end flex w-full justify-end items-center gap-2 md:gap-4 text-xs md:text-base" />
        </Paper>
        <div className="w-full h-full rounded-lg p-12 flex flex-col justify-center items-center text-lg font-thin bg-gray-400">
          <div className="h-full w-full self-center bg-white rounded-lg shadow-lg">
            <div className="container mx-auto p-12">
              <div className="flex w-full items-start justify-center gap-12">
                <div className="w-full flex flex-col justify-center items-end gap-2">
                  <Link href="/admin/profile">
                    <Button
                      className="self-end text-white mb-4"
                      variant="contained"
                    >
                      Pending profiles
                    </Button>
                  </Link>
                  <Alert
                    className="rounded-lg text-gray-800 w-full"
                    severity="success"
                  >
                    A new user has created a profile !
                  </Alert>
                  <Alert
                    className="rounded-lg text-gray-800 w-full"
                    severity="info"
                  >
                    There are 12 active people in the app
                  </Alert>
                  <Alert
                    className="rounded-lg text-gray-800 w-full"
                    severity="error"
                  >
                    A user has left the app
                  </Alert>
                </div>
                <div className="h-full w-full">
                  <Line data={donnees} options={options} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Paper className="w-full p-4 border border-white flex flex-col justify-center items-center bg-gray-800">
          Copyright
        </Paper>
      </div>
    </ThemeProvider>
  );
};

export default _;
