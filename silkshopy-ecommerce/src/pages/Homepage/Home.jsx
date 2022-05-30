import { Link } from "react-router-dom";
import { Card } from "../../components/Card";
import { Footer } from "../../components/Footer/Footer";
import { useFilter } from "../../contexts/context/filter-context";
import { useFetchData } from "../ProductListing/functions/fetch-data";
import "./Home.css";

const Home = () => {  

    const { product } = useFetchData();
    const { state, dispatch } = useFilter();


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
            <Link to="/productlisting">
            <article onClick={() => dispatch({ type: "TOGGLE_SMARTPHONE" })} className="feature-cat-container">
                <figure className="img-box">
                <img src="https://github.com/Jay-Gadhiya/silkshopy/blob/dev/images/back-smartp-img.jpeg?raw=true" className="back-imgs" />
                </figure>
                <figcaption className="text-overlay flex-center">Smartphones</figcaption>
            </article>
            </Link>

            <Link to="/productlisting">
            <article onClick={() => dispatch({ type: "TOGGLE_LAPTOP" })} className="feature-cat-container">
                <figure className="img-box">
                <img src="https://github.com/Jay-Gadhiya/silkshopy/blob/dev/images/back-lap-img.jpeg?raw=true" className="back-imgs" />
                </figure>
                <figcaption className="text-overlay flex-center">Laptops</figcaption>
            </article>
            </Link>

            <Link to="/productlisting">
            <article onClick={() => dispatch({ type: "TOGGLE_HEADPHONE" })} className="feature-cat-container">
                <figure className="img-box">
                <img src="https://github.com/Jay-Gadhiya/silkshopy/blob/dev/images/back-hp-img.jpeg?raw=true" className="back-imgs" />
                </figure>
                <figcaption className="text-overlay flex-center">Headphones</figcaption>
            </article>
            </Link>

            <Link to="/productlisting">
            <article onClick={() => dispatch({ type: "TOGGLE_GAMING" })} className="feature-cat-container">
                <figure className="img-box">
                <img src="https://github.com/Jay-Gadhiya/silkshopy/blob/dev/images/back-game-img.jpeg?raw=true" className="back-imgs" />
                </figure>
                <figcaption className="text-overlay flex-center">Gaming</figcaption>
            </article>
            </Link>

            </section>

            <section className="features-heading-box flex-center">
            <h1 className="feature-heading">Featured Products</h1>
            </section>

            <div className="title-underline"></div>

            <div className="feature-grid-layout feat-grid-cards">
                    {product && product.filter( (item, index) => index <= 3 ).map(item => (
                        <Card key={item.id} productData = {item}/>
                    ))}
            </div>
        </main>
        <Footer />
        </>
    )
}

export {Home};