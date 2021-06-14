<template>
  <div class="object" @mouseenter="isHovered = true" @mouseleave="isHovered = false" ref="object">
    <ibg class="object__img" :src="imgPath"/>
    <div class="object__info">
      <div class="object__title" :class="{ 'object__title_padding-on-hovered': discount }">
        <h3 class="">{{ isHovered ? title : titleValue }}</h3>
      </div>
      <div class="object__flex-wrapper">
        <div class="object__bg"></div>
        <div class="object__col">
          <div class="object__price-wrapper fw-600">
            <span class="object__price"><span class="p">&#8381;</span>{{ price }}<span class="m2">М2</span></span>
          </div>
        </div>
        <div class="object__col flex-wrapper flex-wrapper_J-C">
          <span class="object__area fw-600">Площадь: {{ area }} <span class="m2">М2</span></span>
        </div>
      </div>
    </div>
    <router-link class="stretched-link realty__link" :to="{name: 'viewRealty', params: {category: 'category-name', 'id': this.id}}">
      {{ title }}
    </router-link>
    <div v-if="discount" class="object__discount">
      <span class="object__discount-corner"></span>
      <span class="object__discount-old">{{ totalPrice + discount }}</span> <span
        class="object__discount-new">{{ totalPrice }}</span> руб.
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue, Watch} from 'vue-property-decorator';
import $ from 'jquery'
import Ibg from "../components/common/Ibg.vue";

@Component({
  components: {Ibg},
  props: {
    area: {
      type: Number,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    totalPrice: {
      type: Number,
      required: true
    },
    imgPath: {
      type: String,
      required: true
    },
    id: {
      type: Number,
      required: true
    },
    discount: {
      required: true
    }
  }
})
export default class Item extends Vue {
  isHovered = false
  defaultHeight: undefined | number;
  defaultBgWidth: undefined | number;
  @Prop({required: true}) title!: string

  get titleValue(): string {
    return this.title.length > 20 ? this.title.slice(0, 20) + '...' : this.title
  }

  mounted(): void {
    this.$nextTick(() => {
      this.defaultHeight = $(this.$refs['object']).find('.object__title').height()
      this.defaultBgWidth = $(this.$refs['object']).find('.object__bg').width()
    })
  }

  @Watch('isHovered')
  watchIsHovered(val: boolean): void {
    const $target = $(this.$refs['object'])
    const $targetTitle = $(this.$refs['object']).find('.object__title')
    const $h3 = $targetTitle.find('h3')

    if (val) {
      $h3.stop()
          .animate({
            opacity: '0',
          }, 3, () => {
            $target.addClass('object_hovered')
            $targetTitle.stop().animate({
              'font-size': 25,
              height: '100%',
            }, {
              complete: () => {
                $h3.animate({
                  opacity: '1',
                }, 1)
              }
            })
          })
    } else {
      $h3.stop().animate({
        opacity: '0',
      }, 3, () => {
        $target.removeClass('object_hovered')
        $targetTitle.animate({
          'font-size': 17,
          height: this.defaultHeight
        }, {
          complete: () => {
            $h3.animate({
              opacity: '1',
            }, 1)
          }
        })
      })
    }
  }
}
</script>

<style scoped lang="stylus">
@import "~@common/assets/stylus/colors.styl"
@import "~@common/assets/stylus/mixins.styl"
@import "~@common/assets/stylus/common.styl";
@import "~@common/assets/stylus/fonts.styl";

.realty__link
  color rgba(0, 0, 0, 0)

.object
  position relative
  width 400px
  min-height 250px
  display flex
  overflow hidden
  font-size 16px
  font-family Inter-Regular
  line-height normal

  &__img
    width 100%
    transition transform ease-out .5s

    .object.object_hovered &
      transform scale(1.1)

  &__discount
    position absolute
    right 0
    top 0
    background mainColorDark
    color white
    text-align center
    padding 5px 10px

    &:before
      content ''
      display block
      position absolute
      left -15px
      top 0
      transition border linear .47s
      border-top: 0 solid transparent;
      border-left: 15px solid rgba(1, 1, 1, 0);
      border-bottom: 30px solid mainColorDark;

    &-old
      text-decoration line-through

  &__title
    color white
    display flex
    align-items center
    font-size 1em
    background-color mainColor
    transition background-color linear .5s
    text-align right
    padding 0 5px 0 5px

    .object.object_hovered &
      background-color getColorWithOpacity(mainColor, .8)
      text-align center

    &_padding-on-hovered
      .object.object_hovered &
        padding 29px 5px 0 5px

    & h3
      width 100%
      margin 5px 0

  &__info
    width 100%
    position absolute
    height 100%
    bottom 0
    display flex
    font-size 1em
    flex-direction column
    justify-content flex-end

  &__flex-wrapper
    display flex
    justify-content space-between
    position: relative
    background-color mainColor
    transition background-color linear .5s

    .object.object_hovered &
      background-color getColorWithOpacity(mainColor, .8)

  &__bg
    position absolute
    overflow visible !important
    left 0
    top 0
    width 80px
    height 100%
    background-color mainColorDark

    &:after
      content ''
      display block
      position absolute
      right -15px
      top 0
      transition border linear .47s
      border-top: 0 solid transparent;
      border-left: 15px solid mainColorDark;
      border-bottom: 25px solid mainColor;

      .object.object_hovered &
        border-bottom: 25px solid getColorWithOpacity(mainColor, 0);

  &__col
    display flex
    flex-direction column

    &:last-child
      margin-right 10px

  &__area
    margin-left auto
    display block
    font-size .9em
    position relative
    align-self flex-end
    padding-right 15px
    transition color linear .2s

  &__price-wrapper
    height 25px
    width 75px
    position relative
    margin-top auto
    padding-left 15px
    color white
    display flex
    justify-content center
    align-items center

  &__price
    position relative
    padding-right 13px
    padding-left 10px
    margin-right 10px
</style>
