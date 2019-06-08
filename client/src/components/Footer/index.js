import React from "react";

<<<<<<< HEAD
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
=======
const Footer = props => {
  return (
    <>
      <footer className="footer">
        <div className="container-footer">
          <div>
            <p className="footerText">© 2019 MAKE.iT</p>
          </div>
          <div>
            <p className="footer-nav">
              <a href="https://www.youtube.com/watch?v=2Q_ZzBGPdqE">
                Help Desk: 123.456.HELP
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
>>>>>>> e44f2a55379097582a95a8df827010295baee066
};

export default Footer;
