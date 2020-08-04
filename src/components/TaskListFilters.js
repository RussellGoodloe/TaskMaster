import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setTextFilter, setProjectFilter, sortByProject ,sortByDate, setStartDate, setEndDate } from '../actions/filters';

class TaskListFilters extends React.Component {
    state = {
        calendarFocused: null
    }
    onDatesChange = ({ startDate, endDate }) => {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    };
    onFocusChange = (calendarFocused) => {
        this.setState(() => ({ calendarFocused }));
    }
    render() {
        return (
            <div className="content-container">
                <div className="input-group">
                    <div className="input-group__item">
                        <input 
                            type="text"
                            className="text-input" 
                            placeholder="Search tasks"
                            value={this.props.filters.text} 
                            onChange={(e) => {
                                this.props.dispatch(setTextFilter(e.target.value))
                        }}/>
                    </div>
                    <div className="input-group__item">
                        <input 
                            type="text"
                            className="text-input" 
                            placeholder="Search projects"
                            value={this.props.filters.projectText} 
                            onChange={(e) => {
                                this.props.dispatch(setProjectFilter(e.target.value))
                        }}/>
                    </div>
                    <div className="input-group__item">
                        <select
                            className="select"
                            value={this.props.filters.sortBy}
                            onChange={(e) => {
                                if( e.target.value === 'date') {
                                    this.props.dispatch(sortByDate());
                                } else if (e.target.value === 'project') {
                                    this.props.dispatch(sortByProject());
                                }
                            }}
                        >
                            <option value="date" >Date</option>
                            <option value="project" >Project</option> 
                        </select>
                    </div>
                    <div className="input-group__item">
                        <DateRangePicker
                            
                            startDate={this.props.filters.startDate}
                            endDate={this.props.filters.endDate}
                            onDatesChange={this.onDatesChange}
                            focusedInput={this.state.calendarFocused}
                            onFocusChange={this.onFocusChange}
                            numberOfMonths={1}
                            isOutsideRange={() => false}
                            showClearDates={true}
                        />
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        filters: state.filters
    };
};

export default connect(mapStateToProps)(TaskListFilters);

//good, in theory