<template>
  <div class="container">
    <Modal :show="showViewPhoto" @close="showViewPhoto = false">
      <template #content>
        <div class="preview-img__wrapper">
          <ibg class="preview-img" :src="imageBasePath + viewImage" alt=""/>
        </div>
      </template>
      <template #header>
       <span></span>
      </template>
      <template #full-footer>
       <span></span>
      </template>
    </Modal>
    <nav class="view-object__nav nav">
      <ul class="nav__list">
        <li class="nav_item">
          <router-link :to="{name: 'home'}" class="nav__link link">Главная</router-link>
        </li>
        <li class="nav_item"><span class="nav__divider">-</span></li>
        <li class="nav_item"><router-link :to="{name: 'catalog', query: { filters: $store.getters['queryParams/getString'] } || {}}" class="nav__link link">Каталог</router-link></li>
        <li class="nav_item"><span class="nav__divider">-</span></li>
        <li class="nav_item"><a class="nav__link link link_disabled">{{ viewRealty.name }}</a></li>
      </ul>
    </nav>
    <div v-if="viewRealty" class="view-object__content">
      <div class="view-object__col">
        <Slider
            :images="viewRealty.photo"
            @selectImage="onSelectedImage"
        />
      </div>
      <div class="view-object__col view-object__object-info object-info">
        <h1 class="object-info__name">{{ viewRealty.name }}</h1>
        <ul class="object-info__parameters parameters fw-600">
          <li class="parameters__item">
            <span class="parameters__name">Тип</span>:<span class="parameters__value">{{ viewRealty.realtyTypeName }}</span>
          </li>
          <li class="parameters__item">
            <span class="parameters__name">Площадь</span>:
            <span class="parameters__value">{{ viewRealty.area }} кв. м.</span>
          </li>
          <li class="parameters__item">
            <span class="parameters__name">Цена за м. кв.</span>:
            <span class="parameters__value">{{ viewRealty.price_per_metr }} руб.</span>
          </li>
          <li class="parameters__item">
            <span class="parameters__name">Цена: </span><span class="parameters__value">{{
              viewRealty.price
            }} руб.</span>
          </li>
        </ul>
        <h2 class="title">Оснащение</h2>
        <ul v-if="viewRealty.equipments" class="object-info__parameters parameters fw-600">
          <li class="parameters__item parameters__item_doted" v-for="(equipment, idx) in viewRealty.equipments"
              :key="idx"
          >
            {{ equipment.name }}
          </li>
        </ul>
        <p class="object-info__description fw-600" v-html="viewRealty.description"/>
      </div>
    </div>
    <div class="view-object__btn-wrapper">
      <button class="btn btn_primary btn_sm" @click="$emit('openRentModal')">Арендовать</button>
    </div>
    <slot/>
  </div>
</template>

<script lang="ts">
import {Component, Inject, Prop, Vue} from "vue-property-decorator";
import Realty from "../models/Realty";
import Slider from "../components/Slider.vue";
import Modal from "../components/Modal.vue";
import Ibg from "../components/common/Ibg.vue";

@Component({
  components: {Ibg, Modal, Slider}
})
export default class RealtyView extends Vue {
  @Prop({ required: true, type: Object }) viewRealty!: Realty
  showViewPhoto = false
  viewImage = null as null | string
  @Inject('imageBasePath') imageBasePath!: string


  onSelectedImage (image: string): void {
    this.showViewPhoto = true
    this.viewImage = image
  }
}
</script>

<style scoped lang="stylus">
@import "~@common/assets/stylus/colors.styl";
@import "~@common/assets/stylus/common.styl";
@import "~@common/assets/stylus/button.styl";
@import "~@common/assets/stylus/null.styl";
@import "~@common/assets/stylus/fonts.styl";


.title
  margin-bottom 20px

.preview-img
  padding  0 0 100% 0
  display block
  width 100%
  height 100%

  &__wrapper
    width 100%


.view-object
  font-family Inter-Regular

  &__nav
    margin-bottom 40px

  &__content
    display flex
    margin-bottom 40px
    @media (max-width 1000px)
      margin-bottom 0
      flex-direction column

  &__col
    flex 1 1 50%
    @media (max-width 1000px)
      flex 1 1 100%

  &__btn-wrapper
    display flex
    justify-content center
    margin-bottom 100px

.nav
  font-family Inter-Regular
  color mainColor

  &__list
    display flex

  &__divider
    margin 0 5px

.object-info
  font-family Inter-Regular
  padding-top 55px

  &__name
    margin-bottom 20px
    font-size 30px

  &__description
    font-size 18px
    margin-bottom 60px

  &__parameters
    margin-bottom 25px

.parameters
  font-family Inter-Regular

  &__item
    margin-bottom 20px

    &_doted
      padding-left 15px
      display flex
      align-items center
      position relative

      &:before
        position absolute
        content ''
        display block
        background-color mainColor
        width 8px
        height 8px
        border-radius 60%
        left 0

    &:last-child
      margin-bottom 0

  &__value
    margin-left 10px

</style>