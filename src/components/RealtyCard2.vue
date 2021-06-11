<template>
  <div class="balloon">
    <img class="balloon__img" :src="imgPath" alt="">
    <h3 class="balloon__name">{{ name }}</h3>
    <span class="balloon__area">Площадь {{ area }} м2</span>
    <p class="balloon__desc">{{ description }}</p>
    <div class="balloon__footer">
      <span></span>
      <div class="balloon__price-wrapper">
        <span class="balloon__price"><span class="p">&#8381;</span> {{ price }} <span class="m2">М2</span></span>
      </div>
      <button @click="onClick" class="btn btn_primary btn_sm balloon__btn">
        Подробнее
      </button>
    </div>
    <div v-if="discount" class="balloon__discount">
      <span class="balloon__discount-corner"></span>
      <span class="balloon__discount-old">{{ price + discount }}</span> <span
        class="balloon__discount-new">{{ price }}</span> руб.
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Ref, Vue} from "vue-property-decorator";


@Component({})
export default class RealtyCard2 extends Vue {
  @Ref('balloon')
  refBalloon!: HTMLElement
  @Prop({ required: true })
  imgPath!: string
  @Prop({ required: true })
  name!: string
  @Prop({ required: true })
  area!: number
  @Prop({ required: true })
  description!: string
  @Prop({ required: true })
  price!: number
  @Prop({ required: true })
  id!: number
  @Prop({ required: true })
  discount!: number


  onClick (): void {
    this.$router.push({name: 'viewRealty', params: {category: 'category-name', id: this.id + ''}})
  }

}

</script>

<style scoped lang="stylus">
@import "~@common/assets/stylus/blocks/yandex-map-balloon.styl";
@import "~@common/assets/stylus/common.styl";
@import "~@common/assets/stylus/button.styl";
.balloon
  line-height normal
</style>
