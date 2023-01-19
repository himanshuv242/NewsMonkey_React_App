import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    constructor(){
        super();

        this.state = {
            articles: [],
            loading: false
        }
    }

   async componentDidMount(){
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=38ce8fd5f5284b1a89fa7826ba9858c3";
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({articles: parsedData.articles})
    }

  render() {
    return (
      <div className='container my-3'>
        <h1>NewsMonkey - Top Headlines</h1>

        
        <div className="row">
        {this.state.articles.map((element)=>{
            return(
                <div key={element.url} className="col-md-4">
            <NewsItem title={element.title? element.title.slice(0,45):""} description={element.description?element.description.slice(0,88): ""} imageUrl={element.urlToImage?element.urlToImage:"https://image.cnbcfm.com/api/v1/image/107180827-1674115488690-gettyimages-1246344394-AA_19012023_1029871.jpeg?v=1674116512&w=1920&h=1080"} newsUrl={element.url}/>
            </div>
            )
        })}
            
        </div>
      </div>
    )
  }
}

export default News