import React, { Component } from "react";
import TutorialDataService from "../services/tutorial.service";
export default class AddTutorial extends Component {
    constructor(props) {
        super(props);
        this.onChangeTitle = this.onChangeTitle.bind(this);this.onChangeDescription = this.onChangeDescription.bind(this);
        this.saveTutorial = this.saveTutorial.bind(this);this.newTutorial = this.newTutorial.bind(this);
        this.state = {
            id: null, title: "", description: "", published: false, submitted: false
        };
    }
    onChangeTitle(e) {
        this.setState({title: e.target.value
        });
    }
    onChangeDescription(e) {
        this.setState({description: e.target.value
        });
    }
    saveTutorial() {
        var data = {
            title: this.state.title, description: this.state.description
        };
        TutorialDataService.create(data)
            .then(response => {
                this.setState({
                    id: response.data.id, title: response.data.title, description: response.data.description,
                    published: response.data.published, submitted: true
                });
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }
    newTutorial() {
        this.setState({id: null, title: "", description: "", published: false, submitted: false
        });
    }
    render() {
        return (
            <div className="submit-form">
                {this.state.submitted ? (
                    <div>
                        <h4>You submitted successfully!</h4>
                        <button className="btn btn-success" onClick={this.newTutorial}> Add </button>
                    </div>
                ) : (
                    <div>
                        <div className="form-group">
                            <label htmlFor="title">Title</label>
                            <input
                                type="text"
                                className="form-control"
                                id="title"
                                required
                                value={this.state.title}
                                onChange={this.onChangeTitle}
                                name="title"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <input
                                type="text"
                                className="form-control"
                                id="description"
                                required
                                value={this.state.description}
                                onChange={this.onChangeDescription}
                                name="description"
                            />
                        </div>
                        <button onClick={this.saveTutorial} className="btn btn-success"> Submit</button>
                    </div>
                )}
            </div>
        );
    }
}

/*
First, we define the constructor and set initial state, bind this to the different events.

Because there are 2 fields, so we create 2 functions to track the values of the input and set that state for changes.
 We also have a function to get value of the form (state) and send the POST request to the Web API.
  It calls TutorialDataService.create() method.

For render() method, we check the submitted state, if it is true, we show Add button for creating new Tutorial again.
 Otherwise, a Form will display.

 */
