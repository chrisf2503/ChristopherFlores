import Navbar from "./components/navbar";
import Form from "./components/form";
import contactStyle from "../CSS/contact.module.css";
import Social from "./components/social";

function Contact() {
  return (
    <div className={contactStyle.contact}>
      <Navbar />
      <div className={contactStyle.contact_me_parent}>
        <div className={contactStyle.contact_me}>{"Contact me"}</div>
        <div className={contactStyle.information}>
          <div className={contactStyle.text}>
            <p>
              If you have any questions, or want to create an affordable
              website, please reach out and we will be in touch!
            </p>
          </div>
        </div>
      </div>
      <div className={contactStyle.from_social_container}>
        <Form />
        <Social />
      </div>
    </div>
  );
}

export default Contact;
