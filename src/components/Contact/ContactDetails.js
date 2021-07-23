import SocialIcons from "../SocialIcons/SocialIcons";

const ContactDetails = () => {
  return (
    <div className="contact-details">
      <h2 className="contact-details__title">Let's Talk</h2>
      <div className="contact-details__description">
        <p className="contact-details__text">
          Do you want us to work together on a project? Then lets do it. Please
          do feel at ease to contact me anytime.
        </p>
        <div className="contact-details__social-link">
          <SocialIcons />
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
