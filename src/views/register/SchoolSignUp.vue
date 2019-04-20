<template>
  <v-layout fluid fill-height class="layout">
    <v-flex xs12 md6 xl6 class="layout">
      <v-card align-center class="signup pa-4">
        <v-card-title class="ma-3">
          <h1
            class="heading text-md-center text-xl-center text-uppercase text-xs-center"
          >Register as School</h1>
        </v-card-title>
        <v-card-text>
          <v-form class="ma-3">
            <v-text-field
              type="text"
              :rules="fullnameRules"
              v-model="fullname"
              prepend-icon="school"
              label="Institution Name"
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
            <v-btn block class="success align-center justify-center">Register</v-btn>
            <v-spacer></v-spacer>
            <p class="body-1 text-md-center">Already have an account?</p>
            <v-btn
              block
              flat
              outline
              class="primary justify-center"
              router
              :to="`login`"
            >Sign In</v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { validate } from "email-validator";

export default {
  data() {
    return {
      email: "",
      fullname: "",
      password: "",
      phone: "",
      confirmPassword: "",
      fullnameRules: [v => !!v || "Institution Name is required"],
      emailRules: [
        v => !!v || "Email is required",
        v => validate(v) || "Please enter a valid email"
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
