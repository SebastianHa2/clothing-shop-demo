<template>
    <section class="newsletter">
        <!-- Basic section heading -->
        <base-heading>
            <template v-slot:heading>
                Sign up to our newsletter
            </template>
        </base-heading>
        <div class="newsletter-form">
            <!-- Newsletter form -->
            <form action="">
                <input type="email" @focus="showRestOfForm = true, invalidEmail = false" placeholder="Enter your email" class="email" 
                v-model="email" :class="{invalidEmail: invalidEmail}">
                <p v-if="invalidEmail" class="invalid-message">Incorrect Email Format</p>
                <!-- Animation for showing the rest of newsletter form -->
                <transition name="rest">
                    <div class="rest-of-form" v-if="showRestOfForm">
                        <div class="gender-selection" :class="{invalid: invalidGender}" @click="invalidGender = false">
                            <div class="gender-select">
                                <input type="radio" name="gender" value="man" v-model="gender">
                                <div class="custom-radio"></div>
                                <label for="man">man</label>
                            </div>
                            <div class="gender-select">
                                <input type="radio" name="gender" value="woman" v-model="gender">
                                <div class="custom-radio"></div>
                                <label for="woman" class="woman-label">woman</label>
                            </div>
                        </div>
                        <p class="invalid-message" v-if="invalidGender">Please select your gender</p>
                        <div class="terms" :class="{invalid: invalidTerms}">
                            <input type="checkbox" id="terms" v-model="terms" @click="invalidTerms = false">
                            <label for="terms">Accept <a href="#">Terms and Regulations</a></label>
                        </div>
                        <p class="invalid-message" v-if="invalidTerms">Please accept the terms and regulations</p>
                        <button class="sign-up" @click.prevent="signUp">Sign Up</button>
                    </div>
                </transition>
            </form>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return{
            showRestOfForm: false,
            terms: false,
            gender: '',
            email: '',
            invalidEmail: false,
            invalidGender: false,
            invalidTerms: false,
        }
    },
    methods: {
        signUp() {
            // Validating email using a regular expression using RFC2822 reg expresssion validation
            // let emailValid
            const emailRegExp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/

            if(emailRegExp.test(this.email) && this.gender && this.terms){
                console.log("success")
                console.log(this.email, this.gender, this.terms);
            }else{
                console.log(this.invalidEmail)
                if(!emailRegExp.test(this.email)){
                    this.invalidEmail = true
                }
                if(!this.gender){
                    this.invalidGender = true
                }
                if(!this.terms){
                    this.invalidTerms = true
                }
                console.log(this.invalidEmail, this.invalidTerms)
            }

        }
    }
}
</script>


<style lang="scss" scoped>

    /* Main form styling */

    .newsletter-form{
        width: 100%;
    }

    .base-heading{
        margin-bottom: 0 !important;
    }

    form{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-image: linear-gradient( #b3cde0, #fff);
        padding-top: 10rem;
        padding-bottom: 4rem;
    }

    .email{
        width: 40rem;
        border: none;
        border-bottom: 0.1rem solid #000;
        padding: 1rem;
        text-align: center;
        font-size: 1.5rem;
        margin-bottom: 3rem;
        background-color: transparent;

        &::placeholder{
            text-align: center;
            font-size: 1.5rem;
            text-transform: uppercase;
            color: #000;
            transition: all 0.3s;
        }

        &:focus{
            outline: none;

            &::placeholder{
                color: transparent;
            }
        }
    }

    .invalidEmail{
        border: 0.1rem solid red;
        color: red;
    }

    .invalid-message{
        color: red;
    }



    /* Rest of the form styling */

    .rest-of-form{
        display: flex;
        padding-top: 3rem;
        flex-direction: column;
        width: 100%;
        align-items: center;
        overflow: hidden;
    }

    .gender-selection{
        display: flex;
        width: 100%;
        height: 5rem;
        justify-content: center;
    }

    .gender-select{
        width: 10%;
        height: 3rem;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        font-size: 2rem;

        input{
            position: absolute;
            width: 2.5rem;
            height: 2.5rem;
            opacity: 0;
            top: 50%;
            transform: translateY(-50%);
            left: 0;
            cursor: pointer;
            z-index: 20;
        }
    }

    /* Custom radio buttons styling */

    .custom-radio{
        top: 50%;
        transform: translateY(-50%);
        left: 0;
        position: absolute;
        width: 2.5rem;
        height: 2.5rem;
        background-color: #aaa;
        border-radius: 50%;
        transition: all 0.2s ease-out;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .gender-select input:hover ~ .custom-radio{
        background-color: #000;
    }

    .gender-select input:checked ~ .custom-radio{
        background-color: #000;
    }

    .woman-label{
        margin-left: 2rem;
    }

    .terms{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 2rem 0 2rem 0;
    }

    .terms {
        input{
            height: 2rem;
            width: 2rem;
            cursor: pointer;

            &:checked{
                background-color: #000;
            }
        }

        label{
            font-size: 2rem;
            margin-left: 4rem;

            a{
                color: #000;
                text-decoration: underline;
            }
        }
    }

    .sign-up{
        padding: 0.5rem 3rem;
        text-transform: uppercase;
        letter-spacing: 0.1rem;
        background-color: transparent;
        border: 0.2rem solid #000;
        transition: all 0.3s;
        margin-top: 4rem;

        &:hover{
            background-color: #000;
            color: #fff;
            cursor: pointer;
        }
    }

    /* Rest of the form animation */

    .rest-enter-from{
        height: 0;
    }

    .rest-enter-active{
        transition: all 1s; 
    }

    .rest-enter-to{
        height: 30rem;
    }

    .invalid{
        color: red;
    }

    @media(max-width: 1200px){
        .gender-select{
            width: 15%;
        }
    }

    @media(max-width: 900px){
        .gender-select{
            width: 20%;
        }
    }

    @media(max-width: 600px){
        .gender-select{
            width: 30%;
        }
    }

    @media(max-width: 500px){
        .email{
            width: 30rem;
        }
    }

</style>
