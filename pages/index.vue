<template>
  <StickContainer>
    <StickElement>
      <div id="menu">
        <div class="container">Test</div>
      </div>
    </StickElement>

    <div class="container">

      <StickElement>
        <Button>Continue</Button>
      </StickElement>
      test<br><br><br>
      <StickElement>
        <Button>Back</Button>
      </StickElement>

      <ul class="list">
          <li v-for="i in 10" :key="i"></li>
      </ul>

    </div>

    <StickElement anchor="bottom">
      <div id="footer">
        <Button>Continue</Button>
      </div>
    </StickElement>

  </StickContainer>
</template>

<script>
import Button from '~/components/Button';

import StickContainer from '~/components/StickContainer';
import StickElement from '~/components/StickElement';

export default {
  components: {
    Button,
    StickContainer,
    StickElement,
  },
}
</script>

<style lang="less">

  .container {
    max-width: 1000px;
    margin: 0 auto;
  }

  #menu {
    background-color: white;
    box-shadow: 0 1px 10px rgba(0,0,0,.25);
    height: 4rem;
    line-height: 4rem;
    width: 100%;
  }

  #footer {
    background-color: white;
    box-shadow: 0 1px 10px rgba(0,0,0,.25);
    height: 4rem;
    line-height: 4rem;
    width: 100%;
  }

  .test {
    height: 200vh;

    padding-top: 8rem;
    padding-bottom: 8rem;

  }

  ul {
      li {
        height: 8rem;
        background-color: #f0f0f0;
        margin: 1rem 0;
        border-radius: 3px;
        list-style: none;
      }
    }
</style>
