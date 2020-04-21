import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class home extends Component {
     constructor(){
          super()
          this.state={
              Id:""
           };
          this.add=this.add.bind(this)
          this.submit=this.submit.bind(this)
     }
     add(e){
          this.setState({
               Id:e.target.value
          })
     }
     submit(){
          const { Id } = this.state;
          localStorage.setItem("ID", Id);
          return(<Link to='/search'/>)
          

     }
     render() {
          return (
               <div>
                    <br/>
                    <br/>
                    <br/>
               <center>
               <div class="caption__wrapper ">
               <h1 class="display-3 blue-text " >GH-Finder</h1>
               <h4 id="h3">Easy Way to Find Your Github Account </h4>
               </div>
               <br/>
              
               <div class="active-pink-4 mb-4" id="butt">
               <input class="form-control " type="text" placeholder="Search" id='in' aria-label="Search" value={this.state.Id} onChange={this.add}/>
               </div>
                 <Link to='/Search'><button class="btn btn-lg blue-gradient" onClick={this.submit}>Find Your GitHub Account</button></Link>

               </center>
               </div>
          )
     }
}
