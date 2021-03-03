<template>
    <base-cover @click.self="hide">
        <template v-slot:default>
            <div class="sign-in" v-if="$store.state.signedIn === false">
                <i class="fas fa-times" @click="hide"></i>
                <h2>Sign In</h2>
                <h5 class="invalid" v-if="invalid === 'password'">Wrong Password</h5>
                <h5 class="invalid" v-if="invalid === 'email'">User with this email doesn't exist</h5>
                <h5 class="invalid" v-if="invalid === 'empty'">Please enter a valid email</h5>
                <div class="inputs">
                    <input type="email" placeholder="Email" v-model="enteredEmail" @focus="invalid = ''">
                    <input type="password" placeholder="Password" v-model="enteredPassword" @focus="invalid=''">
                </div>
                <button @click="verifyUser">Sign in</button>
                <p>Don't have an account? <a href="#registration" @click="hide">Register</a></p>
                <p><a href="#">Forgot Password</a></p>
            </div>
            <div class="signed-in" v-else>
                <p>Signed in successfully</p>
                <h3>{{ $store.state.signedInUser.firstName }}</h3>
                <h3>{{ $store.state.signedInUser.secondName }}</h3>
                <h4>{{ $store.state.signedInUser.userName }}</h4>
                <h4>{{ $store.state.signedInUser.userEmail }}</h4>
                <button @click="hide">Go shopping</button>
            </div>
        </template>
    </base-cover>
</template>

<script>
export default {
    data() {
        return {
            enteredEmail: '',
            enteredPassword: '',
            invalid: ''
        }
    },
    inject: ['hide'],
    methods: {
        verifyUser() {
            this.$store.state.registeredUsers.forEach(user => {
                if(user.userEmail === this.enteredEmail){
                    if(user.password === this.enteredPassword){
                        this.$store.commit("signIn", user)
                        this.hide()
                    }else{
                        this.invalid = 'password'
                    }
                }else{
                    if(this.enteredEmail === ''){
                        this.invalid = 'empty'
                    }else{
                        this.invalid = 'email'
                    }
                }
            })
        }
    }
}
</script>

<style lang="scss" scoped>
    .sign-in{
        height: 40rem;
        width: 30vw;
        background-color: rgba(255,255,255, 0.9);
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        flex-direction: column;
        justify-content: center;
        border: 0.2rem solid #000;
    }

    h5{
        font-size: 1.5rem;
        text-align: center;
        color: red;
        margin-bottom: 1rem;
    }

    h2{
        width: 100%;
        text-align: center;
        font-size: 3rem;
        margin: 3rem 0;
    }

    .inputs{
        display: flex;
        flex-direction: column;
        align-items: center;
        
        input{
            height: 3rem;
            width: 70%;
            margin: 1rem 0;

            &::placeholder{
                margin-left: 0.1rem;
            }

            &:focus{
                outline: none;

                &::placeholder{
                    color: transparent;
                }
            }
        }
    }

    p{
        width: 100%;
        text-align: center;
        font-size: 1.5rem;
        margin: 3rem 0;

        a{
            color: #000;
            text-decoration: underline;
        }
    }

    button{
        width: 50%;
        margin: 1rem auto;
        text-transform: uppercase;
        padding: 0.5rem 2rem;
        background-color: #fff;

        &:hover{
            background-color: #000;
            color: #fff;
            border: 0.2rem solid #fff;
            cursor: pointer;
        }
    }

    i{
        position: absolute;
        top: 1.5rem; 
        right: 1.5rem;
        font-size: 2rem;

        &:hover{
            cursor: pointer;
        }
    }

    .signed-in{
        height: 40rem;
        width: 20vw;
        background-color: rgba(255,255,255, 0.9);
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        flex-direction: column;
        justify-content: top;
        
        h3, h4{
            color: #000; 
            text-align: center;
            font-size: 2.5rem;
            margin: 1rem 0;
        }

        h4{
            font-size: 2rem;
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
    }

    /* Media queries */

    @media(max-width: 1000px){
        .sign-in{
            height: 50rem;
            width: 40vw;
        }
    }

    @media(max-width: 700px){
        .sign-in{
            width: 50vw;
        }
    }

    @media(max-width: 550px){
        .sign-in{
            width: 60vw;
        }
    }

    @media(max-width: 450px){
        .sign-in{
            width: 70vw;
        }
    }

    @media(max-width: 350px){
        .sign-in{
            width: 90vw;
        }
    }
</style>

