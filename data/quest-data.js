const crypt = {
    id: 'crypt',
    title: 'The Ancient Crypt',
    map: {
        top: '80%',
        left: '60%'
    },
    image: '../img/crypt.PNG',
    description:
        `You descend unto the ancient crypt, it's cold, dark and damp and smells of must and mold.
        After pushing your way past the cobwebs and rat feces you successfully navigate to the crypts
        interior. You enter a room filled with human remains but this is no ordinary place of rest! 
        The bodies of the deceased have been strewn about in a macabre display, clearly in tribute to some
        dark god!`,

    choices: [{
        id: 'search',
        description: 'Search for treasure',
        result: `
                You scour the crypts interior finding a few gold pieces scattered among the remains of the dead. As
                you continue to sort through piles of bones, you feel your weight shift slightly under your left foot and hear a sharp crack, IT'S A TRAP!!! You instinctively shift your weight back towards your right side and dive away from the pressure plate you inadvertently triggered but even your super human reflexes are not fast enough and one of the three arrows that came flying from a hidden panel in the wall pierces your left shoulder. After you compose yourself, you decide it's best not to press your luck and you hobble away from this unholy place.
            `,
        hp: -25,
        gold: 20
    }, {
        id: 'offering',
        description: 'Leave an offering to the dark god',
        result: `
                Perhaps there is opportunity in this place after all, surely no one would put in this much time and effort into deity that didn't
                reward it's servants and thus you decide to leave a tribute. You place some gold upon the unholy altar, drop to your knees, bow your face to the ground, and whisper a prayer unto the darkness. As you lay there, you feel a strange tingling run up your spine, the sensation grows and starts to burn as a sharp pain shoots unto the base of your skull. Your minds eye is filled with visions of horrific torture and human sacrifice. Rivers of blood flow through the streets as you watch the world become consumed with fire. And then the vision ends but strangely instead of being repulsed with horror you find yourself laughing maniacally at the prospect of wold ending destruction. You arise, feeling a new and powerful strength surging through your veins, you exit the crypt knowing you have found your
                true purpose as a herald of the apocalypse!
            `,
        hp: 25,
        gold: -5
    }, {
        id: 'destroy',
        description: 'Desecrate this monument to evil',
        result: `
                You decide that this blight upon the world can no longer be allowed to exist. You began to smash apart the unholy altar to evil and as you do you feel a strange electricity in the air and the hairs on your arms and neck start to stand up. You continue to destroy, with increased righteous  vigor but you instinctively spin around to see your worst fears confirmed. THE DEAD HAVE RISEN!!! You are attacked on multiple fronts simultaneously as the skeletal warriors of the crypt attempt to claim your bones to join them in eternal slumber.
                They however prove no match for your skills in combat and you smite them all! Once the sounds of battle retreat you take stock of the situation and realise at some point one of them most have landed a blow upon you. You notice a jeweled dagger sticking out of your left thigh, you remove it and decide to keep it as a relic of your triumph over the forces of evil.
            `,
        hp: -25,
        gold: 50
    }]
};

const tower = {
    id: 'tower',
    title: 'The Abandoned Tower',
    map: {
        top: '10%',
        left: '65%'
    },
    image: '../img/tower.PNG',
    description:
        `You descend unto the ancient crypt, it's cold, dark and damp and smells of must and mold.
        After pushing your way past the cobwebs and rat feces you successfully navigate to the crypts
        interior. You enter a room filled with human remains but this is no ordinary place of rest! 
        The bodies of the deceased have been strewn about in a macabre display, clearly in tribute to some
        dark god!`,

    choices: [{
        id: 'search',
        description: 'instant death',
        result: `
                You scour the crypts interior finding a few gold pieces scattered among the remains of the dead. As
                you continue to sort through piles of bones, you feel your weight shift slightly under your left foot and hear a sharp crack, IT'S A TRAP!!! You instinctively shift your weight back towards your right side and dive away from the pressure plate you inadvertently triggered but even your super human reflexes are not fast enough and one of the three arrows that came flying from a hidden panel in the wall pierces your left shoulder. After you compose yourself, you decide it's best not to press your luck and you hobble away from this unholy place.
            `,
        hp: -200,
        gold: 20
    }, {
        id: 'offering',
        description: 'Leave an offering to the dark god',
        result: `
                Perhaps there is opportunity in this place after all, surely no one would put in this much time and effort into deity that didn't
                reward it's servants and thus you decide to leave a tribute. You place some gold upon the unholy altar, drop to your knees, bow your face to the ground, and whisper a prayer unto the darkness. As you lay there, you feel a strange tingling run up your spine, the sensation grows and starts to burn as a sharp pain shoots unto the base of your skull. Your minds eye is filled with visions of horrific torture and human sacrifice. Rivers of blood flow through the streets as you watch the world become consumed with fire. And then the vision ends but strangely instead of being repulsed with horror you find yourself laughing maniacally at the prospect of wold ending destruction. You arise, feeling a new and powerful strength surging through your veins, you exit the crypt knowing you have found your
                true purpose as a herald of the apocalypse!
            `,
        hp: 25,
        gold: -5
    }, {
        id: 'destroy',
        description: 'Desecrate this monument to evil',
        result: `
                You decide that this blight upon the world can no longer be allowed to exist. You began to smash apart the unholy altar to evil and as you do you feel a strange electricity in the air and the hairs on your arms and neck start to stand up. You continue to destroy, with increased righteous  vigor but you instinctively spin around to see your worst fears confirmed. THE DEAD HAVE RISEN!!! You are attacked on multiple fronts simultaneously as the skeletal warriors of the crypt attempt to claim your bones to join them in eternal slumber.
                They however prove no match for your skills in combat and you smite them all! Once the sounds of battle retreat you take stock of the situation and realise at some point one of them most have landed a blow upon you. You notice a jeweled dagger sticking out of your left thigh, you remove it and decide to keep it as a relic of your triumph over the forces of evil.
            `,
        hp: -25,
        gold: 50
    }]
};

