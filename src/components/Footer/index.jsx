import "./footer.css"


export default function Footer(){
    return (
        <section className="footerContent">
            <div className="footerBtnCont">
                <ul>
                    <li className="footerBtn">
                        <a href="/">Home</a>
                    </li>
                    <li className="footerBtn">
                        <a href="/Store">Store</a>
                    </li>
                    <li className="footerBtn">
                        <a href="/Service">Service</a>
                    </li>
                    <li className="footerBtn">
                        <a href="#">Contact</a>
                    </li>
                    <li className="footerBtn">
                        <a href="#">Privacy Policy</a>
                    </li>
                </ul>
            </div>
            <div className="contact">
                <h3>Get in touch with us!</h3>
                <div className="contactIcons">
                    <div>
                        <a href="#">
                            <img src="/icon/icons8-instagram.svg" alt="" />
                        </a>
                    </div>
                    <div>
                        <a href="#">
                            <img src="/icon/icons8-facebook.svg" alt="" />
                        </a>
                    </div>
                    <div>
                        <a href="#">
                            <img src="/icon/icons8-x.svg" alt="" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="copyright">
                <p>©Copyright Kadelle Liburd, HTTP5222, 2025.</p>
            </div>
        </section>
    )
}