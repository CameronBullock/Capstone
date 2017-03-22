import React from 'react';

class AddSource extends React.Component {


  addSource = (e) => {
    e.preventDefault();
    let url = this.url.value;
    let categories = [this.categories.value];
    let affiliation = this.affiliation.value;


    $.ajax({
      url: 'api/articles',
      type: 'POST',
      data: { url, category, affiliation }
    }).done( article => {
      console.log("Done");
    });
  }

  render() {

    return (
      <div className="container">
        <form onSubmit={this.addSource}>
          <input type="url" ref={ n => this.url = n } placeholder="Url"/>
          <input type="text" ref={ n => this.categories = n } placeholder="categories"/>
          <input type="number" ref={ n => this.affiliation = n } placeholder="Affiliation"/>
          <button className="btn">Add</button>
        </form>
      </div>
    );
  }
};

export default AddSource;
