export default async (request, context) => {
    const response = await context.next();

    // Set headers here
    response.headers.set("Test", "banica");
    return response;
};