import ErrorPages from "@pages/404/ErrorPage";
import Login from "@pages/auth/log/Login";
import Register from "@pages/auth/register/Register";
import Home from "@pages/home/Home";
import { createBrowserRouter } from "react-router-dom";
export const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
		errorElement: <ErrorPages />,
	},
	{
		path: "/login",
		element: <Login />,
	},
	{
		path: "/register",
		element: <Register />,
	},
]);
