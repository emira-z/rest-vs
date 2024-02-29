const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'relics were fetched'
    });
});

router.post('/', (req, res, next) => {
    res.status(201).json({
        message: 'relics were created'
    });
});

router.get('/:relicId', (req, res, next) => {
    res.status(200).json({
        message: 'relic details',
        relicId: req.params.relicId
    });
});

router.patch('/:relicId', (req, res, next) => {
    res.status(200).json({
        message: "Updated relic!"
    });
});


router.delete('/:relicId', (req, res, next) => {
    res.status(200).json({
        message: 'relic deleted',
        relicId: req.params.relicId
    });
});

module.exports = router;