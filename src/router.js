import Router from 'vue-router';

import home from './views/home';
import login from './views/login';
import register from './views/register';
import myPofile from './views/myPofile';
import kycPage from './views/kycPage';
import editProfile from './views/editProfile';
import changePassWord from './views/changePassWord';
import whiteList from './views/whiteList';
import joinSuccess from './views/joinSuccess'
import sendEmail from './views/sendEmail'
import resetPassWord from './views/resetPassWord'

const routes = [{
    path: '/',
    name: 'home',
    component: home,
    meta: {
        keepAlive: true // 是否缓存
    }
},
{
    path: '/login',
    name: 'login',
    component: login
},
{
    path: '/register',
    name: 'register',
    component: register
},
{
    path: '/my_pofile/:userId',
    component: myPofile,
    children: [
        {
            path: 'edit_profile',
            name: 'edit_profile',
            component: editProfile
        },
        {
            path: 'white_list',
            name: 'white_list',
            component: whiteList
        },
        {
            path: 'change_password',
            name: 'change_password',
            component: changePassWord
        },
        {
            path: 'kycpage',
            name: 'kycpage',
            component: kycPage
        },
    ]
},
{
    path: '/joinSuccess/:userId',
    name: 'joinSuccess',
    component: joinSuccess
},
{
    path: '/sendEmail',
    name: 'sendEmail',
    component: sendEmail
},
{
    path: '/resetPassWord',
    name: 'resetPassWord',
    component: resetPassWord
},
{
    path: '*',
    name: '404',
    component: {
        template: "<div>404</div>"
    },
    meta: {
        keepAlive: false
    }
}];


export default new Router({
    mode: 'history',
    routes
});