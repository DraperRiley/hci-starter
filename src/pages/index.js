import * as React from "react"
import "../Styling/sso.css"
import "@fontsource/open-sans/300.css"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

//this is the SSO sign on from OU
const IndexPage = () => (

  <div class="sso-component">
    <div class="sign-in-container">
      <div class="sign-in">
          <div class="sign-in__block">
            <div class="sign-in__box">
              <div class="box__logo">
                <StaticImage class="box__logo__img" src="../images/logo.png" alt="OU" />
              </div>

              <div class="box__title">
                <h4 class="box__title__heading">One account. One university.</h4>
                <span class="box__title__text">Sign in to One using your OU Email or OUNetID.</span>
              </div>

              <form id="loginForm" name="boxForm" action="localhost:8000" class="box__form" method="POST" novalidate>
                <div id="labelEmailFocusActive" class="box__form__label box__form__label--email box__form__label--focus">OU Email or OUNetID</div>
                <div id="labelEmailInvalid" class="box__form__label box__form__label--email box__form__label--invalid">Oops! OU Email or OUNetID is required.</div>
                <div id="labelPasswordFocusActive" class="box__form__label box__form__label--password box__form__label--focus">Password</div>
                <div id="labelPasswordInvalid" class="box__form__label box__form__label--password box__form__label--invalid">Oops! Password is required.</div>
                <input id="ou-email" name="pf.username" class="textbox textbox--gray" type="text" placeholder="OU Email or OUNetID" title="Email" required autofocus disabled/>
                <input id="ou-password" name="pf.pass" class="textbox textbox--gray" type="password" placeholder="Password" title="Password" required disabled/>
                <Link class="button button--blue" to="/page-2/" type="button" value="Sign In" title="submit" >Sign In</Link>	
              </form>

              <div class="box__forgot">
                <a class="box__link">Forgot password?</a>
              </div>
              <div class="box__forgot__id">
                <a class="box__link">Forgot OUNetID?</a>
              </div>
            </div>
            <div class="box__register">
              <a class="box__register_link">New to OU? Set up your OU account.</a>
            </div>
          </div>
          <div class="help">
            Having trouble signing in? Let us help!
            <a class="help__link" href="https://needhelp.ou.edu" target="_blank">needhelp.ou.edu</a>
          </div>
        </div>
      </div>
    </div>

)

export default IndexPage
