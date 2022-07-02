import { useEffect } from 'react';
import Link from 'next/link';
import { NavLink } from '../navlink'
function Navbar() {
    useEffect(() => {
        const navbar = document.getElementById('navbar-example2');
        window.addEventListener("scroll", function () {
            if (window.scrollY > 120) {
                navbar.classList.add("fixed-top");
            } else {
                navbar.classList.remove("fixed-top");
            }
        });
    }, [])
    return (
        <nav id="navbar-example2" className="navbar navbar-expand-lg navbar-light">
            <div className="container">
                <Link href="/">
                    <a href="" className="navbar-brand" >Omar Abdelatif</a>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto nav-pills">
                        <li className="nav-item">
                            <NavLink className="nav-link" href="#services">Services</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" href="#portfolio">Portfolio</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" href="#contact">Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
export default Navbar;