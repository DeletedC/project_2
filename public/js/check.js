const isDatabaseConnected = (query) => {
    if (query == 'noDatabase') {
        return false;
    } else {
        return true;
    }
}

module.exports = { isDatabaseConnected };