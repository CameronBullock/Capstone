import React from "react";
import ReactDom from "react-dom";
import Article from "../components/Article"


class Dashboard extends React.Component {
  state = {
    "articles" : {
      "websites" : [
          {
              "url": "https://www.nytimes.com/2017/03/17/world/europe/angela-merkel-donald-trump.html?_r=0",
              "categories": ["politics", "business", "education"],
              "affiliation": 1
          },
          {
              "url":"https://www.washingtonpost.com/politics/trump-drags-key-foreign-allies-into-controversy-over-unproven-wiretap-claims/2017/03/17/bd405278-0b2a-11e7-93dc-00f9bdd74ed1_story.html",
              "categories": ["politics", "trump"],
              "affiliation": 3
          },
          {
              "url":"https://www.youtube.com/embed/evaMpdSiZKk",
              "categories": ["video"],
              "affiliation": 3
          },
       ]
  }
}
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
        <Article allArticles={this.state.articles}/>
      </div>
    )
  }
}

export default Dashboard;
