const db = require('../config/db')
const jwt = require("jsonwebtoken")

var user = () => {

}

user.login = async (body) => {
    //  console.log(body,777);
    return new Promise((resolve, reject) => {
        var queryString = "SELECT id, email, password FROM admin Where email = ? AND password = ?"
        var filter = [body.email, body.password]
        db.query(queryString, filter, (err, res) => {
            if (err) {
                console.log(err)
                return reject(err);
            } else {
                var data = {}
                if (res.length) {
                    data = res[0]
                }
                // console.log(data,888);
                return resolve(data)
            }
        })
    })
}

user.updateSassiontoken = async (data) => {
    // return console.log(data, "updatesessiontoken");
    return new Promise((resolve, reject) => {
        var tokenData = {'id':data.id, 'email':data.email, 'password':data.password}
        var token = jwt.sign({tokenData}, "keqhfoahbifhnohveodijfr3oewuhefhoefhcewhs", {algorithm:"HS256"})
        // console.log(token, "jwtSIGN")
        data.sessiontoken = token;
        var queryString = `UPDATE admin SET tocken=? WHERE id = '${data.id}'`
        var filter = [data.sessiontoken]
        db.query(queryString, filter, (err, res) => {
            if (err) {
                console.log(err)
                return reject(err);
            } else {
                console.log(res,'res')
                res.token = data.sessiontoken;
                return resolve(res)
            }
        })
    })
}

module.exports = user