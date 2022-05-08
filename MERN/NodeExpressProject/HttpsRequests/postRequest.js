const http = require("http")

let body = JSON.stringify({
    title: "Make a request with Node's http module"
  })

  let options = {
    hostname: "postman-echo.com",
    path: "/post",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Content-Length": Buffer.byteLength(body)
    }
  }

  http.request(options, response => {
    let data = ""
    response.on("data", chunk => {
      data += chunk
    })
    response.on("end", () => {
      console.log(data)
    })
  }).on("error", console.error)
  .end(body)