// for Japan
const MAN = 10000;
const OKU = 100000000;
const TYO = 1000000000000;
const BILLION = 1000000000;
const japanNumToCanadaDoller = (oku_yen, unit) => {
  return oku_yen * unit;
};

// setups
const labels = ["1970s", "1980s", "1990s", "2000s", "2010s"];
const dataForJapanGDP = {
  labels: labels,
  datasets: [
    {
      label: "Japan GDP (USD)",
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(255, 99, 132)",
      data: [
        japanNumToCanadaDoller(2126, OKU),
        japanNumToCanadaDoller(1.105, TYO),
        japanNumToCanadaDoller(3.133, TYO),
        japanNumToCanadaDoller(4.888, TYO),
        japanNumToCanadaDoller(5.7, TYO),
      ],
    },
    {
      label: "Canada GDP (USD)",
      backgroundColor: "rgb(0, 99, 132)",
      borderColor: "rgb(0, 99, 132)",
      data: [
        japanNumToCanadaDoller(992.7, OKU),
        japanNumToCanadaDoller(2739, OKU),
        japanNumToCanadaDoller(5939, OKU),
        japanNumToCanadaDoller(7448, OKU),
        japanNumToCanadaDoller(1.167, TYO),
      ],
    },
  ],
};
const dataForIranGDP = {
  labels: labels,
  datasets: [
    {
      label: "Iran GDP (USD)",
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(255, 99, 132)",
      data: [
        japanNumToCanadaDoller(10.98, BILLION),
        japanNumToCanadaDoller(94.36, BILLION),
        japanNumToCanadaDoller(128.8, BILLION),
        japanNumToCanadaDoller(109.6, BILLION),
        japanNumToCanadaDoller(486.8, BILLION),
      ],
    },
    {
      label: "Canada GDP (USD)",
      backgroundColor: "rgb(0, 99, 132)",
      borderColor: "rgb(0, 99, 132)",
      data: [
        japanNumToCanadaDoller(992.7, OKU),
        japanNumToCanadaDoller(2739, OKU),
        japanNumToCanadaDoller(5939, OKU),
        japanNumToCanadaDoller(7448, OKU),
        japanNumToCanadaDoller(1.167, TYO),
      ],
    },
  ],
};

const dataForJapanPopulation = {
  labels: labels,
  datasets: [
    {
      label: "Japan Population",
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(255, 99, 132)",
      data: [
        japanNumToCanadaDoller(1.034, OKU),
        japanNumToCanadaDoller(1.168, OKU),
        japanNumToCanadaDoller(1.235, OKU),
        japanNumToCanadaDoller(1.268, OKU),
        japanNumToCanadaDoller(1.281, OKU),
      ],
    },
    {
      label: "Canada Population",
      backgroundColor: "rgb(0, 99, 132)",
      borderColor: "rgb(0, 99, 132)",
      data: [
        japanNumToCanadaDoller(2132, MAN),
        japanNumToCanadaDoller(2452, MAN),
        japanNumToCanadaDoller(2769, MAN),
        japanNumToCanadaDoller(3069, MAN),
        japanNumToCanadaDoller(3400, MAN),
      ],
    },
  ],
};
const dataForIranPopulation = {
  labels: labels,
  datasets: [
    {
      label: "Iran Population",
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(255, 99, 132)",
      data: [
        japanNumToCanadaDoller(28.51, OKU),
        japanNumToCanadaDoller(38.65, OKU),
        japanNumToCanadaDoller(56.37, OKU),
        japanNumToCanadaDoller(65.62, OKU),
        japanNumToCanadaDoller(73.76, OKU),
      ],
    },
    {
      label: "Canada Population",
      backgroundColor: "rgb(0, 99, 132)",
      borderColor: "rgb(0, 99, 132)",
      data: [
        japanNumToCanadaDoller(2132, MAN),
        japanNumToCanadaDoller(2452, MAN),
        japanNumToCanadaDoller(2769, MAN),
        japanNumToCanadaDoller(3069, MAN),
        japanNumToCanadaDoller(3400, MAN),
      ],
    },
  ],
};

// configs
const japanCanadaGDPconfig = {
  type: "line",
  data: dataForJapanGDP,
  options: {},
};
const configIran = {
  type: "line",
  data: dataForIranGDP,
  options: {},
};

// create chart
const IranChart = new Chart(
  document.getElementById("Canada-Iran-gdp"),
  configIran
);

const japanCanadaPopulationConfig = {
  type: "line",
  data: dataForJapanPopulation,
  options: {},
};
const iranCanadaPopulationConfig = {
  type: "line",
  data: dataForIranPopulation,
  options: {},
};

// create charts
const myJapanCanadaGDPChart = new Chart(
  document.getElementById("jp-canada-gdp"),
  japanCanadaGDPconfig
);
const myJapanCanadaPopulationChart = new Chart(
  document.getElementById("jp-canada-population"),
  japanCanadaPopulationConfig
);

const myIranCanadaPopulationChart = new Chart(
  document.getElementById("iran-canada-population"),
  iranCanadaPopulationConfig
);
