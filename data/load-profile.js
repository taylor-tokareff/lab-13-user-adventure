import { getUser } from './stringy.js';
import isDead from './is-dead.js';

function loadProfile() {
    const name = document.getElementById('name');
    const meat = document.getElementById('meat');
    const hp = document.getElementById('hp');
    const gold = document.getElementById('gold');



    const user = getUser();

    name.textContent = user.name;
    meat.src = '../img/' + user.userClass + '.PNG';
    gold.textContent = user.gold;

    if (isDead(user)) {
        hp.textContent = 'DECEASED';
    }

    else {

        hp.textContent = user.hp;
    }

}

export default loadProfile;