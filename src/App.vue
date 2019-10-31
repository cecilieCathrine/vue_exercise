<template>
  <div id="app">
    <nav>
      <ul>
       <li> <router-link to="/">Initial</router-link></li>
       <li> <router-link to="/solution">Go to solution</router-link> </li> 
      </ul>
    </nav>
     <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}

.router-link-exact-active {
text-decoration: none;
color: grey;
cursor: default;
}

</style>
