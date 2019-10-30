<template>
<div class="inputField">
<label :for="label" > {{label}} </label>
<input :id=label v-model="content" type="text" @input="handleInput" />
</div>
</template>

<script>

export default {
  name: 'InputField',
  props: {
    value: String,
    label: String
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
