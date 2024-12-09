const { StatusCodes } = require("http-status-codes");
const {
  createArticles,
  getAllArticles,
  deleteArticles,
  updateArticles,
  getOneArticles,
  searchArticles,
} = require("../../../services/mongosee/articles");

const create = async (req, res, next) => {
  try {
    const result = await createArticles(req);
    res.status(StatusCodes.CREATED).json({ data: result });
  } catch (error) {
    next(error);
  }
};

const index = async (req, res, next) => {
  try {
    const result = await getAllArticles(req);
    res.status(StatusCodes.OK).json({ data: result });
  } catch (error) {
    next(error);
  }
};

const indexOne = async (req, res, next) => {
  try {
    const result = await getOneArticles(req);
    res.status(StatusCodes.OK).json({ data: result });
  } catch (error) {
    next(error);
  }
};

const destroy = async (req, res, next) => {
  try {
    await deleteArticles(req);
    res.status(StatusCodes.NO_CONTENT).json({ msg: "deleted" });
  } catch (error) {
    next(error);
  }
};

const search = async (req, res, next) => {
  try {
    const result = await searchArticles(req);
    res.status(StatusCodes.OK).json({ data: result });
  } catch (error) {
    next(error);
  }
};

const update = async (req, res, next) => {
  try {
    const result = await updateArticles(req);
    res.status(StatusCodes.OK).json({ data: result });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  create,
  index,
  destroy,
  update,
  indexOne,
  search,
};
