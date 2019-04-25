import React, { Component } from 'react';
import axios from 'axios';
import { Link} from 'react-router-dom';


class EditPet extends Component {
    constructor(props){
        super(props);
        this.state = {
            pet: {
                _id: "",
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

    componentDidMount = () => {
        axios.get(`/pet/${this.props.match.params._id}`)
            .then(res => {
                this.setState({pet: res.data.pet});
            }).catch(err => {
                console.log(err);
            })
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

    edit = (e) => {
        e.preventDefault();
        axios.put(`/pet/${this.state.pet._id}`, this.state.pet)
            .then(res => {
                // console.log(res);
                if(res.data.errors){
                    // console.log(res.data.errors.errors)
                    this.setState({errors: res.data.errors.errors});
                } else{
                    this.props.history.push(`/pets/${this.state.pet._id}/show`);
                }
            }).catch(err => {
                console.log(err);
            });
    }

    render(){
        return(
            <div>
                <fieldset>
                    <legend>Edit This Pet!</legend>
                    <form onSubmit={this.edit}>
                        <p>
                            Pet name:&nbsp;
                            <input type="text" onChange={this.changeName} value={this.state.pet.name} />
                            {
                                (this.state.errors.name) ? 
                                <span className="error">{this.state.errors.name.message}</span> : 
                                <span></span>
                            }
                        </p>
                        <p>
                            Pet type:&nbsp;
                            <input type="text" onChange={this.changeType} value={this.state.pet.type} />
                            {
                                (this.state.errors.type) ? 
                                <span className="error">{this.state.errors.type.message}</span> : 
                                <span></span>
                            }
                        </p>
                        <p>
                            Description:&nbsp;
                            <input type="text" onChange={this.changeDescription} value={this.state.pet.description} />
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
                                    <input type="text" onChange={this.changeSkill1} value={this.state.pet.skill1} />
                                </p>
                                <p>
                                    Skill 2:&nbsp;
                                    <input type="text" onChange={this.changeSkill2} value={this.state.pet.skill2} />
                                </p>
                                <p>
                                    Skill 3:&nbsp;
                                    <input type="text" onChange={this.changeSkill3} value={this.state.pet.skill3} />
                                </p>
                            </div>
                        </div>
                        <button type="submit" className="ui button teal">Edit Pet</button>
                        <Link to="/"><button className="ui button violet">Cancel</button></Link>
                    </form>
                </fieldset>
            </div>
        )
    }
}



export default EditPet;