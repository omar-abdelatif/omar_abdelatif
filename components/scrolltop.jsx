import { useEffect } from 'react';
function ScrollTop() {
    function ScrollTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    useEffect(() => {
        const scrollTop = document.querySelector('.scrollbtn');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                scrollTop.classList.add('show');
            } else {
                scrollTop.classList.remove('show');
            }
        });
    }, [])
    return (
        <div onClick={ScrollTop} className="scrollbtn">
            <a>
                <i className="fa-solid fa-hand-back-point-up"></i>
            </a>
        </div>
    );
}
export default ScrollTop;