export const getDatas = (item) => {
  return fetch(`http://localhost:3000/${item}/`).then((response) =>
    response.json()
  );
};
