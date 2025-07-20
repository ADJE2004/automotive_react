function Contact() {
    return (
        <>
            <div className="map">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48158.305462977965!2d-74.13283844036356!3d41.02757295168286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2e440473470d7%3A0xcaf503ca2ee57958!2sSaddle%20River%2C%20NJ%2007458%2C%20USA!5e0!3m2!1sen!2sbd!4v1575917275626!5m2!1sen!2sbd"
                    height="500"
                    style={{ border: 0, width: '100%' }}
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>
            </div>

            <section className="contact">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="contact__content">
                                <div className="section-title">
                                    <h2>Contact Us</h2>
                                    <p>Your email address will not be published. Required fields are marked.</p>
                                </div>
                                <form action="#">
                                    <div className="input__item">
                                        <p>Name:</p>
                                        <input type="text" />
                                    </div>
                                    <div className="input__item">
                                        <p>Email:</p>
                                        <input type="email" />
                                    </div>
                                    <div className="input__item">
                                        <p>Message:</p>
                                        <textarea></textarea>
                                    </div>
                                    <button type="submit" className="site-btn">Submit Form</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Contact;
