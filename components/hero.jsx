import { useEffect } from 'react';
function Hero() {
    useEffect(() => {
        const texts = ['Ui Designer', 'Ui Developer', 'React Developer', 'FrontEnd Developer'];
        let count = 0;
        let index = 0;
        let decrement = 0;
        let currentText = '';
        let letter = '';
        function sleep(delay) {
            return new Promise(resolve => setTimeout(resolve, delay));
        }
        const typeWrite = async () => {
            if (count == texts.length) {
                count = 0;
            }
            const currentWord = texts[count];
            const currentLetter = currentWord.slice(0, ++index);
            document.querySelector(".write").textContent = currentLetter;
            if (index == currentWord.length) {
                await sleep(1500);
                while (index > 0) {
                    currentLetter = currentWord.slice(0, --index);
                    document.querySelector(".write").textContent = currentLetter;
                    await sleep(50);
                }
                count++;
                index = 0;
                await sleep(500);
            }
            setTimeout(typeWrite, Math.random() * 200 + 50);
        }
        typeWrite();
    }, []);
    return (
        <section className="hero">
            <div className="container">
                <div className="row g-0 text-center align-items-center">
                    <div className="col-lg-6">
                        <div className="hero-img">
                            <div className="image"></div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="hero-title">
                            <h1 className="text-left">
                                Hi, I’m <span className="text-primary">Omar Abdelatif</span>
                                <br />
                                <span>I’m a </span><span className='write'></span>
                            </h1>
                        </div>
                        <div className="hero-social">
                            <p className="social-title">Find Me At:</p>
                            <ul className="list-unstyled">
                                <li className="facebook">
                                    <a href="https://www.facebook.com/omar.elmalek.5" target="blank" className='btn'>
                                        <i className="fab fa-facebook"></i>
                                    </a>
                                </li>
                                <li className="github">
                                    <a href="https://github.com/omar-abdelatif" className='btn' target='blank'>
                                        <i className="fab fa-github"></i>
                                    </a>
                                </li>
                                <li className="linkedin">
                                    <a href="https://www.linkedin.com/in/omar-abdelatif-a3580719a/" className='btn' target='blank'>
                                        <i className="fab fa-linkedin-in"></i>
                                    </a>
                                </li>
                                <li className="whatsapp">
                                    <a href="https://api.whatsapp.com/send/?phone=201062760141&text&type=phone_number&app_absent=0" className='btn' targrt='blank'>
                                        <i className="fab fa-whatsapp"></i>
                                    </a>
                                </li>
                                <li className="telegram_bot">
                                    <a href="https://t.me/LaravelDeveloper_bot" className="btn" target='blank'>
                                        <i className="fab fa-telegram"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Hero;