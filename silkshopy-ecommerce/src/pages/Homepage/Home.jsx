import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card } from "../../components/Card";
import { Footer } from "../../components/Footer/Footer";
import "./Home.css";
import axios from "axios";

const Home = () => {

    const [product, setProduct] = useState();

    const getProductsData = async() => {
        try {
            const res = await axios.get("/api/products");
            setProduct(() => res.data.products);
        }
        catch(error) {
            console.log(error);
        }
    }

    useEffect(() => getProductsData(),[]);


    return (
        <>
        <main>
            <section className="banner-image-container">
            <img src="https://silkshopyy.netlify.app/images/redmi-9a.jpg" className="banner-image" />
            <button className="btn btn-image btn-primary"><Link to="/productListing" className="active-link">Shop Now</Link></button>
            </section>

            
            <section className="show-brand-logos">
            <img src="https://silkshopyy.netlify.app/images/apple.png" className="brand-logos-img" />
            <img src="https://silkshopyy.netlify.app/images/mi.png" className="brand-logos-img" />
            <img src="https://silkshopyy.netlify.app/images/realme.png" className="brand-logos-img contain" />
            <img src="https://silkshopyy.netlify.app/images/samsung.png" className="brand-logos-img" />
            <img src="https://silkshopyy.netlify.app/images/vivo.png" className="brand-logos-img" />
            <img src="https://silkshopyy.netlify.app/images/motorola.png" className="brand-logos-img" />
            <img src="https://silkshopyy.netlify.app/images/sony.png" className="brand-logos-img" />
            <img src="https://silkshopyy.netlify.app/images/asus.png" className="brand-logos-img" />
            </section>

            <section className="features-heading-box flex-center">
            <h1 className="feature-heading">Featured Categories</h1>
            </section>

            <div className="title-underline"></div>

            <section className="feature-grid-layout">
            <article className="feature-cat-container">
                <figure className="img-box">
                <img src="https://github.com/Jay-Gadhiya/silkshopy/blob/dev/images/back-smartp-img.jpeg?raw=true" className="back-imgs" />
                </figure>
                <figcaption className="text-overlay flex-center"><Link to="/productListing">Smartphones</Link></figcaption>
            </article>

            <article className="feature-cat-container">
                <figure className="img-box">
                <img src="https://github.com/Jay-Gadhiya/silkshopy/blob/dev/images/back-lap-img.jpeg?raw=true" className="back-imgs" />
                </figure>
                <figcaption className="text-overlay flex-center"><Link to="/productListing">Laptops</Link></figcaption>
            </article>

            <article className="feature-cat-container">
                <figure className="img-box">
                <img src="https://github.com/Jay-Gadhiya/silkshopy/blob/dev/images/back-hp-img.jpeg?raw=true" className="back-imgs" />
                </figure>
                <figcaption className="text-overlay flex-center"><Link to="/productListing">Headphones</Link></figcaption>
            </article>

            <article className="feature-cat-container">
                <figure className="img-box">
                <img src="https://github.com/Jay-Gadhiya/silkshopy/blob/dev/images/back-game-img.jpeg?raw=true" className="back-imgs" />
                </figure>
                <figcaption className="text-overlay flex-center"><Link to="/productListing">Gaming</Link></figcaption>
            </article>
            </section>

            <section className="features-heading-box flex-center">
            <h1 className="feature-heading">Featured Products</h1>
            </section>

            <div className="title-underline"></div>

            <div className="feature-grid-layout feat-grid-cards">
                    {product && product.filter((item, index) => index <= 3).map(item => (
                        <Card 
                        key={item.id}
                        image = {item.img}
                        title = {item.title}
                        description = {item.description}
                        price = {item.price}
                        cutPrice = {item.cutPrice}
                        discount = {item.discount}
                        rating = {item.rating}
                        badge = {item.badge}
                    />
                    ))}
            </div>
        </main>
        <Footer />
        </>
    )
}

export {Home};