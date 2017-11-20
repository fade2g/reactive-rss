export const handleOkNok = (response) => {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response
};

export const handleJson = (response) => {
  const contentType = response.headers.get("content-type");
  if(!contentType ||
    (contentType.indexOf("application/json") === -1 &&
    contentType.indexOf("text/json") === -1)) {
    throw Error("Wrong content type");
  }
  return response.json()
};

export const handleError = (Error) => {
  console.log(Error);
}
