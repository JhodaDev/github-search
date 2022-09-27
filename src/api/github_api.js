export const getUser = async (user) => {
    const response = await fetch(`/api/getUser?user=${user}`, {
        method: "GET",
    })
    console.log(response)
}