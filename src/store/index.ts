import { configureStore } from "@reduxjs/toolkit";
import playlistsSlice from "./ducks/playlist";
import songSlice from "./ducks/song";

export const store = configureStore({
  reducer: {
    playlists: playlistsSlice,
    song: songSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

console.log("STORE", store.getState());

store.subscribe(() => {
  console.log("SUBSCRIBE", store.getState());
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
