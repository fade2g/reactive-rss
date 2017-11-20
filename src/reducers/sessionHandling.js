import {STORE_SESSION_ID} from "../actions/types";

export function session(state = {}, action) {
  const {type, payload} = action;
  switch (type) {
    case STORE_SESSION_ID:
      return {
        ...state,
        sessionId: payload.sessionId,
        serverUrl: payload.serverUrl
      };
    default:
      return state;
  }
}
