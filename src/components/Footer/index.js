import {
  FaPinterestSquare,
  FaInstagram,
  FaTwitter,
  FaFacebookSquare,
} from 'react-icons/fa'
import './index.css'

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-logo-title">
        <img
          className="footer-logo"
          src="https://res.cloudinary.com/aishwaryaproject/image/upload/v1636369709/TastyKitchens/footer_logo_ivcbfn.png"
          alt="website-footer-logo"
        />
        <h1 className="footer-heading">Tasty Kitchens </h1>
      </div>
      <p className="footer-description">
        The only thing we are serious about is food. Contact us on
      </p>
      <div className="social-media-container">
        <FaPinterestSquare
          testid="pintrest-social-icon"
          className="pinterest"
        />
        <FaInstagram testid="instagram-social-icon" className="instagram" />
        <FaTwitter testid="twitter-social-icon" className="twitter" />
        <FaFacebookSquare testid="facebook-social-icon" className="facebook" />
      </div>
    </div>
  )
}
