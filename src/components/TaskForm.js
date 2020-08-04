import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

const now = moment();

export default class TaskForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            description: props.task ? props.task.description : '',
            note: props.task ? props.task.note : '',
            project: props.task ? props.task.project : '',
            dueDate: props.task ? moment(props.task.dueDate) : 0,
            createdAt: props.task ? moment(props.task.dueDate) : moment(),
            calendarFocused: false,
            error: ''
        };
    }

    onDescriptionChange =(e) => {
        const description = e.target.value;
        this.setState(() => ({ description }));
    };
    onNoteChange=(e) => {
        const note = e.target.value;
        this.setState(() => ({ note }));
    };
    onProjectChange=(e) => {
        const project = e.target.value;
        this.setState(() => ({ project }))
    };
    onDueDateChange=(dueDate) => {
        if (dueDate) {
            this.setState(() => ({ dueDate }))
        }
    };
    onDateChange=(createdAt) => {
        if (createdAt) {
            this.setState(() => ({ createdAt }))
        } 
    };
    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calendarFocused: focused}));
    };
    onSubmit = (e) => {
        e.preventDefault();

        if (!this.state.description || !this.state.dueDate) {
            this.setState(() => ({ error: 'Please enter a description and due date'}));
        } else {
            this.setState(() => ({ error: ''}));
            this.props.onSubmit({
                description: this.state.description,
                note: this.state.note,
                project: this.state.project,
                dueDate: this.state.dueDate.valueOf(),
                createdAt: this.state.createdAt.valueOf()
            })
        }
    };
    render() {
        return (
            <form className='form' onSubmit={this.onSubmit}>
                {this.state.error && <p className="form__error">{this.state.error}</p>}
                <input
                    type="text"
                    placeholder="Description"
                    autoFocus
                    className="text-input"
                    value={this.state.description}
                    onChange={this.onDescriptionChange}
                />
                <textarea 
                    className="textarea"
                    placeholder="Enter notes about the task(optional)"
                    value={this.state.note}
                    onChange={this.onNoteChange}
                />
                <input
                    type="text"
                    placeholder="Project(optional)"
                    autoFocus
                    className="text-input"
                    value={this.state.project}
                    onChange={this.onProjectChange}
                />
                <SingleDatePicker
                    date={this.state.dueDate}
                    onDateChange={this.onDueDateChange}
                    focused={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                />
                {/* <SingleDatePicker
                    date={this.state.createdAt}
                    onDateChange={this.onDateChange}
                    focused={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                /> */}
                <div>
                    <button className="button">Save Expense</button>
                </div>
            </form>
        )
    }
}