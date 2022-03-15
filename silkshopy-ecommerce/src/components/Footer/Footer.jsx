import "./Footer.css";

const Footer = () => {
  return (
    <footer class="silkshopy-footer">
      <section class="connect-msg flex-center">Connect With SilkShopy</section>
        <section class="connect-icons flex-center">
            <ul class="flex-center">
            <li class="p-right">
                <a
                class="footer-icons"
                href="https://github.com/Jay-Gadhiya/silkshopy"
                >
                <i class="fab fa-github"></i>
                </a>
            </li>
            <li class="p-right">
                <a
                class="footer-icons"
                href="https://www.linkedin.com/in/jay-gadhiya-2009a6192/"
                >
                <i class="fab fa-linkedin"></i>
                </a>
            </li>
            <li>
                <a class="footer-icons" href="https://twitter.com/JayGadhiya7">
                <i class="fab fa-twitter"></i>
                </a>
            </li>
            </ul>
        </section>
      <section class="copyright-text flex-center">© 2022 SilkShopy</section>
    </footer>
  );
};

export {Footer};