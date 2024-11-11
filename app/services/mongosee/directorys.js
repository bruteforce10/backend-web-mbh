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
    floor,
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
    floor,
  });

  return result;
};

const getDirectorys = async (req) => {
  const { title, floor, category } = req.query;

  console.log(req.query);

  const query = {};

  if (category !== undefined) {
    const checkCategory = await Categories.findOne({ name: category });
    if (checkCategory) {
      query.categories = checkCategory._id;
    }
  }

  if (floor !== "undefined" && floor !== "" && floor !== "null") {
    query.floor = floor;
  }

  if (title !== "undefined" && title !== "" && title !== "null") {
    query.title = { $regex: title, $options: "i" };
  }

  console.log(query, "query");

  const result = await Directorys.find(query).populate({
    path: "images",
    select: "name",
  });

  console.log(result);

  return result;
};

module.exports = { createDirectorys, getDirectorys };
