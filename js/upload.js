document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData(e.target);
  let message = "📀 Новый релиз на AuraDrop\n\n";

  formData.forEach((value, key) => {
    message += `${key}: ${value}\n`;
  });

  fetch("https://auradrop-telegram-proxy.onrender.com/send", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text: message })
  })
    .then((res) => {
      if (res.ok) {
        alert("✅ Отправлено!");
        e.target.reset();
        location.reload();
      } else {
        alert("❌ Ошибка сервера при отправке.");
      }
    })
    .catch((err) => {
      alert("❌ Сеть или прокси недоступны.");
      console.error(err);
    });
});