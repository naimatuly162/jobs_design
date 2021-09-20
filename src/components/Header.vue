<template>
  <header>
    <!-- Navbar -->

    <div class="container-fluid">
      <div class="row">
        <div class="col-8 offset-2">
          <nav class="navbar nav-m navbar-expand-lg navbar-light bg-light">
              <!-- Toggle button -->
              <button
                  class="navbar-toggler"
                  type="button"
                  data-mdb-toggle="collapse"
                  data-mdb-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
              >
                <i class="fas fa-bars"></i>
              </button>
              <!-- Collapsible wrapper -->
              <div class="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
                <!-- Navbar brand -->
                <div>
                  <img class="navbar-brand btn-m mt-2 mt-lg-0" src="../assets/logo 1.svg">
                </div>

                <div>
                  <ul class="navbar-nav nav-right me-auto mb-2 mb-lg-0">
                    <li link v-for="(menu,index) in menubar" :key="index" class="nav-item" :to="menu.route">
                      <a class="nav-link" :href="menu.route">{{ menu.title }}</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" style="margin-right: 0">
                        <button class="btn btn-primary" href="#">Login</button>
                      </a>
                    </li>
                  </ul>
                </div>
                <!-- Right elements -->
              </div>
          </nav>
        </div>
      </div>
    </div>
  </header>

</template>
<script>
export default {
  name: 'Header',

  data() {
    return {
      menubar: [
        {title: 'Back to Home', route: 'home'},
        {title: 'Contact us', route: 'contact'},
      ]
    }
  }

}

</script>
<style lang="scss">

</style>
