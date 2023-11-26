import React, { Component } from 'react'

export class Itinerary extends Component {
    
  render() {
    let {title,description,imageUrl,newsUrl} = this.props;
    return (
      <div >
         <div className="card m-2" style = {{width: "18rem", height: "25rem"}}>
            <img src={imageUrl?.prefix+"500x400"+imageUrl?.suffix} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description} days trip to {title}</p>
            </div>
         </div>
      </div>
    )
  }
}

export default Itinerary
