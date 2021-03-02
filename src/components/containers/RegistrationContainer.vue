<template>
    <div class="success" v-if="success">
        <successful-registration-container></successful-registration-container>
    </div>
    <div class="registration">
        <div class="logo">
            <h1>Mechanical</h1>
        </div>
        <form action="">
            <h2>Personal and Contact Information</h2>
            <div class="input-group">
                <div class="input">
                    <label for="first-name"><span class="required-field">*</span>First Name:</label>
                    <input type="text" id="first-name" v-model="firstName" :class="{invalid: invalidFirstName}" required>
                </div>
                <div class="input">
                    <label for="second-name"><span class="required-field">*</span>Second Name:</label>
                    <input type="text" id="second-name" v-model="secondName" :class="{invalid: invalidSecondName}" required>
                </div>
            </div>
            <div class="input-group">
                <div class="input">
                    <label for="email"><span class="required-field">*</span>Email:</label>
                    <p v-if="emailTaken" class="taken">This email is already taken</p>
                    <input type="email" id="email" v-model="userEmail" :class="{invalid: invalidUserEmail}" required @focus=" invalidEmail = false, emailTaken = false">
                </div>
                <div class="input">
                    <label for="username"><span class="required-field">*</span>Username:</label>
                    <p v-if="userNameTaken" class="taken">This username is already taken</p>
                    <input type="text" id="username" v-model="userName" :class="{invalid: invalidUserName}" @focus="invalidUserName = false, userNameTaken = false" required>
                </div>
            </div>
            <div class="input-group">
                <div class="input">
                    <label for="mobile"><span class="required-field">*</span>Mobile Number:</label>
                    <input type="text" placeholder="+country-code telephone number" v-model="userMobile" :class="{invalid: invalidUserMobile}" @focus="invalidUserMobile = false" required>
                </div>
                <div class="input">
                    <label for="phone">Phone Number:</label>
                    <input type="text" placeholder="+country-code telephone number" v-model="userPhone">
                </div>
            </div>
            <h2>Address</h2>
            <div class="input-group">
                <div class="input">
                    <label for="address1"><span class="required-field">*</span>Address Line 1:</label>
                    <input type="text" v-model="addressLine1" :class="{invalid: invalidAddress}" required>
                </div>
                <div class="input">
                    <label for="address2">Address Line 2</label>
                    <input type="text" v-model="addressLine2">
                </div>
            </div>
            <div class="input-group">
                <div class="input">
                    <label for="city"><span class="required-field">*</span>City:</label>
                    <input type="text" v-model="userCity" :class="{invalid: invalidAddress}" required>
                </div>
                <div class="input">
                    <label for="state">State / County:</label>
                    <input type="text" v-model="userState">
                </div>
            </div>
            <div class="input-group">
                <div class="input">
                    <label for="country"><span class="required-field">*</span>Country:</label>
                    <select name="country" id="country" v-model="userCountry" :class="{invalid: invalidCountry}"  required>
                        <option value="none"></option>
                        <option v-for="country in countriesList" :key="country.code" :value="country.name">{{country.name}}</option>
                    </select>
                </div>
                <div class="input">
                    <label for="zip">Post Code:</label>
                    <input type="text" v-model="postCode">
                </div>
            </div>

            <h2>Password Creation</h2>
            <div class="input-group">
                <div class="input">
                    <label for="password"><span class="required-field">*</span>Password:</label>
                    <input type="password" required v-model="password1" @focus="invalidPassword = false">
                </div>
                <div class="input">
                    <label for="password2"><span class="required-field">*</span>Repeat Password:</label>
                     <p v-if="unmatchedPassword" class="taken">Passwords must match</p>
                    <input type="password" required v-model="password2" :class="{invalid: unmatchedPassword}" @focus="unmatchedPassword=false">
                </div>
            </div>
            <p :class="{invalidPassword: invalidPassword}">**Password must contain at least 8 characters, a number, lower and uppercase characters and a special character**</p>

            <h2>Submit</h2>

            <div class="input-group" id="checkboxes">
                <div class="input" id="newsletter">
                    <label for="newsletter">Sign Up to Our Newsletter?</label>
                    <div class="checkbox-container">
                        <input type="checkbox" id="checkboxID">
                        <div class="custom-checkbox">
                            <i class="fas fa-check-double"></i>
                        </div>
                    </div>
                </div>
                <div class="input">
                    <label for="terms" :class="{invalid: uncheckedTerms}">Accept <a href="#">Terms and Conditions</a></label>
                    <div class="checkbox-container">
                        <input type="checkbox" required v-model="terms"> 
                        <div class="custom-checkbox">
                            <i class="fas fa-check-double"></i>
                        </div>
                    </div>
                </div>
            </div>

            <button @click.prevent="checkInput">Register</button>
            <div class="required-field required">* Required Fields</div>
        </form>
    </div>
</template>

