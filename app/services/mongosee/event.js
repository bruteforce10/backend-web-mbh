const Events = require("../../api/v1/events/model");
const { BadRequestError, NotFoundError } = require("../../errors");

const getAllEvents = async (req) => {
  const result = await Events.find().populate({
    path: "image",
    select: "name",
  });

  return result;
};

const getOneEvents = async (req) => {
  const { slug } = req.params;

  const result = await Events.findOne({
    slug,
  }).populate({
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

const updateEvents = async (req) => {
  const { id } = req.params;
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
  const result = await Events.findOneAndUpdate(
    { _id: id },
    {
      title,
      description,
      image,
      slug,
      location,
      startEvent,
      endEvent,
      linkInstagram,
    },
    { new: true, runValidators: true }
  );

  if (!result) throw new NotFoundError(`Tidak ada Event dengan id :  ${id}`);

  return result;
};

const deleteEvent = async (req) => {
  const { id } = req.params;
  const result = await Events.findOne({ _id: id });
  if (!result) throw new NotFoundError(`Tidak ada Event dengan id :  ${id}`);
  await result.deleteOne();
};

module.exports = {
  getAllEvents,
  createEvents,
  getOneEvents,
  deleteEvent,
  updateEvents,
};
