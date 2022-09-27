const fetch = require('node-fetch');

export default async function getUser(request, response) {
    const { user } = request.query;
    const res = await fetch(`https://api.github.com/users/${user}`, {
        headers: {
            'Authorization': `Bearer ${process.env.API_KEY}`
        }
    });
    const json = await res.json();
    console.log(json)
    response.json(json);
}


// const api_key = import.meta.env.VITE_API_KEY;

// export const getUser = async (request, response) => {
//     console.log("first log")
//     response.status(200).json({
//         body: request.body,
//         query: request.query,
//         cookies: request.cookies,
//     });
//     // const response = await fetch(
//     //     `https://api.github.com/users/${user}`,
//     //     {
//     //         method: "GET",
//     //         headers: {
//     //             "Content-Type": "application/json",
//     //             Authorization: `Bearer ${api_key}`,
//     //         },
//     //     }
//     // );
//     // return await response.json();
// }

// export const getCurrentUser = async (request, response) => {
//     console.log("first log")
//     response.status(200).json({
//         body: request.body,
//         query: request.query,
//         cookies: request.cookies,
//     });
// }