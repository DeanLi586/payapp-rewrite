<template>
  <v-layout justify-start fill-height class="layout">
      <v-flex xs12 md6 xl6 class="layout">
        <v-card class="login pa-4">
          <v-card-title class="ma-3">
            <h1 class="heading text-md-center text-uppercase text-xs-center">Login as School</h1>
          </v-card-title>
          <v-card-text>
            <v-form class="ma-3">
              <v-text-field type="email" prepend-icon="email" label="Email" required></v-text-field>
              <v-text-field type="password" prepend-icon="lock" label="Password" required></v-text-field>
              <v-btn class="success">Login</v-btn>
              <v-spacer></v-spacer>
              <p class="body-1 text-md-center">Don't have an account?</p>
              <v-btn flat outline class="primary" router :to="`sign-up-school`">Sign Up</v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-flex>
  </v-layout>
</template>

<script>
export default {

    data() {
        return {
            // home: '/',
        }
    }
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
