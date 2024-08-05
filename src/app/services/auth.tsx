const API_URL = 'http://127.0.0.1:5000';

export interface User {
    firstName?: string;
    lastName?: string;
    email: string;
    password: string;
    session_id: string
}

export const register = async (user: User): Promise<any> => {
    const response = await fetch(`${API_URL}/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
    });
    console.log(response)
    return response.json();
};

export const login = async (user: User | null): Promise<any> => {
    const response = await fetch(`${API_URL}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
        credentials: 'include', // Include cookies in the request
    });
    return response.json();
};

export const logout = async (): Promise<any> => {
    const response = await fetch(`${API_URL}/logout`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include', // Include cookies in the request
    });
    return response.json();
};

export const getProfile = async (): Promise<User | null> => {
    const response = await fetch(`${API_URL}/profile`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include', // Include cookies in the request
    });
    if (response.ok) {
        return response.json();
    }
    return null;
};
