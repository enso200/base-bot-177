module.exports = async(client) => {

    client.user.setPresence ({
        game: {
            name: "en coure de prog"
        }
    })
};