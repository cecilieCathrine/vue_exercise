# Vue dog exercise

## Tasks

### Initial setup 

```
1. Clone project 
2. Run npm install to setup project
3. Start/compile project with npm run serve 

4. Production build: npm run build
5. Lints: npm run lint
```

### Task one (add input fields)
A color <InputField /> component is already created for you, but the label text is missing. 

```
1. Add a label prop on the <InputField> component inside the Layout component. 
Show the label in the InputField component. Label value should be 'Color'
2. Add another InputField so that you have both a (dog)name and a color input field.
```

### Task two (Submit button)
A  CustomButton component is already created, but it needs a few fixes before its ready to be used
```
1. Import CustomButton into Layout component
2. Add <CustomButton> component into Layout component, and pass a dogName prop.
   (The dogName value passed should be the text written in the name input field)
3. Inside CustomButton include dogName as a prop this component accepts
4. Inside CustomButton use the dogName prop to display the dog name in the button, after Add ...
   BONUS: Use v-if directive to show a different text in the button if the passed dogName prop is empty.

Write something in the name input field and you should now (hopefully) see the dog name 
appear on the button.

```
The last thing we need to do is to add a click event when user clicks the button

```
3. Inside CustomButton create a @click event in the <button> tag and emit the event ($emit('submit')). 
4. Parent <Layout> component need to listen to the "submit" event emitted in CustomButton. 
   In order to do that, add @submit="submitDog" in the <CustomButton> tag inside Layout.

```

### Task three (submit method)
When the user clicks the add button, we want to add the dog into an array of dogs.

```
1. In Layout, initiate an empty listOfDogs array. You should also initiate an empty dogData object.
2. In the submitDog method, create a dogData object with name and color properties. 
   After creating the dogData object, add it to the listOfDogs array.

```

You now have list of dogs, but we need to list them out! 

```
3. In Layout, Use the VUE directive v-for to list out the dogs name and color.
   <ul v-for="(dog, index) in listOfDogs" :key="index">
          <li> 
           {{dog.name}} {{dog.color}}
          </li>
        </ul>           
```
NB: Vue require a :key property inside a v-for loop to be able to watch changes for each item 

### Task four (Dog container)
We want to display a proper dog container for each dog in the array. 
(The Dog image is created in Dog.vue)

```
1. Create a DogContainer component. Inside this component, import the Dog component and add it.
2. The DogContainer should accept a dogData object prop. 
3. The DogContainer should pass dogData.color to <Dog>. 
   (The Dog component use the passed color property to fill the svg dog image.)
4. The DogContainer should display the dog name below the <Dog>
5. In Layout, import and add the DogContainer inside the <li></li> in the our v-for loop. 
   Remember to pass a dogData object prop representing that individual dog.

Bonus: create a border around each dog using the following css: 
    .box {
        border: 1px solid grey;
        padding: 2em;
        box-shadow: 3px 4px 5px 0px rgba(0,0,0,0.75);
    }
Remember to add box class in the DogContainer html template

```

### Bonus (Remove dog)
What if one of your dogs is running away from home? You need to remove it from your dogs array.

```
In Layout, add a click event on the <li> tag inside the v-for-loop. Use index property to 
remove the correct dog from the array. 

```


### Finished solution

![Alt text](src/assets/dogapp.png?)