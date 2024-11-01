const { StatusCodes } = require("http-status-codes");
const { createPromo } = require("../../../services/mongosee/promo");

const create = async (req, res, next) => {
  try {
    const result = await createPromo(req);
    res.status(StatusCodes.CREATED).json({ data: result });
  } catch (error) {
    next(error);
    console.log(error);
  }
};

module.exports = {
  create,
};
