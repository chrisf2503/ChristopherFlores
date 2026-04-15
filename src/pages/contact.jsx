import Navbar from "./components/navbar";
import Form from "./components/form"
import contactStyle from '../CSS/contact.module.css';

function Contact(){
    return (
        <div className={contactStyle.contact}>
            <Navbar/>
            <div className={contactStyle.contact_me_parent}>
                <div className="contact-me-parent">
                    <div className="contact-me">{`Contact me `}</div>
                        <div className="if-you-have-any-questions-or-wrapper">
                            <div className="if-you-have">If you have any questions, or want to create an affordable please reach out and we will be in touch!</div>
                        </div>
                </div>
            </div>
            <div className="form-container">
                <Form/>
            </div>
        </div>
    )
}
export default Contact;