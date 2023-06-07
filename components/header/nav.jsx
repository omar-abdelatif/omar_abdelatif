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
                    <a href="top" className="navbar-brand" >Omar Abdelatif</a>
                </Link>
                <button className="btn btn-primary menu" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                    <i className="fad fa-bars"></i>
                </button>
                <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasExampleLabel">Menu</h5>
                        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav ms-auto">
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
            </div>
        </nav>
    );
}
export default Navbar;