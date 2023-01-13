import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <footer>
            <Link href='/contact' style={{textDecoration: 'none'}}>
                <h2>Contact us</h2>
            </Link>
            <h2>PetBrB</h2>
            <h2>Copyright @ SoC</h2>
        </footer>
    )
}

export default Footer