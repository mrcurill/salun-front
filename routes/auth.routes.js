const {Router} = require('express');
const router = Router();
const {check, validationResult} = require('express-validator')
const jwr = require('jsonwebtoken')
const config = require('config')

// /api/auth/register
router.post(
    '/register',
    [
        check('email', 'Некорректный email').isEmail(),
        check('password', 'Минимальная длина пароля 6 символов').isLength({min: 6})
    ],
    async (request, response) => {
    try {

        const errors = validationResult(request);

        if(!errors.isEmpty()) {
            return response.status(400).json({
                errors: errors.array(),
                message: 'Некорректные данные'
            })
        }

        const {email,password} = request.body;

        // const candidate = await User.findOne({email: email});
        const candidate = false;

        if(candidate) {
            return response.status(400).json({message: 'Пользователь уже существует'});
        }

        // const hashedPassword = await bcrypt.hash(password, 12);
        // const user = new User({email, password: hashedPassword});

        // await user.save();

        response.status(200).json({message: 'Пользователь создан'});

    } catch (e) {
        console.log("Ошибка регистрации", e);
        response.status(500).json({message: 'Что-то пошло не так'});
    }
})

// /api/auth/login
router.post(
    '/login',
    [
        check('email', 'Некорректный email').normalizeEmail().isEmail(),
        check('password', 'Введите пароль').exists()
    ],
    async (request, response) => {
    try {

        const errors = validationResult(request);

        if (!errors.isEmpty()) {
            return response.status(400).json({
                errors: errors.array(),
                message: 'Некорректные данные'
            })
        }

        const {email,password} = request.body;

        const user = await User.findOne({email: email});

        if(!user) {
            return response.status(400).json({message: 'Пользователь не найден'});
        }

        const isMatch = bcrypt.compare(password, user.password);

        if(!isMatch) {
            return response.status(400).json({message: 'Неверный пароль'})
        }

        const token = jwr.sign(
            { userId: user.id},
            config.get('jwtSecret'),
            {expiresIn: '1h'}
        )

        response.json({token, userId: user.id});

    } catch (e) {
        response.status(500).json({message: 'Что-то пошло не так'});
    }
})

module.exports = router;