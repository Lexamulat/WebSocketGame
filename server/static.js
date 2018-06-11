const http = require('http')
const path = require("path")
const fs = require("fs")

module.exports = http.createServer((req, res) => {

    req.url = req.url.replace(/\.\./g, '')
    if (req.url === "/") {
        req.url = "/index.html"
    }

    let filePath = path.join(__dirname, "../dist", req.url)

    switch (path.extname(req.url)) {
        case ".html":
            res.writeHead(200, { "Content-Type": "text/html" })
            break;
        case ".js":
            res.writeHead(200, { "Content-Type": "text/javscript" })
            break;
        case ".css":
            res.writeHead(200, { "Content-Type": "text/css" })
            break;
        case ".jpg":
            res.writeHead(200, { "Content-Type": "image/jpeg" })
            break;
        case ".mp3":
            res.writeHead(200, { "Content-Type": "audio/mpeg" })
            break;
        default:
            console.error("> type not found:", filePath)
    }

    if (!fs.existsSync(filePath) || res.statusMessage !== 'OK') {
        console.error("> 404:", filePath);
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.write("404 Not found");
        res.end();
    } else {
        fs.createReadStream(filePath).pipe(res)
    }
})