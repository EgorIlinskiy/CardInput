import React, {ChangeEventHandler} from 'react';

interface FormikProps{
    handleChange: ChangeEventHandler<HTMLInputElement>;
    errors: Object;
    name:string;
    touched:boolean;
    value:string;
}


const InputForm = ({handleChange, errors,name,touched,value}:FormikProps) => {
    return (
        <div>
            <label htmlFor={name}>Credit card number</label>
            <input type="text"
                   value={value}
                    onChange={handleChange}
                     name={name}
    />
    {errors && touched && <div style={{color:'red'}}>{errors}</div>}

        </div>
    );
};

export default InputForm;