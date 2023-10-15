import './Footer.css'
import iconTwitter from '../../images/twitter_outline_icon.png';
import iconInstagram from '../../images/instagram_fill_icon.png';
import iconFacebook from '../../images/facebook_outline_icon.png';
import iconLinkedin from '../../images/linkedin_outline.png';

function Footer() {
    return (
        <div className="container-fuild">
            <div className="row">
                <div className="SAAM_footer">
                    S.A.A.M
                </div>
                <footer className="footerFont pt-5">
                    <div className="row text-center">
                        <div className="col-md-4">
                            <ul>About us</ul>
                            <ul>Our services</ul>
                            <ul>Contact us</ul>
                            <ul>Legal info</ul>
                        </div>

                        <div className="col-md-4">
                            <ul><img src={iconTwitter} /> Twitter</ul>
                            <ul><img src={iconFacebook} /> Facebook</ul>
                            <ul><img src={iconInstagram} /> Instagram</ul>
                            <ul><img src={iconLinkedin} /> Linkedin</ul>
                        </div>

                        <div className="col-md-4">
                            <ul>S.A.A.M</ul>
                            <ul>N 207, Z.I. das Flores,</ul>
                            <ul>Oliveira de Azemeis</ul>
                            <ul>4949-494 Whatever</ul>
                            <ul>Portugal</ul>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export { Footer };