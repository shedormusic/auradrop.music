document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData(e.target);
  let message = "📀 Новый релиз на AuraDrop\n\n";

  formData.forEach((value, key) => {
    message += ${key}: ${value}\n;
  });

  fetch("https://auradrop-telegram-proxy-xvrp.onrender.com/send", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: "1885891403",
      text: message
    })
  })
    .then((res) => {
      if (res.ok) {
        alert("✅ Отправлено в Telegram!");
        e.target.reset();
        location.reload();
      } else {
        alert("❌ Не удалось отправить сообщение.");
      }
    })
    .catch((err) => {
      alert("❌ Ошибка подключения к серверу.");
      console.error(err);
    });
});
