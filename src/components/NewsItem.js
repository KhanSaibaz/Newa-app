import React, { Component } from 'react'

export default class NewsItem extends Component {
  

    render() {
    let {title,imageurl,description,url,author,published,sources}=this.props
    
    return (
        <div>
        {/* <span class="badge badge-pill badge-dark">Dark</span> */}
        <div className="card my-2 mx-5" >
        <div className='d-flex  justify-content-end position-absolute ' style={{right:"0"}}>
          <span className=" badge rounded-pill bg-danger" >{`${sources.name}`}</span>
        </div>
       
        <img className="card-img-top" src={!imageurl ? "https://th.bing.com/th/id/OIP.kDRM2DFgXo3dDWAxDk7o_QHaFe?w=224&h=180&c=7&r=0&o=5&pid=1.7": imageurl} alt="Card image cap" style={{ maxHeight: "10rem" }}/> 
        <div className="card-body">
             <h5 className="card-title" style={{fontSize:"1.2rem"}}>{title===null?" ": title.slice(0,50)}.. </h5>
            <p className="card-text" style={{fontSize:"1rem"}}>{description===null ? " ": description.slice(0,90)}...</p>
            <p className="card-text"><small className="text-muted"><b> By {author===null?"Unknown" : author} </b> on {new Date(published).toGMTString()}</small></p>
            <a href={url} target="_blank" rel="noreferrer" className="btn btn-dark">CLick Here ! </a>
        </div>
        </div>
      </div>
    )
  }
}
