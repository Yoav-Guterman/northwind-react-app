// src/components/layout/Layout.tsx
import { JSX, useContext } from 'react';
import { AuthContext } from '../../auth/Auth';
import Header from '../header/Header';
import Routing from '../routing/Routing';
import './Layout.css';

export default function Layout(): JSX.Element {
    // Get authentication status from context
    const { jwt } = useContext(AuthContext)!
    const isLoggedIn = !!jwt

    return (
        <div className='Layout'>
            {isLoggedIn ? (
                // Layout for authenticated users
                <>
                    <header>
                        <Header />
                    </header>
                    <div className="main-content">
                        <aside className="CategoryContainer">
                            {/* Categories will go here */}
                        </aside>
                        <main>
                            <Routing />
                        </main>
                    </div>
                </>
            ) : (
                // Layout for non-authenticated users
                <div className="auth-main">
                    <Routing />
                </div>
            )}
        </div>
    )
}