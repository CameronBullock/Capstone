import React from 'react';
import {connect} from "react-redux";


class Account extends React.Component {


  changeAffiliation = (e) => {
    e.preventDefault();
    let affiliation = this.props.user.affiliation
    let { _id } = this.props.user;

    $.ajax({
      url: `/account/${_id}`,
      type: 'PUT',
      dataType: 'JSON',
      data: { affiliation }
    }).done(user => {
      console.log(affiliation);
      //Update Redux User using reducers and actions
    })
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.changeAffiliation}>
        <div className="affiliation-list">
          <div className="center section-title">
            <h3 className="center">Where You Stand</h3>
            <h6>Vestibulum euismod mus nibh potenti suscipit</h6>
          </div>
          <select className="browser-default" onChange={this.changeAffiliation}>
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
