
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      Add all your dogs here

      <section class="input">
      <InputField label='Dog name' v-model="name"/>
      <InputField label='Color' v-model="color" />
      </section>
      <section>
      <CustomButton :dogName=name v-on:submit="submitDog" />
      </section>  
      <section class="dogs" v-if="listOfDogs.length > 0">
       
      <ul v-for="(dog, index) in listOfDogs" :key="index">
         <DogContainer :dogData=dog />
        </ul>
     
      </section>
     
    </p>
  </div>
</template>

<script>
import DogContainer from './DogContainer.vue';
import InputField from './InputField.vue';
import CustomButton from './CustomButton';
export default {
  name: 'Layout',
  components: {
    DogContainer,
    InputField,
    CustomButton
  },
  data() { 
    return {
    name: '',
    color: '',
    dogData: {},
    listOfDogs: []
  }
  },
  props: {
    msg: String
  },
  methods: {
    submitDog() {
      this.dogData = {
        name: this.name,
        color: this.color
      }
      //Add the dog into our dog array
      this.listOfDogs.push(this.dogData);

      //Clean the input data after submit
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

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
