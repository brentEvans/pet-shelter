const mongoose = require('mongoose'),
        Pet = mongoose.model('Pet');

class Pets {
    getAll(req, res){
        Pet.find({}, (err, pets) => {
            if(err){
                res.json({status: "not ok", errors: err});
            } else{
                res.json({status: "ok", pets: pets});
            }
        })
    }

    create(req, res){
        let p = new Pet(req.body);
        var allPets;

        // find one by name, if empty --> all good
        // Pet.find({}, (err, pets) => {
        //     if(err){
        //         console.log(err);
        //     } else{
        //         allPets = pets;
        //     }
        // });
        // console.log(allPets);
        // pets.map( pet => {
        //     if(p.name === pet.name){
        //         res.json({status: "not ok", errors: "This pet has already been added!"})
        //     } else{
        //         p.save(err => {
        //             if(err){
        //                 res.json({status: "not ok", errors: err});
        //             } else{
        //                 res.json({status: "ok"});
        //             }
        //         })
        //     }
        // })
        p.save(err => {
            if(err){
                res.json({status: "not ok", errors: err});
            } else{
                res.json({status: "ok"});
            }
        })
        
    }
    getOne(req, res){
        Pet.findOne({_id: req.params._id}, (err, pet) => {
            if(err){
                res.json({status: "not ok", errors: err});
            } else{
                res.json({status: "ok", pet: pet});
            }
        })
    }
    getOne(req, res){
        Pet.findOne({_id: req.params._id}, (err, pet) => {
            if(err){
                res.json({status: "not ok", errors: err});
            } else{
                res.json({status: "ok", pet: pet});
            }
        });
    }
    update(req, res){
        console.log(req.body)
        Pet.findOneAndUpdate({_id: req.params._id}, req.body, {runValidators: true}, err => {
            if(err){
                res.json({status: "not ok", errors: err});
            } else {
                res.json({status: "ok"});
            }
        });
    }
    delete(req, res){
        Pet.remove({_id: req.params._id}, err => {
            if(err){
                console.log("Error:", err);
            } else{
                res.json({status: "ok"});
            }
        })
    }
}

module.exports = new Pets();



