import React from 'react';

const Footer = (props) => {
    return (
        <>
            <footer className="footer">
                <div className="container-footer">
                    <div><p className="footerText">© 2019 MAKE.iT</p></div>
                    <div>
                        <ul className="footer-nav">
                            <li className="footerItem"><a href="#">Privacy Policy</a></li>
                            <li className="footerItem"><a href="#">Contact Us</a></li>
                            <li className="footerItem"><a href="#">About Us</a></li>
                            <li className="footerItem"><a href="#">Our Mission</a></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;