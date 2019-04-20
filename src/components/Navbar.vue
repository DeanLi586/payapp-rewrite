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

      <div>
        <v-btn @click="logout" flat>
          <v-icon>exit_to_app</v-icon>Logout
        </v-btn>
      </div>
    </v-toolbar>

    <v-navigation-drawer v-model="drawer" class="primary" app>
      <v-toolbar flat class="primary">
        <v-list>
          <v-list-tile>
            <v-list-tile-title class="title text-uppercase white--text">Payapp</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-toolbar>

      <v-list v-for="link in options" :key="link.name" class="pa-1" color="primary">
        <div v-if="link.type === 'single'">
          <v-list-tile router :to="link.href">
            <v-list-tile-action>
              <v-icon class="white--text">{{link.icon}}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title class="white--text">{{link.name}}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </div>

        <div v-if="link.type === 'group'">
          <v-list-group no-action>
            <template slot="activator">
              <v-list-tile>
                <v-list-tile-action>
                  <v-icon class="white--text">{{link.icon}}</v-icon>
                </v-list-tile-action>

                <v-list-tile-title class="white--text">{{link.name}}</v-list-tile-title>
              </v-list-tile>
            </template>

            <v-list-tile router :to="child.href" v-for="child in link.children" :key="child.name">
              <v-list-tile-action>
                <v-icon class="white--text">{{child.icon}}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title class="white--text">{{child.name}}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list-group>
        </div>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import { ParentMenuItems, SchoolMenuItems } from "@/utils/menu.js";

export default {
  data() {
    return {
      drawer: false,
      options: []
    };
  },
  methods: {
    setNavItems() {
      let user = JSON.parse(localStorage.getItem('s.u'));
      if (user.role === 'parent') {
        this.options = ParentMenuItems;
      } else {
        this.options = SchoolMenuItems;
      }
    },
    getLoggedInUser() {
      this.setNavItems();
    },
    logout() {
      localStorage.clear();
      this.$router.push({path: '/login'})
    }
  },
  created() {
    this.getLoggedInUser();
  }
};
</script>

<style>
</style>
