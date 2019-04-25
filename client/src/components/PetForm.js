import React, { Component } from 'react';
import axios from 'axios';
import { Link} from 'react-router-dom';

class PetForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            pet: {
                name: "",
                type: "",
                description: "",
                skill1: "",
                skill2: "",
                skill3: ""
            },
            errors: {}
        }
    }

    changeName = (e) => {
        this.setState({pet: {...this.state.pet, name: e.target.value}})
    }

    changeType = (e) => {
        this.setState({pet: {...this.state.pet, type: e.target.value}})
    }

    changeDescription = (e) => {
        this.setState({pet: {...this.state.pet, description: e.target.value}})
    }

    changeSkill1 = (e) => {
        this.setState({pet: {...this.state.pet, skill1: e.target.value}});
        console.log(this.state.pet)
    }

    changeSkill2 = (e) => {
        // this.setState({pet: {...this.state.pet, skills: {...this.state.pet.skills, skill2: e.target.value}}})
        this.setState({pet: {...this.state.pet, skill2: e.target.value}});
    }

    changeSkill3 = (e) => {
        // this.setState({pet: {...this.state.pet, skills: {...this.state.pet.skills, skill3: e.target.value}}})
        this.setState({pet: {...this.state.pet, skill3: e.target.value}});
    }

    create = (e) => {
        e.preventDefault();
        console.log(this.state.pet);
        axios.post("/pets", this.state.pet)
            .then(res => {
                console.log(res);

                if(res.data.errors){
                    // console.log(res.data.errors.errors)
                    this.setState({errors: res.data.errors.errors});
                } else{
                    this.props.history.push('/');
                }
            }).catch(err => {
                console.log(err);
            })
    }



    render(){
        return (
            <fieldset>
                <legend>Add Pet</legend>
                <form onSubmit={this.create} className="">
                    <p>
                        Pet name:&nbsp;
                        <input type="text" onChange={this.changeName} />
                        {
                            (this.state.errors.name) ? 
                            <span className="error">{this.state.errors.name.message}</span> : 
                            <span></span>
                        }
                    </p>
                    <p>
                        Pet type:&nbsp;
                        <input type="text" onChange={this.changeType} min="1" />
                        {
                            (this.state.errors.type) ? 
                            <span className="error">{this.state.errors.type.message}</span> : 
                            <span></span>
                        }
                    </p>
                    <p>
                        Description:&nbsp;
                        <input type="text" onChange={this.changeDescription} min="1" />
                        {
                            (this.state.errors.description) ? 
                            <span className="error">{this.state.errors.description.message}</span> : 
                            <span></span>
                        }
                    </p>
                    <div>
                        <span>Skills:&nbsp;</span>
                        <div className="skillsForm">
                            <p>
                                Skill 1:&nbsp;
                                <input type="text" onChange={this.changeSkill1}></input>
                            </p>
                            <p>
                                Skill 2:&nbsp;
                                <input type="text" onChange={this.changeSkill2}></input>
                            </p>
                            <p>
                                Skill 3:&nbsp;
                                <input type="text" onChange={this.changeSkill3}></input>
                            </p>
                        </div>
                    </div>
                    <button type="submit" className="ui teal button">Add Pet</button>
                    <Link to="/"><button className="ui violet button">Cancel</button></Link>
                </form>
            </fieldset>
        )
    }
}

export default PetForm;






// class PetForm extends Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             pet: {
//                 name: "",
//                 type: "",
//                 description: "",
//                 skills: [
//                     {skill1: ""},
//                     {skill2: ""},
//                     {skill3: ""},
//                 ]
//             },
//             errors: {}
//         }
//     }