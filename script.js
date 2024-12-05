// Fonction pour générer le prompt
function generatePrompt() {
  const site = document.getElementById('site').value;
  const search = document.getElementById('search').value;
  const tone = document.getElementById('tone').value;
  const audience = document.getElementById('audience').value;
  const objective = document.getElementById('objective').value;
  const duration = document.getElementById('duration').value;
  const platform = document.getElementById('platform').value;
  const keywords = document.getElementById('keywords').value.trim();

  let prompt = `Voici le prompt pour générer une vidéo basée sur le site ${site} :\n\n`;

  prompt += `Ton souhaité : ${tone}\n`;
  prompt += `Public cible : ${audience}\n`;
  prompt += `Objectif de la vidéo : ${objective}\n`;
  prompt += `Durée de la vidéo : ${duration}\n`;
  prompt += `Plateformes cibles : ${platform}\n`;
  prompt += `Autorisation de recherche complémentaire : ${search}\n`;

  if (keywords) {
    prompt += `Mots-clés : ${keywords}\n`;
  }

  document.querySelector('#result p').textContent = prompt;
}

// Fonction pour copier le texte et ouvrir ChatGPT
document.getElementById('copyAndOpen').addEventListener('click', function () {
  const resultText = document.querySelector('#result p').textContent;

  navigator.clipboard.writeText(resultText)
    .then(() => {
      window.open('https://chat.openai.com/', '_blank');
      alert("Le texte a été copié ! Collez-le dans l'onglet ChatGPT.");
    })
    .catch(err => {
      console.error('Erreur lors de la copie :', err);
    });
});

