// index.js

"use strict";

let emojis = [];

function fetchEmojiData() {
  const apiKey = '8ee8035c0ce93795bbb825792e539d496be3f4f0'; // Replace 'YOUR_API_KEY' with your actual API key

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

function filterEmojiByGroup(group) {
  const filteredEmojis = emojis.filter(emoji =>
    emoji.group === group
  );

  renderFilteredEmojiList(filteredEmojis);
}

function renderFilteredEmojiList(filteredEmojis) {
  const list = document.getElementById('list');
  list.innerHTML = '';

  filteredEmojis.forEach(emoji => {
    const listItem = document.createElement('li');
    listItem.textContent = emoji.character + ' ' + emoji.unicodeName;
    list.appendChild(listItem);
  });
}

function handleSearch(event) {
  event.preventDefault();
  const searchTerm = document.getElementById('search').value;
  const filteredEmojis = emojis.filter(emoji =>
    emoji.unicodeName.toLowerCase().includes(searchTerm.toLowerCase())
  );
  renderFilteredEmojiList(filteredEmojis);
}

const searchForm = document.getElementById('searchForm');
searchForm.addEventListener('submit', handleSearch);

fetchEmojiData();
