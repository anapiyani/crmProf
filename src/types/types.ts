export type TAuthState = {
    username: string;
    email: string;
    first_name: string;
    last_name: string;
    middle_name: string;
    phone_number: string;
    password: string,
    role: string,
};

export type TLoginState = {
    email: string,
    password: string,
}