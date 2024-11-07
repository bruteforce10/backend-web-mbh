const Directorys = require("../../api/v1/directorys/model");
const Categories = require("../../api/v1/categories/model");
const { checkingImage } = require("./images");

const createDirectorys = async (req) => {
  const {
    title,
    description,
    phone,
    instagram,
    location,
    slug,
    images = [],
    categories,
  } = req.body;

  const checkImage = images.map((image) => {
    return checkingImage(image);
  });

  await Promise.all(checkImage);
  const checkName = await Directorys.findOne({ title });
  if (checkName) throw new BadRequestError("Directory nama duplikat");

  const result = await Directorys.create({
    title,
    description,
    categories,
    phone,
    slug,
    instagram,
    location,
    images,
  });

  return result;
};

const getDirectorys = async (req) => {
  const { title, floor, category } = req.query;

  const query = {};
  if (category) {
    const check = await Categories.findOne({ name: category });
    if (check) query.categories = check._id;
  }

  const result = await Directorys.find(query).populate({
    path: "images",
    select: "name",
  });
  return result;
};

module.exports = { createDirectorys, getDirectorys };
