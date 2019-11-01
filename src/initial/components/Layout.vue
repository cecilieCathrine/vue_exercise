
<template>
  <div class="dogApp">
    <h1>Your amazing dogs</h1>
    <p>
      Add all your dogs here
    </p>
        <section class="input">
         <!-- TODO: Add dog name input field here -->
        <InputField v-model="color" />
      </section>

      <section>
       <!-- TODO: Add submit button here -->
      </section>  

      <section class="dogs">       
        <ul>  <!-- TODO: Loop through listOfDogs array here -->
          <li> 
            <!-- TODO: Add dog container here -->
          </li>
        </ul>   
      </section>
  </div>
</template>

<script>
import InputField from './InputField.vue'
export default {
  name: 'Layout',
  components: {
    InputField
  },
  data() { 
    return {
    color: '',
    name: ''
    // You need to add additional variables here
  }
  },
  methods: {
    submitDog() {    
      /* 
      TODO: 1. Create dog object with name and color attributes 
      TODO: 2. Add the dog object into your dog array using push method
      */
 
    },
    removeDog() {           
     // TODO: Remove selected dog from dog array using splice method   
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
