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
    slug,
    startPromo,
    endPromo,
  });

  return promo;
};

module.exports = {
  createPromo,
};
