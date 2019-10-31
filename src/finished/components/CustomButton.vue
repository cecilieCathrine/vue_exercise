<template>
<div class="actionButton">
<button class="customButton" @click="$emit('submit')">
    <span v-if="dogName"> Add {{dogName}} </span>
    <span v-if="!dogName"> Add dog </span>
    </button>
</div>
</template>

<script>

export default {
  name: 'CustomButton',
  props: {
    dogName: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.customButton {
    background-color:darkblue;
    color: white; 
    display: inline-flex;
    padding: 1em;
    font-size: large;
}

.actionButton :hover {
    background-color:lightblue;
    color: white; 
    cursor: pointer;
}
</style>
