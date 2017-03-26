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
      <div className="container">
        <h2 className="center">{this.props.route.title}</h2>
        <div className="row">
          <form className="col col-md-6 offset-m4" onSubmit={this.handleSubmit}>
            <input type="email" required={true} ref={ n => this.email = n } placeholder="email" />
            <input type="password" required={true} ref={n => this.password = n } placeholder="password" />
            {this.props.location.pathname === "/signin" ? null :
            <div>
              <input type="text" required={true} ref={n => this.affiliation = n } placeholder="affiliation" />
              <ul>
                <h2 className="center">Your Interests</h2>
                <li>Politics</li>
                <br/>
                <li>Religion</li>
                <br/>
                <li>Sports</li>
              </ul>
              <br/>
              <br/>
              <div>
                <h2 className="center">Where You Stand</h2>
                <p>
                  <input name="affiliation" value="1" type="radio" id="one" />
                  <label for="one">Liberal</label>
                </p>
                <p>
                  <input name="affiliation" type="radio" id="two" />
                  <label for="two">Moderate - Liberal</label>
                </p>
                <p>
                  <input name="affiliation" type="radio" id="three"  />
                  <label for="three">Moderate - Conservative</label>
                </p>
                <p>
                  <input name="affiliation" type="radio" id="four"  />
                  <label for="four">Conservative</label>
                </p>
              </div>
            </div>
          }



          <button className="btn col m12">{this.props.route.title}</button>
        </form>
      </div>
    </div>
  )
}
}

export default connect()(Auth);
