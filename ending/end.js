import loadProfile from '../data/load-profile.js';
import { getUser } from '../data/stringy.js';
import { scoreGold, scoreHp } from './scores.js';
import { hpMessages, aliveGoldMessages, deadGoldMessages } from './messages.js';

loadProfile();

const user = getUser();

const ending = document.getElementById('ending');

const hpResult = scoreHp(user.hp);
const goldResult = scoreGold(user.gold);
const hpMessage = hpMessages[hpResult];

let goldMessages = null;
if (hpResult === 'dead') {
    goldMessages = deadGoldMessages;
}
else {
    goldMessages = aliveGoldMessages;
}

const goldMessage = goldMessages[goldResult];

let story = 'After your adventures, ';
story += user.name + ' the ' + user.userClass + ', ';
story += hpMessage + ' and ' + goldMessage + '.';

ending.textContent = story;