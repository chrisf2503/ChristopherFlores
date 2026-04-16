import { useState } from "react";
import formStyle from "../../CSS/form.module.css"
function Form(){
    const [formValue, setFormValue] = useState(
        {
            name: "",
            email: "",
            phone: "",
            message: ""
        }
    );
    const [errors, setErrors] = useState({});

    const validateName = (name) => {
        if (name.length <= 3) return "Name must be more than 3 characters.";
        if (!name.includes(" ")) return "Name must include a space for first and last name.";
        return "";
    };

    const validateEmail = (email) => {
        if (!email.includes("@") || !email.includes(".")) return "Email must contain '@' and '.'.";
        return "";
    };

    const validatePhone = (phone) => {
        const phoneRegex = /^\+?[\d\s\-\(\)]{10,}$/;
        if (!phoneRegex.test(phone)) return "Phone number must be valid (at least 10 digits, can include spaces, dashes, parentheses).";
        return "";
    };

    const validateMessage = (message) => {
        if (message.length <= 30) return "Message must be more than 30 characters.";
        return "";
    };

    const handelChange = (e) =>{
        const { name, value } = e.target;
        setFormValue((prev) => ({...prev,
            [name]: value,
        }));
        // Clear error for this field when user starts typing
        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: "" }));
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        
        const nameError = validateName(formValue.name);
        const emailError = validateEmail(formValue.email);
        const phoneError = validatePhone(formValue.phone);
        const messageError = validateMessage(formValue.message);
        
        const newErrors = {
            name: nameError,
            email: emailError,
            phone: phoneError,
            message: messageError,
        };
        
        setErrors(newErrors);
        
        // Check if any errors
        if (nameError || emailError || phoneError || messageError) {
            return; // Don't submit
        }
        
        console.log(formValue);

        setFormValue({
            name: "",
            email: "",
            phone: "",
            message: ""
        });
        setErrors({});
        //Add functions here later
        // later → send to email / API
    };
    return (
        <div className={formStyle.form_container}>
            <form className={formStyle.form} onSubmit={handleSubmit}>
                <div className={formStyle.title}>Contact me</div>
                <div className={formStyle.container}>
                    <div className={formStyle.subtitle}>
                        <label className={formStyle.name}>Full Name</label>
                    </div>
                    <input 
                    className={formStyle.value}
                    name="name" 
                    value = {formValue.name} 
                    onChange = {handelChange}
                    placeholder="Enter Here"/>
                    {errors.name && <div className={formStyle.error}>{errors.name}</div>}
                </div>
                <div className={formStyle.container}>
                    <div className={formStyle.subtitle}>
                        <label className={formStyle.name}>Email</label>
                    </div>
                    <input 
                    className={formStyle.value}
                    name="email" 
                    value = {formValue.email} 
                    onChange = {handelChange}
                    placeholder="Enter Here"/>
                    {errors.email && <div className={formStyle.error}>{errors.email}</div>}
                </div>
                <div className={formStyle.container}>
                    <div className={formStyle.subtitle}>
                        <label className={formStyle.name}>Phone</label>
                    </div>
                    <input 
                    className={formStyle.value}
                    name="phone" 
                    value = {formValue.phone} 
                    onChange = {handelChange}
                    placeholder="Enter Here"/>
                    {errors.phone && <div className={formStyle.error}>{errors.phone}</div>}
                </div>
                <div className={formStyle.container}>
                    <div className={formStyle.subtitle}>
                        <label className={formStyle.name}>Message</label>
                    </div>
                    <textarea 
                    className={formStyle.value2}
                    name="message" 
                    value = {formValue.message} 
                    onChange = {handelChange}
                    placeholder="Enter Here"/>
                    {errors.message && <div className={formStyle.error}>{errors.message}</div>}
                </div>
                <button type="submit" className={formStyle.submit}>Submit</button>
            </form>
        </div>
    )
}
export default Form;
