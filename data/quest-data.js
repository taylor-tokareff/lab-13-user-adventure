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
        hp: -35,
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
        `You ascend a dreary a mountain top, the rain over the past few days has been endless. The mists before you part revealing the tower you seek. You begin to quietly explore this discarded relic of an ancient time and then your nose begins to tickle with an all too familiar stench, the distinct mixture of old feet and urine can only mean one thing, goblins! You approach the center of the tower carefully and peer through a crack in the wall, only to see you suspicions confirmed. You count a group of six goblins, laughing with devilish delight as they torment a young woman, who's face is stained with blood and dirt, save for the tears running down her face.`,

    choices: [{
        id: 'charge',
        description: 'Charge the fiends!',
        result:
            `The damsel in distress must be saved! You break into a full sprint and come crashing into the room, a swirling whirlwind of righteous fury. Goblins are cleaved in twain, their various limbs are severed from their bodies and go flying through the air followed by trails of crimson ichor. When the sounds of battle die down, all you hear is the thunder of your heart in your chest and the heavy sounds of your own breath. You scan the room for more enemies, seeing none you asses your surroundings. Your stomach drops and you feel sick as you see the maidens body lying on the cold stone floor. In your zealous fury you accidentally slaughtered the very person you attempted to save! You notice a golden locket around her neck, you take it as a reminder to never be consumed in blind rage again. Horrified and slightly wounded from battle you hang your head and retreat from the tower.`,
        hp: -35,
        gold: 10
    }, {
        id: 'sneak',
        description: 'Sneak in for a closer look',
        result:
            `You become one with the darkness and skulk your way closer to the goblins. Their shrill squeals of devilish joy bounce through your head, your ears begin to bleed and yet you press on. You watch in horror as the goblins torment this poor girl. They dance and scream with scratching at her with their filthy claws. You force yourself to bring your attention away from their vile celebration and scan the room for anything you can use to your advantage. You look up and see a large metal candelabra chandelier hanging from an old rusted chain. You grab a small dagger from within your cloak and send it flying towards the chain. Years of training pays off as your aim remains true, severing the chain, the chandelier comes crashing down crushing the goblins but the old metal construction was more brittle than you anticipated, sharp metal flies out in every direction and a large sliver of wrought iron pierces your shoulder. You climb to your feet and your worst fears are confirmed as you see the the maidens frail body shredded to ribbons by the explosion of wood and iron. Horrified you search the corpses of the dead, after all no sense in letting good loot go to waste and you find a modest amount of gold among the goblins.   `,
        hp: -10,
        gold: 20
    }, {
        id: 'ignore',
        description: 'She is on her own, explore the rest of the tower',
        result:
            `You decide it's best not interfere after all your in this for the gold and she doesn't have any. You quietly sneak your way to another part of the tower and discover a staircase leading down, perhaps this is where the treasure lies? As you begin to descend the stairs you suddenly hear the groan of steel and stone and then your feet drop out from underneath you, A TRAP!!! You go crashing down into an eternal blackness as your body ping pongs back and forth along the stone chute until splashing into an underground river, where your unconscious body is dragged by the current out of the tower and back to the outside world.
            `,
        hp: -50,
        gold: 0
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
        `You approach the cave and the stench of rotting flesh makes your nose crinkle in revulsion. You attempt to gather your resolve and then suddenly you feel a strong wind from the west. You instinctively throw yourself prone as a flash of light and searing heat goes streaking over your body. You look towards the west and you see it, a red dragon!`,

    choices: [{
        id: 'flee',
        description: 'Flee into the cave',
        result: `
                I dunno something happens in the cave and you get hurt but also get some gold I dunno its midnight and I'm tired
            `,
        hp: -25,
        gold: 20
    }, {
        id: 'fight',
        description: 'Stand and fight',
        result: `
                kill the dragon but get really hurt but get hella gold
            `,
        hp: -60,
        gold: 100
    }, {
        id: 'negotiate',
        description: 'Perhaps we can negotiate',
        result: `
                your gonna join the dragon in evil no damage but lose some gold
            `,
        hp: 0,
        gold: -40
    }]
};

const quests = [
    crypt,
    tower,
    cave,
];

export default quests;