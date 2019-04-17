const Session = require('../../app/account/session');
const { hash } = require('../../app/account/helper');
const AccountTable = require('../../app/account/table');

const setSession = ({ username, response }) => {
  const EXPIRE = 3600000; // (1 hr) 3600000 milliseconds in 1 hour
  return new Promise((resolve, reject) => {
    const session = new Session({ username });
    const sessionString = session.toString();

    AccountTable.updateSessionId({
      sessionId: session.id,
      usernameHash: hash(username)
    })
      .then(() => {
        response.cookie('sessionString', sessionString, {
          expire: Date.now() + EXPIRE,
          httpOnly: true
          // secure: true // use with https
        });
        resolve({ message: 'Session was created' });
      })
      .catch(error => reject(error));
  });
};

module.exports = { setSession };
