import React from "react";
import ReactDom from "react-dom";
import Article from "../components/Article";
import AddSource from "../components/AddSource"


class Dashboard extends React.Component {
  state = { articles: [] , id: '', url: ''}
  componentDidMount(){
    $.ajax({
      url: "/api/articles",
      type: "GET"
    }).done( articles => {
      this.setState({ articles });
    });
  }

  indexUrl = () =>{
    let num = Math.floor(Math.random() * this.state.articles.length);
    this.displayArticle(num)
  }

  displayArticle = (num) => {
    let article = this.state.articles[num]
    this.setState({ url: article.url})
  }

  render(){

    return(

      <div>
        <Article articleURL={this.state.url} />
        <button className=" btn" onClick={this.indexUrl}>Next Article</button>
        <AddSource />
      </div>
    )
  }
}

export default Dashboard;
