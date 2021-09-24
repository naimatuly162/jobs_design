<template>
  <header>
    <!-- Navbar -->

    <div class="container-fluid">
      <div class="col-md-12 nav-header">
        <nav class="navbar nav-m navbar-expand-lg">
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
            <i class="fa fa-bars"></i>
          </button>
          <!-- Collapsible wrapper -->
          <div class="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
            <!-- Navbar brand -->
            <div>
              <img class="navbar-brand nav-logo btn-m mt-2 mt-lg-0" src="../assets/logo 1.svg">
            </div>
            <div>
              <ul class="navbar-nav nav-right me-auto mb-2 mb-lg-0">
                <li link v-for="(menu,index) in menubar" :key="index" class="nav-item" :to="menu.route">
                  <a class="nav-link" :href="menu.route">{{ menu.title }}</a>
                </li>
                <!--                    <li class="nav-item">-->
                <!--                      <a class="nav-link" style="margin-right: 0">-->
                <!--                        <button class="btn btn-primary" href="#">Login</button>-->
                <!--                      </a>-->
                <!--                    </li>-->
              </ul>
            </div>
            <!-- Right elements -->
          </div>
        </nav>
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
        // {title: 'Back to Home', route: 'home'},
        // {title: 'Contact us', route: 'contact'},
        {title: 'Home', route: 'home'},
        {title: 'Service', route: 'service'},
        {title: 'Projects', route: 'projects'},
        {title: 'About', route: 'about'},
        {title: 'Career', route: 'career'},
        {title: 'Contact', route: 'contact'},

      ]
    }
  }
}

</script>
<style lang="scss">
.container-fluid{
  padding-right: 0!important;
  padding-left: 0!important;
}

//.navbar-light .navbar-toggler-icon {
//  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='htt…dth='2' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E;")
//}
//.navbar-toggler-icon {
//  display: inline-block;
//  width: 1.5em;
//  height: 1.5em;
//  vertical-align: middle;
//  background-repeat: no-repeat;
//  background-position: 50%;
//  background-size: 100%;
//}
</style>
