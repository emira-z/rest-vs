const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET requests to /weapons'
    });
});

router.post('/', (req, res, next) => {
    res.status(201).json({
        message: 'Handling POST requests to /weapons'
    });
});

router.get('/:weaponId', (req, res, next) => {
    const id = req.params.weaponId;
    if (id == 'special') {
        res.status(200).json({
            message: 'You discovered the special ID',
            id: id
        });
    } else {
        res.status(200).json({
            message: 'You passed an ID'
        });
    }
});

router.patch('/:weaponId', (req, res, next) => {
    res.status(200).json({
        message: "Updated Weapon!"
    });
});

router.delete('/:weaponId', (req, res, next) => {
    res.status(200).json({
        message: "Deleted Weapon!"
    });
});
module.exports = router;