const Articles = require("../../api/v1/articles/model");

const createArticles = async (req) => {
  const result = await Articles.create(req.body);

  return result;
};

module.exports = {
  createArticles,
};
