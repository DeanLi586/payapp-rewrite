<template>
  <div>
    <v-toolbar dark flat app>
      <v-toolbar-title class="text-uppercase">PayApp</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-menu offset-y>
        <v-btn flat slot="activator" color="grey">
          <v-icon>expand_more</v-icon>Login
        </v-btn>

        <v-list>
          <v-list-tile v-for="link in options" :key="link.name" router :to="link.link">
            <v-icon left>{{link.icon}}</v-icon>
            <v-list-tile-title>{{link.title}}</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>

      <v-menu offset-y>
        <v-btn flat slot="activator" color="grey">
          <v-icon>expand_more</v-icon>Register
        </v-btn>

        <v-list>
          <v-list-tile v-for="link in options2" :key="link.name" router :to="link.link">
            <v-icon left>{{link.icon}}</v-icon>
            <v-list-tile-title>{{link.title}}</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar>

    <v-parallax dark src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg">
      <v-layout align-center column justify-center>
        <h1 class="display-2 font-weight-thin mb-3">Welcome to PayApp</h1>
        <h4 class="subheading">Quick and easy way to pay and manage fees</h4>
      </v-layout>
    </v-parallax>

    <div>
      <h2 class="display-3 grey--text text-uppercase text-xs-center text-md-center">Features</h2>

      <v-layout row wrap class="xs-12 md-12 text-xs-center text-md-center">
        <v-flex v-for="feature in features" :key="feature.name">
          <v-card hover class="ma-2" flat>
            <v-card-text class="justify-center">
              <v-icon>{{feature.icon}}</v-icon>
            </v-card-text>

            <v-card-title class="display-1 justify-center">{{feature.name}}</v-card-title>

            <v-card-text class="text-xs-center justify-center">{{feature.description}}</v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      options: [
        {
          link: "sign-in-parent",
          icon: "person",
          name: "Parent Link",
          title: "Sign In As Parent"
        },
        {
          link: "sign-in-school",
          icon: "school",
          name: "School Link",
          title: "Sign In As School"
        }
      ],
      options2: [
        {
          link: "sign-up-parent",
          icon: "person",
          name: "Parent Link",
          title: "Sign up as Parent"
        },
        {
          link: "sign-up-school",
          icon: "school",
          name: "School Link",
          title: "Sign up as School"
        }
      ],
      features: [
        {
          name: "Speed",
          description: "Pay fees as fast as possible",
          icon: "school"
        },
        {
          name: "Speed",
          description: "Pay fees as fast as possible",
          icon: "school"
        },
        {
          name: "Speed",
          description: "Pay fees as fast as possible",
          icon: "school"
        },
        {
          name: "Speed",
          description: "Pay fees as fast as possible",
          icon: "school"
        },
        {
          name: "Speed",
          description: "Pay fees as fast as possible",
          icon: "school"
        },
        {
          name: "Speed",
          description: "Pay fees as fast as possible",
          icon: "school"
        }
      ]
    };
  }
};
</script>
