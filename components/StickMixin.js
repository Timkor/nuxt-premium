
export default {

  methods: {
    getNearestContainer() {

      var current = this;
      while (current.$parent) {
        current = current.$parent;

        if (current.isStickContainer && current.isStickContainer()) {
          return current;
        }
      }

      return null;
    },

    getDimensionsRelativeToViewport(element) {
      return element.getBoundingClientRect();
    },

    getDimensionsRelativeToElement(element, containingElement) {

      const thatDimensions = this.getDimensionsRelativeToViewport(element);
      const thisDimensions = this.getDimensionsRelativeToViewport(containingElement);

      return {
        x: thisDimensions.x - thatDimensions.x,
        y: thisDimensions.y - thatDimensions.y,
        width: thisDimensions.width,
        height: thisDimensions.height,
        top: thisDimensions.top - thatDimensions.top,
        right: thisDimensions.right - thatDimensions.right,
        bottom: thisDimensions.bottom - thatDimensions.bottom,
        left: thisDimensions.left - thatDimensions.left,
      };
    },

    getAbsoluteDimensions(element) {

      const dimensions = this.getDimensionsRelativeToViewport(element);

      const scrollX = window.scrollX;
      const scrollY = window.scrollY;

      return {
        x: dimensions.x + scrollX,
        y: dimensions.y + scrollY,
        width: dimensions.width,
        height: dimensions.height,
        top: dimensions.top + scrollY,
        right: dimensions.right + scrollX,
        bottom: dimensions.bottom + scrollY,
        left: dimensions.left + scrollX,
      };
    }
  }
}
