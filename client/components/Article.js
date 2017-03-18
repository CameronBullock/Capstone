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
      <div>
          <button onClick={this.newArticle}>on click</button>
          <iframe src={this.props.allArticles.websites[0].url} width="1000px" height="400px"></iframe>
      </div>
    )
  }
}
export default Article;
