import { createSlice } from "@reduxjs/toolkit";
import { songs } from "../../helpers/slugs";

const songsSlice = createSlice({
  name: "songs",
  initialState: songs,
  reducers: {
    listSongs: (state) => state,
  },
});

export default songsSlice.reducer;
