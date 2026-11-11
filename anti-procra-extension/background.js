// Le service worker tourne en arriere-plan, meme quand la popup est fermee.
// Il recoit un message du content script a chaque fois qu'on se fait attraper.
chrome.runtime.onMessage.addListener((message) => {
  if (message.type === 'attrape') {
    chrome.storage.sync.get({ attrape: 0 }, ({ attrape }) => {
      const total = attrape + 1;
      chrome.storage.sync.set({ attrape: total });
      // Petit chiffre rouge sur l'icone de l'extension
      chrome.action.setBadgeText({ text: String(total) });
      chrome.action.setBadgeBackgroundColor({ color: '#e63946' });
    });
  }
});
