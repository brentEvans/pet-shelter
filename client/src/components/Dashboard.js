import React, { Component } from 'react';
import axios from 'axios';
import { Link} from 'react-router-dom';

class Dashboard extends Component {
    constructor(props){
        super(props);
        this.state = {
            pets: []
        }
    }
    componentDidMount = () => {
        axios.get("/pets")
            .then(res => {
                // console.log(res.data.pets);
                this.setState({pets: res.data.pets});
            }).catch(err => {
                console.log(err);
            })
    }




    render(){
        return (
            <div>
                <h3 className="text-center">These pets are looking for a home!</h3>
                    <table className="ui celled table text-center">
                        <thead>
                            <tr>
                                <th className="">Name</th>
                                <th>Type</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.pets.map( pet => 
                                    <tr key={pet._id}>
                                        <td>{pet.name}</td>
                                        <td>{pet.type}</td>
                                        <td>
                                            <Link
                                                to={'/pets/' + pet._id +'/show'}>
                                                <button className="ui button teal">Details</button>
                                            </Link>
                                            <Link
                                                to={'/pets/' + pet._id + '/edit'}>
                                                <button className="ui button violet">Edit</button>
                                            </Link>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                <div className="jumbotron text-center">
                    <h1>Know of a pet in search of a loving home?</h1>
                    <h1 className="display-4"><Link to="/pets/new">Add a pet to the shelter!</Link></h1>
                </div>
                </div>
        )
    }
}

export default Dashboard;


