const userDetailsModel = require("../models/user-details-model");
const bcrypt = require("bcrypt");
const { createTokens } = require("../JWT");

const userRegistration = async (req, res) => {
    try {
        let info = {
            user_name: req.body.user_name,
            email: req.body.email,
            address: req.body.address,
            city: req.body.city,
            state: req.body.state,
            phone_number: req.body.phone_number,
            createdAt: Date.now(),
            updatedAt: Date.now(),
        };
        await bcrypt.hash(req.body.user_password, 10).then((hash) => {
            info.user_password = hash
        })
        const userData = await userDetailsModel.create(info);
        res
            .status(200)
            .json({
                status: "SUCCESS",
                msg: "User details has been saved",
                data: req.body,
            });
        console.log(userData);
    } catch (error) {
        console.error("Error creating an user:", error);

        if (error.name === "SequelizeValidationError") {
            const errorMessages = error.errors.map((err) => err.message);
            res
                .status(400)
                .json({ error: "Validation Error", messages: errorMessages });
        } else {
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
};

const userLogin = async (req, res) => {
    const { email, user_password } = req.body;

    const user = await userDetailsModel.findOne({ where: { email: email } });

    if (!user) res.status(400).json({ error: "User Doesn't Exist" });

    const dbPassword = user?.user_password;
    // if (dbPassword !== user_password) res.status(400).json({ error: "Password doesn't match!" });
    bcrypt.compare(user_password, dbPassword).then((match) => {
        if (!match) {
            res
                .status(400)
                .json({ error: "Wrong email and Password Combination!" });
        } else {
            const accessToken = createTokens(user);

            res.cookie("access-token", accessToken, {
                maxAge: 60 * 60 * 24 * 30 * 1000,
                httpOnly: true,
            });

            res.json({ status: "SUCCESS", msg: "User logged in successfully!", accessToken: accessToken });;
        }
    });
}

const GetUsers = async (req, res) => {
    try {
        const users = await userDetailsModel.findAll();
        res
            .status(200)
            .json({ records: users });
    } catch (error) {
        console.error("Error fetching employees:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = {
    userRegistration,
    userLogin,
    GetUsers
}