import React from "react";
import ReactDom from "react-dom";


class Article extends React.Component{
  constructor(props){
    super(props);
    this.state = null;
  }
  render(){
    return(
      <div className="container">
        <iframe src={this.props.articleURL} width="100%" height="800px"></iframe>
      </div>
    )
  }
}

  export default Article;
