import fetch from 'node-fetch';

export default async function getUser(request, response) {
    const res = await fetch(`https://api.github.com/user`, {
        headers: {
            'Authorization': `Bearer ${process.env.API_KEY}`
        }
    });
    const json = await res.json();
    response.json(json);
}
