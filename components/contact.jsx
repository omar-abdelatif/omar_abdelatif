function Contact() {
    return (
        <section id="contact" className="contact">
            <div className="container mx-auto">
                <div className="row">
                    <div className="col-12">
                        <div className="contact-content-title">
                            <h2 className="text-center">Contact With Me</h2>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="contact-content">
                            <div className="contact-form text-center">
                                <form action="" method="post">
                                    <div className="input-container">
                                        <div className="form-group">
                                            <input type="text" className="form-control" id="name" placeholder="Enter your name" />
                                        </div>
                                        <div className="form-group">
                                            <input type="email" className="form-control" id="email" placeholder="Enter your email" />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control" id="subject" placeholder="Enter your subject" />
                                        </div>
                                        <div className="form-group">
                                            <input type="number" className="form-control" id="phone" placeholder="Enter your phone number" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <textarea className="form-control" id="message" rows="3" placeholder="Enter your message"></textarea>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Contact;