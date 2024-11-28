const Jumbotron = require("../../api/v1/jumbotron/model");

const getJumbotron = async () => {
  const result = await Jumbotron.findOne().populate("images");
  return result;
};

const createJumbotron = async (req) => {
  const result = await Jumbotron.create(req.body);
  return result;
};

const updateJumbotron = async (req) => {
  console.log(req.body);
  const result = await Jumbotron.updateOne({}, req.body, {
    new: true,
    upsert: true,
  });
  return result;
};

module.exports = {
  getJumbotron,
  createJumbotron,
  updateJumbotron,
};
