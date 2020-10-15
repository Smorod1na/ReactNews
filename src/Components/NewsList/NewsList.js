import React, { Fragment } from "react";
import NewsItem from "../NewsItem/NewsItem";

const NewsList=({DataNews})=>{


    let news;
    if(DataNews!=null)
    {
        news=DataNews.map(item=>{
            if(item!=null)
        {   return(
            <NewsItem
            author={item.author}
            content={item.content}
             description={item.description}
             publishedAt={item.publishedAt}
             urlToImage={item.urlToImage}
             title={item.title}
   
            ></NewsItem>
            );}
        }
        );
    }
    
        return (
           <Fragment>
               <div className="card-deck">
    {news}      
    </div> 
     </Fragment>
        )




}
export default NewsList