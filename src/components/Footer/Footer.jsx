import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <section className="f-wrapper">
        <div className="paddings innerWidth flexCenter f-container">

            {/* Left Side */}
            <div className="flexColStart f-left">
                <img src="./logo2.png" alt="" width={120}/>
                <span>
                    Visi kami adalah membuat semua orang <br />
                    memiliki tempat tinggal terbaik untuk mereka.
                </span>
            </div>

            <div className="flexColStart f-right">
                <span className='primaryText'>Informasi</span>
                <span className='secondaryText'>Jakarta Pusat, LT 40, Indonesia</span>

                <div className="flexCenter f-menu">
                    <span>Properti</span>
                    <span>Jasa</span>
                    <span>Produk</span>
                    <span>Tentang Kami</span>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer