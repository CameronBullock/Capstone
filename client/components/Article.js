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
        </div>
    )
  }
}

  export default Article;
