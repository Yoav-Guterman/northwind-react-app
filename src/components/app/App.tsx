import { JSX } from "react";
import './App.css'
import Layout from "../layout/layout/Layout";
import { BrowserRouter } from "react-router-dom";
import Auth from "../auth/Auth";

export default function App(): JSX.Element {
    return (
        <div className="App">
            <BrowserRouter>
                <Auth>
                    <Layout />
                </Auth>
            </BrowserRouter>
        </div>
    )
}