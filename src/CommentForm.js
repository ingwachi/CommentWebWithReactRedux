import React, { Component } from 'react';
import { connect } from 'react-redux';

class CommentForm extends Component {

    handleSubmit = (e) => {
        e.preventDefault();
        const name = this.getName.value;
        const message = this.getMessage.value;
        const data = {
            id: new Date(),
            name,
            message,
            editing: false
        }
        this.props.dispatch({
            type: 'ADD_COMMENT',
            data
        })
        this.getName.value = "";
        this.getMessage.value = "";
        console.log(data);
    }

    render() {
        return (
            <div>
                <h1>Add Comment</h1>
                <form onSubmit={this.handleSubmit}>
                    <input required type="text" placeholder="Enter your name" ref={(input) => this.getName = input} /><br /><br />
                    <textarea required rows="5" cols="28" placeholder="Enter your comment" ref={(input) => this.getMessage = input} /><br /><br />
                    <button>Comment</button>
                </form>
            </div>
        );
    }
}

export default connect()(CommentForm);