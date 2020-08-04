import React from 'react';


export default class SettingsForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            enable: props.emailSettings ? props.emailSettings.enable : false,
            frequency: props.emailSettings ? props.emailSettings.frequency : 1,
            address: props.emailSettings ? props.emailSettings.address : '',
            error: ''
        };
    }

    onEnableChange = (e) => {
        const enable = !this.state.enable;
        this.setState(() => ({ enable }));
    };
    onFrequencyChange = (e) => {
        const frequency = e.target.value;
        this.setState(() => ({ frequency }));
    };
    onAddressChange = (e) => {
        const address = e.target.value;
        this.setState(() => ({ address }));
    };

    onSubmit = (e) => {
        e.preventDefault();

        if (!this.state.enable || !this.state.address) {
            this.setState(() => ({ error: 'To proceed, enable email reminders and enter a valid email address', enable: false}));
        } else {
            this.setState(() => ({error: ''}));
            this.props.onSubmit({
                enable: this.state.enable,
                frequency: this.state.frequency,
                address: this.state.address
            })
        }
    };
    render() {
        const enableText = this.state.enable ? 'Disable' : 'Enable';
        return (
            <form className="form" onSubmit={this.onSubmit}>
                {this.state.error && <p className="form__error">{this.state.error}</p>}
                    <input
                        type='text'
                        className="text-input"
                        placeholder="Email address"
                        value={this.state.address}
                        onChange={this.onAddressChange}>
                    </input>
                    Email frequency
                    <select 
                        className="select" 
                        value={this.state.frequency}
                        onChange={this.onFrequencyChange}>
                            <option value="0">Minimal</option>
                            <option value="1">Moderate</option>
                            <option value="2">Maximum</option>
                    </select>
                    Email reminders
                    <button className="button" onClick={this.onEnableChange}>{enableText}</button>
            </form>
        );
    };
}