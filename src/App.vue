<template>
  <div id="app">
    <RealtyCard2 class="news" key="24" name="45645" content="asdasdasd" img-path="/towm1.png" area="dfghdfgh" discount id="2" price="454" title="hkl;hkl;" total-price="434" description="sdfsdf"/>
    <RealtyCard2 class="news" key="24" name="45645" content="asdasdasd" img-path="/towm1.png" area="dfghdfgh" discount id="2" price="454" title="hkl;hkl;" total-price="434" description="sdfsdf"/>
    <RealtyCard2 class="news" key="24" name="45645" content="asdasdasd" img-path="/towm1.png" area="dfghdfgh" discount id="2" price="454" title="hkl;hkl;" total-price="434" description="gfhjfghj"/>
  </div>
</template>
<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import NewsCard from "./components/NewsCard.vue";
import Category from "./components/Category.vue";
import RealtyCard from "./components/RealtyCard.vue";
import RealtyCard2 from "./components/RealtyCard2.vue";

@Component({
  components: {RealtyCard2, RealtyCard, Category, NewsCard}
})
export default class App extends Vue {
}
</script>

<style lang="stylus">
#app
  display grid
  grid-template-columns repeat(3, 1fr)

.news
  width 100%
</style>
