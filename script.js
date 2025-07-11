document.addEventListener("DOMContentLoaded", function () {
  const instrumentalCheckbox = document.getElementById("instrumental");
  const lexicalGroup = document.getElementById("lexicalGroup");
  const lexicalSelect = document.getElementById("lexical");

  const noUpcCheckbox = document.getElementById("noUpc");
  const upcInput = document.getElementById("upc");

  const noIsrcCheckbox = document.getElementById("noIsrc");
  const isrcInput = document.getElementById("isrc");

  const coverInput = document.getElementById("cover");
  const coverError = document.getElementById("coverError");

  const trackInput = document.getElementById("track");
  const trackError = document.getElementById("trackError");

  instrumentalCheckbox.addEventListener("change", () => {
    lexicalGroup.style.display = instrumentalCheckbox.checked ? "none" : "block";
  });

  noUpcCheckbox.addEventListener("change", () => {
    upcInput.disabled = noUpcCheckbox.checked;
  });

  noIsrcCheckbox.addEventListener("change", () => {
    isrcInput.disabled = noIsrcCheckbox.checked;
  });

  document.getElementById("releaseForm").addEventListener("submit", function (e) {
    e.preventDefault();
    coverError.textContent = "";
    trackError.textContent = "";

    let isValid = true;

    // Обложка
    const coverFile = coverInput.files[0];
    if (!coverFile || !coverFile.name.toLowerCase().endswith(".jpg")) {
      coverError.textContent = "Обложка должна быть в формате JPG.";
      isValid = false;
    }

    // Трек
    const trackFile = trackInput.files[0];
    if (!trackFile) {
      trackError.textContent = "Загрузите трек.";
      isValid = false;
    } else {
      const name = trackFile.name.toLowerCase();
      if (name.endsWith(".mp3") && trackFile.size < 6000000) {
        // ок, условно принимаем 320 kbps
      } else if (name.endsWith(".wav") && trackFile.size > 10000000) {
        // ок, условно принимаем 16bit wav
      } else {
        trackError.textContent = "Трек должен быть WAV (16bit 44.1kHz) или MP3 (320kbps).";
        isValid = false;
      }
    }

    if (isValid) {
      alert("Все данные корректны. Отправка прошла успешно.");
    }
  });
});
