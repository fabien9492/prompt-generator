function generatePrompt() {
  // Récupération des données du formulaire
  const site = document.getElementById('site').value;
  const search = document.getElementById('search').value;
  const tone = document.getElementById('tone').value;
  const audience = document.getElementById('audience').value;
  const objective = document.getElementById('objective').value;
  const duration = document.getElementById('duration').value;
  const platform = document.getElementById('platform').value;

  // Construction du prompt
  let prompt = `Voici le prompt pour générer une vidéo basée sur le site ${site} :\n\n`;
  prompt += `Ton souhaité : ${tone}\n`;
  prompt += `Public cible : ${audience}\n`;
  prompt += `Objectif de la vidéo : ${objective}\n`;
  prompt += `Durée de la vidéo : ${duration}\n`;
  prompt += `Plateformes cibles : ${platform}\n`;
  prompt += `Autorisation de recherche complémentaire : ${search}`;

  // Affichage du prompt dans l'interface
  document.querySelector('#result p').textContent = prompt;
}
