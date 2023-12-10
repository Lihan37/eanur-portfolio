import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import NavBar from '../Shared/Navbar/Navbar';

const Main = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <div className=''>
                <NavBar></NavBar>
            </div>
            <div className="flex-1">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Main;