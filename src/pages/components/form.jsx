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
    const handelChange = (e) =>{
        const { name, value } = e.target;
        setFormValue((prev) => ({...prev,
            [name]: value,
        }));
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formValue);

        setFormValue({
            name: "",
            email: "",
            phone: "",
            message: ""
        });
        //Add functions here later
        // later → send to email / API
    };
    return (
        <div className={formStyle.form_container}>
            <form className={formStyle.form} onSubmit={handleSubmit}>
                <div className={formStyle.title}>Contact me</div>
                <div className={formStyle.container}>
                    <div className={formStyle.subtitle}>
                        <label className={formStyle.name}>Name</label>
                    </div>
                    <input 
                    className={formStyle.value}
                    name="name" 
                    value = {formValue.name} 
                    onChange = {handelChange}
                    placeholder="Enter Here"/>
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
                </div>
                <button type="submit" className={formStyle.submit}>Submit</button>
            </form>
        </div>
    )
}
export default Form;
