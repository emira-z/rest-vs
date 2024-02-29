const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'arcanas were fetched'
    });
});

router.post('/', (req, res, next) => {
    res.status(201).json({
        message: 'arcanas were created'
    });
});

router.get('/:arcanaId', (req, res, next) => {
    res.status(200).json({
        message: 'arcana details',
        arcanaId: req.params.arcanaId
    });
});

router.patch('/:arcanaId', (req, res, next) => {
    res.status(200).json({
        message: "Updated arcana!"
    });
});


router.delete('/:arcanaId', (req, res, next) => {
    res.status(200).json({
        message: 'arcana deleted',
        arcanaId: req.params.arcanaId
    });
});

module.exports = router;