const API_KEY = "0HPZNJ7-SK94QFP-N19SSMV-RA0WQPH";

const getAllNames = "https://api.anything.world/names";

const getSingleName = (name) =>
  `https://api.anything.world/anything?key=${API_KEY}&name=${name}`;

const searchByNames = (searchString) =>
  `https://api.anything.world/anything?key=${API_KEY}&search=${searchString}`;

export const apiContext = { getAllNames, getSingleName, searchByNames };
