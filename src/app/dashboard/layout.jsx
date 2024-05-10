import Navbar from "@/components/Navbar";

const DashboardLayout = ({children}) => {
    return (
        <>
            <div className="p-2 min-h-screen">
                <Navbar />
                <div className="artboard artboard-horizontal">
                    {children}
                </div>
            </div>
            <footer className="footer footer-center p-4 bg-base-100 text-base-content sticky bottom-0">
                <aside>
                    <p>Copyright © 2024 - CodeToLab</p>
                </aside>
            </footer>
        </>
    )
}

export default DashboardLayout;