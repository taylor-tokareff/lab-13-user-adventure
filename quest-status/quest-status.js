export function questLinkMaker(quest) {
    const link = document.createElement('a');
    link.classList.add('quest');

    link.href = '../quest/?id=' + quest.id;

    link.style.top = quest.map.top;
    link.style.left = quest.map.left;
    link.textContent = quest.title;

    return link;
}

export function questCompleter(quest) {
    const span = document.createElement('span');
    span.classList.add('quest');
    span.classList.add('completed');

    span.style.top = quest.map.top;
    span.style.left = quest.map.left;

    span.textContent = quest.title;
    return span;
}

export function completedQuests(quests, user) {
    for (let x = 0; x < quests.length; x++) {
        const quest = quests[x];

        if (!user.completed[quest.id]) {
            return false;
        }
    }
    return true;
}