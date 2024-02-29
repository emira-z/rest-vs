const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Passives were fetched'
    });
});

router.post('/', (req, res, next) => {
    res.status(201).json({
        message: 'Passives were created'
    });
});

router.get('/:passiveId', (req, res, next) => {
    res.status(200).json({
        message: 'Passive details',
        passiveId: req.params.passiveId
    });
});

router.patch('/:passiveId', (req, res, next) => {
    res.status(200).json({
        message: "Updated passive!"
    });
});


router.delete('/:passiveId', (req, res, next) => {
    res.status(200).json({
        message: 'Passive deleted',
        passiveId: req.params.passiveId
    });
});

module.exports = router;