
const methodsWithoutBody = ['GET', 'DELETE'];

async function request(method, url, data) {
    let options = {
        method,
    };

    if(!methodsWithoutBody.includes(method)) {
        options.headers = {
            'Content-Type': 'application-/json'
        };

        options.body = JSON.stringify(data);
    }

    console.log(options);
    return await fetch(url, options);
} 

export const get = request.bind(null, 'GET');
export const post = request.bind(null, 'POST');