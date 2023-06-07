function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="footer-content d-flex">
                    <p className="copyright">
                        <span>&copy; {new Date().getFullYear()}</span>
                        <span>All CopyRight Reserved</span>
                    </p>
                    <p>Developed By
                        <a href="https://www.facebook.com/omar.elmalek.5" rel="noreferrer" target="_blank">
                            <span>
                                <i className="fab fa-facebook-square"></i>
                                Omar Abdelatif
                            </span>
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;