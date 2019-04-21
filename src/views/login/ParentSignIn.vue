<template>
  <v-layout fluid fill-height class="layout">
    <v-flex xs12 md6 xl6 class="layout">
      <v-snackbar v-model="snackbar" :timeout="4000" top color="success">
        <span>{{msg}}</span>
        <v-btn flat color="white" @click="snackbar = false">Close</v-btn>
      </v-snackbar>

      <v-card align-center class="login pa-4">
        <v-card-title class="ma-3">
          <h1
            class="heading align-center text-md-center text-xl-center text-uppercase text-xs-center"
          >Login</h1>
        </v-card-title>
        <v-card-text>
          <v-form class="ma-3">
            <v-text-field
              v-model="email"
              :rules="emailRules"
              type="email"
              prepend-icon="email"
              label="Email"
              required
            ></v-text-field>
            <v-text-field
              type="password"
              v-model="password"
              :rules="passwordRules"
              prepend-icon="lock"
              label="Password"
              required
            ></v-text-field>
            <v-btn @click="login" block class="success align-center justify-center text-md-center">Login</v-btn>
            <v-spacer></v-spacer>
            <p class="body-1 text-md-center">Don't have an account?</p>
            <v-btn
              flat
              outline
              block
              class="primary text-md-center"
              router
              :to="`sign-up-parent`"
            >Sign Up</v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { validate } from "email-validator";
import axios from "axios";
import { setTimeout } from 'timers';

export default {
  data() {
    return {
      email: "",
      password: "",
      emailRules: [
        v => !!v || "Email is required",
        v => validate(v) || "Please enter a valid email"
      ],
      passwordRules: [
        v => !!v || "Password is required",
        v => v.length < 6 && "Password should not be less than 6 characters"
      ],
      snackbar: false,
      msg: ''
    };
  },
  methods: {
    goToDashboard() {
      this.$router.push({ path: "/dashboard" });
    },
    login() {
      // construct user object
      let user = {
        email: this.email,
        password: this.password
      };
      this.msg = 'Logging you in';
      this.snackbar = true;

      axios
        .post("http://localhost:3000/api/login", user)
        .then(res => {
          localStorage.setItem('s.u', JSON.stringify(res.data));
          this.msg = 'Login successful';
          console.log(res);
          setTimeout(()=> {
            this.snackbar = false;
            this.goToDashboard();
          }, 2000);
        })
        .catch(err => {
          this.msg = err;
          setTimeout(()=> {
            this.snackbar = false;
          }, 2000);
        });
    },
  },
};
</script>

<style>
.layout {
  background-image: url("https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg");
}

.login {
  width: 400px;
}
</style>
