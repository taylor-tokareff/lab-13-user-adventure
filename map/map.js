import { getUser } from '../data/stringy.js';
import quests from '../data/quest-data.js';
import loadProfile from '../data/load-profile.js';
import { questLinkMaker } from '../quest-status/quest-status.js';
import { questCompleter } from '../quest-status/quest-status.js';
import { completedQuests } from '../quest-status/quest-status.js';
import isDead from '../data/is-dead.js';

loadProfile();

const user = getUser();

if (isDead(user) || completedQuests(quests, user)) {
    window.location = '../ending/index.html';
}

const nav = document.getElementById('quests');

for (let quest of quests) {
    let questDisplay = null;

    const finished = user.completed[quest.id];

    if (finished) {
        questDisplay = questCompleter(quest);
    }

    else {

        questDisplay = questLinkMaker(quest);

    }
    nav.appendChild(questDisplay);
}
