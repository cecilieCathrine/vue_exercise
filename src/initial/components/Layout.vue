
<template>
  <div class="dogApp">
    <h1>Your amazing dogs</h1>
    <p>
      Add all your dogs here
    </p>
  </div>
</template>

<script>
export default {
  name: 'Layout',
  data() { 
    return {
    name: '',
    color: '',
    dogData: {},
    listOfDogs: []
  }
  },
  methods: {
    submitDog() {
      this.dogData = {
        name: this.name,
        color: this.color
      }
      //Add the dog into our dog array
      this.listOfDogs.push(this.dogData);
    },
    removeDog(index) {      
      //Remove selected dog from array
     this.listOfDogs.splice(index, 1);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.input {
  display: flex;
  justify-content: center;
}

.dogs {
  display: flex;
  flex-flow: wrap;
  margin-top: 2em;
  margin-left: 10em;
  margin-right: 10em;
}

ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}

li:hover, li:focus {
  background: rgb(164, 174, 179);
  cursor: pointer;
}

</style>
