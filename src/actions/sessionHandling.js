import {STORE_SESSION_ID} from "./types";

export function storeSessionIdAction(sessionId, serverUrl) {
  return {
    type: STORE_SESSION_ID,
    payload: {
      sessionId,
      serverUrl
    }
  }
}
