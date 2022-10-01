import React from "react";
import useTranslation from "../../i18n/translator"

function BannerIntro({ mainTitle, subtitle, image, buttonContent, btnLink, classExtra}) {
    return (
        <div className="fh5co-hero">
            <div className="fh5co-overlay"></div>
            <div
                className={`fh5co-cover text-center ${classExtra}`}
                data-stellar-background-ratio="0.5"
                style={{ backgroundImage: `url('${image}')` }}
            >
                <div className="desc animate-box">
                    <h2>{mainTitle}</h2>
                    <span>{subtitle}</span>
                    <span>
                        <a className="btn btn-primary btn-lg" href="https://benfeitoria.com/lwandisurf" target="blank">
                            { useTranslation("home.banner.buttonTxt") }
                        </a>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default BannerIntro;
