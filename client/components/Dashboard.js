import React from "react";
import ReactDom from "react-dom";
import Article from "../components/Article";
import AddSource from "../components/AddSource"


class Dashboard extends React.Component {
  state = { articles: []}
  componentDidMount(){
    $.ajax({
      url: "/api/articles",
      type: "GET"
    }).done( articles => {
      this.setState({ articles });
    });
  }

  render(){
    let articles = this.state.articles.map( article => {
      return(
        <div key={article._id}>
          {article.categories}
        </div>
      )
    })
    return(
      <div>
        {articles}
      </div>
    )
  }
}

export default Dashboard;
