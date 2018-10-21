<template>
  <div class="stick-container">
    <slot></slot>
  </div>
</template>
<script>

  import StickMixin from '~/components/StickMixin.js';

  export default {

    mixins: [
      StickMixin
    ],

    data() {

      return {
        slots: {

          'top': {
            position: 0,
            elements: [],
            generator: this.generateScrollTopListener
          },

          'bottom': {
            position: 0,
            elements: [],
            generator: this.generateScrollBottomListener
          },
        }
      };
    },

    methods: {

      stick(stickElement) {

        if (!stickElement.sticks) {

          console.log('stick')

          const slot = this.getSlot(stickElement.anchor);

          stickElement.stick(slot.position);

          this.updateListener(stickElement);

          slot.position += stickElement.height;

          slot.elements.forEach(element => {
              element.scrollListener();
          })
        }
      },

      unstick(stickElement) {

        if (stickElement.sticks) {

          console.log('unstick')

          const slot = this.getSlot(stickElement.anchor)

          stickElement.unstick();

          this.updateListener(stickElement);

          slot.position -= stickElement.height;

          slot.elements.forEach(element => {
              element.scrollListener();
          })
        }
      },

      add(stickElement) {

        const slot = this.getSlot(stickElement.anchor);

        slot.elements.push(stickElement);

        this.addListener(stickElement);

        stickElement.scrollListener();
      },

      remove(stickElement) {

        // TODO

        console.log('remove', stickElement)
      },

      generateScrollListener(stickElement) {

        const slot = this.getSlot(stickElement.anchor);

        return slot.generator(stickElement)
      },
      generateScrollTopListener(stickElement) {

        const slot = this.getSlot(stickElement.anchor);

        if (stickElement.sticks) {

          // Optimized unstick listener:
          return () => {

            const scrollY = window.scrollY;

            if (scrollY + slot.position < stickElement.y2) {
              this.unstick(stickElement);
            }

          };

        } else {

          // Optimized stick listeners:
          return () => {

            const scrollY = window.scrollY;

            if (scrollY + slot.position > stickElement.y) {
              this.stick(stickElement);
            }
          }
        }
      },

      generateScrollBottomListener(stickElement) {

        const slot = this.getSlot(stickElement.anchor);

        if (stickElement.sticks) {

          // Optimized unstick listener:
          return () => {

            const scrollY = window.scrollY;
            const scrollHeight = window.innerHeight;

            if (scrollY + scrollHeight - slot.position > stickElement.y) {
              this.unstick(stickElement);
            }

          };

        } else {

          // Optimized stick listeners:
          return () => {

            const scrollY = window.scrollY;
            const scrollHeight = window.innerHeight;

            if (scrollY + scrollHeight - slot.position < stickElement.y2) {
              this.stick(stickElement);
            }
          }
        }
      },

      addListener(stickElement) {

        stickElement.scrollListener = this.generateScrollListener(stickElement);

        window.addEventListener('scroll', stickElement.scrollListener);
      },

      removeListener(stickElement) {

        window.removeEventListener('scroll', stickElement.scrollListener);

        stickElement.scrollListener = null;
      },

      updateListener(stickElement) {

        const slot = this.getSlot(stickElement.anchor);

        slot.elements.forEach(element => this.removeListener(element));
        slot.elements.forEach(element => this.addListener(element));
      },

      hasSlot(anchor) {
        return (anchor in this.slots);
      },

      getSlot(anchor) {

        if (!this.hasSlot(anchor)) {
          this.createSlot(anchor);
        }

        return this.slots[anchor];
      },

      createSlot(anchor) {
        this.slots[anchor] = {
            position: 0,
            elements: [],
        };
      },

      isStickContainer() {
        return true;
      }
    }
  }
</script>
<style lang="less">
  .stick-container {

  }
</style>
