<template>
  <div class="stick-element" :class="classes" :style="styles">
    <div ref="wrapper" :style="stickStyles">
      <slot></slot>
    </div>
  </div>
</template>
<script>

  import StickMixin from '~/components/StickMixin.js';

  export default {

    mixins: [
      StickMixin
    ],

    props: {

      anchor: {
        type: String,
        default: 'top'
      },
    },

    data() {
      return {
        sticks: false,
        x: 0,
        y: 0,
        x2: 0,
        y2: 0,
        stickX: 0,
        stickY: 0,
        width: 0,
        height: 0
      }
    },

    mounted() {

      this.calculateDimensions();

      this.getNearestContainer().add(this);


    },

    detroyed() {
      this.getNearestContainer().remove(this);
    },

    computed: {

      classes() {
        return {
          sticks: this.sticks
        };
      },

      styles() {

        if (this.width && this.height) {
          return {
            width: this.width + 'px',
            height: this.height + 'px'
          }
        }
      },

      stickStyles() {
        if (this.sticks) {
          if (this.anchor == 'top') {
            return {
              position: 'fixed',
              top: this.stickY + 'px',
              width: '100%'
            }
          } else if (this.anchor == 'bottom') {
            return {
              position: 'fixed',
              bottom: this.stickY + 'px'
            }
          }
        }
      }
    },

    methods: {

      stick(position) {

        if (!this.sticks) {
          this.sticks = true;
          this.stickY = position;
        }

      },

      unstick() {

        if (this.sticks) {
          this.sticks = false;
        }
      },

      calculateDimensions() {

        const rect = this.getAbsoluteDimensions(this.$refs.wrapper);

        this.x = rect.left;
        this.y = rect.top;
        this.x2 = rect.left + rect.width;
        this.y2 = rect.top + rect.height;
        this.width = rect.width;
        this.height = rect.height;
      }
    }
  }
</script>
<style>
  .stick-element > div {
    position: relative;
    box-sizing: content-box;
    height: auto;
  }
</style>
