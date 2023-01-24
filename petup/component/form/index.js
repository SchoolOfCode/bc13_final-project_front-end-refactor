import { useFormik, Formik } from 'formik';
import { useState } from 'react';

// async function setUserFormData(context) {

//   const { fullName, tagline, address_region, address_city, address_postcode, sitting_services_enabled, petTypes, petHosting, dogWalking, houseSitting } = context;

//   // atm we do not have any phone number data
//   const phoneNumber = '';
//   // WE NEED THE PROFILE IMAGE text link here
//   // LAT AND LONG based on the value retrieved from the API

//   const setUserData = await setUserData(
//     fullname, 
//     nickname, 
//     email,
//     phoneNumber, 
//     profile_image,
//     tagline,
//     address_region, 
//     address_city, 
//     address_postcode, 
//     latitude, 
//     longitude,
//     sitting_services_enabled,
//     dogWalking.enabled,
//     houseSitting.enabled,
//     petHosting.enabled,
//     petHosting.rate,
//     houseSitting.rate,
//     dogWalking.rate,
//     petTypes.dog,
//     petTypes.cat,
//     petTypes.other);
// }

// validate address_postcode with nominatim api
// 
function Form() {
  
  const [existingUser, setExistingUser] = useState(true);
  const [userEmail, setUserEmail] = useState('');
  const [userImage, setUserImage] = useState(''); 
    /** this hook takes in an object as its parameter
     * this will then allow us to get back an object which contains a variety of props and methods we can use with out form
     */
    const formik = useFormik({
      /* 
      sitting_services_enabled: if true then the user will show up on searches
      petTypes: an object with boolean fields for each type of pet which signifies which pets the user wants to be a sitter for
      petHosting: if true then the user will show up on the filter for petHosting
      houseSitting: if true then the user will show up on the filter for houseSitting
      dogWalking: if true then the user will show up on the filter for dogWalking
       */  
      initialValues: {
            fullname: '',
            nickname: '',
            email: userEmail,
            tagline: '',
            profile_image: userImage,
            address_region: '',
            address_city: '',
            address_postcode: '',
            latitude: '',
            longitude: '',
            sitting_services_enabled: false,
            dog_walking: false,
            house_sitting: false,
            pet_hosting: false,
            pet_hosting_rate: 0,
            house_sitting_rate: 0,
            dog_walking_rate: 0,
            pet_dog: false,
            pet_cat: false,
            pet_other: false
        }, 
        // takes in the values object and creates a function of the devs choice
        // here we can use next query to submit values into database and then refresh the page with a get request to retrieve user data
        onSubmit: async (values, {setSubmitting}) => {
          console.log('values', values);
          setSubmitting(true);
          const response = await fetch('http://localhost:3000/api/profile', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: values,
        });
        console.log('response', response)  
        setSubmitting(false);
        },

        // validate: (values) => {
        //   let errors = {};
              // if (values.tagline is longer than 140 characters)
        //   if (values.sitting_services_enabled === true) {
        //     errors.address_postcode = 'Required';
        //     errors.address_city = 'Required';
        //     errors.address_region = 'Required';
        //     errors.fullName = 'Required';
        //     errors.lastName = 'Required';
        //     errors.tagline = 'Required';
        //     if (values.petHosting.enabled === false && values.dogWalking.enabled === false && values.houseSitting.enabled === false ) {
        //       errors.petHosting = 'Required';
        //       errors.dogWalking = 'Required';
        //       errors.houseSitting = 'Required';
        //     }
        //     if (values.petTypes.dog === false && values.petTypes.cat === false && values.petTypes.other === false) {
        //       // errors.petTypes.dog = 'Required';
        //       // errors.petTypes.cat = 'Required';
        //       // errors.petTypes.other = 'Required'
        //     }
        //     if (values.petHosting.enabled === true) {
        //       errors.petHosting.rate = 'Required';
        //     }
        //     if (values.dogWalking.enabled === true) {
        //       errors.dogWalking.rate = 'Required';
        //       // errors.petTypes.dog = 'Required';
        //     }
        //     if (values.houseSitting.enabled === true) {
        //       errors.houseSitting.rate = 'Required';
        //     }
        //   }
        //   return errors;
        // } 
    })

    return (
      <Formik>
        <form onSubmit={formik.handleSubmit}>
          <div className='userName'>
            <label htmlFor='fullName'>First Name</label>
            <input type='text' id='fullName' name='fullName' onChange={formik.handleChange} value={formik.values.fullName}/>
          </div>

          <div className='tagline'>
            <label htmlFor='tagline'>Bio</label>
            <input type='text' id='tagline' name='tagline' maxLength={140} onChange={formik.handleChange} value={formik.values.tagline}/>
          </div>

          <div className='address'>
            <label htmlFor='address_city'>City</label>
            <input type='text' id='address_city' name='address_city' onChange={formik.handleChange} value={formik.values.address_city}/>

            <label htmlFor='address_region'>Region</label>
            <input type='text' id='address_region' name='address_region' onChange={formik.handleChange} value={formik.values.address_region}/>

            <label htmlFor='address_postcode'>Postcode</label>
            <input type='text' id='address_postcode' name='address_postcode' onChange={formik.handleChange} value={formik.values.address_postcode}/>
          </div>

          <div className='sitting_services_enabled'>
            <h5>Do you wish to enable sitting services?</h5>
            <label htmlFor='sitting_services_enabled'>
              <input type='checkbox' name='sitting_services_enabled' value={formik.values.sitting_services_enabled} onClick={formik.handleChange} />
              { formik.values.sitting_services_enabled ? 'Sitting services are enabled and you will show up on other users searches' : 'Your sitting services are not enabled' }
            </label>
          </div>

          <div className='petTypes'>
          <label htmlFor='petTypes'>What type of pets would you like to host?</label>
            <label htmlFor='petTypeDog'>
              <input type='checkbox' name='petTypeDog' value={formik.values.pet_dog} onClick={formik.handleChange} />
              Dog
            </label>
            <label htmlFor='petTypeCat'>
              <input type='checkbox' name='petTypeCat' value={formik.values.pet_cat} onClick={formik.handleChange} />
              Cat
            </label>
            <label htmlFor='petTypeOther'>
              <input type='checkbox' name='petTypeOther' value={formik.values.pet_other} onClick={formik.handleChange} />
              Other
            </label>
          </div>
          
          <div className='services'>
            <h5>What services would you like to offer?</h5>

            <div className='petHosting'>
              <label htmlFor='petHosting'>
                <input type='checkbox' name='petHosting' value={formik.values.pet_hosting} onClick={formik.handleChange}/>
                Pet Hosting
              </label>
              <label htmlFor='petHostingRate'>
                <input type='number' name='petHostingRate' value={formik.values.pet_hosting_rate} onChange={formik.handleChange}/>
                for how much? {'(per night)'}
              </label>
            </div>

            <div className='houseSitting'>
              <label htmlFor='houseSitting'>
                <input type='checkbox' name='houseSitting' value={formik.values.house_sitting} onClick={formik.handleChange}/>
                House Sitting
              </label>
              <label htmlFor='houseSittingRate'>
                <input type='number' name='houseSittingRate' value={formik.values.house_sitting_rate} onChange={formik.handleChange}/>
                for how much? {'(per night)'}
              </label>
            </div>

            <div className='dogWalking'>
              <label htmlFor='dogWalking'>
                <input type='checkbox' name='dogWalking' value={formik.values.dog_walking} onClick={formik.handleChange}/>
                Dog Walking
              </label>
              <label htmlFor='dogWalkingRate'>
                <input type='number' name='dogWalkingRate' value={formik.values.dog_walking_rate} onChange={formik.handleChange}/>
                for how much? {'(per hour)'}
              </label>
            </div>
          </div>
          
          <button type='submit' className='submitButton'>
            Submit
          </button>
        </form>
      </Formik>
  )
}

export default Form;
