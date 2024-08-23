import app from "./app.js";
const port = 5000 || process.env.PORT;

function main() {
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
}

main();