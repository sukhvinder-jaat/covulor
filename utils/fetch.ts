export const get = "GET";
export const post = "POST";

const BackendHostUrl = 'http://mock-api.plexicus.com:8080';
const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxNDE1LCJ1c2VybmFtZSI6bnVsbCwiZXhwIjoxNzEyMzg5Mzc4fQ.A6BvBsfRul8JJkpsjq9YzHO8VY9UDzePyxGWpsTKed8";

export const fetchRequestHandler = async function (
    method: string,
    url: string,
    jsonData: object = {}
) {
    const headers: any = {
        "Content-Type": "application/json",
    };
    // Is auth is needed, add Authorization header
    if (token) {
        headers["Authorization"] = `Bearer ${token}`;
    }
    const options: any = {
        method: method,
        headers: headers,
    };

    // If method is post, add body and Accept header
    if (method !== get) {
        options.body = JSON.stringify(jsonData);
        headers["Accept"] = "application/json";
    }

    let res = await fetch(`${proxyUrl}${BackendHostUrl}${url}`, options);

    const data = await res.json();

    // If status code is 4xx, throw error
    if (res.status.toString().startsWith("4")) {
        throw new Error(
            data.statusMessage ? data.statusMessage : data.error.message
        );
    }

    // If status code is 5xx, throw error
    if (res.status.toString().startsWith("5")) {
        throw new Error("Server error");
    }

    // If status code is 2xx, return data
    return { status: res.status, data };
};

/**
 * Get header token here
 * @param token string
 * @returns
 */
export const getHeaders = function (token: string): Object {
    // Headers
    const Header: any = {
        Authorization: token,
    };

    const headers: any = {
        headers: Header,
    };

    return headers;
};
