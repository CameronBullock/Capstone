import React from "react";
import ReactDom from "react-dom";
import Article from "../components/Article";
import AddSource from "../components/AddSource"


class Dashboard extends React.Component {
  state = {
    "articles" : {
      "websites" : [
          {
              "url": "",
              "categories": ["politics", "business", "education"],
              "affiliation": 1
          },
          {
              "url":"https://www.city-journal.org/html/don%E2%80%99t-legalize-drugs-11758.html",
              "categories": ["politics", "marijuana"],
              "affiliation": 4
          },
          {
              "url":"https://www.youtube.com/embed/Ifi9M7DRazI",
              "categories": ["video"],
              "affiliation": 1
          },
          {
              "url":"http://j-walk.com/images/PoliticalSpectrumInfographic_5DD0/leftright.gif",
              "categories": ["image", "explain", "neutral"],
              "affiliation": 2
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
        <AddSource />
      </div>
    )
  }
}

export default Dashboard;
