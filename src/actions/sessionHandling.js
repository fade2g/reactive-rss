import {STORE_SESSION_ID} from "./types";

export function storeSessionIdAction(sessionId) {
  return {
    type: STORE_SESSION_ID,
    payload: sessionId
  }
}
