<template>
<div class="actionButton">
<button class="customButton"> <!-- Button need to emit a action when clicked -->
  Add <!-- Dog name -->
    </button>
</div>
</template>

<script>

export default {
  name: 'CustomButton',
   props: {
  },
}
</script>

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
