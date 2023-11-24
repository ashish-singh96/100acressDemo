import React from 'react'
import logo from "../assets/images/Logo Gold.svg";
import building from "../assets/images/building.jpg";
import homeloan from "../assets/images/image-1.png";
const DemoPage = () => {
    return (
        <>
        <header className="header">
            <div className="container">
                <div className="brand">
                    <img src={logo} alt="Golf island Logo" />
                </div>
                <ul className="nav">
                    <button className="close">
                        <i className="fa-solid fa-xmark"></i>
                    </button>
                    <li className="item">
                        <a href="#overview" className="link active">Overview</a>
                    </li>
                    <li className="item">
                        <a href="#location" className="link">location</a>
                    </li>
                    <li className="item">
                        <a href="#experience" className="link">Experience</a>
                    </li>
                    <li className="item">
                        <a href="#floorplan" className="link">Floor Plan</a>
                    </li>
                    <li className="item">
                        <a href="#amenities" className="link">Amenities</a>
                    </li>
                    <li className="item">
                        <a href="#about" className="link">About</a>
                    </li>
                </ul>
                <div className="header-btn-wrp">
                    <a href="tel:+919800980022" className="btn">+91 9800 9800 22</a>
                </div>
                <div className="toggle">
                    <button className="btn">
                        <i className="fa-solid fa-bars"></i>
                    </button>
                </div>
            </div>
        </header>
        <section className="banar">
        <div className="container">
          <div className="content wow tpfadeUp" data-wow-duration="0.7s" data-wow-delay=".5s">
            <h2 className="title-lg" style={{ textTransform: "uppercase" }}>EXPERIENCE DELHI&apos;S FIRST AND ONLY</h2>
            <h2 className="title-lg-1" style={{ textTransform: "uppercase" }}>GOLF COURSE FACING APARTMENTS</h2>
            <div className="banar-btns">
              <a className="btn popupbtn" id="popup">Make an lnquiry <i className="fa-solid fa-arrow-right"></i></a>
            </div>
          </div>
        </div>
      </section>


      <section className="about">
        <div className="container">
          <div className="img">
            <img src={building} alt="Golf island - Sec-19B Dwarka, New Delhi" />
          </div>
          <div className="content wow tpfadeUp mt30" data-wow-duration="0.7s" data-wow-delay=".5s" id="overview">

            <h1 className="title">Golf island - Sec-19B Dwarka, New Delhi
            </h1>
            <h2>YOUR DREAM HOME RIGHT ACROSS AN ICONIC GOLF COURSE</h2>
            <p className="mt30">
              The latest addition to Delhi&apos;s golfing, this magnificent 18-hole golf course is
              set to grace the verdant lands of Dwarka. This work in progress golf course is the
              longest in the country, stretching over a mammoth of 7366 yards.
            </p>

            <p className="mt10">
              Under the initiatives & supervision of the Delhi Development Authority, this golf course
              is being meticulously developed by the consortium of Pacific Coast Design, New Millennium,
              Rajinder Kumar Architects & Global Golf India. This iconic golf course will also cater to
              numerous community activities, spread all over a Clubhouse admeasuring over 8.7 Acres.
            </p>

            <div className="plan-wrp wow tpfadeUp" data-wow-duration="0.7s" data-wow-delay=".5s">
              <div className="plan">
                <div className="plan-top">
                  <div className="plan-top-left">
                    <strong>4 BHK + Powder + S</strong>
                    <span>3120 - 3310 Sq. Ft. </span>
                  </div>
                </div>
                <div className="plan-bottom">
                  <strong>Booking Amount ₹ 26 Lakh / Flexible Payment Plans Available </strong>
                </div>
              </div>
              <div className="partner">
                <strong>Home Loan Approved by</strong>
                <div className="images">
                  <img src={homeloan} alt="Home Loan Approved by Axis Bank" />

                </div>
              </div>
            </div>
            <div className="about-btns wow tpfadeUp" data-wow-duration="0.7s" data-wow-delay=".5s">
              <a className="btn popupbtn" >Schedule Site Visit <i className="fa-solid fa-arrow-right"></i></a>

              <a href="tel:+919800980022" className="btn-white">or call +91 9800 9800 22 </a>
            </div>
          </div>
        </div>
      </section>
      </>
    )
}

export default DemoPage