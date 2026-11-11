// Compte le temps passé sur un site interdit et fait débarquer le perso.
let secondes = 0;
let affiche = false;

chrome.storage.sync.get({ sites: 'youtube.com', minutes: 1 }, ({ sites, minutes }) => {
  // Est-ce que le site actuel est dans la liste ?
  const interdit = sites.split(',').some((s) => s.trim() && location.hostname.includes(s.trim()));
  if (!interdit) return;

  // Toutes les secondes, on compte (seulement si l'onglet est visible)
  setInterval(() => {
    if (affiche || document.hidden) return;
    secondes++;
    if (secondes >= minutes * 60) afficherPerso();
  }, 1000);
});

// Petit raccourci pour créer un élément avec sa classe et son texte
function creer(balise, classe, texte = '') {
  const el = document.createElement(balise);
  el.className = 'anti-procra-' + classe;
  el.textContent = texte;
  return el;
}

function afficherPerso() {
  affiche = true;
  chrome.runtime.sendMessage({ type: 'attrape' });
  document.querySelector('video')?.pause();

  const musique = new Audio(chrome.runtime.getURL('musique.mp3'));
  musique.volume = 0.5;
  musique.play().catch(() => {});

  const perso = creer('img', 'perso');
  perso.src = chrome.runtime.getURL('perso.gif');

  const bouton = creer('button', 'bouton', "OK, j'y retourne");
  bouton.onclick = () => {
    fond.remove();
    musique.pause();
    secondes = 0;
    affiche = false;
  };

  const fond = creer('div', 'fond');
  fond.append(perso, creer('div', 'bulle', 'Eh ! Ça fait trop longtemps. Retourne bosser !'), bouton);
  document.body.append(fond);
}