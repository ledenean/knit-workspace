import { Navbar } from './Navbar';
import  { Outlet } from 'react-router-dom';

export function Layout() {
    return (
        <>
            <Navbar/>
            <main className='ml-64 p-6 bg-background min-h-screen'>
                <Outlet/>
            </main>
            
        </>
    )
}