import { fastify } from "fastify";

const app = fastify();
const PORT = 3333;

app.get("/", () => {
    return { message: "Hello, Fastify!" };
});

app.listen({
    port:PORT,
    
}).then(() => {
    console.log("HTTP server running");
})