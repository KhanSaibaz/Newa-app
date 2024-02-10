import React, { Component } from 'react'
import NewsItem from './components/NewsItem'
import { Spinner } from './components/Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'

export default class News extends Component {
            static defaultProps ={
                country:'in',
                pagesize:9,
                category:'general'

            };

            static propTypes ={
                country:PropTypes.string,
                pagesize:PropTypes.number,
                category:PropTypes.string,
            };

    constructor(props){
        super(props)
        this.state={
            articles:[] ,  
            loading:false,
            page:1,
            totalResults:0
        }
        document.title="DN -" + this.props.category.charAt(0).toUpperCase()+this.props.category.slice(1)
    }

    async updatenews(){
        this.props.setprogress(10)
        try {
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pagesize}`;
            this.setState({
                loading:true
            });
            this.props.setprogress(40)
            let response = await fetch(url);
            let parsed_data = await response.json();
            
            this.setState({
                articles: parsed_data.articles,
                totalResults:parsed_data.totalResults,
                loading:false
            });
            this.props.setprogress(80)
        } catch (error) {
          console.error("Error fetching data:", error);
      }
      this.props.setprogress(100)

    }

    async componentDidMount() {
    this.updatenews()
}

fetchData = async ()=>{
    this.setState({
        page:this.state.page+1
    })
    try {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pagesize}`;
        this.setState({
         loading:true
      });
        let response = await fetch(url);
        let parsed_data = await response.json();
    
        this.setState({
          articles: this.state.articles.concat(parsed_data.articles),
          totalResults:parsed_data.totalResults,
          loading:false
      });
  } catch (error) {
      console.error("Error fetching data:", error);
  }
}

handlePreviousClick= async ()=>{
        this.setState({
            page:this.state.page-1
        })
        this.updatenews()
    }
    
    handleNextClick= async ()=>{
        this.setState({
            page:this.state.page+1
        })
        this.updatenews()
}

render() {
    return (
        <>
                <h1   className="mb-4"  style={{textAlign:"center",fontSize:"2rem" ,color:'red',}}>DAILY TOPS NEWS  ABOUT {this.props.category.toUpperCase()}</h1>
               {/* {this.state.loading && <Spinner/>} */}
               <InfiniteScroll
                dataLength={this.state.articles.length} //This is important field to render the next data
                next={this.fetchData}
                hasMore={this.state.articles.length!==this.state.totalResults}
                loader={<Spinner/>}>

                <div className="row">
                {this.state.articles.map((element) => (
                    <div className="col-md-4" key={element.url}>
                        <NewsItem title={element.title} url={element.url} description={element.description}  imageurl={element.urlToImage}  author={element.author} published={element.publishedAt}
                        sources={element.source}
                        />
                    </div>
                ))}
                    </div>
                </InfiniteScroll>

                {/* </InfiniteScroll> */}

                {/* <div className="container">
                    <div className="container d-flex justify-content-between">
                        <button disabled={this.state.page<=1} className="btn btn-dark mx-2" onClick={this.handlePreviousClick}>&larr; Previous</button>
                        <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pagesize)} className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                        </div>
                </div> */}
              </>
        );
      }
      
}
