const Promos = require("../../api/v1/promos/model");

const createPromo = async (req) => {
  const {
    title,
    description,
    directory,
    location,
    category,
    image,
    slug,
    startPromo,
    endPromo,
  } = req.body;

  const promo = await Promos.create({
    title,
    description,
    directory,
    location,
    category,
    image,
    linkPromo,
    slug,
    startPromo,
    endPromo,
  });

  return promo;
};

const getPromo = async (req) => {
  const result = await Promos.find()
    .populate({
      path: "image",
      select: "name",
    })
    .populate({
      path: "directory",
      select: ["title", "slug"],
    });

  return result;
};

const getOnePromo = async (req) => {
  const { slug } = req.params;

  console.log(slug);

  const result = await Promos.findOne({ slug })
    .populate({
      path: "image",
      select: "name",
    })
    .populate({
      path: "directory",
      select: ["title", "slug"],
    });

  return result;
};

const getDirectoryPromo = async (req) => {
  const { id } = req.params;

  const result = await Promos.find({ directory: id }).select("slug title");

  return result;
};

module.exports = {
  createPromo,
  getPromo,
  getOnePromo,
  getDirectoryPromo,
};
