import { configureStore } from "@reduxjs/toolkit";
import { catalogue } from "./querys/catalogue.query";
import { showMovies } from "./querys/shoMovies.query";
import { login } from "./slice/login.slice";
import { register } from "./slice/register.slice";
import { user } from "./slice/user.sclice";
const store = configureStore({
	reducer: {
		register: register.reducer,
		login: login.reducer,
		user: user.reducer,
		[showMovies.reducerPath]: showMovies.reducer,
		[catalogue.reducerPath]: catalogue.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({ serializableCheck: false }).concat(
			showMovies.middleware,
			catalogue.middleware,
		),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
