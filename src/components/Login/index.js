import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import {AiFillEye, AiFillEyeInvisible} from 'react-icons/ai'

import './index.css'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showSubmitError: false,
    errorMsg: '',
    isPasswordVisible: false,
  }

  componentDidMount() {
    document.title = 'Project by Vivek'
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
    })
    history.replace('/')
  }

  onSubmitFailure = errorMessage => {
    // let errorMessage
    // if (errorMsg === "username and password didn't match") {
    //   errorMessage = 'Please enter a valid Username & Password'
    // } else if (errorMsg === 'invalid username') {
    //   errorMessage = 'Invalid Username'
    // }
    this.setState({errorMsg: errorMessage, showSubmitError: true})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state

    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  onClickShow = () => {
    this.setState({
      isPasswordVisible: true,
    })
  }

  onClickHide = () => {
    this.setState({
      isPasswordVisible: false,
    })
  }

  renderPasswordField = () => {
    const {password, isPasswordVisible} = this.state
    return (
      <>
        <label className="input-label" htmlFor="password">
          PASSWORD
        </label>
        <div className="password-container">
          <input
            type={isPasswordVisible ? 'text' : 'password'}
            id="password"
            className="password-input-field"
            value={password}
            onChange={this.onChangePassword}
          />
          {isPasswordVisible ? (
            <button
              type="button"
              className="eye-button"
              onClick={this.onClickHide}
            >
              <AiFillEyeInvisible className="eye" />
            </button>
          ) : (
            <button
              type="button"
              className="eye-button"
              onClick={this.onClickShow}
            >
              <AiFillEye className="eye" />
            </button>
          )}
        </div>
      </>
    )
  }

  renderUsernameField = () => {
    const {username} = this.state
    return (
      <>
        <label className="input-label" htmlFor="username">
          USERNAME
        </label>
        <input
          type="text"
          id="username"
          className="username-input-field"
          value={username}
          onChange={this.onChangeUsername}
        />
      </>
    )
  }

  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    const {showSubmitError, errorMsg} = this.state
    return (
      <div className="login-container">
        <div className="login-form-container">
          <form className="form-container" onSubmit={this.submitForm}>
            <img
              className="small-device-logo"
              src="https://res.cloudinary.com/aishwaryaproject/image/upload/v1636361249/TastyKitchens/Rectangle_1457_xcvbrc.png"
              alt="website login"
            />
            <img
              className="large-device-logo"
              src="https://res.cloudinary.com/aishwaryaproject/image/upload/v1636352771/TastyKitchens/Vector_2_vawqif.png"
              alt="website logo"
            />
            <h1 className="login-heading-ele">Tasty Kitchens</h1>

            <h1 className="login-text-heading">Login</h1>
            <div className="input-container">{this.renderUsernameField()}</div>
            <div className="input-container">{this.renderPasswordField()}</div>
            <button type="submit" className="login-button">
              Login
            </button>
            {showSubmitError && <p className="error-message">{errorMsg}</p>}
          </form>
        </div>

        <div className="image-container">
          <img
            className="welcome-image"
            src="https://res.cloudinary.com/aishwaryaproject/image/upload/v1636352518/TastyKitchens/Rectangle_1456_s5hxc0.png"
            alt="web"
          />
        </div>
      </div>
    )
  }
}

export default Login
