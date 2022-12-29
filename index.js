function welcomeUser(name=null) {
    if (name) return `Welcome ${name}!`
    return "Welcome!";
}

module.exports = welcomeUser;
