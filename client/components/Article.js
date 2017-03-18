import React from "react";
import ReactDom from "react-dom";


class Article extends React.Component{
  constructor(props){
    super(props);
  }

  newArticle = () => {
    console.log(this.props.allArticles.url)
  }
  render(){
    return(
      <div>
          <button onClick={this.newArticle}>on click</button>
        <iframe src={this.props.allArticles.url} width="1000px" height="400px"></iframe>
      </div>
    )
  }
}
export default Article;
