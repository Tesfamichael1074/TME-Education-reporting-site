import Vue from 'vue'
import App from './App.vue'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import firebase from "firebase";
import store from "./store";
import router from "./routes/index";

Vue.config.productionTip = false

const configOptions = {
    apiKey: "AIzaSyCn59gNyStOjUB_GL41nvBMcSyz_Tf-9gk",
    authDomain: "tmeeducation-report.firebaseapp.com",
    databaseURL: "https://tmeeducation-report.firebaseio.com",
    projectId: "tmeeducation-report",
    storageBucket: "tmeeducation-report.appspot.com",
    messagingSenderId: "757172656806",
    appId: "1:757172656806:web:ff795863b45b32ff1fb267",
    measurementId: "G-CK916K5BQ4"
};
firebase.initializeApp(configOptions);

firebase.auth().onAuthStateChanged(user => {
    store.dispatch("fetchUser", user);
});

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')