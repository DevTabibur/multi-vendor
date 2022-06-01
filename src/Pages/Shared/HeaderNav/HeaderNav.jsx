import React from 'react';
// import './HeaderNav.scss';

const HeaderNav = () => {
  return (
    <>
        <header>

  {/* <!-- contact content --> */}

  <div className="header-content-top">
    <div className="content">
      <span><i className="fas fa-phone-square-alt"></i> (00)0000-0000</span>
      <span><i className="fas fa-envelope-square"></i>email@email.com.br</span>
    </div>
  </div>

  {/* <!-- / contact content --> */}
  <div className="container">
    {/* <!-- logo --> */}
    <strong className="logo"><i className="fas fa-heart"></i></strong>
    {/* <!-- open nav mobile --> */}

    {/* <!--search --> */}
    <label className="open-search" htmlFor="open-search">
      <i className="fas fa-search"></i>
            <input className="input-open-search" id="open-search" type="checkbox" name="menu" />
    <div className="search">
      <button className="button-search"><i className="fas fa-search"></i></button>
      <input type="text" placeholder="What are you looking for?" className="input-search"/>
    </div>
    </label>
    {/* <!-- // search --> */}
    <nav className="nav-content">
      {/* <!-- nav --> */}
      <ul className="nav-content-list">
        <li className="nav-content-item account-login">
          <label className="open-menu-login-account" htmlFor="open-menu-login-account" />

            <input className="input-menu" id="open-menu-login-account" type="checkbox" name="menu" />

            <i className="fas fa-user-circle"></i><span className="login-text">Hello, Sign in <strong>Create Account</strong></span> <span className="item-arrow"></span>

            {/* <!-- submenu --> */}
            <ul className="login-list">
              <li className="login-list-item"><a href="https://www.cupcom.com.br/">My account</a></li>
              <li className="login-list-item"><a href="https://www.cupcom.com.br/">Create account</a></li>
              <li className="login-list-item"><a href="https://www.cupcom.com.br/">logout</a></li>
              {/* </label> */}
            </ul>
        </li>
        <li className="nav-content-item"><a className="nav-content-link" href="https://www.cupcom.com.br/"><i className="fas fa-heart"></i></a></li>
        <li className="nav-content-item"><a className="nav-content-link" href="https://www.cupcom.com.br/"><i className="fas fa-shopping-cart"></i></a></li>
        {/* <!-- call to action --> */}
      </ul>
    </nav>
  </div>

  {/* <!-- nav navigation commerce --> */}
  <div className="nav-container">
    <nav className="all-category-nav">
      <label className="open-menu-all" htmlFor="open-menu-all" >
        <input className="input-menu-all" id="open-menu-all" type="checkbox" name="menu-open" />
        <span className="all-navigator"><i className="fas fa-bars"></i> <span>All category</span> <i className="fas fa-angle-down"></i>
          <i className="fas fa-angle-up"></i>
        </span>

        <ul className="all-category-list">
          <li className="all-category-list-item"><a href="https://www.cupcom.com.br/" className="all-category-list-link">Smartphones<i className="fas fa-angle-right"></i></a>
            <div className="category-second-list">
              <ul className="category-second-list-ul">
                <li className="category-second-item"><a href="https://www.cupcom.com.br/">Iphone 10</a></li>
                <li className="category-second-item"><a href="https://www.cupcom.com.br/">Galaxy Note 10</a></li>
                <li className="category-second-item"><a href="https://www.cupcom.com.br/">Motorola One </a></li>
                <li className="category-second-item"><a href="https://www.cupcom.com.br/">Galaxy A80 </a></li>
                <li className="category-second-item"><a href="https://www.cupcom.com.br/">Galaxy M </a></li>
                <li className="category-second-item"><a href="https://www.cupcom.com.br/">Huaway P30 </a></li>
              </ul>

              <div className="img-product-menu"><img src="https://i.ibb.co/Vvndkmy/banner.jpg" /></div>
              </div>
          </li>
          <li className="all-category-list-item"><a href="https://www.cupcom.com.br/" className="all-category-list-link">Furniture <i className="fas fa-angle-right"></i></a></li>
          <li className="all-category-list-item"><a href="https://www.cupcom.com.br/" className="all-category-list-link">Toys<i className="fas fa-angle-right"></i></a></li>
          <li className="all-category-list-item"><a href="https://www.cupcom.com.br/" className="all-category-list-link">Computing<i className="fas fa-angle-right"></i></a></li>
          <li className="all-category-list-item"><a href="https://www.cupcom.com.br/" className="all-category-list-link">Games<i className="fas fa-angle-right"></i></a></li>
          <li className="all-category-list-item"><a href="" className="all-category-list-link">Automotive<i className="fas fa-angle-right"></i></a></li>

        </ul>
      </label>

    </nav>
    <nav className="featured-category">
      <ul className="nav-row">
        <li className="nav-row-list"><a href="https://www.cupcom.com.br/" className="nav-row-list-link">Smartphones</a></li>
        <li className="nav-row-list"><a href="https://www.cupcom.com.br/" className="nav-row-list-link">furniture</a></li>
        <li className="nav-row-list"><a href="https://www.cupcom.com.br/" className="nav-row-list-link">Toys</a></li>
        <li className="nav-row-list"><a href="https://www.cupcom.com.br/" className="nav-row-list-link">Computing</a></li>
        <li className="nav-row-list"><a href="https://www.cupcom.com.br/" className="nav-row-list-link">Games</a></li>
        <li className="nav-row-list"><a href="https://www.cupcom.com.br/" className="nav-row-list-link">Automotive</a></li>
      </ul>
    </nav>
  </div>
  </header>

   {/* <div style={{display: "block", margin: "0 auto", textAlign: "center", marginTop: "50px"}}>
      <script src="https://apis.google.com/js/platform.js"></script>

<div className="g-ytsubscribe" data-channelid="UCpXTlrDWlpN46PKieJ-FcPw" data-layout="full" data-count="hidden"></div>
   </div>

<div style={{margin: '50px 0', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%'}}>
  
    <a style={{display: 'block', textAlign:  'center', color: '#555', textDecoration: 'none', marginRight: '15px' }} href="https://www.cupcom.com.br/" target="_blank"><i className="fas fa-home" style={{color: '#1da1f2', marginRight: '5px'}}></i>More compoments: cupcom.com.br</a>

</div> */}
    </>
  )
}

export default HeaderNav