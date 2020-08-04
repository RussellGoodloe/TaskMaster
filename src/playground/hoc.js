//HOC - higher order component - a component that renders another component

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);

const wihtAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info. Don't share!</p>}
            <WrappedComponent {...props}/>
        </div>
    ); 
};

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuth ? <WrappedComponent {...props} /> : <p>You are not authorized to view this information</p>}
        </div>
    );
};

const AdminInfo = wihtAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

ReactDOM.render(<AuthInfo isAuth={true} info="These are the details" />, document.getElementById('app'));