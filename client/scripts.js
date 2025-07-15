document.getElementById("registerForm")?.addEventListener("submit", function (e) {
  e.preventDefault();
  const pw = document.getElementById("password").value;
  const confirm = document.getElementById("confirmPassword").value;
  const error = document.getElementById("errorMessage");

  const regex = /^(?=(?:.*[A-Za-z]){6})(?=(?:.*\d){2})(?=.*[!@#$%^&*]).{9,}$/;

  if (!regex.test(pw)) {
    error.textContent = "❌ Пароль должен содержать 6 букв, 2 цифры и 1 спецсимвол.";
    return;
  }
  if (pw !== confirm) {
    error.textContent = "❌ Пароли не совпадают.";
    return;
  }

  error.textContent = "";
  alert("✅ Проверка пройдена. Отправка на сервер...");
});

document.getElementById("loginForm")?.addEventListener("submit", function (e) {
  e.preventDefault();
  alert("🔑 Вход выполняется...");
});

document.getElementById("resetForm")?.addEventListener("submit", function (e) {
  e.preventDefault();
  const msg = document.getElementById("resetMsg");
  msg.textContent = "📩 Ссылка отправлена на почту (симуляция)";
});
