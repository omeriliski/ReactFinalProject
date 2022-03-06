import './header.scss'
import Plus from "./posts/img/plus.svg"
import Logo from "./posts/img/logo.svg"

export function Header(){
    return (
      <div className="header-wrapper">
          <div className='logo'>
              <img src={Logo}/>
               <img src={Plus}/></div>
          <div className='plus-for-post'></div>
          <div className='hamburger-menu'></div>
        <button className='logout-button' >Logout</button>
      
      </div>
    );
}