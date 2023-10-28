import React, { Component } from 'react'

export class Itinerary extends Component {
    
  render() {
    let {title,description,imageUrl,newsUrl} = this.props;
    return (
      <div >
         <div className="card m-2" style = {{width: "18rem"}}>
            <img src={!imageUrl?"https:images.chesscomfiles.com/uploads/v1/news/1274649.02ee5022.5000x5000o.5cbeab0ca699.png":imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}...</p>
                {/* <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read More</a> */}
            </div>
         </div>
      </div>
    )
  }
}

export default Itinerary