const cave = {
    id: 'cave',
    title: 'The Cave of Horror',
    map: {
        top: '28%',
        left: '25%'
    },
    image: '../img/cave.PNG',
    description:
        `You descend unto the ancient crypt, it's cold, dark and damp and smells of must and mold.
        After pushing your way past the cobwebs and rat feces you successfully navigate to the crypts
        interior. You enter a room filled with human remains but this is no ordinary place of rest! 
        The bodies of the deceased have been strewn about in a macabre display, clearly in tribute to some
        dark god!`,

    choices: [{
        id: 'search',
        description: 'Search for treasure',
        result: `
                You scour the crypts interior finding a few gold pieces scattered among the remains of the dead. As
                you continue to sort through piles of bones, you feel your weight shift slightly under your left foot and hear a sharp crack, IT'S A TRAP!!! You instinctively shift your weight back towards your right side and dive away from the pressure plate you inadvertently triggered but even your super human reflexes are not fast enough and one of the three arrows that came flying from a hidden panel in the wall pierces your left shoulder. After you compose yourself, you decide it's best not to press your luck and you hobble away from this unholy place.
            `,
        hp: -25,
        gold: 20
    }, {
        id: 'offering',
        description: 'Leave an offering to the dark god',
        result: `
                Perhaps there is opportunity in this place after all, surely no one would put in this much time and effort into deity that didn't
                reward it's servants and thus you decide to leave a tribute. You place some gold upon the unholy altar, drop to your knees, bow your face to the ground, and whisper a prayer unto the darkness. As you lay there, you feel a strange tingling run up your spine, the sensation grows and starts to burn as a sharp pain shoots unto the base of your skull. Your minds eye is filled with visions of horrific torture and human sacrifice. Rivers of blood flow through the streets as you watch the world become consumed with fire. And then the vision ends but strangely instead of being repulsed with horror you find yourself laughing maniacally at the prospect of wold ending destruction. You arise, feeling a new and powerful strength surging through your veins, you exit the crypt knowing you have found your
                true purpose as a herald of the apocalypse!
            `,
        hp: 25,
        gold: -5
    }, {
        id: 'destroy',
        description: 'Desecrate this monument to evil',
        result: `
                You decide that this blight upon the world can no longer be allowed to exist. You began to smash apart the unholy altar to evil and as you do you feel a strange electricity in the air and the hairs on your arms and neck start to stand up. You continue to destroy, with increased righteous  vigor but you instinctively spin around to see your worst fears confirmed. THE DEAD HAVE RISEN!!! You are attacked on multiple fronts simultaneously as the skeletal warriors of the crypt attempt to claim your bones to join them in eternal slumber.
                They however prove no match for your skills in combat and you smite them all! Once the sounds of battle retreat you take stock of the situation and realise at some point one of them most have landed a blow upon you. You notice a jeweled dagger sticking out of your left thigh, you remove it and decide to keep it as a relic of your triumph over the forces of evil.
            `,
        hp: -25,
        gold: 50
    }]
};

const quests = [
    crypt,
    tower,
    cave,
];

export default quests;