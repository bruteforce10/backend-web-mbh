const { StatusCodes } = require("http-status-codes");
const {
  createEvents,
  getAllEvents,
} = require("../../../services/mongosee/event");

const create = async (req, res, next) => {
  try {
    const result = await createEvents(req);
    res.status(StatusCodes.CREATED).json({ data: result });
  } catch (err) {
    next(err);
  }
};

const index = async (req, res, next) => {
  try {
    const result = await getAllEvents(req);
    res.status(StatusCodes.OK).json({ data: result });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  create,
  index,
};
