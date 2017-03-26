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
        <div className="container">
          <Article articleURL={this.displayArticle()} />
          <button className=" btn" onClick={this.filterArticles}>Next Article</button>
          <AddSource />
        </div>
      )
    }else {
      return(
        <div className="container">
          <button className="center-align btn" onClick={this.filterArticles}>Get an Article</button>
          <AddSource />
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
