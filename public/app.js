const form = document.getElementById("notifForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const text = document.getElementById("text").value.trim();

  // Basic client-side sanitization
  if (!text || text.length > 500) {
    alert("Texte trop long!");
    return;
  }

  try {
    const res = await fetch("/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text }),
    });

    if (!res.ok) throw new Error("Failed to send");

    alert("Message envoyé: ".concat(text));
    form.reset();
  } catch (err) {
    console.error(err);
    alert(
      "Il y a eu une erreur avec le site, et si jsuis en piscine, merci de pas m'appeler pour le régler tout de suite, mais tu peux m'appeler pour me souhaiter bon courage ça ça va",
    );
  }
});
