const OKU = 100000000;
const TYO = 1000000000000;
const japanNumToCanadaDoller = (oku_yen, unit) => {
  return (oku_yen * unit);
};

// setup
const labels = ["1970s", "1980s", "1990s", "2000s", "2010s"];
const data = {
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
        japanNumToCanadaDoller(5.700, TYO),
      ],
    },
  ],
};

// config
const config = {
  type: "line",
  data: data,
  options: {},
};

// create chart
const myChart = new Chart(document.getElementById("jp-canada-gdp"), config);
