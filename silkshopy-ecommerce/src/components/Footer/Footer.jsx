import "./Footer.css";

const Footer = () => {
  return (
    <footer className="silkshopy-footer">
      <section className="connect-msg flex-center">Connect With SilkShopy</section>
        <section className="connect-icons flex-center">
            <ul className="flex-center">
            <li className="p-right">
                <a
                className="footer-icons"
                href="https://github.com/Jay-Gadhiya/silkshopy"
                >
                <i className="fab fa-github"></i>
                </a>
            </li>
            <li className="p-right">
                <a
                className="footer-icons"
                href="https://www.linkedin.com/in/jay-gadhiya-2009a6192/"
                >
                <i className="fab fa-linkedin"></i>
                </a>
            </li>
            <li>
                <a className="footer-icons" href="https://twitter.com/JayGadhiya7">
                <i className="fab fa-twitter"></i>
                </a>
            </li>
            </ul>
        </section>
      <section className="copyright-text flex-center">© 2022 SilkShopy</section>
    </footer>
  );
};

export {Footer};