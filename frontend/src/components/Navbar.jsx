const navItems = [
    { name: "Dashboard", href: "#hero", current: true },
    { name: "Patterns", href: "#patterns", current: false },
    { name: "Projects", href: "#projects", current: false },
    { name: "Upcoming", href: "#upcoming", current: false }
];
const Navbar = () => {
    return (
        // Side navigation bar, fixed to the left side of the screen
        <nav className="fixed top-0 left-0 z-50 h-screen w-64
            py-10 rounded-l-lg bg-sidebar flex flex-col">

            {/* Logo or title of the application, centered at the top of the sidebar */}
            <div className="flex items-center justify-center mb-20">
                <a href="#hero" className="text-4xl font-bold text-sidebar-foreground text-center">
                    Knitting Workspace
                </a>
            </div>

            {/* Navigation items */}
            <div  className="flex flex-col justify-center w-full">
                {navItems.map((item, index) => (
                    <a 
                        key={index}
                        href={item.href}
                        className="block w-full py-8 rounded-l-3xl text-2xl 
                        font-semibold text-center text-sidebar-foreground 
                        hover:bg-sidebar-hover hover:text-sidebar-text-hover"
                    >
                        {item.name}
                    </a>
                ))}  
            </div>    

        </nav>
        
    )
};
export default Navbar;