const axios = require("axios");

const AuthValidator = async (req, res, next) => {
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
      console.log(response.data);
      return res.status(500).json({
        err: response.data.err,
        message: response.data.message,
        success: response.data.success,
        data: response.data.data,
      });
    }
  } catch (error) {
    error = error.response.data;
    return res.status(500).json({
        err: error.err,
        message: error.message,
        success: error.success,
        data: error.data,
    });
  }
};

module.exports = AuthValidator;
