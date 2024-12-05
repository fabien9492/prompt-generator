function generatePrompt() {
  const site = document.getElementById('site').value;
  const search = document.getElementById('search').value;
  const tone = document.getElementById('tone').value;
  const duration = document.getElementById('duration').value;
  const audience = document.getElementById('audience').value;
  const objective = document.getElementById('objective').value;
  const platform = document.getElementById('platform').value;

  const prompt = `
Je souhaite un script pour une vidéo destinée aux réseaux sociaux.
- Lien du site : ${site}
- Autorisation de recherche complémentaire : ${search}
- Ton souhaité : ${tone}
- Durée de la vidéo : ${duration}
- Public cible : ${audience}
- Objectif de la vidéo : ${objective}
- Plateformes prévues : ${platform}
  `;

  document.querySelector('#result p').innerText = prompt;
}

