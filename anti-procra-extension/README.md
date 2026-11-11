# Anti-Procra: Chrome Web Extension

Group project for the Web 3 course (HE Vinci): **Web Extension (dev & publish)**.
A small character shows up on your screen when you spend too much time on a website you chose to block.

## Features

- Choose your blocked websites and a time limit in the popup.
- The timer only runs while the tab is visible.
- When the limit is reached: the video pauses, music plays and a character tells you to get back to work.
- A red badge on the extension icon counts how many times you got caught.

## Files

- `manifest.json`: the extension's ID card (name, permissions, files used).
- `popup.html` + `popup.js`: the settings window (blocked sites, time limit, counter).
- `content.js` + `style.css`: run inside websites, count the time and show the character.
- `background.js`: the service worker, updates the counter and the badge.
- `perso.gif`, `musique.mp3`, `icon.png`: the character, the music and the icon.

## Running the extension

1. Clone this repository.
2. Open `chrome://extensions` and turn on **Developer mode**.
3. Click **"Load unpacked"** and select the `anti-procra` folder.
4. Click the extension icon, enter `youtube.com` and `0.1` (6 seconds), then click **Enregistrer**.
5. Open YouTube and wait: the character shows up.

## Authors

- Balci Arda
- Hajji Zahra
- Houmaid Ranya
- Janaa Aya
- Yousrani Soumaya