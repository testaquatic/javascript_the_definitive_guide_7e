import { error } from "console";
import http, { request } from "http";

function getJSON(url) {
    return new Promise((resolve, reject) => {
        request = http.get(url, response => {
            if (response.statusCode !== 200) {
                reject(new Error(`HTTP status ${response.statusCode}`));
                response.resume();
            } else if (response.headers["content-type"] !== "application/json") {
                reject(new Error(`Content type ${response.headers["content-type"]}`));
                response.resume();
            } else {
                let body = "";
                response.setEncoding("utf-8");
                response.on("data", chunk => { body += chunk; });
                response.on("end", () => {
                    try {
                        let parsed = JSON.parse(body);
                        resolve(body);
                    } catch (e) {
                        reject(e);
                    }
                });
            }
        });
        request.on("error", error => { reject(error); });
    });
}