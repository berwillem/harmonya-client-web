import { TextField, InputAdornment } from "@mui/material";
import { HiOutlineSearch } from "react-icons/hi";

const SearchBar = () => {
  return (
    <TextField
      variant="outlined"
      placeholder="Search"
      fullWidth
      slotProps={{
        input: {
          endAdornment: (
            <InputAdornment position="end">
              <HiOutlineSearch size={20} color="#888" />
            </InputAdornment>
          ),
        },
      }}
      sx={{
        mt: 2,
        "& .MuiOutlinedInput-root": {
          borderRadius: "8px",
          height: "40px",
          "& input": {
            padding: "8px 12px",
          },
          "& .MuiInputAdornment-root": {
            marginRight: "4px",
          },
        },
      }}
    />
  );
};

export default SearchBar;
