const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const rateLimit = require("express-rate-limit");
const axios = require("axios");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();

const PORT = 3005;

const limiter = rateLimit({ windowMs: 2 * 60 * 1000, max: 5 });

app.use(morgan("combined"));
app.use(limiter);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.get("http://localhost:3001/api/v1/isadmin/", async (req, res, next) => {});

app.use("/bookingservice", async (req, res, next) => {
  try {
    const response = await axios.get(
      "http://localhost:3001/api/v1/isauthenticated",
      {
        headers: {
          "x-access-token": req.headers["x-access-token"],
        },
      }
    );

    console.log(response.data);
    if (response.data.success) {
      next();
    } else {
      return res.status(500).json({
        err: response.data.err,
        message: response.data.message,
        success: response.data.success,
        data: response.data.data,
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: "something went wrong",
    });
  }
});

app.use(
  "/bookingservice",
  createProxyMiddleware({
    target: "http://localhost:3002/",
    changeOrigin: true,
  })
);

app.get("/home", (req, res) => {
  return res.json({
    message: "ok",
  });
});

app.listen(PORT, () => {
  console.log(`server started, listening on port @${PORT}`);
});
