const Directorys = require("../../api/v1/directorys/model");
const Categories = require("../../api/v1/categories/model");
const { checkingImage } = require("./images");
const { NotFoundError } = require("../../errors");

const createDirectorys = async (req) => {
  const {
    title,
    description,
    phone,
    instagram,
    location,
    slug,
    images,
    floor,
    categories,
  } = req.body;

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

  const query = {};

  if (category !== undefined) {
    const checkCategory = await Categories.findOne({ name: category });
    if (checkCategory) {
      query.categories = checkCategory._id;
    }
  }

  if (
    floor !== "undefined" &&
    floor !== "" &&
    floor !== "null" &&
    floor !== null &&
    floor !== undefined
  ) {
    query.floor = floor;
  }

  if (
    title !== "undefined" &&
    title !== "" &&
    title !== "null" &&
    title !== null &&
    title !== undefined
  ) {
    query.title = { $regex: title, $options: "i" };
  }

  const result = await Directorys.find(query)
    .populate({
      path: "images",
      select: "title images",
      populate: {
        path: "images",
        model: "Image",
      },
    })
    .populate({
      path: "categories",
      select: "name",
    });

  return result;
};

const updateDirectorys = async (req) => {
  const { id } = req.params;
  const {
    title,
    description,
    phone,
    instagram,
    location,
    slug,
    images,
    floor,
    categories,
  } = req.body;

  const result = await Directorys.findOneAndUpdate(
    { _id: id },
    {
      title,
      description,
      categories,
      phone,
      slug,
      instagram,
      location,
      images,
      floor,
    },
    { new: true, runValidators: true }
  );

  return result;
};

const getOneDirectory = async (req) => {
  const { slug } = req.params;

  const result = await Directorys.findOne({ slug })
    .populate({
      path: "images",
      select: "title images",
      populate: {
        path: "images",
        model: "Image",
      },
    })
    .populate({
      path: "categories",
      select: "name",
    });

  return result;
};

const deleteDirectory = async (req) => {
  const { id } = req.params;

  const result = await Directorys.findOne({ _id: id });

  if (!result) throw new NotFoundError(`Tidak ada Kategori dengan id :  ${id}`);

  await result.deleteOne();
};

module.exports = {
  createDirectorys,
  getDirectorys,
  getOneDirectory,
  deleteDirectory,
  updateDirectorys,
};
