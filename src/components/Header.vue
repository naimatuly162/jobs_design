<template>
  <header>
    <!-- Navbar -->
    <div>
      <div class="row">
        <div class="col-12">
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
            <div class="collapse navbar-collapse justify-content-around" id="navbarSupportedContent">
              <!-- Navbar brand -->
              <div>
              <img class="navbar-brand btn-m mt-2 mt-lg-0" src="../assets/logo 1.svg">
              </div>

              <!-- Left links -->
              <div>
              <ul class="navbar-nav nav-right me-auto mb-2 mb-lg-0">

                <li class="nav-item">
                  <a class="nav-link" href="#">Back to Home</a>
                </li>
                <li class="nav-item ">
                  <a class="nav-link" href="#">Contact us</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link"><button class="btn btn-primary" href="#">Login</button></a>
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
  name:'Header',

}

</script>
<style lang="scss">

$white-color:#fafafa;
$text-color:red;
$blue-color:blue;

header {
  font-family:Catamaran;
  width: 100%;

  .nav-m {
    height: 75px;
    background: $white-color;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
  }

  .nav-right {
    a {
      font-size: 18px;
      line-height: 30px;
      color: #000000 ;
      margin-right: 73px;
      text-align: center;
    }
    .btn{
      background: #0060AF;
      border-radius: 5.2px;
      width: 120px;
      height: 48px;
    }
  }


}
</style>
