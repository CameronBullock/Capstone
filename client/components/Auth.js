import React from 'react';
import { connect } from 'react-redux';
import { refreshLogin } from '../actions/auth';
import { setFlash } from '../actions/flash';

class Auth extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    let { email, password, affiliation, props: { location, dispatch, router }} = this;

    let extraData = location.pathname === "/signup" ? {affiliation: affiliation.value} : {}

    $.ajax({
      url: `/api/auth${location.pathname}`,
      type: 'POST',
      data: { email: email.value, password: password.value, ...extraData }
    }).done( user => {
      dispatch(refreshLogin(user));
      router.push("/dashboard")
    }).fail( err => {
      dispatch(setFlash(err, 'error'))
    });
  }

  render() {
    return (
      <div>
        <h2 className="center">{this.props.route.title}</h2>
          <form onSubmit={this.handleSubmit}>
            <input type="email" required={true} ref={ n => this.email = n } placeholder="email" />
            <input type="password" required={true} ref={n => this.password = n } placeholder="password" />
            {this.props.location.pathname === "/signin" ? null :
              <input type="text" required={true} ref={n => this.affiliation = n } placeholder="affiliation" />
            }

           <button className="btn">{this.props.route.title}</button>
         </form>
      </div>
    )
  }
}

export default connect()(Auth);
