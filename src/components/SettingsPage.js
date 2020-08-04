import React from 'react';
import SettingsForm from './SettingsForm';
import { setEnable, setFrequency, setAddress } from '../actions/emailSettings';
import { add } from 'numeral';
import { connect } from 'react-redux';

export class SettingsPage extends React.Component {
    onSubmit = ({ enable, frequency, address }) => {
        this.props.setEnable(enable);
        this.props.setFrequency(frequency);
        this.props.setAddress(address);
        this.props.history.push('/');
        console.log(address);
    };
    render() {
        return (
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Email Settings</h1>
                    </div>
                </div>
                <div className="content-container">
                    <SettingsForm
                        emailSettings={this.props.emailSettings} 
                        onSubmit={this.onSubmit}
                    />
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    setEnable: (enable) => dispatch(setEnable(enable)),
    setFrequency: (frequency) => dispatch(setFrequency(frequency)),
    setAddress: (address) => dispatch(setAddress(address))
});

export default connect(undefined, mapDispatchToProps)(SettingsPage);