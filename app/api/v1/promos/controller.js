const { StatusCodes } = require("http-status-codes");
const {
  createPromo,
  getPromo,
  getOnePromo,
  getDirectoryPromo,
  deletePromo,
  updatePromo,
} = require("../../../services/mongosee/promo");

const create = async (req, res, next) => {
  try {
    const result = await createPromo(req);
    res.status(StatusCodes.CREATED).json({ data: result });
  } catch (error) {
    next(error);
    console.log(error);
  }
};

const index = async (req, res, next) => {
  try {
    const result = await getPromo(req);
    res.status(StatusCodes.OK).json({ data: result });
  } catch (error) {
    console.log(error);
  }
};

const indexOne = async (req, res, next) => {
  try {
    const result = await getOnePromo(req);
    res.status(StatusCodes.OK).json({ data: result });
  } catch (error) {
    console.log(error);
  }
};

const indexDirectoryPromo = async (req, res) => {
  try {
    const result = await getDirectoryPromo(req);
    res.status(StatusCodes.OK).json({ data: result });
  } catch (error) {
    console.log(error);
  }
};

const destroy = async (req, res, next) => {
  try {
    const result = await deletePromo(req);
    res.status(StatusCodes.OK).json({ data: result });
  } catch (error) {
    next(error);
  }
};

const update = async (req, res, next) => {
  try {
    const result = await updatePromo(req);
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
  indexDirectoryPromo,
  update,
};
