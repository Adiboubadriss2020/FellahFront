import { useState } from "react";
import './forminput.css'
const FormInput = (props) => {
    const [focused, setFocused] = useState(false);
    const { label, errorMessage, onChange, id, ...inputProps } = props;

    const handleFocus = (e) => {
        setFocused(true);
    };

    return (
        <div className="formIN">
            <label className="lbl">{label}</label>
            <input className="inpt"
                {...inputProps}
                onChange={onChange}
                onBlur={handleFocus}
                focused={focused.toString()}
            />
            <span className="spn">{errorMessage}</span>
        </div>
    );
};

export default FormInput;