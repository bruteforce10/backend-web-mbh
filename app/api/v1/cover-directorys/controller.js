const { StatusCodes } = require("http-status-codes");
const {
  getOneCoverDirectorys,
  createDirectorys,
  updateDirectorys,
} = require("../../../services/mongosee/coverDirectorys");

const create = async (req, res, next) => {
  try {
    const result = await createDirectorys(req);
    res.status(StatusCodes.CREATED).json({ data: result });
  } catch (err) {
    next(err);
  }
};

const find = async (req, res, next) => {
  try {
    const result = await getOneCoverDirectorys(req);
    res.status(StatusCodes.OK).json({ data: result });
  } catch (err) {
    next(err);
  }
};

const update = async (req, res, next) => {
  try {
    const result = await updateDirectorys(req);
    res.status(StatusCodes.OK).json({ data: result });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  create,
  find,
  update,
};
