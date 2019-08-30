import React , {Component} from 'react';
import './nav.css';  
import logo from './logo.png'; 
import '../../Q-UI.css'
class Nav extends Component {
    
    render(){
        return(
            <nav className='sh navbar'>
                <div className='container fr '> 
                    <img src={logo} className='logo '  alt="adf"  /> 
                   <ul >
                         <a href='/#' className='  fr btn'>Home </a>
                         <a href='/#' className='  fr btn'>About </a>
                    </ul>
                </div>
            </nav>
            
        )
    }
}
export default Nav