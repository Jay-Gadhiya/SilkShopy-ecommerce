import "./Navbar.css";

const Navbar = () => {
    return (
        <header class="header-shopy shadow-box">
            <nav class="nav-shopy flex-center">
                <section class="brand-name"><a href="/index.html"><img class="silk-img" src="https://silkshopyy.netlify.app/images/silkshopy-name.jpeg" alt="silk-img"/></a>
                </section>
    
                <div class="nav-items flex-center">
                    <section class="nav-input-box flex-center">
                    <button class="btn-input-box">
                        <i class="fas fa-search"></i>
                    </button>
                    <input class="input-shopy" type="text" placeholder="search" />
                    </section>
                    <section class="nav-icons flex-center">
                    <button class="btn btn-login btn-primary"><a class="active-link" href="/auth/login.html">Login</a></button>
        
                    <div class="nav-icons-item flex-center">
                        <span class="icon-shopy"><a href="/wishlist-page/wishlist.html"><i class="fas fa-heart"></i></a></span>
                        <span class="below-text">Wishlist</span>
                    </div>
        
                    <div class="nav-icons-item flex-center">
                        <span class="icon-shopy">
                        <a href="/cart/cart.html"><i class="fas fa-shopping-cart"></i></a>
                        </span>
                        <span class="below-text">Cart</span>
                    </div>
                    </section>
                </div>
           </nav>
        </header>
    )
}

export {Navbar};