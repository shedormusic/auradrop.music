const User = require("../models/User");
const jwt = require("jsonwebtoken");
const { sendEmail } = require("../utils/email");

const validatePassword = (pw) =>
  /^(?=(?:.*[A-Za-z]){6})(?=(?:.*\d){2})(?=.*[!@#$%^&*]).{9,}$/.test(pw);

exports.register = async (req, res) => {
  const { email, username, password } = req.body;
  if (!validatePassword(password)) {
    return res.status(400).json({ error: "Пароль не соответствует требованиям" });
  }
  try {
    const user = await User.create({ email, username, password });
    res.json({ message: "Успешная регистрация", userId: user._id });
  } catch (err) {
    res.status(500).json({ error: "Ошибка регистрации" });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ error: "Неверные данные" });
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });
    res.json({ token });
  } catch {
    res.status(500).json({ error: "Ошибка входа" });
  }
};

exports.sendResetLink = async (req, res) => {
  const { email } = req.body;
  const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: "15m" });
  await sendEmail(email, token);
  res.json({ message: "Письмо отправлено" });
};

exports.resetPassword = async (req, res) => {
  const { token, newPassword } = req.body;
  if (!validatePassword(newPassword)) {
    return res.status(400).json({ error: "Пароль не соответствует требованиям" });
  }
  try {
    const { email } = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findOne({ email });
    user.password = newPassword;
    await user.save();
    res.json({ message: "Пароль обновлён" });
  } catch {
    res.status(500).json({ error: "Ошибка сброса пароля" });
  }
};
