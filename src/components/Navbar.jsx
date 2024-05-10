import Sidebar from "./Sidebar";

const Navbar = () => {
    return (
        <div className="drawer navbar bg-base-100 z-50 sticky top-0">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* Page content here */}
                <button className="btn btn-square btn-ghost drawer-button">
                    <label htmlFor="my-drawer" className="drawer-button">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </label>
                </button>
            </div> 
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">Properties</a>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                {/* <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                    <li><a>Sidebar Item 1</a></li>
                    <li><a>Sidebar Item 2</a></li>
                </ul> */}
                
                <Sidebar />
            </div>
            <div className="flex-none">
                <div className="avatar placeholder">
                    <div className="bg-neutral text-neutral-content rounded-full w-8">
                        <span className="text-xs">User</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Navbar;