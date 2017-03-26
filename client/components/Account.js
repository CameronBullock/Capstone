import React from 'react';
import {connect} from "react-redux";


class Account extends React.Component {


  changeAffiliation = (e) => {
    e.preventDefault();
    let affiliation = this.affiliation.value;
    let { _id } = this.props.user;

    $.ajax({
      url: `/user/${_id}`,
      type: 'PUT',
      data: { affiliation }
    }).done(user => {
      //Update Redux User using reducers and action
    });
      this.setState({ users });
    };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.changeAffiliation}>
          <input ref={ n => this.affiliation = n } placeholder="Affiliation"/>
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
