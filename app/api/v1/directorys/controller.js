const { StatusCodes } = require("http-status-codes");
const {
  createDirectorys,
  getDirectorys,
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

module.exports = {
  create,
  index,
};
