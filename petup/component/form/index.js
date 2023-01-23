import { useFormik } from 'formik';

function Form() {
    
    /** this hook takes in an object as its parameter
     * this will then allow us to get back an object which contains a variety of props and methods we can use with out form
     */
    const formik = useFormik({
      /* 
      becomeSitter: if true then the user will show up on searches
      petTypes: an object with boolean fields for each type of pet which signifies which pets the user wants to be a sitter for
      petHosting: if true then the user will show up on the filter for petHosting
      houseSitting: if true then the user will show up on the filter for houseSitting
      dogWalking: if true then the user will show up on the filter for dogWalking
       */  
      initialValues: {
            firstName: '',
            lastName: '',
            bio: '',
            streetName: '',
            city: '',
            postcode: '',
            becomeSitter: false,
            petTypes: {
              dog: false,
              cat: false,
              other: false
            },
            petHosting: {
              enabled: false,
              rate: 0
            },
            houseSitting: {
              enabled: false,
              rate: 0
            },
            dogWalking: {
              enabled: false,
              rate: 0
            }
        }, 
        // takes in the values object and creates a function of the devs choice
        // here we can use next query to submit values into database and then refresh the page with a get request to retrieve user data
        onSubmit: values => {
          console.log('Form data', values);
        },

        validate: values => {
          let errors = {};
          
          if (values.becomeSitter === true) {
            errors.postcode = 'Required';
            errors.city = 'Required';
            errors.streetName = 'Required';
            errors.firstName = 'Required';
            errors.lastName = 'Required';
            errors.bio = 'Required';
            if (values.petHosting.enabled === false && values.dogWalking.enabled === false && values.houseSitting.enabled === false ) {
              errors.petHosting = 'Required';
              errors.dogWalking = 'Required';
              errors.houseSitting = 'Required';
            }
            if (values.petTypes.dog === false && values.petTypes.cat === false && values.petTypes.other === false) {
              errors.petTypes.dog = 'Required';
              errors.petTypes.cat = 'Required';
              errors.petTypes.other = 'Required';
            }
            if (values.petHosting.enabled === true) {
              errors.petHosting.rate = 'Required';
            }
            if (values.dogWalking.enabled === true) {
              errors.dogWalking.rate = 'Required';
              errors.petTypes.dog = 'Required';
            }
            if (values.houseSitting.enabled === true) {
              errors.houseSitting.rate = 'Required';
            }
          }
          return errors;
        } 
    })

    return (
      <form onSubmit={formik.handleSubmit}>
        <div className='userName'>
          <label htmlFor='firstName'>First Name</label>
          <input type='text' id='firstName' name='firstName' onChange={formik.handleChange} value={formik.values.firstName}/>
        
          <label htmlFor='lastName'>Last Name</label>
          <input type='text' id='lastName' name='lastName' onChange={formik.handleChange} value={formik.values.lastName} />
        </div>

        <div className='bio'>
          <label htmlFor='bio'>Bio</label>
          <input type='text' id='bio' name='bio' onChange={formik.handleChange} value={formik.values.bio}/>
        </div>

        <div className='address'>
          <label htmlFor='streetName'>Street Name</label>
          <input type='text' id='streetName' name='streetName' onChange={formik.handleChange} value={formik.values.streetName}/>

          <label htmlFor='city'>City</label>
          <input type='text' id='city' name='city' onChange={formik.handleChange} value={formik.values.city}/>

          <label htmlFor='postcode'>Postcode</label>
          <input type='text' id='postcode' name='postcode' onChange={formik.handleChange} value={formik.values.postcode}/>
        </div>

        <div className='becomeSitter'>
          <h5>Do you wish to enable sitting services?</h5>
          <label htmlFor='becomeSitter'>
            <input type='checkbox' name='becomeSitter' value={formik.values.becomeSitter} onClick={formik.handleChange} />
            { formik.values.becomeSitter ? 'Sitting services are enabled and you will show up on other users searches' : 'Your sitting services are not enabled' }
          </label>
        </div>

        <div className='petTypes'>
        <label htmlFor='petTypes'>What type of pets would you like to host?</label>
          <label htmlFor='petTypeDog'>
            <input type='checkbox' name='petTypeDog' value={formik.values.petTypes.dog} onClick={formik.handleChange} />
            Dog
          </label>
          <label htmlFor='petTypeCat'>
            <input type='checkbox' name='petTypeCat' value={formik.values.petTypes.cat} onClick={formik.handleChange} />
            Cat
          </label>
          <label htmlFor='petTypeOther'>
            <input type='checkbox' name='petTypeOther' value={formik.values.petTypes.other} onClick={formik.handleChange} />
            Other
          </label>
        </div>
        
        <div className='services'>
          <h5>What services would you like to offer?</h5>

          <div className='petHosting'>
            <label htmlFor='petHosting'>
              <input type='checkbox' name='petHosting' value={formik.values.petHosting.enabled} onClick={formik.handleChange}/>
              Pet Hosting
            </label>
            <label htmlFor='petHostingRate'>
              <input type='number' name='petHostingRate' value={formik.values.petHosting.rate} onChange={formik.handleChange}/>
              for how much? {'(per night)'}
            </label>
          </div>

          <div className='houseSitting'>
            <label htmlFor='houseSitting'>
              <input type='checkbox' name='houseSitting' value={formik.values.houseSitting.enabled} onClick={formik.handleChange}/>
              House Sitting
            </label>
            <label htmlFor='houseSittingRate'>
              <input type='number' name='houseSittingRate' value={formik.values.houseSitting.rate} onChange={formik.handleChange}/>
              for how much? {'(per night)'}
            </label>
          </div>

          <div className='dogWalking'>
            <label htmlFor='dogWalking'>
              <input type='checkbox' name='dogWalking' value={formik.values.dogWalking.enabled} onClick={formik.handleChange}/>
              Dog Walking
            </label>
            <label htmlFor='dogWalkingRate'>
              <input type='number' name='dogWalkingRate' value={formik.values.dogWalking.rate} onChange={formik.handleChange}/>
              for how much? {'(per hour)'}
            </label>
          </div>
        </div>
        
        <button type='submit' className='submitButton'>
          Submit
        </button>
      </form>
  )
}

export default Form;
