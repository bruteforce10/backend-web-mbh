const { StatusCodes } = require("http-status-codes");
const {
  createDirectorys,
  getDirectorys,
  getOneDirectory,
  deleteDirectory,
  updateDirectorys,
} = require("../../../services/mongosee/directorys");

const create = async (req, res, next) => {
  try {
    const result = await createDirectorys(req);
    res.status(StatusCodes.CREATED).json({ data: result });
  } catch (err) {
    next(err);
  }
};

const index = async (req, res, next) => {
  try {
    const result = await getDirectorys(req);
    res.status(StatusCodes.OK).json({ data: result });
  } catch (err) {
    next(err);
  }
};

const indexOne = async (req, res, next) => {
  try {
    const result = await getOneDirectory(req);
    res.status(StatusCodes.OK).json({ data: result });
  } catch (err) {
    next(err);
  }
};

const destroy = async (req, res, next) => {
  try {
    await deleteDirectory(req);
    res.status(StatusCodes.NO_CONTENT).json({ msg: "deleted" });
  } catch (error) {
    next(error);
  }
};

const update = async (req, res, next) => {
  try {
    const result = await updateDirectorys(req);
    res.status(StatusCodes.OK).json({ data: result });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  create,
  index,
  indexOne,
  destroy,
  update,
};
