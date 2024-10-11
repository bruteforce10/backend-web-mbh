const Events = require("../../api/v1/events/model");
const { BadRequestError, NotFoundError } = require("../../errors");
const { checkingImage } = require("./images");

const getAllEvents = async (req) => {
  const result = await Events.find().populate({
    path: "image",
    select: "name",
  });

  return result;
};

const createEvents = async (req) => {
  const { title, description, image } = req.body;

  await checkingImage(image);

  const check = await Events.findOne({
    title,
  });
  if (check) throw new BadRequestError("kategori nama duplikat");

  const result = await Events.create({
    title,
    description,
    image,
  });

  return result;
};

module.exports = {
  getAllEvents,
  createEvents,
};
