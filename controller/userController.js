var db = require('../config/db');
var user = require('../models/userModels')

exports.login = async (req, res) => {
    try {
        db.beginTransaction()
        var loginData = await user.login(req.body)
        // console.log(loginData.id,9999)
        if (loginData.id != undefined) {
            var updateSassiontoken = user.updateSassiontoken(loginData)
            // console.log(updateSassiontoken,'jjjjjj')
            if (updateSassiontoken.affectedRows) {
                // console.log(updateSassiontoken, "Sassiontoken999")
                db.commit();
                res.json({ message: "User Successfull", UserData: loginData,updateSassiontoken })

            } else {

                res.json({ message: "error", UserData: loginData })

            }

        } else {

            db.rollback();
            res.status(401).json({ error: "Datas Error" })

        }

    } catch (error) {
        db.rollback();
        res.status(401).json({ error: "Data Error" })
    }
}
