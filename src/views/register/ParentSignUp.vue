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
              class="text-md-center"
              type="text"
              prepend-icon="person"
              label="Full name"
              required
            ></v-text-field>
            <v-text-field
              class="text-md-center"
              type="email"
              prepend-icon="email"
              label="Email"
              required
            ></v-text-field>
            <v-text-field
              class="text-md-center"
              type="phone"
              prepend-icon="phone"
              label="Phone Number"
              required
            ></v-text-field>
            <v-text-field type="password" prepend-icon="lock" label="Password" required></v-text-field>
            <v-text-field type="password" prepend-icon="lock" label="Confirm Password" required></v-text-field>
            <v-btn class="success align-center justify-center">Register</v-btn>
            <v-spacer></v-spacer>
            <p class="body-1 text-md-center">Already have an account?</p>
            <v-btn flat outline class="primary justify-center" router :to="`sign-in-parent`">Sign In</v-btn>
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

.signup {
  width: 400px;
}
</style>
