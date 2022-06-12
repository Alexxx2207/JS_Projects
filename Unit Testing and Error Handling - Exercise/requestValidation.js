function requestValiator(request) {
    let methods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    let version = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];

    if (request.method != undefined && methods.includes(request.method) &&
        request.version != undefined && version.includes(request.version) &&
        request.uri != undefined && request.uri.match(/^[a-zA-Z0-9\.]+$|^\*$/) && request.uri.length > 0 &&
        request.message != undefined && request.message.match(/[\<\>\\\&\'\"]/) == null) {
        return request;

    } else if(request.method == undefined || !methods.includes(request.method)) {
        throw new Error('Invalid request header: Invalid Method');
        
    } else if(request.uri == undefined || !request.uri.match(/^[a-zA-Z0-9\.]+$|^\*$/) || request.uri.length <= 0) {
        throw new Error('Invalid request header: Invalid URI');

    } else if(request.version == undefined || !version.includes(request.version)) {
        throw new Error('Invalid request header: Invalid Version');

    } else if(request.message == undefined || request.message.match(/[\<\>\\\&\'\"]/) != null) {
        throw new Error('Invalid request header: Invalid Message');

    }
}
