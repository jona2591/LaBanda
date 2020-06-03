<template>
  <div class="container">
    <div class="row justify-content-center mt-5">
      <div class="col-md-4">
        <form>
          <div class="form-group">
            <label for="Imagen">Seleccione una imagen</label>
            <input type="file" class="form-control-file" id="Imagen" @change="obtenerImg"/>
            <progress :value="UploadValue" max="100"></progress>
            <span>&nbsp; {{ UploadValue | currency }}</span>
          </div>
          <div class="form-group">
            <label for="Titulo">Titulo</label>
            <input type="text" class="form-control" id="Titulo" v-model="Post.titulo" />
          </div>
          <div class="form-group">
            <label for="Descripcion">Descripcion</label>
            <textarea class="form-control" id="Descripcion" rows="3" v-model="Post.descripcion"></textarea>
          </div>
          <button
            class="btn btn-dark"
            @click.prevent="addPost"
            :disabled="UploadValue < 100"
          >Publicar</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import {PostRef} from "../config";
import {app} from "../config";

export default {
  name: "NuevoPost",
  data() {
    return {
      UploadValue: 0,
      imagenObtenida: "",
      Post: {
        imagen: "",
        titulo: "",
        descripcion: ""
      }
    };
  },
  methods: {
    addPost() {
      if ((this.Post.titulo === "") | (this.Post.descripcion === "")) {
        alert("complete campos");
      } else {
        PostRef.push(this.Post);
        this.Post.titulo = "";
        this.Post.descripcion = "";
        document.getElementById("Imagen").value = "";
        this.UploadValue = 0;
      }
    },
    obtenerImg(e) {
      this.imagenObtenida = e.target.files[0];
      this.subirImagen();
    },
    subirImagen() {
      const storageRef = app
        .storage()
        .ref(`/imagenes/${this.imagenObtenida.name}`);
      var task = storageRef.put(this.imagenObtenida);
      task.on(
        "state_changed",
        snapshot => {
          let percentage =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          this.UploadValue = percentage;
        },
        error => {
          console.log(error.message);
        },
        () => {
          this.UploadValue = 100;
          task.snapshot.ref.getDownloadURL().then(url => {
            this.Post.imagen = url;
          });
        }
      );
    }
  }
};
</script>