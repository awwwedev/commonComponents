<template>
  <div id="app">
    <RealtyView
        :view-realty="realty"
    />
  </div>
</template>
<script lang="ts">
import {Component, Provide, Vue} from "vue-property-decorator";
import NewsCard from "./components/NewsCard.vue";
import Category from "./components/Category.vue";
import RealtyCard from "./components/RealtyCard.vue";
import RealtyCard2 from "./components/RealtyCard2.vue";
import RealtyView from "@/components/RealtyView.vue";

@Component({
  components: {RealtyView, RealtyCard2, RealtyCard, Category, NewsCard}
})
export default class App extends Vue {
  @Provide('imageBasePath') imageBasePath = process.env.VUE_APP_IMG_PATH

  realty = {
    area: 629.83,
    created_at: "2021-04-29 01:43:10",
    description: "March Hare said to the law, And argued each case with my wife; And the moral of that is--\"Oh, 'tis love, 'tis love, that makes them bitter--and--and barley-sugar and such things that make children sweet-tempered. I only wish people knew that: then they wouldn't be so stingy about it, even if I chose,' the Duchess to play croquet.' Then they both cried. 'Wake up, Alice dear!' said her sister; 'Why, what a long sleep you've had!' 'Oh, I've had such a thing I ever heard!' 'Yes, I think I can creep under the table: she opened it, and finding it very nice, (it had, in fact, I didn't know that you're mad?' 'To begin with,' the Mock Turtle. 'No, no! The adventures first,' said the Caterpillar.",
    discount_sum: null,
    equipments: [{id: 1, name: "Индивидуальный узел учёта электроэнергии", realty_type_id: 1, created_at: null}],
    id: 86,
    img_path: "/storage/image/town3.png",
    latitude: "44.544145",
    longitude: "33.633013",
    name: "The Hatter was the first figure,' said the.",
    photo: ["/storage/image/town.png", "/storage/image/image.jpg", "/storage/image/town3.png"],
    price: 420267,
    price_per_metr: 667,
    realtyTypeName: "Земля",
    type_id: 3,
    updated_at: "2021-04-29 01:43:10",
    user_id: 1,
  }
}
</script>

<style lang="stylus">
#app
  display grid

.grid-item
  width 100%
</style>
