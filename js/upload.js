
document.getElementById('releaseForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const data = new FormData(this);
  const message = `🎵 Релиз от ${data.get('artist')} — ${data.get('title')}`;
  fetch("https://api.telegram.org/bot7780266328:AAGHL0uAigkFJu43nVlekat0vdnyUbT4l7M/sendMessage", {
    method: "POST",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: "1885891403",
      text: message
    })
  }).then(() => alert("Релиз отправлен!"));
});
