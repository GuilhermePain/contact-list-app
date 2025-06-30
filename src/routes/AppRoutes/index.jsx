import { createBrowserRouter, Navigate } from "react-router";
import SignIn from "../../app/SignIn";
import SignUp from "../../app/SignUp";
import Contacts from "../../app/(auth)/Contacts";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Navigate to={'/auth/signin'} />
    },
    {
        path: '/auth/signin',
        element: <SignIn />
    },
    {
        path: '/auth/signup',
        element: <SignUp />
    },
    {
        path: '/contacts',
        element: <Contacts />
    }

]);