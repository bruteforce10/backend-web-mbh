const CoverDirectorys = require("../../api/v1/cover-directorys/model");
const { NotFoundError } = require("../../errors");

const getOneCoverDirectorys = async (req) => {
  const { id } = req.params;

  const result = await CoverDirectorys.findOne({
    _id: id,
  }).populate({
    path: "images",
    select: "name",
  });

  if (!result) throw new NotFoundError(`Tidak ada Kategori dengan id :  ${id}`);

  return result;
};

const createDirectorys = async (req) => {
  const { title, images } = req.body;

  const checkName = await CoverDirectorys.findOne({ title });

  if (checkName) {
    const check = await CoverDirectorys.findOne({
      title,
      _id: { $ne: checkName._id },
    });
    if (check) throw new BadRequestError("nama duplikat");
    const result = await CoverDirectorys.findOneAndUpdate(
      { title },
      { $push: { images } },
      { new: true, runValidators: true }
    );
    if (!result)
      throw new NotFoundError(`Tidak ada Kategori dengan id :  ${title}`);
    return result;
  } else {
    const result = await CoverDirectorys.create({
      title,
      images,
    });
    return result;
  }
};

module.exports = {
  getOneCoverDirectorys,
  createDirectorys,
};