<script>
import SuccessfulRegistrationContainer from './SuccessfulRegistrationContainer.vue'
export default {
    components: {SuccessfulRegistrationContainer},
    data() {
        return{
            countriesList: null,
            firstName: '',
            secondName: '',
            userEmail: '',
            userName: '',
            userMobile: null,
            userPhone: null,
            addressLine1: '',
            addressLine2: '',
            userCity: '',
            userState: '',
            userCountry: null,
            postCode: '',
            password1: '',
            password2: '',
            terms: false,
            newsletter: false,
            invalidFirstName: false,
            invalidSecondName: false,
            invalidUserName: false,
            invalidUserEmail: false,
            invalidUserMobile: false,
            invalidAddress: false,
            invalidUserCity: false,
            uncheckedTerms: false,
            userNameAvailability: false,
            userNameTaken: false,
            emailAvailability: true,
            emailTaken: false,
            invalidCountry: false,
            passwordValid: false,
            passwordMatch: false,
            invalidPassword: false,
            unmatchedPassword: false,
            success: false
        }
    },
    computed: {
        checkUserNameAvailability() {
            this.$store.state.registeredUsers.forEach(user => {
                if(user.userName === this.userName){
                    this.userNameAvailability = false
                }else{
                    this.userNameAvailability = true
                }
            })
            return this.userNameAvailability
        },
        checkUserEmailAvailability() {
            this.$store.state.registeredUsers.forEach(user => {
                if(user.userEmail === this.userEmail){
                    this.emailAvailability = false
                }else{
                    this.emailAvailability = true
                }
            })
            return this.emailAvailability
        }
    },
    methods: {
        checkPassword() {
            const regExpPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
            this.passwordValid = regExpPassword.test(this.password1)
        },
        matchPassword() {
            this.passwordMatch = (this.password1 === this.password2)
        },
        checkInput() {
            const regExpNames = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/
            const regExpUsername = /^[a-zA-Z0-9]+([a-zA-Z0-9](_|-| )[a-zA-Z0-9])*[a-zA-Z0-9]*$/
            const regExpEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
            const regExpNumbers = /^(\+|00)[1-9][0-9 -().]{7,}$/
            const regExpAddress = /[A-Za-z0-9'.-\s,]/
            const regExpCityState = /^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/

            this.checkPassword()
            this.matchPassword()

            if(regExpNames.test(this.firstName) && regExpNames.test(this.secondName) && regExpUsername.test(this.userName) && regExpEmail.test(this.userEmail) && regExpNumbers.test(this.userMobile) && regExpAddress.test(this.addressLine1) && regExpCityState.test(this.userCity) && this.terms && this.checkUserNameAvailability && this.checkUserEmailAvailability && this.userCountry && this.userCountry !== 'none' && this.passwordValid && this.passwordMatch){
                const newUser = {}
                newUser.firstName = this.firstName
                newUser.secondName = this.secondName
                newUser.userEmail = this.userEmail
                newUser.userName = this.userName
                newUser.userMobile = this.userMobile
                newUser.userPhone = this.userPhone
                newUser.address = {
                    addressLine1: this.addressLine1,
                    addressLine2: this.addressLine2,
                    city: this.userCity,
                    state: this.userState,
                    country: this.userCountry,
                    postCode: this.postCode
                }
                newUser.password = this.password1
                newUser.newsletter = this.newsletter
                newUser.terms = this.terms

                this.$store.commit('registerNewUser', newUser)

                this.success = true
            }else{
                if(!regExpNames.test(this.firstName)){
                    this.invalidFirstName = true
                    console.log("rong")
                }
                if(!regExpNames.test(this.secondName)){
                    this.invalidSecondName = true
                    console.log("rong")
                }
                if(!regExpUsername.test(this.userName)){
                    this.invalidUserName = true
                    console.log("rong")
                }
                if(!regExpEmail.test(this.userEmail)){
                    this.invalidUserEmail = true
                    console.log("rong")
                }
                if(!regExpNumbers.test(this.userMobile)){
                    this.invalidUserMobile = true
                    console.log("rong")
                }
                if(!regExpAddress.test(this.addressLine1)){
                    this.invalidAddress = true
                    console.log("rong")
                }
                if(!regExpCityState.test(this.userCity)){
                    this.invalidUserCity = true
                    console.log("rong")
                }
                if(!this.userCountry || this.userCountry === 'none'){
                    this.invalidCountry = true
                    console.log("rong")
                }
                if(!this.terms){
                    this.uncheckedTerms = true
                    console.log("rong")
                }
                if(!this.checkUserNameAvailability){
                    this.userNameTaken = true
                    console.log("rong")
                }
                if(!this.checkUserEmailAvailability){
                    this.emailTaken = true
                    console.log("rong")
                }
                if(!this.passwordValid){
                    this.invalidPassword = true
                    console.log("rong")
                }
                if(!this.passwordMatch){
                    this.unmatchedPassword = true
                    console.log("rong")
                }
            }

        }
    },
    async mounted() {
        // Fetching list of countries for drop down select
        const response = await fetch("https://restcountries.eu/rest/v2/all")
        const data = await response.json()
        this.countriesList = data;
    }
}
</script>

<style lang="scss" scoped>
    @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');

    .registration{
        padding: 3rem;
        width: 100%;
        background: url('../../assets/registration/bg.jpeg');

        form{
            width: 70%;
            margin: auto;
            display: flex;
            flex-direction: column;
            padding: 2rem;
            background-color: rgba(255, 255, 255, 0.7);
            color: #000;

            .invalidPassword{
                color: red;
            }

            .input-group{
                display: flex;
                justify-content: center;
                margin-bottom: 2rem;

                .input{
                    width: 50%;
                    display: flex;
                    justify-content: left;
                    position: relative;

                    .taken{
                        position: absolute;
                        top: -1.5rem;
                        left: 50%;
                        transform: translateX(-50%);
                        color: red;
                    }

                    .invalid{
                        color: red;
                        border: 0.1rem solid red;
                    }

                    input, select{
                        width: 60%;
                        border: none;
                        border-bottom: 0.1rem solid #000;
                        background-color: transparent;
                        padding: 0.3rem;
                        &:focus{
                            outline: none;
                        }
                    }

                    input[type="checkbox"]{
                        width: 2rem;
                        height:2rem;

                        &:hover{
                            cursor: pointer;
                        }

                    }

                    
                    label{
                        width: 30%;
                        font-size: 1.5rem;
                    }
                }
            }
        }

        h2{
            width: 100%;
            text-align: center;
            margin: 3rem 0;
            border-bottom: 0.1rem solid #000;
            text-transform: uppercase;
        }
    }

    #checkboxes{
        label{
            width: 60%;

            a{
                color: #000;
                text-decoration: underline;
            }
        }

        .checkbox-container{
            position: relative;

            .invalid{
                color: red;
            }

            input{
                position: relative;
                opacity: 0;
                z-index: 200;

                &:hover ~ .custom-checkbox{
                    background-color: #000;
                    i{
                        color: #fff;
                    }
                }

                &:checked ~ .custom-checkbox{
                    background-color: #000;
                    i{
                        color: #fff;
                    }
                }
            }    
        }

        .custom-checkbox{
            top: 50%;
            transform: translateY(-50%);
            right: 0;
            position: absolute;
            width: 2.5rem;
            height: 2.5rem;
            background-color: #aaa;
            transition: all 0.3s ease-in-out;
            display: flex;
            align-items: center;
            justify-content: center;

            i{
                color: transparent;
                font-size: 1.5rem;
            }
        }
    }

    .logo{
        text-align: center;
        text-transform: uppercase;
        font-size: 3rem;
        color: #fff;
        text-shadow: 0.2rem 0.3rem 0.2rem #000;
        margin: 5rem 0;
        font-family: 'Bebas Neue', cursive;
        letter-spacing: 0.2rem;
    }

    button{
        width: 50%;
        margin: 3rem auto;
        padding: 0.5rem 0;
        font-size: 1.5rem;
        text-transform: uppercase;
        letter-spacing: 0.1rem;
        transition: all 0.3s;

        &:hover{
            cursor:pointer;
            background-color: rgba(0, 0, 0, 0.8);
            color: #fff;
        }
    }

    .required-field{
        color: red;
    }

    .required{
        font-size: 1.5rem;
    }

    /* Media queries */

    @media(max-width: 1200px){
       .registration{
           form{
               width: 100%;
           }
       }
    }

    @media(max-width: 950px){
        .registration{
            form{
                .input-group{
                    .input{
                        input, select{
                            width: 60%;
                        }

                        label{
                            width: 40%;
                            margin-left: 2rem;
                        }
                    }
                }
            }
        }
    }

    @media(max-width: 850px){
            .registration{
            form{
                .input-group{
                    flex-direction: column;
                    align-items: center;
                    .input{
                        margin-top: 2rem;
                        width: 80%;
                        input, select{
                            width: 100%;
                        }

                        label{
                            width: 40%;
                            margin-left: 2rem;
                        }
                    }
                }
            }
        }
    }

    @media(max-width: 750px){
            .registration{
            form{
                .input-group{
                    .input{
                        label{
                            width: 60%;
                        }
                    }
                }
            }
        }
    }

    @media( max-width: 600px){
            .registration{
            form{
                .input-group{
                    .input{
                        width: 100%;
                    }
                }
            }
        }
    }

    @media(max-width: 500px){
            .registration{
            form{
                .input-group{
                    .input{
                        label{
                            width: 70%;
                            font-size: 1.2rem;
                        }
                    }
                }
            }
        }

        #checkboxes{
            .input{
                label{
                    width: 100%;
                }
            }
        }
    }

</style>