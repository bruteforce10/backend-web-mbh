const Events = require("../../api/v1/events/model");
const { BadRequestError } = require("../../errors");

const getAllEvents = async (req) => {
  const result = await Events.find().populate({
    path: "image",
    select: "name",
  });

  return result;
};

const createEvents = async (req) => {
  const {
    title,
    description,
    image,
    slug,
    location,
    startEvent,
    endEvent,
    linkInstagram,
  } = req.body;

  const check = await Events.findOne({
    title,
  });
  if (check) throw new BadRequestError("kategori nama duplikat");

  const result = await Events.create({
    title,
    description,
    image,
    slug,
    location,
    startEvent,
    endEvent,
    linkInstagram,
  });

  return result;
};

module.exports = {
  getAllEvents,
  createEvents,
};
