export const REGEX_FOR_PASSWORD =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$/;
//must have atleast 8 characters, 1 lowercase, 1 uppercase, 1 number and 1 special character
export const REGEX_FOR_EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const REGEX_FOR_NAME = /^[A-Za-z]+$/;