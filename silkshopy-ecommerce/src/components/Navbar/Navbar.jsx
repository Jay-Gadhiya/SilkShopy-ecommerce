import "./Navbar.css";

const Navbar = () => {
    return (
        <header className="header-shopy shadow-box">
            <nav className="nav-shopy flex-center">
                <section className="brand-name"><a href="/index.html"><img className="silk-img" src="https://silkshopyy.netlify.app/images/silkshopy-name.jpeg" alt="silk-img"/></a>
                </section>
    
                <div className="nav-items flex-center">
                    <section className="nav-input-box flex-center">
                    <button className="btn-input-box">
                        <i className="fas fa-search"></i>
                    </button>
                    <input className="input-shopy" type="text" placeholder="search" />
                    </section>
                    <section className="nav-icons flex-center">
                    <button className="btn btn-login btn-primary"><a className="active-link" href="/auth/login.html">Login</a></button>
        
                    <div className="nav-icons-item flex-center">
                        <span className="icon-shopy"><a href="/wishlist-page/wishlist.html"><i className="fas fa-heart"></i></a></span>
                        <span className="below-text">Wishlist</span>
                    </div>
        
                    <div className="nav-icons-item flex-center">
                        <span className="icon-shopy">
                        <a href="/cart/cart.html"><i className="fas fa-shopping-cart"></i></a>
                        </span>
                        <span className="below-text">Cart</span>
                    </div>
                    </section>
                </div>
           </nav>
        </header>
    )
}

export {Navbar};