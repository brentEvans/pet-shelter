

const mongoose = require('mongoose');

function arrayLimit(val) {
    return val.length <= 3;
}

const PetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "<---- Pets need names, silly!"],
        minlength: [3, "<---- Name must be at least 3 characters!"]
    },
    type: {
        type: String,
        required: [true, "<---- Pets need types, silly!"],
        minlength: [3, "<---- Type must be at least 3 characters!"]
    },
    description: {
        type: String,
        required: [true, "<---- Description is required!"],
        minlength: [3, "<---- Description must be at least 3 characters!"]
    },
    skill1: {
        type: String,
        default: null
    },
    skill2: {
        type: String,
        default: null
    },
    skill3: {
        type: String,
        default: null
    },
    likes: {
        type: Number,
        default: 0
    }
}, {timestamps: true});

mongoose.model('Pet', PetSchema);


//TODO: include these error messages inside of the create/edit forms

//TODO: validate that each pet name added to db is unique; display error message if not

//TODO: prepopulate form with existing data about pet in edit page
    //redirect after successful submission


//TODO: add 'adopt' button that deletes pet's record from  db





// skills: {
//     type: [
//         {skill1: {type: String}}, 
//         {skill2: {type: String}}, 
//         {skill3: {type: String}}
//     ]
// }


// skills: [{
//     type: String
// }],