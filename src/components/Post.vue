<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-4" v-for="(post, id) in Posts" :key="id">
          <div class="card-deck mt-2">
            <div class="card">
              <img :src="post.imagen" class="card-img-top" alt />
              <div class="card-body">
                <h5 class="card-title">{{ post.titulo }}</h5>
                <p class="card-text">{{ post.descripcion }}</p>
              </div>
              <div class="card-footer">
                <button class="btn btn-danger" @click="Borrar(id)">Borrar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {PostRef} from "../config.js";

export default {
  name: "Post",
  data() {
    return {
      Posts: []
    };
  },
  methods:{
    Borrar(id){
      PostRef.child(id).remove();
    }
  },
  created() {
    PostRef.on("value", listar => {
      this.Posts = listar.val();
    });
  }
};
</script>

<style scoped>
</style>
