import { configureStore } from "@reduxjs/toolkit";
import playlistsSlice from "./ducks/playlists";
import songSlice from "./ducks/song";
import songsSlice from "./ducks/songs";

export const store = configureStore({
  reducer: {
    songs: songsSlice,
    playlists: playlistsSlice,
    song: songSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

console.log(store.getState());

store.subscribe(() => {
  console.log("SUBSCRIBE", store.getState());
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
