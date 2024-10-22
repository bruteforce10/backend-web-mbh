const Directorys = require("../../api/v1/directorys/model");
const { checkingImage } = require("./images");

const createDirectorys = async (req) => {
  const { title, description, phone, instagram, location, images, categories } =
    req.body;

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
    instagram,
    location,
    images,
  });

  return result;
};

module.exports = { createDirectorys };
