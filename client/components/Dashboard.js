import React from "react";
import ReactDom from "react-dom";
import Article from "../components/Article";
import AddSource from "../components/AddSource";
import {connect} from "react-redux";

class Dashboard extends React.Component {
  state = { articles: [] , id: '', affiliateUrl: '', affiliationData: []}
  componentDidMount(){
    $.ajax({
      url: "/api/articles",
      type: "GET"
    }).done( articles => {
      this.setState({ articles });
    });
  };

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

  displayArticle = () => {
    let data = this.state.affiliationData;
    let num = Math.floor(Math.random() * data.length);
    let article = data[num]
    return article.url;
  }

  render(){
    if (this.state.affiliationData.length) {
      return(
        <div>
          <div className="row">
            <div id="main-article" className="col m7 offset-m1">
              <Article articleURL={this.displayArticle()} />
            </div>
            <div id="article-aside" className="col m3">
              <h5>Did this video adjust your point of view on politics?</h5>
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
              <button className=" btn" onClick={this.filterArticles}>Next Article</button>
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
              <button className="center-align btn" onClick={this.filterArticles}>Get Started</button>
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
