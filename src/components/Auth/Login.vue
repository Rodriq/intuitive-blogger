<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-3"></div>
            <div class="col-md-6 login-core">
                <b-card title=""
                        img-src="./images/login-logo.png"
                        img-alt="Image"
                        img-top
                        img-style="height: 10%"
                        tag="article"
                        style=""
                        class="mb-2">
                    <b-card-body>
                        <!--<p class="text-center text-danger"> Hello world</p>-->
                        <b-alert variant="danger"
                                 dismissible
                                 :show="error.status" @dismissed="error.status=false">
                            {{ error.message }}
                        </b-alert>
                        <form class="form-horizontal">
                            <div class="form-group">
                                <label for="username" class="control-label">Username:</label>
                                <input id="username" type="text" class="form-control" :class="{error: error.status}"
                                       placeholder="Enter Username"
                                       v-model="form.username">
                            </div>
                            <div class="form-group">
                                <label for="password" class="control-label">Password:</label>
                                <input id="password" type="password" class="form-control" placeholder="Enter Password"
                                       v-model="form.password">
                            </div>
                            <b-form-group>
                                <b-form-checkbox-group v-model="form.remember">
                                    <b-form-checkbox value="me">Remember login</b-form-checkbox>
                                </b-form-checkbox-group>
                            </b-form-group>
                            <div class="col-md-6 float-right">
                                <button class="btn btn-primary btn-block" @click="login">Login</button>
                            </div>
                        </form>
                    </b-card-body>
                </b-card>

            </div>
            <div class="col-md-3"></div>
        </div>
    </div>
</template>

<script>
    import {User} from "../../Datastore/datastore";

    export default {
        name: "Login",
        data() {
            return {
                form: {
                    username: '',
                    password: '',
                    remember: false
                },
                error: {
                    status: false,
                    message: 'Wrong username or password!'
                }
            }
        },
        methods: {
            async login() {
                this.error.status = false;
                let user = await this.fetchUser();
                if (!user._id) {
                    this.error.status = true;
                    return false
                }
                let passwordHash = require('password-hash');

                if (!passwordHash.verify(this.form.password, user.password)) {
                    this.error.status = true;
                    this.error.message = 'Password Verification FAILED'
                }
                localStorage.setItem('auth', user._id)

            },
            fetchUser() {
                return new Promise((resolve, reject) => {
                    User.findOne({username: this.form.username}, (err, user) => {
                        if (err) reject(err);
                        resolve(user || {})
                    })
                });
            }
        },
        mounted () {
            /*let user = {
                username: 'admin',
                password: require('password-hash').generate('secret'),
                name: 'Cool Developer',
                about: 'Amazement is the key to following.',
                content: ''
            };

            User.insert(user, (err, data) => {
                if (err) throw err;
                console.log('user created', data)
            });*/
        }
    }
</script>

<style scoped>
    .login-core {
        padding-top: 80px;
    }

    .form-control.error:focus {
        border-color: #ff0f00;
        outline: 0;
        -webkit-box-shadow: 0 0 0 0.2rem rgb(255, 81, 33);
        box-shadow: 0 0 0 0.2rem rgb(255, 81, 33);
    }

    .form-control.error {
        border-color: #ff0f00;
        outline: 0;
    }

</style>