const express = require("express");
const morgan = require("morgan");
const app = express();
const port = 1322;

app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/imsbank/api/GetAccountSummary", (req, res) => {
  res.json({
    OUTPUT_AREA: {
      accountSummary: [
        {
          balance: 15000.0,
          accountType: "c",
          accountNumber: 1504,
        },
        {
          balance: 35000.0,
          accountType: "s",
          accountNumber: 1503,
        },
        {
          balance: 23983.0,
          accountType: "s",
          accountNumber: 1502,
        },
        {
          balance: 9531.0,
          accountType: "c",
          accountNumber: 1501,
        },
      ],
      message: "00000000000000000000000000000000",
    },
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
