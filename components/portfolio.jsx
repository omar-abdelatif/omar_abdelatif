function Portfolio() {
    const btnName = [
        {
            title: 'UI DESIGNS',
            target: "#pills-ui",
            id: "pills-ui-tab",
            control: "pills-ui",
        },
        {
            title: 'FRONTEND',
            target: "#pills-front",
            id: "pills-front-tab",
            control: "pills-front",
        },
        {
            title: 'BACKEND',
            target: "#pills-back",
            id: "pills-back-tab",
            control: "pills-back",
        },
        {
            title: 'REACT.JS',
            target: "#pills-react",
            id: "pills-react-tab",
            control: "pills-react",
        },
        {
            title: 'NEXT.JS',
            target: "#pills-next",
            id: "pills-next-tab",
            control: "pills-next",
        }
    ]
    return (
        <section id="portfolio bg-primary" className="portfolio">
            <div className="container">
                <div className="p-title">
                    <h1 className="text-center">My Works</h1>
                </div>
                <div className="portfolio-content">
                    <ul className="nav nav-pills mb-3 justify-content-center mt-5" id="pills-tab" role="tablist">
                        {btnName.map(btn => (
                            <li className="nav-item" role="presentation" key={btn.title}>
                                <button className="nav-link" id={btn.id} data-bs-toggle="pill" data-bs-target={btn.target} type="button" role="tab" aria-controls={btn.control}>{btn.title}</button>
                            </li>
                        ))}
                    </ul>
                    <div className="tab-content" id="pills-tabContent">
                        <div className="tab-pane fade show" id="pills-ui" role="tabpanel" aria-labelledby="pills-ui-tab">
                            <div className="ui-designs">
                                <h1>UI DESIGN SECTION</h1>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="pills-front" role="tabpanel" aria-labelledby="pills-front-tab">
                            <div className="frontend">
                                <h1>FRONTEND SECTION</h1>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="pills-back" role="tabpanel" aria-labelledby="pills-back-tab">
                            <div className="backend">
                                <h1>BACKEND SECTION</h1>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="pills-react" role="tabpanel" aria-labelledby="pills-react-tab">
                            <div className="react">
                                <h1>REACT.JS SECTION</h1>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="pills-next" role="tabpanel" aria-labelledby="pills-next-tab">
                            <div className="next">
                                <h1>NEXT.JS SECTION</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Portfolio;