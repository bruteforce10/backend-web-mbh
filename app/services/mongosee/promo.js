const Promos = require("../../api/v1/promos/model");
const { NotFoundError } = require("../../errors");

const createPromo = async (req) => {
  const {
    title,
    description,
    directory,
    location,
    category,
    image,
    linkInstagram,
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
    linkInstagram,
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

const deletePromo = async (req) => {
  const { id } = req.params;
  const result = await Promos.findOne({ _id: id });
  if (!result) throw new NotFoundError(`Tidak ada Promo dengan id :  ${id}`);
  await result.deleteOne();
};

const updatePromo = async (req) => {
  const { id } = req.params;
  const {
    title,
    description,
    directory,
    location,
    category,
    image,
    linkInstagram,
    slug,
    startPromo,
    endPromo,
  } = req.body;
  const result = await Promos.findOneAndUpdate(
    { _id: id },
    {
      title,
      description,
      directory,
      location,
      category,
      image,
      linkInstagram,
      slug,
      startPromo,
      endPromo,
    },
    { new: true, runValidators: true }
  );
  if (!result) throw new NotFoundError(`Tidak ada Promo dengan id :  ${id}`);
  return result;
};

module.exports = {
  createPromo,
  getPromo,
  getOnePromo,
  deletePromo,
  getDirectoryPromo,
  updatePromo,
};
