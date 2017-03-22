import React from "react";
import ReactDom from "react-dom";


class Article extends React.Component{
  constructor(props){
    super(props);
    this.state = { randomArticleNumber: this.props.allArticles.websites.length -1 }
  }

  newArticle = () => {
    this.setState({ randomArticleNumber: Math.floor(Math.random() * this.props.allArticles.websites.length) });
  }
  render(){
    return(
      <div className="container center">
          <iframe src={this.props.allArticles.websites[this.state.randomArticleNumber].url} width="100%" height="800px"></iframe>
          <button className=" btn" onClick={this.newArticle}>Next Article</button>
      </div>
    )
  }
}
export default Article;
