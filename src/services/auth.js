import { WebAuth } from 'auth0-js';

const auth0 = new WebAuth({
  clientID: process.env.AUTH0_CLIENT_ID,
  domain: process.env.AUTH0_DOMAIN,
  redirectUri: process.env.AUTH0_REDIRECT,
  responseType: 'token id_token',
  scope: 'openid profile'
});

export const login = () => {
  const signup = (email, password, name, phone) => {
    auth0.signup({
      email,
      password,
      connection: 'Username-Password-Authentication',
      user_metadata: { name, phone }
    });
  };
  return auth0.authorize(signup);
};

export const handleAuth = () => {
  return new Promise((resolve, reject) => {
    auth0.parseHash((err, result) => {
      if(result && result.accessToken && result.idToken) {
        auth0.client.userInfo(result.accessToken, (err, info) => {
          if(err) return reject(err);
          return resolve({
            token: result.idToken,
            id: info.sub,
            name: info.nickname,
            profilePicture: info.picture
          });
        });
      } else {
        reject(err || 'Something went wrong');
      }
    });
  });
};


