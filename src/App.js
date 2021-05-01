// feature 1
import React from 'react';
import data from "./data.json";
import Products from "./components/products";
import Filter from "./components/filter";

class App extends React.Component {
 constructor(){
   super();
   this.state = {
     products: data.products,
     type:"",
     sort:"",
   };
 }
 sortProducts = (event) =>{
   //imp
   const sort= event.target.value;
   console.log(event.target.value);
   this.setState(state =>({
     sort: sort,
     products: this.state.products.slice().sort((a,b) =>(
       sort ==="lowest"?
       ((a.price > b.price)? 1:-1):
       sort ==="highest"?
       ((a.price < b.price)? 1:-1):
       ((a._id < b._id)? 1:-1)
     ),)
   }));
 }
 filterProducts = (event) =>{
   //imp
   console.log(event.target.value);
   if(event.target.value === ""){
     this.setState({type: event.target.value, products:data.products})
   } else{
    this.setState({
      type: event.target.value,
      products: data.products.filter(product => product.type.indexOf(event.target.value) >=0),
    }) 
   }
  
 };
  render() {
  return (
    <div className="grid-container">
    <header>
    <a href="/">Cart</a>
    </header>
    <main>
      <div className="content">
        <div className="main">
          <Filter count={this.state.products.length}
          type={this.state.type}
          sort={this.state.sort}
          filterProducts={this.filterProducts}
          sortProducts={this.sortProducts}
          ></Filter>
     <Products products={this.state.products}></Products>
        </div>
        <div className="sidebar">
Cart Items
        </div>
      </div>
    </main>
    <footer>
      All right is reserved.
    </footer>
    </div>
  );
}
}

export default App;
