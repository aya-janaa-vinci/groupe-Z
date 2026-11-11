// La popup : on lit et on enregistre les reglages de l'utilisateur.
const champSites = document.getElementById('sites');
const champMinutes = document.getElementById('minutes');
const texteAttrape = document.getElementById('attrape');

// Valeurs par defaut si rien n'est encore enregistre
const DEFAUT = { sites: 'youtube.com', minutes: 1, attrape: 0 };

// 1. A l'ouverture de la popup, on affiche les reglages enregistres
chrome.storage.sync.get(DEFAUT, (reglages) => {
  champSites.value = reglages.sites;
  champMinutes.value = reglages.minutes;
  texteAttrape.textContent = reglages.attrape;
});

// 2. Bouton "Enregistrer"
document.getElementById('enregistrer').addEventListener('click', () => {
  const minutes = parseFloat(champMinutes.value);
  if (isNaN(minutes) || minutes <= 0) {
    alert('Mets un temps limite plus grand que 0');
    return;
  }
  chrome.storage.sync.set({ sites: champSites.value, minutes }, () => {
    document.getElementById('enregistrer').textContent = 'Enregistré !';
  });
});

// 3. Bouton "Remettre a zero"
document.getElementById('reset').addEventListener('click', () => {
  chrome.storage.sync.set({ attrape: 0 }, () => {
    texteAttrape.textContent = '0';
    chrome.action.setBadgeText({ text: '' });
  });
});
