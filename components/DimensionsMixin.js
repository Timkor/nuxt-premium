
export default {

  methods: {

    calculateAbsolutePosition() {
      return this.getRelativePositionToElement(document.body);
    },

    calculateRelativePositionToElement(element) {

      const thatDimensions = element.getBoundingClientRect();
      const thisDimensions = this.$el.getBoundingClientRect();

      return {
        x: thisDimensions.x - thatDimensions.x,
        y: thisDimensions.y - thatDimensions.y,
        width: thisDimensions.width - thatDimensions.width,
        height: thisDimensions.height - thatDimensions.height,
        top: thisDimensions.top - thatDimensions.top,
        right: thisDimensions.right - thatDimensions.right,
        bottom: thisDimensions.bottom - thatDimensions.bottom,
        left: thisDimensions.left - thatDimensions.left,
      };
    },

    calculateRelativePositionToViewport() {
      return this.$el.getBoundingClientRect();
    }
  }
}
