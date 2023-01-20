import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';

export class News extends Component {
    constructor(){
        super();

        this.state = {
            articles: [],
            loading: false,
            page:1
        }
    }

   async componentDidMount(){
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=38ce8fd5f5284b1a89fa7826ba9858c3&page= ${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true});
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({articles: parsedData.articles,
           totalResults: parsedData.totalResults,
          loading:false})
    }
    //Previous Click
    handlePreviousClick = async () => {
      console.log(`previous ${this.state.page}`)

      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=38ce8fd5f5284b1a89fa7826ba9858c3&page= ${this.state.page-1}&pageSize=${this.props.pageSize}`;
      this.setState({loading:true});
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
      
      this.setState({
        page: this.state.page -1,
        articles: parsedData.articles,
        loading:false
      })
    }

    handleNextClick = async() =>{
      console.log(`Next ${this.state.page}`)
      if(!(this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)))
      {
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=38ce8fd5f5284b1a89fa7826ba9858c3&page= ${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true});
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
      
      this.setState({
        page: this.state.page +1,
        articles: parsedData.articles,
        loading:false
      })
      }
    }
    

  render() {
    return (
      <div className='container my-3'>
        <h1 className='text-center'>NewsMonkey - Top Headlines</h1>
        {this.state.loading && <Spinner/>}
        
        <div className="row">
        {!this.state.loading && this.state.articles.map((element)=>{
            return(
                <div key={element.url} className="col-md-4">
            <NewsItem title={element.title? element.title.slice(0,45):""} description={element.description?element.description.slice(0,88): ""} imageUrl={element.urlToImage?element.urlToImage:"https://image.cnbcfm.com/api/v1/image/107180827-1674115488690-gettyimages-1246344394-AA_19012023_1029871.jpeg?v=1674116512&w=1920&h=1080"} newsUrl={element.url}/>
            </div>
            )
        })}
            <div className="container d-flex justify-content-evenly">
            <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePreviousClick}>&larr; Previous</button>
            <button disabled={this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)} id="nextBtn" type="button" className="btn btn-dark" onClick={this.handleNextClick}>	Next &rarr;</button>
            </div>
        </div>
      </div>
    )
  }
}

export default News