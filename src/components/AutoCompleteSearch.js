import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import CircularProgress from "@material-ui/core/CircularProgress";
import axios from "axios";
import { apiContext } from "../config/api";
import { AnythingWorldState } from "../AnythingWorldContext";

export default function AutoCompleteSearch() {
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  const loading = open && options.length === 0;
  const { fetchName } = AnythingWorldState();

  React.useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  const handleChange = async (e) => {
    let active = true;
    const searchString = e.target.value;
    if (!loading) {
      return undefined;
    }
    try {
      const result = await axios.get(apiContext.searchByNames(searchString));
      if (active) {
        setOptions(result.data);
      }
    } catch (error) {
      setOptions([]);
    }
    active = false;
  };

  return (
    <Autocomplete
      id="asynchronous-demo"
      style={{
        width: 500,
        fontFamily: "Poppins",
      }}
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      getOptionSelected={(option, value) => option.newName === value.newName}
      getOptionLabel={(option) => option.newName || ""}
      onChange={(e, obj) => {
        if (obj) fetchName(encodeURIComponent(obj.newName));
      }}
      options={options}
      loading={loading}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Search 3D Model Name"
          variant="outlined"
          onChange={handleChange}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>
                {loading ? (
                  <CircularProgress color="inherit" size={20} />
                ) : null}
                {params.InputProps.endAdornment}
              </React.Fragment>
            ),
          }}
        />
      )}
    />
  );
}
