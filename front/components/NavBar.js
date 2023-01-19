import Image from 'next/image'
import Link from 'next/link';
const NavBar = () => {
    return(
        <nav className="navbar">
            <div className="nav-wrapper">
                <Link href = '/' legacyBehavior>
                    <img src="/logo.PNG" className="brand-img" alt="" />
                </Link>
                <input type="text" className="search-box" placeholder="search" />
                <div className="nav-items">
                    <Link href = '/' legacyBehavior>
                        <img src="/home.PNG" className="icon" alt="" />
                    </Link>
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