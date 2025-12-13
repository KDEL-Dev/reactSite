import { Link } from "react-router";

export default function Home()
{
    return(
        <>
            <section className="home">
         
                <h1>Welcome to Moonlit Crochet</h1>
                
                <div className="homeSelect">
                    <div className="imgWrapper">
                        <a href="/store">
                            <img className="shopsImg" src="/img/photo-1668072587819-7b393944b426.avif" alt="" />
                        </a>
                        <a href="/store">
                            <h2 className="shopText">Shops</h2>
                        </a>
                    </div>
                    <div className="homeSelect">
                        <div className="imgWrapper">
                            <a href="/service">
                                <img className="serviceImg" src="/img/merylove-art-9kMl3X6UxzA-unsplash.jpg" alt="" />
                            </a>
                            <a href="/service">
                                <h2 className="serviceText">Services</h2>
                            </a>
                        </div>
                    </div>
                </div>
                
            </section>
        </>
    );
}