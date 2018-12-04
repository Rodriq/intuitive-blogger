import Router from 'vue-router'
import  Login from './components/Auth/Login'
import  SignUp from './components/Auth/SignUp'

export default new Router ({
    routes: [
        {path:'/', component: Login, name: 'home'},
        {path: '/login', component: Login, name: 'login'},
        {path: '/sign-up', component: SignUp, name: 'sign-up'}
    ],
    mode: 'hash'
})

