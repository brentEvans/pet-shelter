import React, { Component } from 'react';
import axios from 'axios';
import { Link} from 'react-router-dom';


class PetDetails extends Component {
    constructor(props){
        super(props);
        this.state = {
            pet: {
                _id: "",
                name: "",
                type: "",
                description: "",
                skill1: null,
                skill2: null,
                skill3: null,
                likes: 0
            },
            liked: false
        }
    }

    componentDidMount = () => {
        axios.get(`/pet/${this.props.match.params._id}`)
            .then(res => {
                if(res.data.errors){
                    this.setState({errors: res.data.errors.message});
                } else{
                    this.setState({pet: res.data.pet})
                }
            }).catch(err => {
                console.log(err);
            })
    }

    like = (e) => {
        // console.log(this.state.pet.likes);
        if(this.state.liked){
            return;
        } else{
            let likeCount = this.state.pet.likes + 1;
            this.setState({liked: true});
            this.setState({pet: {...this.state.pet, likes: likeCount}}, () => {
                console.log(this.state.pet.likes);
                axios.put(`/pet/${this.state.pet._id}`, this.state.pet)
                    .then(res => {
                        if(res.data.errors){
                            this.setState({errors: res.data.errors.errors});
                        } else{
                            // console.log(this.state.pet.likes);
                            
                        }
                    }).catch(err => {
                        console.log(err);
                    })
            });
        }
    }

    adopt = (e) => {
        console.log(this.state.pet._id);
        axios.delete(`/pet/${this.state.pet._id}`)
            .then(res => {
                this.props.history.push('/');
            }).catch(err => {
                console.log(err);
            })
    }

    render(){
        return(
            <div>
                <Link to="/" ><h5>Home</h5></Link>
                <h3>Details about {this.state.pet.name}</h3> 
                <strong>Pet type:</strong>
                <p className="ml-5">{this.state.pet.type}</p>

                <strong>Description:</strong>
                <p className="ml-5">{this.state.pet.description}</p>

                <strong>Skills:</strong>
                    <p className="ml-5">{this.state.pet.skill1}</p>
                    <p className="ml-5">{this.state.pet.skill2}</p> 
                    <p className="ml-5">{this.state.skill3}</p>
                <strong>Likes:</strong>
                <p className="ml-5">{this.state.pet.likes}</p> 

                <button onClick={this.like} className="ui button teal">Like this pet!</button>
                {/* add button to delete (adopt this pet) */}
                <button onClick={this.adopt} className="ui button purple">Adopt this pet!</button>


            </div>
        )
    }
}



export default PetDetails;


