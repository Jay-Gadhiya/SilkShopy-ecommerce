import "./Home.css";

const Home = () => {
    return (
        <main>
            <section class="banner-image-container">
            <img src="https://silkshopyy.netlify.app/images/redmi-9a.jpg" class="banner-image" />
            <button class="btn btn-image btn-primary"><a href="/Product-Listing/product.html" class="active-link">Shop Now</a></button>
            </section>

            
            <section class="show-brand-logos">
            <img src="https://silkshopyy.netlify.app/images/apple.png" class="brand-logos-img" />
            <img src="https://silkshopyy.netlify.app/images/mi.png" class="brand-logos-img" />
            <img src="https://silkshopyy.netlify.app/images/realme.png" class="brand-logos-img contain" />
            <img src="https://silkshopyy.netlify.app/images/samsung.png" class="brand-logos-img" />
            <img src="https://silkshopyy.netlify.app/images/vivo.png" class="brand-logos-img" />
            <img src="https://silkshopyy.netlify.app/images/motorola.png" class="brand-logos-img" />
            <img src="https://silkshopyy.netlify.app/images/sony.png" class="brand-logos-img" />
            <img src="https://silkshopyy.netlify.app/images/asus.png" class="brand-logos-img" />
            </section>

            <section class="features-heading-box flex-center">
            <h1 class="feature-heading">Featured Categories</h1>
            </section>

            <div class="title-underline"></div>

            <section class="feature-grid-layout">
            <article class="feature-cat-container">
                <figure class="img-box">
                <img src="https://github.com/Jay-Gadhiya/silkshopy/blob/dev/images/back-smartp-img.jpeg?raw=true" class="back-imgs" />
                </figure>
                <figcaption class="text-overlay flex-center"><a href="/Product-Listing/product.html">Smartphones</a></figcaption>
            </article>

            <article class="feature-cat-container">
                <figure class="img-box">
                <img src="https://github.com/Jay-Gadhiya/silkshopy/blob/dev/images/back-lap-img.jpeg?raw=true" class="back-imgs" />
                </figure>
                <figcaption class="text-overlay flex-center"><a href="/Product-Listing/product.html">Laptops</a></figcaption>
            </article>

            <article class="feature-cat-container">
                <figure class="img-box">
                <img src="https://github.com/Jay-Gadhiya/silkshopy/blob/dev/images/back-hp-img.jpeg?raw=true" class="back-imgs" />
                </figure>
                <figcaption class="text-overlay flex-center"><a href="/Product-Listing/product.html">Headphones</a></figcaption>
            </article>

            <article class="feature-cat-container">
                <figure class="img-box">
                <img src="https://github.com/Jay-Gadhiya/silkshopy/blob/dev/images/back-game-img.jpeg?raw=true" class="back-imgs" />
                </figure>
                <figcaption class="text-overlay flex-center"><a href="/Product-Listing/product.html">Gaming</a></figcaption>
            </article>
            </section>

            <section class="features-heading-box flex-center">
            <h1 class="feature-heading">Featured Products</h1>
            </section>

            <div class="title-underline"></div>

            <div class="feature-grid-layout feat-grid-cards">
                <div class="card-wrapper">
                    <span class="card-unavailable hide">Currently unavailable</span>
                    <div class="card">
                    <div class="card-image">
                        <img class="img-cards" src="https://silkshopyy.netlify.app/images/iphone13pro.jpeg" alt="img" />
                        <span class="badge-new">New</span>
                    </div>
                    <div class="card-details">
                        <div class="card-item">
                        <h1 class="card-product-name">IPhone 13 Pro</h1>
                        <span class="icon-card icon-heart"
                            ><i class="fas fa-heart"></i
                        ></span>
                        </div>
                        <div class="card-brief-detail">
                        <p>Sierra Blue</p>
                        </div>
                        <div class="card-price">
                        Rs.
                        <span class="price">1,19,900</span>
                        <span class="price text-strike-over">Rs.1,20,900</span>
                        <span class="price text-discount">10%</span>
                        </div>
                        <div class="card-btn">
                        <button class="btn-card btn-primary-card">
                            <span class="icon-card"><i class="fas fa-shopping-cart"></i></span>
                            <a href="/Product-Listing/product.html" class="active-link">Add to Cart</a>
                        </button>
                        </div>
                    </div>
                    </div>
                </div>

                <div class="card-wrapper">
                    <span class="card-unavailable hide">Currently unavailable</span>
                    <div class="card">
                    <div class="card-image">
                        <img class="img-cards" src="https://silkshopyy.netlify.app/images/back-lap-img.jpeg" alt="img" />
                        <span class="badge-new">New</span>
                    </div>
                    <div class="card-details">
                        <div class="card-item">
                        <h1 class="card-product-name">ASUS VivoBook</h1>
                        <span class="icon-card icon-heart"
                            ><i class="fas fa-heart"></i
                        ></span>
                        </div>
                        <div class="card-brief-detail">
                        <p>Ultra Ryzen 7 Octa Core</p>
                        </div>
                        <div class="card-price">
                        Rs.
                        <span class="price">67,990</span>
                        <span class="price text-strike-over">Rs.84,990</span>
                        <span class="price text-discount">20%</span>
                        </div>
                        <div class="card-btn">
                        <button class="btn-card btn-primary-card">
                            <span class="icon-card"><i class="fas fa-shopping-cart"></i></span>
                            <a href="/Product-Listing/product.html" class="active-link">Add to Cart</a>
                        </button>
                        </div>
                    </div>
                    </div>
                </div>

                <div class="card-wrapper">
                    <span class="card-unavailable hide">Currently unavailable</span>
                    <div class="card">
                    <div class="card-image">
                        <img class="img-cards" src="https://silkshopyy.netlify.app/images/boat-650.jpeg" alt="img" />
                        <span class="badge-new">New</span>
                    </div>
                    <div class="card-details">
                        <div class="card-item">
                        <h1 class="card-product-name">boAt Rockerz 650</h1>
                        <span class="icon-card icon-heart"
                            ><i class="fas fa-heart"></i
                        ></span>
                        </div>
                        <div class="card-brief-detail">
                        <p>60 Hours Battery Backup</p>
                        </div>
                        <div class="card-price">
                        Rs.
                        <span class="price">1,699</span>
                        <span class="price text-strike-over">Rs.3,990</span>
                        <span class="price text-discount">57%</span>
                        </div>
                        <div class="card-btn">
                        <button class="btn-card btn-primary-card">
                            <span class="icon-card"><i class="fas fa-shopping-cart"></i></span>
                            <a href="/Product-Listing/product.html" class="active-link">Add to Cart</a>
                        </button>
                        </div>
                    </div>
                    </div>
                </div>

                <div class="card-wrapper">
                    <span class="card-unavailable hide">Currently unavailable</span>
                    <div class="card">
                    <div class="card-image">
                        <img class="img-cards" src="https://silkshopyy.netlify.app/images/acer-7.jpeg" alt="img" />
                        <span class="badge-new">New</span>
                    </div>
                    <div class="card-details">
                        <div class="card-item">
                        <h1 class="card-product-name">acer Aspire 7</h1>
                        <span class="icon-card icon-heart"><i class="fas fa-heart"></i></span>
                        </div>
                        <div class="card-brief-detail">
                        <p>Graphics/NVIDIA GeForce</p>
                        </div>
                        <div class="card-price">
                        Rs.
                        <span class="price">52,990</span>
                        <span class="price text-strike-over">Rs.89,999</span>
                        <span class="price text-discount">41%</span>
                        </div>
                        <div class="card-btn">
                        <button class="btn-card btn-primary-card">
                            <span class="icon-card"><i class="fas fa-shopping-cart"></i></span>
                            <a href="/Product-Listing/product.html" class="active-link">Add to Cart</a>
                        </button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export {Home};