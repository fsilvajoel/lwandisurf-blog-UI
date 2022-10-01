import React from "react";
import SocialLinks from "../../components/socialLinks";
import Header from "../../components/header";
import Footer from "../../components/footer/index";
import BannerIntro from "../../components/bannerIntro";
import ContactInfo from "../../components/contactInfo";
import useTranslation from "../../i18n/translator"

function Contact() {

    const title = useTranslation("contact.title");
    const subtitle = useTranslation("contact.subtitle");

    return (
        <div id="fh5co-wrapper">
            <div id="fh5co-page">
                <SocialLinks />
                <Header page="contact" />

                <BannerIntro
                    mainTitle={ title }
                    subtitle={ subtitle }
                    image="images/contato-cover.jpg"
                />
                
                <ContactInfo />
                
                <Footer />
            </div>
        </div>
    );
}

export default Contact;
