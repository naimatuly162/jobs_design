<template>
  <header>
    <!-- Navbar -->
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12 nav-header">
          <nav class="navbar nav-m navbar-expand-lg">
            <div>
              <img class="navbar-brand nav-logo nav-mobile btn-m mt-2 mt-lg-0" src="../assets/logo 1.svg">
            </div>
            <!-- Toggle button -->
            <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
              <label data-bs-target="#navbarSupportedContent"
                     aria-controls="navbarSupportedContent">
                <i class="fa fa-bars"></i>
              </label>
            </button>

            <!-- Collapsible wrapper -->
            <div class="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
              <!-- Navbar brand -->
              <div class="collapse navbar-collapse justify-content-between">
                <img class="navbar-brand nav-logo btn-m mt-2 mt-lg-0" src="../assets/logo 1.svg">
              </div>
              <div>
                <ul class="navbar-nav nav-right me-auto mb-2 mb-lg-0">
                  <li link v-for="(menu,index) in menubar" :key="index" class="nav-item" :to="menu.route">
                    <a class="nav-link" :href="menu.route">{{ menu.title }}</a>
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

<!--<script
    src="https://code.jquery.com/jquery-3.6.0.js"
    integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk="
    crossorigin="anonymous"></script>
<script>

$(document).ready(function () {
  $('#icon').click(function () {
    $('li').navbar - toggler('show')

  });

});

</script>-->

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

//.navbar-collapse {
//  display: none;
//  position: absolute;
//  min-width: 160px;
//  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
//  z-index: 1;
//  width: 100%;
//}

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
