'use strict';

const {users} = require('../models/index.js');

async function bearerAuthentication( request, response, next ) {
    // request.headers.authorization should look like: Bearer aldsfkjasdlfkjasdlfkjasdlfkjadsf

    if( ! request.headers.authorization ) { next("Invalid Loging"); return; }

    let token = request.headers.authorization.split(' ').pop();

    let validUser = await users.authenticateToken(token);

    if( validUser ) {
        request.user = validUser;
        next();
    } else {
        next("Invalid Login");
    }
}

module.exports = bearerAuthentication;
