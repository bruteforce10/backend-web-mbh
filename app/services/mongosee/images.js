const { type } = require("os");
const Images = require("../../api/v1/images/model");
const { NotFoundError } = require("../../errors");
const fs = require("fs");
const path = require("path");

const generateImage = async (req) => {
  const result = `uploads/${req.file.filename}`;

  return result;
};

const createImages = async (req) => {
  const result = await Images.create({
    name: req.file
      ? `uploads/${req.file.filename}`
      : "uploads/avatar/default.jpg",
    type: req.body.type,
  });

  return result;
};

// tambahkan function checking Image
const checkingImage = async (id) => {
  const result = await Images.findOne({ _id: id });

  if (!result) throw new NotFoundError(`Tidak ada Gambar dengan id :  ${id}`);

  return result;
};

const deleteImages = async (req) => {
  const { id } = req.params;

  const result = await Images.findOne({ _id: id });

  if (!result) throw new NotFoundError(`Tidak ada Gambar dengan id :  ${id}`);
  console.log(result.name);

  const filePath = path.join(__dirname, "../../../", `public/${result.name}`);

  console.log(filePath);

  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      console.error("File tidak ditemukan");
    } else {
      fs.unlink(filePath, (err) => {
        if (err) {
          console.error("Gagal menghapus file:", err);
        } else {
          console.log("File berhasil dihapus");
        }
      });
    }
  });

  await result.deleteOne();

  return result;
};

module.exports = { createImages, generateImage, checkingImage, deleteImages };
