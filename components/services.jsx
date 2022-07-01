import Image from 'next/image';
function Services() {
    const Services = [
        {
            icon: '/imgs/icons/adobe-xd.webp',
            title: 'UI Design',
            description: 'design ui projects for web using adobe xd and adobe photoshop.'
        },
        {
            icon: '/imgs/icons/ui-design.png',
            title: 'UI Development',
            description: 'develop ui projects for web using html5-css3-jquery.'
        },
        {
            icon: '/imgs/icons/frontend.png',
            title: 'Frontend Development',
            description: 'develop frontend projects for web using html5-css3-jquery-javascript-react-next.'
        },
        {
            icon: '/imgs/icons/responsive.png',
            title: 'Responsive Designs',
            description: 'develop fully responsive projects for web.'
        },
        {
            icon: '/imgs/icons/seo.png',
            title: 'SEO Friendly',
            description: 'create a search engine friendly project'
        },
        {
            icon: '/imgs/icons/performance.png',
            title: 'High Performance',
            description: 'crearing a highly performance project'
        }
    ]
    return (
        <section id="services" className="services">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title">
                            <h1 className="text-left">What Can I Do</h1>
                        </div>
                    </div>
                    {Services.map(service => (
                        <div className="col-lg-4" key={service.title}>
                            <div className="service-item">
                                <div className="service-icon">
                                    <Image src={service.icon} alt={service.title} width={100} height={100} />
                                </div>
                                <div className="service-name">
                                    <h3>{service.title}</h3>
                                </div>
                                <div className="service-description">
                                    <p>{service.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
export default Services;