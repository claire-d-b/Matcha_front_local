"use client";

import React from "react";
import { ThemeProvider, Paper, Button } from "@mui/material";
import Alert from "@mui/material/Alert";
import Ctitle from "../Ctitle";
import Cheader from "../Cheader";
import Cfooter from "../Cfooter";
import Cnav from "../Cnav";
import Link from "next/link";
import Image from "next/image";
import LeafImage from "../../../public/images/leaf.png";
import GroupIcon from "@mui/icons-material/Group";
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
import { Line, Pie, Bar } from "react-chartjs-2";

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

interface PieDataItem {
  name: string;
  value: number;
}

interface BarDataItem {
  name: string;
  valeur: number;
}

// Couleurs pour les graphiques
const backgroundColors: string[] = ["#35bd63", "#e5e7ebd9"];

const pieData: PieDataItem[] = [
  { name: "Total users", value: 60 },
  { name: "Active users", value: 40 },
];

const barData: BarDataItem[] = [
  { name: "M", valeur: 75 },
  { name: "F", valeur: 45 },
];

// Configuration du graphique circulaire
const pieChartData: ChartData<"pie"> = {
  labels: pieData.map((item) => item.name),
  datasets: [
    {
      data: pieData.map((item) => item.value),
      backgroundColor: backgroundColors,
      borderWidth: 1,
    },
  ],
};

const pieChartOptions: ChartOptions<"pie"> = {
  responsive: true,
  // plugins: {
  //   legend: {
  //     position: "top" as const,
  //   },
  // tooltip: {
  //   callbacks: {
  //     label: function (context) {
  //       const label = context.label || "";
  //       const value = context.raw as number;
  //       const total = (context.dataset.data as number[]).reduce(
  //         (a, b) => a + b,
  //         0,
  //       );
  //       const percentage = Math.round((value / total) * 100);
  //       return `${label}: ${value} (${percentage}%)`;
  //     },
  //   },
  // },
  // },
};

const barChartData: ChartData<"bar"> = {
  labels: barData.map((item) => item.name),
  datasets: [
    {
      label: "Gender",
      data: barData.map((item) => item.valeur),
      backgroundColor: "#e5e7ebd9",
      borderWidth: 1,
    },
  ],
};

const barChartOptions: ChartOptions<"bar"> = {
  responsive: true,
  // plugins: {
  //   legend: {
  //     position: 'top' as const,
  //   },
  // },
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

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
  item.date.toLocaleDateString("en-GB", dateOptions),
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
      label: "Total users",
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
      <div className="flex flex-col w-full h-full bg-gray-400">
        <Cheader />
        <div className="flex h-full w-full self-center bg-white">
          <div className="flex h-full w-full items-start justify-center gap-12 p-12">
            <div className="w-full h-full flex flex-col justify-center items-end gap-2">
              <Link className="mb-6" href="/admin/profile">
                <Button className="self-end text-white" variant="contained">
                  Pending profiles
                </Button>
              </Link>
              <div className="h-full w-full overflow-y-scroll">
                <div className="w-full h-full flex flex-col gap-2">
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
                  <Alert
                    className="rounded-lg text-gray-800 w-full"
                    severity="success"
                  >
                    A new user has created a profile !
                  </Alert>
                  <Alert
                    className="rounded-lg text-gray-800 w-full"
                    severity="success"
                  >
                    A new user has created a profile !
                  </Alert>
                  <Alert
                    className="rounded-lg text-gray-800 w-full"
                    severity="error"
                  >
                    A user has left the app
                  </Alert>
                  <Alert
                    className="rounded-lg text-gray-800 w-full"
                    severity="info"
                  >
                    There are 10 active people in the app
                  </Alert>
                  <Alert
                    className="rounded-lg text-gray-800 w-full"
                    severity="success"
                  >
                    A new user has created a profile !
                  </Alert>
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
                    There are 6 active people in the app
                  </Alert>
                </div>
              </div>
            </div>
            <div className="h-full w-full flex flex-col text-center">
              <div className="w-full w-1/2">
                <div className="flex md:hidden text-gray-800 flex justify-center items-center">
                  <GroupIcon />
                  <div>
                    <b>37</b> users
                  </div>
                </div>
                <div className="hidden md:flex">
                  <Line data={donnees} options={options} />
                </div>
              </div>
              <div className="flex flex-col w-full md:flex-row justify-around items-center">
                <div className="flex md:w-2/4">
                  <Bar data={barChartData} options={barChartOptions} />
                </div>
                <div className="flex md:w-1/3">
                  <Pie data={pieChartData} options={pieChartOptions} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Cfooter />
      </div>
    </ThemeProvider>
  );
};

export default _;
