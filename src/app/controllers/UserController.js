import User from '../models/Users';

class UserController {
    async list(req, res) {
        const response = await User.findAll();
        console.log('data', response);
        return res.json(response);
    }

    async store(req, res) {
        const userExists = await User.findOne({
            where: {
                email: req.body.email,
            },
        });

        if (userExists)
            return res.status(400).json({ error: 'Usuário já existe.' });

        const { id, name, email } = await User.create(req.body);

        return res.json({ id, name, email });
    }

    async update(req, res) {
        const { email, oldPassword } = req.body;

        const user = await User.findByPk(req.userId);

        if (email !== user.email) {
            const userExists = await User.findOne({
                where: { email },
            });

            if (userExists)
                return res.status(400).json({ error: 'Usuário já existe.' });
        }

        if (oldPassword && !(await user.checkPassword(oldPassword)))
            return res.status(401).json({ error: 'Senha incorreta.' });

        const { id, name } = await user.update(req.body);

        return res.json({ id, name, email });
    }

    async login(req, res) {
        const { email, password } = req.body;
        console.log('email e pass -> ', email, password);

        const user = await await User.findOne({
            where: { email },
        });

        if (!user)
            return res.status(401).json({ error: 'Usuário não encontrado.' });

        if (password && !(await user.checkPassword(password)))
            return res.status(401).json({ error: 'Senha incorreta.' });

        // const { id, name } = await user.update(req.body);
        const { id, name } = user;
        return res.json({ uid: id, name, email });
    }
}

export default new UserController();
