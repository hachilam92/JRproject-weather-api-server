class Response {
    constructor (message, data) {
        this.status = null;
        this.code = null;
        this.message = message;
        this.data = data;
    }
}

class SuccessRes extends Response {
    constructor (data, message = null) {
        super(message, data);
        this.code = 200;
        this.status = 'success';
    }
}

class ErrorRes extends Response {
    constructor (code, message, data = null) {
        super(message, data);
        this.code = code;
        this.status = 'error';
    }
}

module.exports = {
    SuccessRes,
    ErrorRes
};