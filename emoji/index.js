"use strict";

let emojis = [];

function fetchEmojiData() {
  const apiKey = '8ee8035c0ce93795bbb825792e539d496be3f4f0'; // Vervang 'YOUR_API_KEY' door je persoonlijke API-sleutel

  fetch(`https://emoji-api.com/emojis?access_key=${apiKey}`)
    .then(response => response.json())
    .then(data => {
      emojis = data;
      renderEmojiList();
    })
    .catch(error => {
      console.error('Error fetching emoji data:', error);
    });
}

function renderEmojiList() {
  const list = document.getElementById('list');
  list.innerHTML = '';

  emojis.forEach(emoji => {
    const listItem = document.createElement('li');
    listItem.textContent = emoji.character + ' ' + emoji.unicodeName;
    list.appendChild(listItem);
  });
}

// Fetch emoji data and render the list
fetchEmojiData();