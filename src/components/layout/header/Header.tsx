import { JSX } from "react";
import './Header.css'
import { NavLink } from "react-router-dom";
import northwindLogo from "../../../assets/photos/northwindIcon.jpg";

export default function Header(): JSX.Element {
    return (
        <div className="Header">
            <div className="logo">
                <img src={northwindLogo} alt="Northwind" />
            </div>
            <nav className="main-nav">
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/products">Products</NavLink>
                <NavLink to="/employees">Employees</NavLink>
            </nav>
            <div className="auth-section">
                <button className="logout-button">Logout</button>
            </div>
        </div>
    )
}