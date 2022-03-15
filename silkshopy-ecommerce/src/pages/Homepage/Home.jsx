import { Card } from "../../components/Card";
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
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </main>
    )
}

export {Home};