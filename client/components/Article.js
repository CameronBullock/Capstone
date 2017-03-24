import React from "react";
import ReactDom from "react-dom";


class Article extends React.Component{
  constructor(props){
    super(props);
    this.state = { randomArticleNumber: this.props.allArticles.length -1 }
  }

  newArticle = () => {
    this.setState({ randomArticleNumber: Math.floor(Math.random() * this.props.allArticles.length) });
  }
  render(){
    return(
      <div className="container center">
          console.log({this.props.allArticles});
          <button className=" btn" onClick={this.newArticle}>Next Article</button>
      </div>
    )
  }
}
export default Article;
