import lemonLogo from '../assets/lemon-logo.png'
import { Link } from 'react-router-dom'
function Navigation(){
    return(
        <div id="navigation">
            <div className="left-part">
                <div className="logo-container">
                    <img src={lemonLogo} alt="logo" />
                    <span>Little Lemon</span>
                </div>
                
            </div>
            <div className="right-part">
                <Link to='/'>
                    <span>Go Back</span>            
                </Link>
            </div>
        </div>
    )
}

export default Navigation