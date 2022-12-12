<template>
  <div class="red-b">{{ message }}</div>
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

<style scoped>
.red-b {
  border: 1px solid red;
}
</style>
