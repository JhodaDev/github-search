export default function handler(request,response,) {

    console.log("hello world")

    response.status(200).json({
        body: request.body,
        query: request.query,
        cookies: request.cookies,
    });
}