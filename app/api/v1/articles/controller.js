const { StatusCodes } = require("http-status-codes");
const { createArticles } = require("../../../services/mongosee/articles");

const create = async (req, res, next) => {
  try {
    const result = await createArticles(req);
    res.status(StatusCodes.CREATED).json({ data: result });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  create,
};
