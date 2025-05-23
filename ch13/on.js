import https from "https";

function getText(url, callback) {
    let request = https.get(url);

    request.on("response", response => {
        const httpStatus = response.statusCode;

        response.setEncoding("utf-8");
        let body = "";

        response.on("data", chunk => {
            body += chunk;
        });

        response.on("end", () => {
            if (httpStatus === 200) {
                callback(null, body);
            } else {
                callback(httpStatus, null);
            }
        });
    });

    request.on("error", err => {
        callback(err, null);
    });
}
