const mongoose = require('mongoose')

const CreatureSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    backstory: String,
    description: String,
    // creatureTypes: //array
    // detail: //array
    subtype: [{
        title: String,
        description: String,
        subtitle: String,
        subdescription: String,
        subtypeTitle: String,
        subtypeDescription: String//,
        // specialties: //array
    }],
    historical: [{
        title: String,
        description: String,
        specialCreature: [{
            name: String,
            description: String
        }]
    }],
    table: [{
        description: String//,
        // table: [{
        //     // titles: //array
        //     // rows: //array
        // }]
    }],
    additionalInfo: [{
        name: String,
        quote: String,
        text: String
    }],
    scrollText: String,
    ritual: [{
        name: String,
        description: String//,
        // data: //array
    }]
})

module.exports = mongoose.model('Creatures', CreatureSchema)