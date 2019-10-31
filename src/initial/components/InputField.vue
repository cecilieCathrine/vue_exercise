<template>
<div class="inputField">
<label :for="label" > <!-- TODO refer to label prop here --> </label>
<input :id=label v-model="content" type="text" @input="handleInput" />
</div>
</template>

<script>

export default {
  name: 'InputField',
  props: {
    value: String,
    //TODO: Add label prop here
  },
   data () {
    return {
      content: this.value
    }
  },
  methods: {
    handleInput() {
      this.$emit('input', this.content)
    }
  }
}
</script>

<style scoped>
.inputField {
    margin-bottom: 1em;
    margin-top: 1em;
    margin-left: 1em;
}
input, label {
    display:block;
}
</style>
