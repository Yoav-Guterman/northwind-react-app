// src/components/layout/routing/Routing.tsx
import { Navigate, Route, Routes } from "react-router-dom";
import { JSX, useContext } from "react";
import { AuthContext } from "../../auth/Auth";
import Login from "../../auth/login/Login";
import Products from "../../main/products/products/Products";
import Home from "../../main/home/Home";
import NotFound from "../not-found/NotFound";

export default function Routing(): JSX.Element {
    const { jwt } = useContext(AuthContext)!
    const isLoggedIn = !!jwt

    return (
        <Routes>
            {/* Public routes - always accessible */}
            <Route path="/login" element={
                // Redirect to products if already logged in
                isLoggedIn ? <Navigate to="/products" /> : <Login />
            } />

            {/* Protected routes - only accessible when logged in */}
            <Route path="/" element={
                isLoggedIn ? <Navigate to="/products" /> : <Navigate to="/login" />
            } />
            <Route path="/products" element={
                isLoggedIn ? <Products /> : <Navigate to="/login" />
            } />
            <Route path="/home" element={
                isLoggedIn ? <Home /> : <Navigate to="/login" />
            } />

            {/* Catch-all route */}
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}