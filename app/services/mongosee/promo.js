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
    endPromo,
  } = req.body;

  const promo = await Promos.create();
  return promo;
};
