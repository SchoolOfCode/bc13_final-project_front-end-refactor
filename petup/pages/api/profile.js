import { setUserData } from '../../lib/search.js'

export default async function handler(req, res) {
    const { fullname, nickname, email, phone_number, tagline, profile_image, address_region, address_city, address_postcode, latitude, longitude, sitting_services_enabled, dog_walking, house_sitting, pet_hosting, pet_hosting_rate, house_sitting_rate, dog_walking_rate, pet_dog, pet_cat,pet_other} = req.body;
   
    const result = await setUserData(fullname,
        nickname,
        email,
        phone_number,
        tagline,
        profile_image,
        address_region,
        address_city,
        address_postcode,
        latitude,
        longitude,
        sitting_services_enabled,
  dog_walking,
  house_sitting,
  pet_hosting,
  pet_hosting_rate,
  house_sitting_rate,
  dog_walking_rate,
  pet_dog,
  pet_cat,
  pet_other);

  
    
    res.status(200).json({ success: true, payload: result })
  }