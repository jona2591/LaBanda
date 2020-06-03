<template>
  <div id="app">
    <div id="nav">
      <div class="row bg-dark">
        <div class="col">
          <div class="container">
            <nav class="navbar navbar-expand-lg navbar-dark">
              <a class="navbar-brand" href="#">La Banda</a>
              <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul class="navbar-nav">
                  <li class="nav-item active">
                    <router-link to="/">Inicio |</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/crear">Publicar</router-link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#nav{
  border-bottom: 3px solid orangered;
}
#nav a {
  font-weight: bold;
  color: white;
}

#nav a.router-link-exact-active {
  color: orangered;
}
</style>
