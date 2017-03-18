import React from "react";
import ReactDom from "react-dom";
import Article from "../components/Article"


class Dashboard extends React.Component {
  state = {articles: ({
      url: "http://www.cnn.com/2017/03/17/politics/kfile-seb-gorka-travel-ban-comments/index.html"
    })}
  // constructor(props){
  //   super(props);
  //   // this.state = {articles:({url: "https://facebook.com"})}
  //   this.state = articles[{
  //     url: "http://www.cnn.com/2017/03/17/politics/kfile-seb-gorka-travel-ban-comments/index.html"
  //   }]
  // }
  // componentDidMount(){
  //   $.ajax({
  //     url: "/articles",
  //     type: "GET"
  //   }).done( articles => {
  //     this.setState({articles});
  //   });
  // }

  render(){
    return(
      <div>
        <Article allArticles={this.state.articles} />
      </div>
    )
  }
}

export default Dashboard;
