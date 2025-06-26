import { createBrowserRouter, Navigate } from "react-router";
import SignIn from "../../app/SignIn";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Navigate to={'/auth/signin'} />
    },
    {
        path: '/auth/signin',
        element: <SignIn />
    }
]);