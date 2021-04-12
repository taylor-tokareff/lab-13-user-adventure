import loadProfile from '../data/load-profile.js';
import { getUser, saveUser } from '../data/stringy.js';
import quests from '../data/quest-data.js';
import { findById, statUpdater, choiceCreator } from '../data/quest-functions.js';

loadProfile();

const searchParams = new URLSearchParams(window.location.search);

const questId = searchParams.get('id');

const quest = findById(quests, questId);

if (!quest) {
    window.location = '../map/index.html';
}

const title = document.getElementById('title');
const image = document.getElementById('image');
const description = document.getElementById('description');
const choiceForm = document.getElementById('choice-form');
const choices = document.getElementById('choices');
const result = document.getElementById('result');
const resultDescription = document.getElementById('result-description');

title.textContent = quest.title;
image.src = quest.image;
description.textContent = quest.description;

for (let index = 0; index < quest.choices.length; index++) {
    const choice = quest.choices[index];
    const choiceDOM = choiceCreator(choice);
    choices.appendChild(choiceDOM);
}

choiceForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = new FormData(choiceForm);

    const choiceId = formData.get('choice');

    const choice = findById(quest.choices, choiceId);

    const user = getUser();

    statUpdater(choice, quest.id, user);

    saveUser(user);

    choiceForm.classList.add('hidden');
    result.classList.remove('hidden');
    resultDescription.textContent = choice.result;

    loadProfile();
});