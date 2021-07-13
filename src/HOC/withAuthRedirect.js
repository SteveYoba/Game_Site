import React from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

let mapStateToPropsForRedirect = (state) => ({
    isAuth: state.auth.isAuth,
})

export const withAuthRedirect = (Component) => {

    class RedireсtComponent extends React.Component {
        render() {
            if (!this.props.isAuth) return <Redirect to = {'/login'}></Redirect>
            return <Component {...this.props}/>
        }
    }  
    let ConnectAuthRedirectComponent = connect (mapStateToPropsForRedirect)(RedireсtComponent)
    
    return ConnectAuthRedirectComponent;
}