export function scoreGold(gold) {
    if (gold < 50) {
        return 'poor';
    }
    else if (gold < 75) {
        return 'modest';
    }
    return 'rich';
}

export function scoreHp(hp) {
    if (hp <= 0) {
        return 'dead';
    }
    if (hp <= 50) {
        return 'frail';
    }
    return 'healthy';
}
