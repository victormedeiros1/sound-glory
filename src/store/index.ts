import { configureStore } from '@reduxjs/toolkit';
import playlistsReducer from './ducks/playlists';

export const store = configureStore({
  reducer: {
    playlists: playlistsReducer,
  },
});

console.log(store.getState());

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
