import React from 'react'

const Radio = () => {
    return (
        <>
          <div class="container" >
		<form class="form cf" name='form'>
			<section class="plan cf">
				{/* <label for='form'>What type of pet</label> */}
				<input type="radio" name="radio1" id="free" value="free" /><label class="free-label four col" for="free">Free</label>
				<input type="radio" name="radio1" id="basic" value="basic" checked /><label class="basic-label four col" for="basic">Basic</label>
				<input type="radio" name="radio1" id="premium" value="premium" /><label class="premium-label four col" for="premium">Premium</label>
			</section>	
		</form>
	</div>
        </>
    )
}

export default Radio