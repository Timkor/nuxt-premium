<template>
  <nuxt-link href="#" :to="'/pay'" class="button"><slot></slot></nuxt-link>
</template>
<style lang="less">
  .button {
    height: 3rem;
    padding: 0.5rem 1rem;
    line-height: 2rem;
    display: inline-block;

    background-color: forestgreen;
    color: white;

    &:hover {
      color: white;
      text-decoration: none;
    }
  }
</style>
