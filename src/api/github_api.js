export default function handler(request, response) {
    console.log("first log")
    response.status(200).json({
      body: request.body,
      query: request.query,
      cookies: request.cookies,
    });
  }
  

// const api_key = import.meta.env.VITE_API_KEY;

// export const getUser = async (user) => {
//     const response = await fetch(
//         `https://api.github.com/users/${user}`,
//         {
//             method: "GET",
//             headers: {
//                 "Content-Type": "application/json",
//                 Authorization: `Bearer ${api_key}`,
//             },
//         }
//     );
//     return await response.json();
// }

// export const getCurrentUser = async () => {
//     const response = await fetch(
//         `https://api.github.com/user`,
//         {
//             method: "GET",
//             headers: {
//                 "Content-Type": "application/json",
//                 Authorization: `Bearer ${api_key}`,
//             },
//         }
//     );
//     return await response.json();
// }