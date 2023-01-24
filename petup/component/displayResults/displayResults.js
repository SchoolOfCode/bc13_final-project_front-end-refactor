import Image from 'next/image' // to use Image component with URL, it needs to be configured in package.json

//sample of new data: 
// user_id: 23,
//     fullname: 'Malisa Roth',
//     nickname: 'Lela',
//     email: 'eloisa-miles@yahoo.com',
//     phone_number: '+58-5410-933-353',
//     tagline: 'thread hypothesis km tips dip other muslim memory series grip',
//     profile_image: 'https://xsgames.co/randomusers/assets/avatars/female/34.jpg',
//     address_region: 'London',
//     address_city: 'Westminster',
//     address_postcode: 'WC2E 7AE',
//     latitude: 51.510077,
//     longitude: -0.118708,
//     sitting_services_enabled: true,
//     dog_walking: true,
//     house_sitting: true,
//     pet_hosting: true,
//     pet_hosting_rate: 34,
//     house_sitting_rate: 49,
//     dog_walking_rate: 25,
//     pet_dog: true,
//     pet_cat: true,
//     pet_other: true

export function DisplayResults({
  fullname,
  nickname,
  email,
  phone_number,
  profile_image,
  tagline,
  address_region,
  address_city,
  price,
  handleClick
}) {


  return (
    <>
      <button className="display-card" onClick={() => handleClick()}> 
        {/*to refactor later to use Image component from Next.js instead of img tag */}
      <div className="display-card">


        <img
          priority
          src={profile_image}
          className="profile-img"
          // height= {144}
          // width= {144}
          alt="profile-picture"
        />
        <div className="main-taglines">
          <h1>{nickname}</h1>
          <h2>"{tagline}"</h2>
          <h3>
            {address_region},{address_city}
          </h3>
          <div className="email-and-icon-div">
            
            <Image src="/icons8-secured-letter-50.png" width="25" height="25" alt= "email-icon"/>
              <p>{email}</p>
          </div>
        </div>
        <div className="rate">
          {/* <p>{address.street}, {address.city}</p> */}
          <p>From</p>
          <h1>£{price}</h1>
          <p>per night</p>
      </div>
      </div>
      </button>
    </>
  );
}