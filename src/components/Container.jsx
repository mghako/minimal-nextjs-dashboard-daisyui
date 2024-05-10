const Container = ({children, title}) => {
    return (
        <>
            <div className="card w-100 my-2 mx-1 rounded-none bg-base-100 shadow-xl -z-50">
                
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <div>
                    {children}
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default Container;