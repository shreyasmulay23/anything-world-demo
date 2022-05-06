import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import CircularProgress from "@material-ui/core/CircularProgress";
import axios from "axios";
import { apiContext } from "../config/api";
import { AnythingWorldState } from "../AnythingWorldContext";

export default function AutoCompleteSearch() {
  const [loading, setLoading] = useState(false);
  const [options, setOptions] = React.useState([]);
  const { fetchName } = AnythingWorldState();

  function titleCase(str) {
    let splitStr = str.toLowerCase().split(" ");
    for (var i = 0; i < splitStr.length; i++) {
      splitStr[i] =
        splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    return splitStr.join(" ");
  }

  const modifyList = (allPolyNames) => {
    const arrayOfNames = [];
    allPolyNames.forEach((perName) => {
      const obj = {
        name: perName,
        newName: titleCase(perName.slice(0, -5).replaceAll("_", " ")),
      };
      arrayOfNames.push(obj);
    });
    setOptions(arrayOfNames.sort());
  };

  const fetchAllNames = async () => {
    setLoading(true);
    try {
      const result = await axios.get(apiContext.getAllNames);
      if (result && result.data) {
        modifyList(result.data);
      }
      setLoading(false);
    } catch (error) {
      setOptions([]);
      setLoading(false);
    }
  };

  React.useEffect(() => {
    fetchAllNames();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {loading ? (
        <CircularProgress
          style={{ color: "#00ff4d", backgroundColor: "transparent" }}
          size={40}
          thickness={1}
        />
      ) : (
        <Autocomplete
          id="combo-box-demo"
          onChange={(e, obj) => {
            if (obj) fetchName(encodeURIComponent(obj.newName));
          }}
          style={{
            width: 500,
            fontFamily: "Poppins",
          }}
          options={options}
          getOptionLabel={(option) => option.newName || ""}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Search 3D Model Name"
              variant="outlined"
            />
          )}
        />
      )}
    </>
  );
}
