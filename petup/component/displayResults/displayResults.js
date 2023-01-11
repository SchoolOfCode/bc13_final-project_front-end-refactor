import Image from 'next/image' // to use Image component with URL, it needs to be configured in package.json

export function DisplayResults ({id, name, nickname, imageURL, tagline, address, phone, rate }) {
// const {id, name, nickname, imageURL, tagline, address, phone, rate} = props;  // something wrong with this object destructing
    
return(
        <div className = "display-card">
        {/*to refactor later to use Image component from Next.js instead of img tag */}
            <img  
                        priority
                        src = {imageURL}
                        className = "profile-img"
                        height= {144}
                        width= {144}
                        alt = "profile picture"
            />
            <h1>{nickname}</h1>
            <h2>"{tagline}"</h2>
            {/* <p>{address.street}, {address.city}</p> */}
            <h1>GBP{rate} per hour</h1>

        </div>
    )
}