import { useState } from "react";

export function useLocalStorage(key, defaultValue) {
    const getInitialValue = () => localStorage.getItem(key) ?? defaultValue; //made this a function so that localstorage is not called everytime the component is rendered
    const [value, setValue] = useState(getInitialValue);
    const setAndStoreValue = (newValue) => {
        setValue(newValue);
        localStorage.setItem(key, newValue);
    }
    return [value, setAndStoreValue];
}