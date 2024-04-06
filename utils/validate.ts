export const validateEmail = (email: string) => {
    return /\S+@\S+\.\S+/.test(email);
};

export const validatePassword = (password: string) => {
    return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,20}$/.test(password);
};
