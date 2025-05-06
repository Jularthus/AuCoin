const form = document.getElementById("notifForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const text = document.getElementById("text").value.trim();

  if (!text || text.length > 50) {
    alert("Texte trop long!");
    return;
  }

  const password = prompt(
    "Mot de passe secret pour envoyer :\n",
  );

  try {
    const res = await fetch("/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: text,
        password: password,
      }),
    });

    if (res.status === 401) {
      alert("Mauvais mot de passe!");
      return;
    }

    if (!res.ok) {
      throw new Error("Failed to send");
    }

    const data = await res.json();
    alert(
      `Message envoyé: ${text}\nJe le lirai sous peu!\nÀ l'heure actuelle il y a ${data.nbr} ${
        data.nbr <= 1 ? "message" : "messages"
      } en attente (dont le tien)!`,
    );
    form.reset();
  } catch (err) {
    console.error(err);
    alert(
      "Il y a eu une erreur avec le site, et si jsuis en piscine, merci de pas m'appeler pour le régler tout de suite, mais tu peux m'appeler pour me souhaiter bon courage ça ça va",
    );
  }
});
