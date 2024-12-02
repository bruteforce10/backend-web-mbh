const Directorys = require("../../api/v1/directorys/model");
const Events = require("../../api/v1/events/model");
const Articles = require("../../api/v1/articles/model");
const Promos = require("../../api/v1/promos/model");
const { BadRequestError } = require("../../errors");

const searchDirectorys = async (query) => {
  return await Directorys.find({
    title: { $regex: query, $options: "i" },
  }).populate({
    path: "images",
    select: "title images",
    populate: {
      path: "images",
      model: "Image",
    },
  });
};

const searchEvents = async (query) => {
  return await Events.find({
    title: { $regex: query, $options: "i" },
  });
};

const searchArticles = async (query) => {
  return await Articles.find({
    title: { $regex: query, $options: "i" },
  }).populate("images");
};

const searchPromos = async (query) => {
  return await Promos.find({
    title: { $regex: query, $options: "i" },
  }).populate("images");
};

const getAllSearch = async (req) => {
  const { q } = req.query;
  try {
    const [directorys, events, articles, promos] = await Promise.all([
      searchDirectorys(q),
      searchEvents(q),
      searchArticles(q),
      searchPromos(q),
    ]);

    return { directorys, events, articles, promos };
  } catch (error) {
    console.error("Error in getAllSearch:", error.message);
    throw new BadRequestError("Failed to search data");
  }
};

module.exports = getAllSearch;
