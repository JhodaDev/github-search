const api_key = import.meta.env.VITE_API_KEY;

export const getUser = async (user) => {
    const response = await fetch(
        `https://api.github.com/users/${user}`,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${api_key}`,
            },
        }
    );
    return await response.json();
}

export const getCurrentUser = async () => {
    const response = await fetch(
        `https://api.github.com/user`,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${api_key}`,
            },
        }
    );
    return await response.json();
}