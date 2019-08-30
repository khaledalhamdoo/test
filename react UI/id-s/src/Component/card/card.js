import React , {Component} from 'react';
import './card.css';   
import '../../Q-UI.css';
import tbr1 from './tbr1.png'
class Card extends Component {
    
    render(){
        return(
            
         <div className="card bor"  >
                                 <img src={tbr1} className="card-img-top clip-1"  alt="adf"  /> 

					  {/*   > */}
                    <div className="card-body ThreeSteps">
                        <a href="/#" className="btn1 " >مركز برلياس الصحي 
                     </a>
                     </div>				 
         </div> 
            
        )
    }
}
export default Card