import './App.css';
import Header from './features/UI/Header';
import { Outlet } from 'react-router-dom';
import Footer from './features/UI/Footer';

export default function App() {
    return (
        <div className="flex min-h-screen items-center flex-col justify-between p-2">
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
}
