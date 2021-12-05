// for Japan
const OKU = 100000000;
const TYO = 1000000000000;
const BILLION = 1000000000;
const japanNumToCanadaDoller = (oku_yen, unit) => {
  return oku_yen * unit;
};

// setup
const labelsForJapanGDP = ["1970s", "1980s", "1990s", "2000s", "2010s"];
const dataForJapanGDP = {
  labels: labelsForJapanGDP,
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
  labels: labelsForJapanGDP,
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

// config
const config = {
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
const myChart = new Chart(document.getElementById("jp-canada-gdp"), config);
const IranChart = new Chart(
  document.getElementById("Canada-Iran-gdp"),
  configIran
);
