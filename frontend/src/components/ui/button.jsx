export function Button({ children, type="button", onClick, className="", ...props}) {
    return (
        <button type={type} 
        onClick={onClick}
        className="px-4 py-2 rounded-xl font-semibold text-center text-sidebar-foreground 
        bg-sidebar hover:cursor-pointer"
        {...props}>
            {children}
        </button>
    )
}