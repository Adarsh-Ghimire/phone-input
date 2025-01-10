"use client";
import { useEffect, useRef } from "react";
import intlTelInput from "intl-tel-input";
import "intl-tel-input/build/css/intlTelInput.css";

const PhoneInput = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      intlTelInput(inputRef.current, {
        initialCountry: "us",
        utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
      });
    }
  }, []);

  return <input type="tel" ref={inputRef} />;
};

export default PhoneInput;