import Errors from '../helpers/Errors';
import Question from '../models/Questions';

class QuestionController {
    async list(req, res) {
        try {
            const response = await Question.findAll(req.query);

            res.json(response);
        } catch (error) {
            console.error(error);
            res.status(500).json({
                error: 'Error getting Question List.',
            });
        }
    }

    async getOne(req, res) {
        try {
            const question = await Question.findOne(req.params);

            if (!question) throw Errors.QUESTIONS;

            res.json(question);
        } catch (error) {
            console.error(error);
            const errorMessage = error.code
                ? error.message
                : 'Error getting Question.';
            res.status(error.status || 500).json({ error: errorMessage });
        }
    }

    async create(req, res) {
        try {
            const data = await Question.create(req.body);

            res.status(201).json(data);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Error adding Question.' });
        }
    }

    async update(req, res) {
        try {
            const item = await Question.update({
                id: req.params.id,
                ...req.body,
            });

            res.json(item);
        } catch (error) {
            console.error(error);
            const errorMessage = error.code
                ? error.message
                : 'Error updating Question.';
            res.status(error.status || 500).json({ error: errorMessage });
        }
    }

    async remove(req, res) {
        try {
            await Question.remove(req.params);

            res.json({ message: 'Remove Question.' });
        } catch (error) {
            console.error(error);
            const errorMessage = error.code
                ? error.message
                : 'Error removing Question.';
            res.status(error.status || 500).json({ error: errorMessage });
        }
    }
}

export default new QuestionController();
