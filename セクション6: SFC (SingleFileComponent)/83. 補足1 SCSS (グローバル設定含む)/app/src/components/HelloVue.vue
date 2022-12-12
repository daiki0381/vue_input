<template>
  <div class="red-b">
    {{ message }}
    <div class="background__yellow">ローカル</div>
    <div class="background__green">グローバル</div>
  </div>
</template>

<script>
export default {
  name: 'HelloVue',
  data() {
    return {
      message: 'Hello Vue!',
    };
  },
};
</script>

<style scoped lang="scss">
.red-b {
  border: 1px solid red;
}

.background {
  &__yellow {
    background-color: yellow;
  }
}

.background {
  &__green {
    background-color: $green;
  }
}
</style>
