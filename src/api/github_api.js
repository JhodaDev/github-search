export const getUser = async (user) => {
    const response = await fetch(`/api/getUser?user=${user}`, {
        method: "GET",
    })
    return await response.json();
}

export const getCurrentUser = async () => {
    const response = await fetch(`/api/getCurrentUser`, {
        method: "GET",
    })
    return await response.json();
}