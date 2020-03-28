<template>
  <v-app>
    <v-container>
      <v-row no-gutters>
        <v-col>
          <div class="display-1 pl-3 pt-3 pb-3 port-title">
            マイポートフォリオ
          </div>
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col class="col-4">
          <v-container fluid="">
            <v-row justify="center">
              <v-img :src="require('./icon_image.png')" max-width="250">
              </v-img>
            </v-row>
            <v-row justify="center">
              <p class="display-1 mt-4">XX_ここに名前を入力します_user3</p>
            </v-row>
            <v-row class="">
              <v-col class="col-2"> </v-col>
              <v-col>
                <p class="title">Twitter</p>
              </v-col>
              <v-col justify-self="center">
                <v-btn href="https://twitter.com/?lang=ja" target="_blank" text>
                  <v-icon color="#55acee" x-large>mdi-twitter</v-icon>
                </v-btn>
              </v-col>
            </v-row>
            <v-row>
              <v-col class="col-2"> </v-col>
              <v-col>
                <p class="title">Facebook</p>
              </v-col>
              <v-col>
                <v-btn href="https://www.facebook.com/" target="_blank" text>
                  <v-icon color="#3b5998" x-large>mdi-facebook</v-icon>
                </v-btn>
              </v-col>
            </v-row>
            <v-row>
              <v-col class="col-2"> </v-col>
              <v-col>
                <p class="title">GitHub</p>
              </v-col>
              <v-col>
                <v-btn href="https://github.com/" target="_blank" text>
                  <v-icon color="black" x-large>mdi-github</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
        <v-col>
          <v-row>
            <v-col class="col-1 d-flex">
              <v-container fluid="" class="pa-0">
                <v-row no-gutters justify="center">
                  <div class="border"></div>
                </v-row>
              </v-container>
            </v-col>
            <v-col>
              <v-row no-gutters class="pb-8">
                <v-col class="col-11">
                  <v-card
                    class="pt-4 pb-1 pr-4 pl-4"
                    outlined
                    tile
                    color="#cfe2f3"
                  >
                    <p class="title">自己紹介</p>
                    <p>
                      XX_ここに自己紹介文を入力します
                    </p>
                  </v-card>
                </v-col>
              </v-row>
              <v-row no-gutters class="pb-8">
                <v-col class="col-11">
                  <v-card
                    class="pt-4 pb-1 pr-4 pl-4"
                    outlined
                    tile
                    color="#ead1dc"
                  >
                    <p class="title mb-0">興味のある技術</p>
                    <v-list class="transparent">
                      <v-list-item class="">
                        <v-list-item-icon>
                          <v-icon color="#43a047">mdi-checkbox-marked</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                          XX_ここに興味のある技術を入力します
                        </v-list-item-content>
                      </v-list-item>
                      <v-list-item class="my-n4">
                        <v-list-item-icon>
                          <v-icon color="#43a047">mdi-checkbox-marked</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                          XX_ここに興味のある技術を入力します
                        </v-list-item-content>
                      </v-list-item>
                      <v-list-item class="">
                        <v-list-item-icon>
                          <v-icon color="#43a047">mdi-checkbox-marked</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                          XX_ここに興味のある技術を入力します
                        </v-list-item-content>
                      </v-list-item>
                    </v-list>
                  </v-card>
                </v-col>
              </v-row>
              <v-row no-gutters>
                <v-col class="col-11">
                  <v-card
                    class="pt-4 pb-1 pr-4 pl-4"
                    outlined
                    tile
                    color="#f5e4bf"
                  >
                    <p class="title">好きな言葉</p>
                    <p>
                      XX_ここに好きな言葉を入力します
                    </p>
                  </v-card>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<style scoped>
.border {
  background-color: #585858;
  width: 1px;
  height: 80vh;
}
.port-title {
  border-left: solid 10px #4a86e8;
  border-top: solid 3px #4a86e8;
  border-bottom: solid 3px #4a86e8;
  border-right: solid 3px #4a86e8;
}
</style>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "User1",
  components: {},
  props: {},
  data() {
    return {};
  },
  computed: {},
  //   created() {}
  //   mounted() {},
  methods: {}
});
</script>
