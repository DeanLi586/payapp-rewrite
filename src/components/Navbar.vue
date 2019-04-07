<template>
  <nav>
    <v-toolbar flat app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Payapp</span>
        <v-btn @click="drawer = !drawer" fab flat slot="activator">
          <v-icon>menu</v-icon>
        </v-btn>
      </v-toolbar-title>
      <v-spacer></v-spacer>

    </v-toolbar>

    <v-navigation-drawer v-model="drawer" class="primary" app>
      <v-toolbar flat class="primary">
      <v-list>
        <v-list-tile>
          <v-list-tile-title class="title text-uppercase white--text">
            Payapp
          </v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-toolbar>
      
      <v-list class="pa-1" color="primary">
        <v-list-tile v-for="link in options" :key="link.name" router :to="link.href">
          <v-list-tile-action>
            <v-icon class="white--text">{{link.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="white--text">{{link.name}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import menuItems from "@/utils/menu.js";

export default {
  data() {
    return {
      drawer: false,
      options: menuItems
    };
  }
};
</script>

<style>
</style>
