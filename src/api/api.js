const basicConfig = {
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Origin': 'https://localhost:3000'
  },
  method: 'POST'
};

const buildContent = (payload) => {
  return {
    ...basicConfig,
    body: JSON.stringify(payload)
  }
};

const buildUrl = url => url + '/api/';

export const login = (url, username, password) => {
  return fetch(buildUrl(url), buildContent({op: 'login', user: username, password}))
    .then(response => {
      return response.json()
    })
    .then(response => {
      if (response.status !== 0) {
        throw(new Error('Login Failed'))
      }
      return response.content;
    });
};
