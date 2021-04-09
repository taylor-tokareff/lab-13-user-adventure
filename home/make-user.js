function makeUser(formData) {
    const user = {
        name: formData.get('name'),
        userClass: formData.get('class'),
        hp: 100,
        gold: 0,
        completed: {}
    };

    return user;
}

export default makeUser;