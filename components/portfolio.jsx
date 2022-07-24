export default function Portfolio() {
    const btnName = [
        {
            title: 'UI DESIGNS',
            target: "#pills-ui",
            id: "pills-ui-tab",
            control: "pills-ui",
            class: "nav-link active",
        },
        {
            title: 'FRONTEND',
            target: "#pills-front",
            id: "pills-front-tab",
            control: "pills-front",
            class: "nav-link",
        },
        {
            title: 'BACKEND',
            target: "#pills-back",
            id: "pills-back-tab",
            control: "pills-back",
            class: "nav-link",
        },
        {
            title: 'REACT.JS',
            target: "#pills-react",
            id: "pills-react-tab",
            control: "pills-react",
            class: "nav-link",
        },
        {
            title: 'NEXT.JS',
            target: "#pills-next",
            id: "pills-next-tab",
            control: "pills-next",
            class: "nav-link",
        }
    ]
    return (
        <section id="portfolio bg-primary" className="portfolio">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <div className="p-title">
                            <h1 className="text-center">My Works</h1>
                        </div>
                    </div>
                </div>
                <div className="portfolio-content">
                    <ul className="nav nav-pills mb-3 justify-content-center mt-5" id="pills-tab" role="tablist">
                        {btnName.map(btn => (
                            <li className="nav-item" role="presentation" key={btn.title}>
                                <a className={btn.class} id={btn.id} data-bs-toggle="pill" href={btn.target} role="tab" type='button' aria-controls={btn.control}>{btn.title}</a>
                            </li>
                        ))}
                    </ul>
                    <div className="tab-content" id="pills-tabContent">
                        <div className="tab-pane fade show active" id="pills-ui" role="tabpanel" aria-labelledby="pills-ui-tab">
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
