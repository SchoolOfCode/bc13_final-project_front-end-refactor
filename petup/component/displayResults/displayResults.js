import Image from 'next/image' // to use Image component with URL, it needs to be configured in package.json

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

//note on pet_service :
// - pet_type  = {1 : 'cat', 2 : 'dot', 3: 'others'}
// - service_type = {1: 'pet hosting', 2: 'house sitting', 3: 'dog walking', 4: 'additional services' }
// - pet_size = {1: 'small', 2: 'medium', 3:'large'}

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