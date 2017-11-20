import store from "../store/index";
import {handleError, handleJson, handleOkNok} from "./helper";

const API_SUFFIX = '/api/';
const myStore = store;


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

const buildSessionContent = (payload) => {
  const {sessionId} = myStore.getState().session;
  return buildContent({
    ...payload,
    sid: sessionId
  })
};

const buildUrl = url => url + API_SUFFIX;

const buildSessionUrl = () => buildUrl(myStore.getState().session.serverUrl);

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

export const loadCategories = () => {
  console.log(myStore.getState());
  return fetch(buildSessionUrl(), buildSessionContent({op: 'getCategories'}))
    .then(handleOkNok)
    .then(handleJson)
    .then(response => response)
    .catch(handleError)
};
