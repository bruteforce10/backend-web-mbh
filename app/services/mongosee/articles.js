const Articles = require("../../api/v1/articles/model");
const { NotFoundError } = require("../../errors");

const createArticles = async (req) => {
  const result = await Articles.create(req.body);

  return result;
};

// const getAllArticles = async (req) => {
//   const result = await Articles.find().populate("image");

//   return result;
// };

const getAllArticles = async (req, res) => {
  try {
    const { page = 1, limit = 150 } = req.query;
    const skip = (page - 1) * limit;

    const articles = await Articles.find()
      .populate("image")
      .skip(parseInt(skip))
      .limit(parseInt(limit))
      .sort({ createdAt: -1, title: 1 });

    const totalArticles = await Articles.countDocuments();
    const totalPages = Math.ceil(totalArticles / limit);

    return {
      data: articles,
      pagination: {
        currentPage: parseInt(page),
        totalPages,
        totalArticles,
      },
    };
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
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

const getOneArticles = async (req) => {
  const { slug } = req.params;
  const result = await Articles.findOne({ slug }).populate("image");
  if (!result)
    throw new NotFoundError(`Tidak ada Artikel dengan slug :  ${slug}`);
  return result;
};

module.exports = {
  createArticles,
  getAllArticles,
  deleteArticles,
  updateArticles,
  getOneArticles,
};
