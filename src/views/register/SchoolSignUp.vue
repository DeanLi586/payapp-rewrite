<template>
  <v-layout fluid fill-height class="layout">
    <v-flex xs12 md6 xl6 class="layout">
      <v-card align-center class="signup pa-4">
        <v-card-title class="ma-3">
          <h1
            class="heading text-md-center text-xl-center text-uppercase text-xs-center"
          >Register as Parent</h1>
        </v-card-title>
        <v-card-text>
          <v-form class="ma-3">
            <v-text-field
              type="text"
              :rules="fullnameRules"
              v-model="fullname"
              prepend-icon="person"
              label="Full name"
              required
            ></v-text-field>
            <v-text-field
              type="email"
              v-model="email"
              :rules="emailRules"
              prepend-icon="email"
              label="Email"
              required
            ></v-text-field>
            <v-text-field
              type="text"
              v-model="username"
              :rules="usernameRules"
              prepend-icon="person"
              label="Username"
              required
            ></v-text-field>
            <v-text-field
              type="phone"
              v-model="phone"
              :rules="phoneRules"
              prepend-icon="phone"
              label="Phone Number"
              required
            ></v-text-field>
            <v-text-field
              v-model="password"
              :rules="passwordRules"
              type="password"
              prepend-icon="lock"
              label="Password"
              required
            ></v-text-field>
            <v-text-field
              v-model="confirmPassword"
              :rules="confirmPasswordRules"
              type="password"
              prepend-icon="lock"
              label="Confirm Password"
              required
            ></v-text-field>
            <v-btn block @click="signUp" :disabled="!isComplete" class="success align-center justify-center">Register</v-btn>
            <v-spacer></v-spacer>
            <p class="body-1 text-md-center">Already have an account?</p>
            <v-btn block flat outline class="primary justify-center" router :to="`login`">Sign In</v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { validate } from "email-validator";
import axios from 'axios';

export default {
  data() {
    return {
      email: "",
      fullname: "",
      password: "",
      phone: "",
      username: "",
      confirmPassword: "",
      fullnameRules: [v => !!v || "Full Name is required"],
      emailRules: [
        v => !!v || "Email is required",
        v => validate(v) || "Please enter a valid email"
      ],
      usernameRules: [
        v => !!v || "Username is required",
        v => v.length < 6 && "Username should not be less than 6 characters"
      ],
      passwordRules: [
        v => !!v || "Password is required",
        v => v.length < 6 && "Password should not be less than 6 characters"
      ],
      phoneRules: [v => !!v || "Phone number is required"],
      confirmPasswordRules: [
        v => !!v || "Confirm Password is required",
        v => v === this.password || "Passwords do not match"
      ]
    };
  },
  methods: {
    validate() {
      if (
        this.fullname !== "" &&
        this.password !== "" &&
        this.email !== "" &&
        this.phone !== "" &&
        this.confirmPassword !== "" &&
        this.password === this.confirmPassword
      ) {
        return true;
      } else {
        return false;
      }
    },
    signUp() {
      let user = {
        email: this.email,
        fullname: this.fullname,
        password: this.password,
        username: this.username,
        phone: this.phone
      }

      axios.post('http://localhost:3000/api/users/register-school', user)
      .then((res) => {
        this.$router.push({path: '/dashboard'})
        localStorage.setItem('s.u', res.data);
        // console.log(res.data);
      }).catch((err) => {
        // console.log(err);
      })
    }
  },
  computed: {
    isComplete() {
      return this.validate();
    }
  }
};
</script>

<style>
.layout {
  background-image: url("https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg");
}

.signup {
  width: 400px;
}
</style>
