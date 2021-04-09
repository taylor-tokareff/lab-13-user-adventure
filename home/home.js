import { saveUser } from '../data/stringy.js';
import makeUser from './make-user.js';

const characterSelect = document.querySelector('#character-select');

console.log(characterSelect);

characterSelect.addEventListener('submit', (event) => {


    event.preventDefault();

    const userFormData = new FormData(characterSelect);

    const user = makeUser(userFormData);

    saveUser(user);

    window.location = '../map';

});