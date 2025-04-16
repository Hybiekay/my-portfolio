const express = require("express");
const next = require("next");

const port = process.env.PORT || 4000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
    const server = express();

    // Custom API routes (optional)
    server.get("/api/hello", (req, res) => {
        res.json({ message: "Hello from Express API" });
    });

    // Serve Next.js pages
    server.all("*", (req, res) => {
        return handle(req, res);
    });

    server.listen(port, (err) => {
        if (err) throw err;
        console.log(`🚀 Server ready on http://localhost:${port}`);
    });
});
