import Errors from '../helpers/Errors';
import FormQuestion from '../models/Form_Question';

class FormQuestionController {
    async list(req, res) {
        try {
            const response = await FormQuestion.findAll(req.query);

            res.json(response);
        } catch (error) {
            console.error(error);
            res.status(500).json({
                error: 'Error getting Form_Question List.',
            });
        }
    }

    async getOne(req, res) {
        try {
            const form_question = await FormQuestion.findOne(req.params);

            if (!form_question) throw Errors.FORM_QUESTION;

            res.json(FormQuestion);
        } catch (error) {
            console.error(error);
            const errorMessage = error.code
                ? error.message
                : 'Error getting Form_Question.';
            res.status(error.status || 500).json({ error: errorMessage });
        }
    }

    async create(req, res) {
        try {
            const data = await FormQuestion.create(req.body);

            res.status(201).json(data);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Error adding Form_Question.' });
        }
    }

    async update(req, res) {
        try {
            const item = await FormQuestion.update({
                id: req.params.id,
                ...req.body,
            });

            res.json(item);
        } catch (error) {
            console.error(error);
            const errorMessage = error.code
                ? error.message
                : 'Error updating Form_Question.';
            res.status(error.status || 500).json({ error: errorMessage });
        }
    }

    async remove(req, res) {
        try {
            await FormQuestion.remove(req.params);

            res.json({ message: 'Remove Form_Question.' });
        } catch (error) {
            console.error(error);
            const errorMessage = error.code
                ? error.message
                : 'Error removing Form_Question.';
            res.status(error.status || 500).json({ error: errorMessage });
        }
    }
}

export default new FormQuestionController();
