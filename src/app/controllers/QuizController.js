import Errors from '../helpers/Errors';
import Quiz from '../models/Quiz';

class QuizController {
    async list(req, res) {
        try {
            const response = await Quiz.findAll(req.query);

            res.json(response);
        } catch (error) {
            console.error(error);
            res.status(500).json({
                error: 'Error getting Quiz List.',
            });
        }
    }

    async getOne(req, res) {
        try {
            const quiz = await Quiz.findOne(req.params);

            if (!quiz) throw Errors.QUIZ;

            res.json(quiz);
        } catch (error) {
            console.error(error);
            const errorMessage = error.code
                ? error.message
                : 'Error getting Quiz.';
            res.status(error.status || 500).json({ error: errorMessage });
        }
    }

    async create(req, res) {
        try {
            const data = await Quiz.create(req.body);

            res.status(201).json(data);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Error adding Quiz.' });
        }
    }

    async update(req, res) {
        try {
            const item = await Quiz.update({
                id: req.params.id,
                ...req.body,
            });

            res.json(item);
        } catch (error) {
            console.error(error);
            const errorMessage = error.code
                ? error.message
                : 'Error updating Quiz.';
            res.status(error.status || 500).json({ error: errorMessage });
        }
    }

    async remove(req, res) {
        try {
            await Quiz.remove(req.params);

            res.json({ message: 'Quiz removed.' });
        } catch (error) {
            console.error(error);
            const errorMessage = error.code
                ? error.message
                : 'Error removing Quiz.';
            res.status(error.status || 500).json({ error: errorMessage });
        }
    }
}

export default new QuizController();
