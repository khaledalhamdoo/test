import React , {Component} from 'react'; 
 import Nav from './Component/nav/nav';
 import Card from './Component/card/card';
 import './Q-UI.css';
 class App extends Component { 
   state ={
     tb:{id:1,
       name:'مركز برلياس الصحي',
       
        }
   }   
 render(){
  return (
    <div> 
      
    <Nav />
    <Card /><Card /><Card />  
    <Card /><Card /><Card />  
     
    </div>
  );
 }
 
}

export default App;