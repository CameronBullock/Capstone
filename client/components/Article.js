import React from "react";
import ReactDom from "react-dom";


class Article extends React.Component{
  constructor(props){
    super(props);
    this.state = null;
  }
  render(){
    return(
        <div className="row">
          <div>
            <iframe src={this.props.articleURL} width="100%" height="800px"></iframe>
          </div>
          <div className="article-info">
            <h2>Article Title</h2>
            <h6>Categories</h6>
            <div className="icons">
              <i className="fa fa-heart"></i>
              <i className="material-icons">bookmark</i>
              <i className="material-icons">share</i>
            </div>
          </div>
        </div>
    )
  }
}

  export default Article;
