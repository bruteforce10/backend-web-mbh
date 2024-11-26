const Articles = require("../../api/v1/articles/model");
const { NotFoundError } = require("../../errors");

const createArticles = async (req) => {
  const result = await Articles.create(req.body);

  return result;
};

const getAllArticles = async (req) => {
  const result = await Articles.find().populate("image");

  return result;
};

const deleteArticles = async (req) => {
  const { id } = req.params;
  const result = await Articles.findOne({ _id: id });
  if (!result) throw new NotFoundError(`Tidak ada Artikel dengan id :  ${id}`);
  await result.deleteOne();
};

const updateArticles = async (req) => {
  const { id } = req.params;
  const {
    title,
    description,
    image,
    newsOpening,
    slug,
    metaTitle,
    metaDescription,
  } = req.body;

  const result = await Articles.findOneAndUpdate(
    { _id: id },
    {
      title,
      description,
      image,
      newsOpening,
      slug,
      metaTitle,
      metaDescription,
    },
    { new: true, runValidators: true }
  );
  if (!result) throw new NotFoundError(`Tidak ada Artikel dengan id :  ${id}`);
  return result;
};

module.exports = {
  createArticles,
  getAllArticles,
  deleteArticles,
  updateArticles,
};
