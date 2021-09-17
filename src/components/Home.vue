
<template>
  <div class="container-fluid">
    <div class="p-5 text-center bg-image mask">
      <div class="d-flex justify-content-center align-items-center h-100">
        <div class="text-white justify-content-center align-items-center">
          <h1 class="mb-3">Mediusware Jobs</h1>
        </div>
      </div>
    </div>
    <div class="container">
    <h2> HOME</h2>
  </div>
  </div>
</template>

<script>

</script>
<style lang="scss">
$white-color:#fafafa;
$text-color:red;
$blue-color:blue;
h1 {
  font-weight: bold;
  font-size: 42px;
  color: $white-color;
}
.text-white {
  a {
    background: $text-color;
    color: $white-color;
    font-size: 18px ;
    font-weight: 500;
    border-radius: 40px;
    border: none;

    i {
      margin-right: 15px;
    }
  }
}
.p-5 {
  padding: 0 !important;
}
.bg-image.mask {
  position: relative;
  height: 269px;
  background-image: linear-gradient(90deg, #00223F 0%, rgba(30, 57, 143, 0.5) 100%), url('../assets/image 8.svg');
  z-index: 9;

  &:after {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    height: 269px;
    background-image: linear-gradient(90deg, #00223F 0%, rgba(30, 57, 143, 0.5) 100%), url('../assets/image 8.svg');
    z-index: -1;
  }
}
</style>