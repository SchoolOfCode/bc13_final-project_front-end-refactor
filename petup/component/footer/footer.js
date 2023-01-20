import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const Footer = () => {
    return (
        <div className= "margin-div-footer">
        <footer>
            <Link href='/contact' style={{textDecoration: 'none'}}>
                <h2>Contact us</h2>
            </Link>

            <Image src="/petbrb-high-resolution-logo-white-on-transparent-background.png" 
            width={100} 
            height={100}/>
            
            <h2>Copyright @ SoC</h2>
        </footer>
        </div>
    )
}

export default Footer