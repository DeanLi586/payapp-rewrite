<template>
  <v-layout fluid fill-height class="layout">
      <v-flex xs12 md6 xl6 class="layout">
        <v-card align-center class="login pa-4">
          <v-card-title class="ma-3">
            <h1 class="heading text-md-center text-xl-center text-uppercase text-xs-center">Login as Parent</h1>
          </v-card-title>
          <v-card-text>
            <v-form class="ma-3">
              <v-text-field class="text-md-center" type="email" prepend-icon="email" prepend-icon-cb="email" label="Email" required></v-text-field>
              <v-text-field type="password" prepend-icon="lock" label="Password" required></v-text-field>
              <v-btn class="success ml-5 text-md-center">Login</v-btn>
              <v-spacer></v-spacer>
              <p class="body-1 text-md-center">Don't have an account?</p>
              <v-btn flat outline class="primary ml-5 text-md-center" router :to="`sign-up-parent`">Sign Up</v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-flex>
  </v-layout>
</template>

<script>
export default {};
</script>

<style>
  .layout {
    background-image: url("https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg");
  }

  .login {
    width: 400px;
  }

</style>
