document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();

  const token = "7780266328:AAGHL0uAigkFJu43nVlekat0vdnyUbT4l7M";
  const chatId = "1885891403";

  const formData = new FormData(e.target);

  let message = "<b>📀 Новый релиз на AuraDrop</b>\n\n";

  formData.forEach((value, key) => {
    message += <b>${key}:</b> ${value}\n;
  });

  fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      chat_id: chatId,
      text: message,
      parse_mode: "HTML",
    }),
  })
    .then((res) => {
      if (res.ok) {
        alert("✅ Релиз успешно отправлен!");
        e.target.reset();
        location.reload();
      } else {
        alert("❌ Ошибка при отправке.");
      }
    })
    .catch((err) => {
      alert("❌ Не удалось подключиться: " + err);
      console.error(err);
    });
});
