const { Response, Router } = require('express');
const { validateError } = require('../../../utils/functions');
const { save } = require('./user.gateway');
const transporter = require('../../../utils/email-service');

const saveAndFlush = async (req, res = Response) => {
    try {
        const { email, password, role, personal } = req.body;
        const user = await save({ email, password, role, personal });
        const info = await transporter. sendMail({
            from: `Pablo Samuel <${process.env.EMAIL_USER}>`,
            to: email,
            subject: 'Successful Registration',
            text: 'Te has registrado en Personal App correctamente',
        })
        console.log(info);
        res.status(200).json(user)
    } catch (error) {
        console.log(error);
        const message = validateError(error);
        res.status(400).json({ message });
    }
};

const userRouter = Router();
userRouter.post(`/`, [], saveAndFlush);

module.exports = {
    userRouter,
};

