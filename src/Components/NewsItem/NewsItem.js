import React, { Component, Fragment } from "react";

class NewsItem extends Component{

state={
    author:this.props.author,
     description:this.props.description,
     publishedAt:this.props.publishedAt,
     urlToImage:this.props.urlToImage,
     title:this.props.title
}

render(){

    const{author,description,publishedAt,title,urlToImage}=this.state;
    return(
        <Fragment>
            <div className="container">
            <div className="card-horisontal">
  <div className="row no-gutters">
    <div className="col-md-4">
      <img src={urlToImage} className="card-img" alt="..."></img>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <h6 className="card-title">{author}</h6>

    <p className="card-text">{description}</p>
        <p className="card-text"><small className="text-muted">{publishedAt}</small></p>
      </div>
    </div>
  </div>
</div>
</div>
            
        </Fragment>

    )
}

}
export default NewsItem