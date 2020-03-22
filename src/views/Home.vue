<template>
  <v-app>
    <p class="title ma-3">ポートフォリオ一覧</p>
    <v-container class="grey lighten-5" fluid>
      <v-row justify="start" no-gutters class="ma-2">
        <v-col v-for="user in userList" :key="user.name" sm="8" md="6" lg="4">
          <v-card class="ma-5 pa-5" max-width="344" outlined>
            <v-list-item three-line>
              <v-list-item-content>
                <div class="overline mb-4">PROFILE</div>
                <v-list-item-title class="headline mb-1">
                  {{ user.name }}
                </v-list-item-title>
                <v-card-text>{{ user.description }}</v-card-text>
                <v-chip class="" color="blue lighten-4" :to="user.route"
                  >Detail</v-chip
                >
              </v-list-item-content>
              <v-list-item-avatar tile size="80">
                <v-img :src="user.image"></v-img>
              </v-list-item-avatar>
            </v-list-item>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<style lang="scss">
.title {
  position: relative;
  padding: 0.5em;
  background: #a6d3c8;
  color: white;
  font-size: 1.5em;

  &::before {
    position: absolute;
    content: "";
    top: 100%;
    left: 0;
    border: none;
    border-bottom: solid 15px transparent;
    border-right: solid 20px rgb(149, 158, 155);
  }
}
</style>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Home",
  components: {},
  props: {},
  data() {
    return {
      userList: [] as any
    };
  },
  computed: {},
  created() {
    this.userList = [
      {
        name: "user1",
        description: "皆さんこんにちは！！ココに一言コメントを入れてくださいね(^o^)",
        image: require("@/views/user1/icon_image.png"),
        route: "user1"
      },
      {
        name: "user2",
        description: "コメント",
        image: require("@/views/user2/icon_image.png"),
        route: "user2"
      },
      {
        name: "user3",
        description: "コメント",
        image: require("@/views/user3/icon_image.png"),
        route: "user3"
      },
      {
        name: "user4",
        description: "コメント",
        image: require("@/views/user4/icon_image.png"),
        route: "user4"
      },
      {
        name: "user5",
        description: "コメント",
        image: require("@/views/user5/icon_image.png"),
        route: "user5"
      }
    ];
  },
  //   mounted() {},
  methods: {}
});
</script>
