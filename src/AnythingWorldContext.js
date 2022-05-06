import axios from "axios";
import React, { createContext, useContext, useState } from "react";
import { apiContext } from "./config/api";

const AnythingWorld = createContext();

const AnythingWorldContext = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [nameObj, setNameObj] = useState(null);

  const fetchName = async (name) => {
    setLoading(true);
    try {
      const getSingleName = await axios.get(apiContext.getSingleName(name));
      setNameObj(getSingleName.data[0]);
    } catch (error) {
      console.log(error.message);
      setNameObj(null);
    }
    setLoading(false);
  };

  return (
    <AnythingWorld.Provider value={{ loading, nameObj, fetchName }}>
      {children}
    </AnythingWorld.Provider>
  );
};

export default AnythingWorldContext;

export const AnythingWorldState = () => {
  return useContext(AnythingWorld);
};
