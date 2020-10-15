import React, {Component, Fragment } from 'react';
import './App.css';
import{BrowserRouter as Router,Route,Switch,Link} from "react-router-dom";
import NewsList from './Components/NewsList/NewsList';
import NewsItem from './Components/NewsItem/NewsItem'
import SearchContact from './Components/SearchContact/SearchContact'
import PaginationContact from './Components/Paggination/Pagination'
import Page404 from './Components/Page404/Page404'
class App extends Component{

state={
  
  List:[],
  allContact:[],
  PList:[],
  count:0
}

   URL="http://newsapi.org/v2/everything?q=bitcoin&from=2020-09-14&sortBy=publishedAt&apiKey=2b43d71bc81b4af8885c5fded56edee3"
  

getNews=()=>{
  fetch(this.URL,{method:"GET"})
  .then(data=>{
    return data.json();
  })
  .then(news=>{
  this.setState({
    List:news.articles,
    allContact:news.articles  ,
    PList:news.articles 
  })
console.log(this.state.List)
  }).catch(error=>{
    console.log(error)
  })
}

componentDidMount(){
  this.getNews();
};


searchNews=text=>{

  if(text=="")
  {
    const contact3=this.state.allContact.slice()
    this.setState({
      List:contact3
    })
  }
 
  else
 {
    const contact2=this.state.allContact.filter(
    x=>{
      
    if(x.title.toLowerCase().includes(text.toLowerCase()))
   {
     return x;}
  }
  )
  console.log(contact2)
   this.setState({
      List:contact2
    })
  }
}



//Працює без пошуку по понинах
//Оновлення відбуваються не відразу
returnPaginationList(value){
 
  let pagList=[];
  let digit=this.state.count

  if(value){
    digit++;}
  else{
    digit--}
  if(digit<0)
  digit=4
 else if(digit>4)
 digit=0
  let firstDigit;
if(digit==0)
  firstDigit=digit
  else if(digit==4)
  firstDigit=0
else
  firstDigit=digit*5

  let secondDigit=firstDigit+5;
  for(firstDigit;firstDigit<secondDigit;firstDigit++)
  {
    pagList.push(this.state.List[firstDigit])
  }
  console.log(pagList)
  this.setState({
    PList:pagList,
    count:digit
  })
}


  render(){

    return(

      <Fragment>
        <Router>
          <div className="container-fluid">
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-10">
            <Link className="navbar-brand" to="/">News</Link>
            <Link className="navbar-brand" to="/page404">page404toRedirect</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <p className="nav-item nav-link">{this.state.PList.length}</p>
              <form className="form-inline">
<SearchContact
searchNews={this.searchNews.bind(this)}>
  </SearchContact>      </form>
            </div>
          </nav>
       <PaginationContact  
       PaginationList={this.returnPaginationList.bind(this)}>
      
       </PaginationContact>

      <Switch>
      <Route path="/"
             exact
             render={()=>
              <NewsList
              DataNews={this.state.PList}
              // Groups={this.state.Groups}
              // changeFavorite={this.changeFavorite.bind(this)}
              // removeContact={this.removeContact.bind(this)}
              // editContact={this.editContact.bind(this)}
              // changeGroup={this.changeGroup}
              ></NewsList>
             } ></Route>

<Route path="/page404"
      render={()=>
        <Page404
        ></Page404>
      }y
      
></Route>


             </Switch>
             </div>
             </Router>
      </Fragment>
    )
  }
}

export default App;
