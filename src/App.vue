<template>
  <div id="app">

	<div class="container-navbar">
  <b-button class="segmentation">сегментация</b-button>
	hello</div>

	<div class="container-left">
	<button @click="show = false" :aria-expanded="show ? 'true' : 'false' ">
    Камера
  </button>
  <button @click="show = true" :aria-expanded="show ? 'true' : 'false' ">
    Импорт
  </button>
	<template v-if="show == true">
  <div>
    <p><file-select v-model="file"></file-select></p>
    <p v-if="file">
    <img :src="file">
    {{file.name}}</p>
  </div>
	</template>
  <template v-if="show == false">
    <p>Hi, good boy</p>
  </template>
  </div>

  <div class="container-main">
  <form method="post" enctype="multipart/form-data" action="/upload">
    <input type="file" name="file">
    <input type="submit" value="Submit">
</form>
  </div>

  </div>
</template>

<script>
import FileSelect from './FileSelect.vue'

export default {
  name: 'App',
  components: {
    FileSelect
  },
  data() {
	return {
    file: null,
		show: true,
	  }
  },
  methods: {
  modificateImg: function(img) {
    var context = this;
    }
  }
}
</script>

<style>
@import './App.css';
#app {
  text-align: center;
  color: #2c3e50;
  background-color: #383838;
}


</style>
