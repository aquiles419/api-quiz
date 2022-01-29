import Errors from '../helpers/Errors';
import Answer from '../models/Answers';

class AnswerController {
    async list(req, res) {
        try {
            const response = await Answer.findAll(req.query);

            res.json(response);
        } catch (error) {
            console.error(error);
            res.status(500).json({
                error: 'Error getting Answer List.',
            });
        }
    }

    async getOne(req, res) {
        try {
            const answer = await Answer.findOne(req.params);

            if (!answer) throw Errors.ANSWER;

            res.json(Answer);
        } catch (error) {
            console.error(error);
            const errorMessage = error.code
                ? error.message
                : 'Error getting Answer.';
            res.status(error.status || 500).json({ error: errorMessage });
        }
    }

    async create(req, res) {
        try {
            const data = await Answer.create(req.body);

            res.status(201).json(data);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Error adding Answer.' });
        }
    }

    async update(req, res) {
        try {
            const item = await Answer.update({
                id: req.params.id,
                ...req.body,
            });

            res.json(item);
        } catch (error) {
            console.error(error);
            const errorMessage = error.code
                ? error.message
                : 'Error updating Answer.';
            res.status(error.status || 500).json({ error: errorMessage });
        }
    }

    async remove(req, res) {
        try {
            await Answer.remove(req.params);

            res.json({ message: 'Remove Answer.' });
        } catch (error) {
            console.error(error);
            const errorMessage = error.code
                ? error.message
                : 'Error removing Answer.';
            res.status(error.status || 500).json({ error: errorMessage });
        }
    }
}

export default new AnswerController();
