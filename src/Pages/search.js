import React, { Component } from 'react'
import Axios from 'axios'
import './full.css'
import swal from 'sweetalert';
export default class search extends Component {
     constructor(){
          super()
          this.state = {
             data:[],
             rep:[]
             };    

     }
 
     componentDidMount(){    
     const client_id = "a44a7a367a5850279eab";
     const client_secret = "89e45346fdf2848ab3d434bb1a669f86e1604b5c"; 
     var Id=localStorage.getItem('ID');
     if(localStorage.getItem('ID')){
          Axios.get(`https://api.github.com/users/${Id}?client_id=${client_id}&client_secret=${client_secret}`)
     .then(res=>this.setState({
          data:res.data
     }))
     .catch(err=>console.log(err))
     Axios.get(`https://api.github.com/users/${Id}/repos`)
     .then(res=>this.setState({
          rep:res.data
     }))
     .catch(err=>console.log(err))

     }
     else{
          swal("Search Box has been Identify Empty:", {}).then(omkar => {
               swal("Go to Home PAge:", {}).then(() => {
                 window.location.replace("/");
               });
             });
     }
     
     }
     render() {
          const {data,rep}=this.state;
          return (
               <div>
                    <br/>
                    <br/>
                    <br/>
               <center>     
               <div class="card">

   
               <div class="view overlay">
               <img class="card-img-top" src={data.avatar_url}
               alt=""/>
               
               <div class="mask rgba-white-slight"></div>
               
               </div>

               </div>
               <br/>
               <div class="card" id="Bodyy">
               <div class="card-body">


               <h4 class="card-title">{data.name}</h4>

               <p class="card-text">{data.bio}</p>
               <p class="card-title">
               Followers:{data.followers} &ensp;  &ensp;  &ensp;Followers:{data.following}
               </p>

               </div>
               </div>
               </center>
               
               <center>
               <div>

               
               <div class="card card-cascade narrower" id="tab">
               <div
               class="view view-cascade gradient-card-header blue-gradient narrower py-2 mx-4 mb-3 d-flex ">
              <center>
               <span class="white-text" id="rep"> &nbsp;Repository</span>
               </center>
               </div>
               <div class="px-4">
               <div class="table-wrapper table-responsive">
               <table class="table table-hover mb-0">
               <thead>
               <tr>
               <th>
               </th>
               <th class="th-lg">
               Repository Name
                <i class="fas fa-sort ml-1"></i>
              
               </th>
               <th class="th-lg">
              Language
                <i class="fas fa-sort ml-1"></i>
              
               </th>
               <th class="th-lg">
              Size
                <i class="fas fa-sort ml-1"></i>
              
            </th>
            <th class="th-lg">
              Source
                <i class="fas fa-sort ml-1"></i>
             
            </th>
           </tr>
           </thead>
          <tbody>
               
                  {/* { this.state.rep.map(rep=>{
                       console.log(rep.name)

                  })} */}
                  {
                       Object.values(rep).map(({name,html_url,language,size})=>(
                         <tr>
                         <th scope="row">
                          </th>
                         <td>{name}</td>
                         <td>{language}</td>
                         <td>{size}</td>
                         <td><a href={html_url}>Click here</a></td>
                       </tr>	
                       ))
                  }
               
        
          </tbody>
          </table>
          </div>
          </div>
          </div>
          </div>
               </center>
               </div>
 
          )
     }
}
