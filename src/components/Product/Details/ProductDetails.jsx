import React, { useEffect, useRef, useState } from "react";
import "./ProductDetails.css";
const ProductDetails = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const top = ref.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (top < windowHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div className="glav__datail">
        <div className="box1__detail">
          <div className="details__box-title">
            <img
              className="details__img"
              src="	https://www.villafranciacorta.it/ecommerce/wp-content/uploads/2022/11/Bianchi-Roncalli-2015.png"
              alt="vino"
            />
            <h3 className="details__title">Bianchi Roncalli</h3>
          </div>
        </div>
        <div className="box2__detail">
          <div
            className={`box2__detail-Right ${isVisible ? "show" : ""}`}
            ref={ref}
          >
            <h4>ANNATA 2015</h4>
            <h4>SEBINO IGT</h4>
            <h4>100% BARBERA</h4>
          </div>
          <div
            className={`box2__detail-Left ${isVisible ? "show" : ""}`}
            ref={ref}
          >
            <h4>ROSSO</h4>
            <h4>ALCOOL 14.5%</h4>
            <h4>AFFINAMENTO 42 MESI IN BOTTIGLIA</h4>
            <h4>ALCOOL 14.5%</h4>

            <h4>AFFINAMENTO IN BOTTE 36 MESI</h4>
            <p>PRIMA FERMENTAZIONE 42 MESI IN BARRIQUE</p>
          </div>
        </div>
      </div>
      <div className="glav2__detail">
        <div className="title__detail2">
          <h3>BIANCHI RONCALLI 2015</h3>
          <p>SEBINO IGT </p>
        </div>
        <div className="glav2__descr">
          <p>
            The name Bianchi Roncalli originates from the patrons of the Villa
            company, Alessandro Bianchi and his wife Ivonne Roncalli. Thanks to
            the excellent quality of the Barbera grape in the 2007 vintage, the
            intuition of vinifying this native vine in purity was born, for the
            first time in the history of the company.
          </p>
          <span>
            The result is an intense ruby red wine of great class, capable of
            surprising thanks to the heady scent of red fruit and sweet spices.
          </span>
        </div>
        <div className="container__btn">
          <div className="center__btn">
            <button className="btn">
              <svg
                class="border"
                viewBox="0 0 180 60"
                height="60px"
                width="180px"
              >
                <polyline
                  className="bg-line"
                  points="179,1 179,59 1,59 1,1 179,1"
                ></polyline>
                <polyline
                  className="hl-line"
                  points="179,1 179,59 1,59 1,1 179,1"
                ></polyline>
              </svg>
              <span>Buy</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
