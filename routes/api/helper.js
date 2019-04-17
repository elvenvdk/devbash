const Session = require('../../app/account/session');
const { hash } = require('../../app/account/helper');
const AccountTable = require('../../app/account/table');

const EXPIRE = 3600000; // (1 hr) 3600000 milliseconds in 1 hour

const setSession = ({ username, response, session_id }) => {
  return new Promise((resolve, reject) => {
    let session, sessionString;

    if (session_id) {
      sessionString = Session.sessionString({ username, id: session_id });
      setSessionCookie({ sessionString, response });

      resolve({ message: 'Session restored' });
    } else {
      session = new Session({ username });
      sessionString = session.toString();

      AccountTable.updateSessionId({
        sessionId: session.id,
        usernameHash: hash(username)
      })
        .then(() => {
          setSessionCookie({ sessionString, response });
          resolve({ message: 'Session was created' });
        })
        .catch(error => reject(error));
    }
  });
};

const setSessionCookie = ({ sessionString, response }) => {
  response.cookie('sessionString', sessionString, {
    expire: Date.now() + EXPIRE,
    httpOnly: true
    // secure: true // use with https
  });
};

module.exports = { setSession };
