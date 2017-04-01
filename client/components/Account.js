import React from 'react';
import {connect} from "react-redux";


class Account extends React.Component {
  state = { affiliation: this.props.user.affiliation}

  changeAffiliation = (e) => {
    e.preventDefault();

    let { affiliation } = this.state;
    let { _id } = this.props.user;

    $.ajax({
      url: `/api/account/${_id}`,
      type: 'PUT',
      dataType: 'JSON',
      data: {affiliation}
    }).done(user => {
      this.props.dispatch({ type: 'USER', user })
    })
  }

  handleFormChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.changeAffiliation}>
          <div className="affiliation-list">
            <div className="center section-title">
              <h3 className="center">Where You Stand</h3>
            </div>
            <select onChange={this.handleFormChange} name="affiliation" value={this.state.affiliation} className="browser-default">
              <option value="1">Liberal</option>
              <option value="2">Moderate - Liberal</option>
              <option value="3">Moderate - Conservative</option>
              <option value="4">Conservative</option>
            </select>
          </div>
          <button className="btn">Save</button>
        </form>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Account);
