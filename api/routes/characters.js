const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'characters were fetched'
    });
});

router.post('/', (req, res, next) => {
    res.status(201).json({
        message: 'characters were created'
    });
});

router.get('/:characterId', (req, res, next) => {
    res.status(200).json({
        message: 'character details',
        characterId: req.params.characterId
    });
});

router.patch('/:characterId', (req, res, next) => {
    res.status(200).json({
        message: "Updated character!"
    });
});


router.delete('/:characterId', (req, res, next) => {
    res.status(200).json({
        message: 'character deleted',
        characterId: req.params.characterId
    });
});

module.exports = router;