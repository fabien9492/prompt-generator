function generatePrompt() {
  // Récupération des données du formulaire
  const site = document.getElementById('site').value;
  const search = document.getElementById('search').value;
  const tone = document.getElementById('tone').value;
  const audience = document.getElementById('audience').value;
  const objective = document.getElementById('objective').value;
  const duration = document.getElementById('duration').value;
  const platform = document.getElementById('platform').value;
   const cles = document.getElementById('cles').value;

  // Construction du prompt
  let prompt = `Peux tu me générer un script vidéo curation avec voix off basée sur l'article suivant : ${site} :\n\n`;
  prompt += `Il faudrait que le script adopte ton ${tone}\n`;
  prompt += `Pour mon script je vise le public suivant : ${audience}\n`;
  prompt += `L'objectif de ma vidéo serait : ${objective}\n`;
  prompt += `Le script de la vidéo doit durée : ${duration}\n`;
  prompt += `Je pense publier ma vidéo sur les plateformes suivantes : ${platform}\n`;
  prompt += `Autorisation de recherche complémentaire sur d'autres sites pour étoffer le script : ${search}\n`;
  prompt += `il faudrait que mon script contienne absolument les mots clés suivants : ${cles}\n`;
  prompt += `Merci !\n`;
  
  // Affichage du prompt dans l'interface
  document.querySelector('#result p').textContent = prompt; 
}
