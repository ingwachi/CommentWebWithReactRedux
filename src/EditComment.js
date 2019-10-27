import React, { Component } from 'react';
import { connect } from 'react-redux';

class EditComment extends Component {

    handleSubmit = (e) => {
        e.preventDefault();
        const newname = this.getName.value;
        const newmessage = this.getMessage.value;
        const data = {
            id: new Date(),
            newname,
            newmessage,
        }
        this.props.dispatch({
            type: 'UPDATE',
            id: this.props.comment.id,
            data: data
        })
    }

    render() {
        return (
            <div>
                <h1>Edit Comment</h1>
                <form onSubmit={this.handleSubmit}>
                    <input required type="text" placeholder="Enter your name" ref={(input) => this.getName = input} defaultValue={this.props.comment.name}/><br /><br />
                    <textarea required rows="5" cols="28" placeholder="Enter your comment" ref={(input) => this.getMessage = input} defaultValue={this.props.comment.message}/><br /><br />
                    <button>Update</button>
                </form>
            </div>
        );
    }
}

export default connect()(EditComment);