import Errors from '../helpers/Errors';
import Company from '../models/Company';

class CompanyController {
    async list(req, res) {
        try {
            const response = await Company.findAll(req.query);

            res.json(response);
        } catch (error) {
            console.error(error);
            res.status(500).json({
                error: 'Error getting Company List.',
            });
        }
    }

    async getOne(req, res) {
        try {
            const quiz = await Company.findOne(req.params);

            if (!quiz) throw Errors.COMPANY;

            res.json(quiz);
        } catch (error) {
            console.error(error);
            const errorMessage = error.code
                ? error.message
                : 'Error getting Company.';
            res.status(error.status || 500).json({ error: errorMessage });
        }
    }

    async create(req, res) {
        try {
            const data = await Company.create(req.body);

            res.status(201).json(data);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Error adding Company.' });
        }
    }

    async update(req, res) {
        try {
            const item = await Company.update({
                id: req.params.id,
                ...req.body,
            });

            res.json(item);
        } catch (error) {
            console.error(error);
            const errorMessage = error.code
                ? error.message
                : 'Error updating Company.';
            res.status(error.status || 500).json({ error: errorMessage });
        }
    }

    async remove(req, res) {
        try {
            await Company.remove(req.params);

            res.json({ message: 'Quiz Company.' });
        } catch (error) {
            console.error(error);
            const errorMessage = error.code
                ? error.message
                : 'Error removing Company.';
            res.status(error.status || 500).json({ error: errorMessage });
        }
    }
}

export default new CompanyController();
