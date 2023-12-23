import { Component } from 'react'
import "./Navbar.css"
import { Navbarmenu } from './Navbarmenu'
import { Link } from 'react-router-dom'

class Navbar extends Component{
    state={clicked: false};
    handleClick=()=>{
        this.setState({clicked : !this.state.clicked})
    }

    render(){
        return(
            <nav className='Navbar-Items'>
                <h1 className='Navbar-logo'>Trippy</h1>
                <div className="Menu-icons" onClick={this.handleClick}>
                    <i className={this.state.clicked ? "fas fa-times":"fas fa-bars"}></i>
                </div>
                <ul className={this.state.clicked? "Navbar-menu active" : "Navbar-menu"}>
                    { Navbarmenu.map((item,index)=>{
                        return(
                        <li key={index}>
                            <Link className={item.cName} to={item.url}> <i className={item.logo}></i>{item.title}</Link>
                        </li>  
                        )
                    })}
                </ul>
                <button>Sign Up</button>
            </nav>
        )

}
}

export default Navbar