import { createSlice } from "@reduxjs/toolkit";
import { songs } from "../../helpers/songs";

const songsSlice = createSlice({
  name: "songs",
  initialState: songs,
  reducers: {},
});

export default songsSlice.reducer;
