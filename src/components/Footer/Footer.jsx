import React from "react";
import "./Footer.scss";

const Footer = () => {
  
    return (
        <footer className="simple-footer">
            <div className="container">
                <div className="flexgrid">
                    <div className="social-container">
                        <div className="redes-container">
                            <a><img src="https://www.koombea.com/wp-content/themes/koombea/dist/images/facebook-icon-circle-fef3de37b1a204601e30b57d49b3aafc.svg"></img></a></div>
                        <div className="redes-container"> <a href="https://www.instagram.com/mecanica.mgs/" target="_blank"><img src="https://www.koombea.com/wp-content/themes/koombea/dist/images/instagram-icon-circle-35752517459c66ba433bd4652382211d.svg"></img></a></div>
                        <div className="redes-container"><a><img src="https://www.koombea.com/wp-content/themes/koombea/dist/images/twitter-icon-circle-bc4eb2dbdadd6d590e88b895db667083.svg"></img></a></div>
                    </div>
                    <div className="texto-footer">
                        <span>Charcas 1996. Buenos Aires, Lomas del mirador/</span>
                        <a href="https://goo.gl/maps/UomUZhx4NNTf2yAF8"> Ubicacion</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
