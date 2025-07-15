const nodemailer = require("nodemailer");

exports.sendEmail = async (to, token) => {
  const link = `https://auradrop.site/reset-password/${token}`;
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: 587,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });

  await transporter.sendMail({
    to,
    subject: "🔁 Восстановление пароля — AuraDrop",
    html: `<p>Нажмите ниже для сброса пароля:</p><a href="${link}">${link}</a>`
  });
};
