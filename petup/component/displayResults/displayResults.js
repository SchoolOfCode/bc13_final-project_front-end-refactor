import Image from 'next/image' // to use Image component with URL, it needs to be configured in package.json

//refactoring this script now
//data looks like this:
// {
//   user_id: 25,
//   fullname: 'Sunni Wilkerson',
//   nickname: 'Kenneth',
//   email: 'donitahoff@hotmail.com',
//   phone_number: '+231-4545-657-749',
//   profile_image: 'https://xsgames.co/randomusers/assets/avatars/female/20.jpg',
//   address_region: 'London',
//   address_city: 'Westminster',
//   address_postcode: 'WC2R 2AB',
//   latitude: 51.509981,
//   longitude: -0.117073,
//   service_id: 48,
//   sitter_id: 25,
//   tagline: 'florida notebook attitudes postings fighter grant minneapolis evolution ended dimensions',
//   summary: 'moldova violin metric papers fleet runtime landscape accessed cal percent calculators anne tricks right p by voip friendly reported assets thu dennis believe accomplish affect mug compressed democratic measure dinner',
//   pet_type: '1',
//   service_type: '1',
//   price: 22.08,
//   how_many_pets: 4,
//   pet_size: '2'
// }

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
}) {
  // const {id, name, nickname, imageURL, tagline, address, phone, rate} = props;  // something wrong with this object destructing

  return (
    <>
      <div className="display-card">
        {/*to refactor later to use Image component from Next.js instead of img tag */}

        <img
          priority
          src={profile_image}
          className="profile-img"
          // height= {144}
          // width= {144}
          alt="profile picture"
        />
        <div className='main-taglines'>
          <h1>{nickname}</h1>
          <h2>"{tagline}"</h2>
          <p>{email}</p>
          <h3>{address_region},{address_city}</h3>
        </div>
        <div className='rate'>
          {/* <p>{address.street}, {address.city}</p> */}
          <p>From</p>
          <h1>£{price}</h1>
          <p>per night</p>
      </div>
      </div>
    </>
  );
}