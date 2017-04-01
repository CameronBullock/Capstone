import React from "react";
import ReactDom from "react-dom";
import Article from "../components/Article";
import AddSource from "../components/AddSource";
import {connect} from "react-redux";

class Dashboard extends React.Component {
  state = { articles: [] , id: '', affiliateUrl: '', affiliationData: [], activeArticle: {} }
  componentDidMount(){
    $.ajax({
      url: "/api/articles",
      type: "GET"
    }).done( articles => {
      this.setState({ articles },);
      this.filterArticles();
    });
    $('#modal1').modal();
  };

  componentDidUpdate(){
    $('#modal1').modal();
  }

  filterArticles = () => {
    const affiliation = this.props.user.affiliation

    switch(affiliation) {
      case 1:
      this.setState({affiliationData: this.state.articles.filter( a => a.affiliation === 2 ) })
      break;
      case 2:
      this.setState({affiliationData: this.state.articles.filter( a => a.affiliation === 3 && 5 ) })
      break;
      case 3:
      this.setState({affiliationData: this.state.articles.filter( a => a.affiliation === 2 && 5 ) })
      break;
      case 4:
      this.setState({affiliationData: this.state.articles.filter( a => a.affiliation === 3 ) })
      break;
    }
  }

  displayArticle = (e) => {
    e.preventDefault();
    let data = this.state.affiliationData;
    let num = Math.floor(Math.random() * data.length);
    let article = data[num]
    this.setState({activeArticle: article});
    this.myForm.reset()
  }

  openModal = () => {
    $('#modal1').modal('open')
  }

  render(){
    let { activeArticle } = this.state;

    if (activeArticle && Object.keys(activeArticle).length) {
      return(
        <div>
          <div className="row">
            <div id="main-article" className="col m7 offset-m1">
              <Article articleData={this.state.activeArticle} />
            </div>
            <div id="article-aside" className="col m3">
              <h5>Did this video adjust your point of view on politics?</h5>
              <form ref={n => this.myForm = n}>
              <p>
                <input name="group1" type="radio" id="yes" />
                <label htmlFor="yes">Yes</label>
              </p>
              <p>
                <input name="group1" type="radio" id="marginally" />
                <label htmlFor="marginally">Marginally</label>
              </p>
              <p>
                <input name="group1" type="radio" id="no"  />
                <label htmlFor="no">No</label>
              </p>
              <button className=" btn" onClick={this.displayArticle}>Next Article</button>
              </form>

                {/* Modal Trigger */}
                <button className="waves-effect waves-light btn" href="#modal1" onClick={this.openModal}>Modal</button>

                {/* Modal Structure */}
                <div id="modal1" className="modal">
                  <div className="modal-content">
                    <AddSource />
                  </div>
                  <div className="modal-footer">
                    <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat">X</a>
                  </div>
                </div>

            </div>
            <div className="col m1"></div>
          </div>

        </div>
      )
    }else {
      return(
        <div className="container">
          <div className="valign-wrapper">
            <div className="valign">
              <h1>Get Started Exploring</h1>
              <p>Vestibulum euismod mus nibh potenti suscipit scelerisque ultricies parturient a.</p>
              <br/>
              <button className="center-align btn" onClick={this.displayArticle}>Get Started</button>
            </div>
          </div>
        </div>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Dashboard);
