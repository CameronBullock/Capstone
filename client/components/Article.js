import React from "react";
import ReactDom from "react-dom";


class Article extends React.Component{
  constructor(props){
    super(props);
  }

  newArticle = () => {
    let randomArticleNumber = Math.floor(Math.random() * this.props.allArticles.websites.length);
  }
  render(){
    return(
      <div className="container">
          <button className="right btn" onClick={this.newArticle}>Next Article</button>
          <iframe src={this.props.allArticles.websites[{randomArticleNumber}].url} width="100%" height="800px"></iframe>
      </div>
    )
  }
}
export default Article;
