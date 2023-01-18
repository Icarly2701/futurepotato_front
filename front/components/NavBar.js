import Image from 'next/image'

const NavBar = () => {
    return(
        <nav className="navbar">
            <div className="nav-wrapper">
                <img src="/logo.PNG" className="brand-img" alt="" />
                <input type="text" className="search-box" placeholder="search" />
                <div className="nav-items">
                    <img src="/home.PNG" className="icon" alt="" />
                    <img src="/messenger.PNG" className="icon" alt="" />
                    <img src="/add.PNG" className="icon" alt="" />
                    <img src="/explore.PNG" className="icon" alt="" />
                    <img src="/like.PNG" className="icon" alt="" />
                    <div className="icon user-profile"></div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar