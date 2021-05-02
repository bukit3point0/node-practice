const express = require('express')
const router = express.Router()
const Creature = require('../models/Creature')

router.get('/', async (req, res) => {
    try {
        const creatures = await Creature.find()
        res.json(creatures)
    } catch(err) {
        res.json({
            message:err
        })
    }
})

router.post('/', async (req, res) => {
    const creature = new Creature({
        name: req.body.name,
        backstory: req.body.backstory,
        description: req.body.description,
        subtype: [{
            title: req.body.subtype.title,
            description: req.body.subtype.description,
            subtitle: req.body.subtype.subtitle,
            subdescription: req.body.subtype.subdescription,
            subtypeTitle: req.body.subtype.subtypeTitle,
            subtypeDescription: req.body.subtype.subtypeDescription
        }],
        historical: [{
            title: req.body.historical.title,
            description: req.body.historical.description,
            specialCreature: [{
                name: req.body.historical.specialCreature.name,
                description: req.body.historical.specialCreature.description
            }]
        }],
        table: [{
            description: req.body.table.description
        }],
        additionalInfo: [{
            name: req.body.additionalInfo.name,
            quote: req.body.additionalInfo.quote,
            text: req.body.additionalInfo.text
        }],
        scrollText: req.body.scrollText,
        ritual: [{
            name: req.body.ritual.name,
            description: req.body.ritual.description
        }]
    })
    try{
        const saveCreature = await creature.save()
        res.json(saveCreature)
    } catch(err) {
        res.json({
            message: err
        })
    }
})

module.exports = router