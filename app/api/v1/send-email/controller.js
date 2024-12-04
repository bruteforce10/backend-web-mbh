const nodemailer = require("nodemailer");
const { StatusCodes } = require("http-status-codes");

const sendEmail = async (req, res) => {
  const { subject, text } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "firdibackup@gmail.com",
      pass: "zxbp pnck hzbd xmbl",
    },
  });
  try {
    // Kirim email
    const info = await transporter.sendMail({
      from: "firdibackup@gmail.com",
      to: "audifirdi@gmail.com",
      subject,
      text,
    });

    console.log("Email sent: ", info.response);
    res.status(StatusCodes.OK).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email: ", error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: "Failed to send email", error });
  }
};

module.exports = { sendEmail };
