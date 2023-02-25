import { useState } from "react";

export default initialValue => {
    const [ value, setValue] = useState(initialValue)
    const handleChange = e => {
        setValue(e.value.target);
    };
    const reset = () => {
        setValue("");
    };
    return [value, handleChange, reset]
};