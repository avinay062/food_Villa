const Title =()=>{
    return(
      <div className='logoHead'>
      <a href='/'>
        <img className="logo" alt="logo" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfZbPUWQIQ8CEwuTrWpEIo8kgEPj_HO0FunPO4O3_lrWConeJw1cXBE9LdLMuZ1-s6s2A&usqp=CAU'>
        </img>
      </a>
      <h1>Food Villa</h1>
      </div>
    );
  }
  const Header =()=>{
     return(
       <div className="header">
        <Title/>
        <div className="nav-items">
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
              <li>cart</li>
            </ul>
        </div>
        </div>
     );
  }

  export default Header;