<template>
<div class="box" v-if="dogData && dogData.name && dogData.color">    
<Dog :color="dogData.color" />
<strong>{{ dogData.name }}</strong>
</div>
</template>

<script>

import Dog from './Dog.vue';
export default {
  name: 'DogContainer',
  components: {
      Dog
  },
  props: {
    dogData: Object
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box {
    border: 1px solid grey;
    padding: 2em;
    margin-left: 1em;
    box-shadow: 3px 4px 5px 0px rgba(0,0,0,0.75);
}
</style>
