<template>
<b-container>
  <b-row>
      <b-col>
          <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <b-container>
    		<b-row>
    		</b-row>
    </b-container>
  </div>
      </b-col>
  </b-row>
</b-container>

</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
