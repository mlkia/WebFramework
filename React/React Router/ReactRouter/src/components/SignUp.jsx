import { useState } from 'react'
import '../App.css'

const SignUp = () => {
	const [email, setEmail] = useState ('')
	const [password, setPassword] = useState ('')
	const [passwordTouched, setpasswordTouched] = useState(false)
	const [emailTouched, setEmailTouched] = useState(false)

	let emailIsValid = email.trim().length > 0 //The emailIsValid is boolean variable, It's true when it has some text or False if it has not.
	let passwordIsValid = password.trim().length > 0 //The passwordIsValid is bollean variable, It's true when it has some text or False if it has not.
	let emailMessage = ''
	let passMessage = ''
	let emailCss = ''
	let passCss = ''

	if (emailTouched){
		emailCss = emailIsValid ? 'valid' : 'invalid' //The emailCss is string variable. Check if emailIsValid is True or False, if true emailCss takes 'valid' or if false takes invalid.
		emailMessage = emailIsValid ? '' : 'Email field can not be empty' //The theMessage is string variable. Check emailIsValid is True or False, if true theMessage takes '' or if false theMessage takes the txt 'Field can not be empty'. 
	}
	if (passwordTouched){
		passCss = passwordIsValid ? 'valid' : 'invalid' 
		passMessage = passwordIsValid ? '' : 'Password field can not be empty' 
	}

	return (
		<div className="form">
			<section><br />
				<label> It's easy to sign up</label><br />
				<input className={emailCss} type="email" placeholder="E-Mail"
					onChange={event => setEmail(event.target.value)}
					onBlur={() => setEmailTouched(true)}
				 />
				<p className="message"> {emailMessage} </p> <br />

				<input className={passCss} type="password" placeholder="Password"
					onChange={event => setPassword(event.target.value)}
					onBlur={() => setpasswordTouched(true)}
				/>
				<p className="message"> {passMessage} </p> <br />
			</section>
		</div>
	)
} 

export default SignUp