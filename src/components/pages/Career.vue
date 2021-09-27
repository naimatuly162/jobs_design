<template>
  <div>
    <Header></Header>

    <div class="bg-image mask">
      <div class="d-flex align-items-center h-100" style="margin-left:260px;">
        <div class="text-white justify-content-center align-items-center">
          <h2 class="title mb-3">Join Our Team at Mediusware</h2>
          <h4 class="sub-title mb-3">UI/UX Designer</h4>
        </div>
      </div>
    </div>

    <div class="container-fluid">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="col-md-8">
              <div class="image-container"><img src="../../assets/group/Group 245.svg"/></div>
              <h4>UI/UX Designer</h4>
              <div class="d-flex justify-content-around align-items-center">
                <a class="menu-item"><i></i>Status: Full-Time</a>
                <a class="menu-item"><i></i>Arts and Design</a>
                <a class="menu-item"><i></i>Deadline: 27th July</a>
              </div>
            </div>

            <div class="col-md-4">
              <div class="right-section">
                <h3>Key Information</h3>
                <div class="d-flex" v-for="(item,index) in keyInfo" :key="index">
                  <div class="w-50">{{ item.title }}</div>
                  <div class="w-50">{{ item.info }}</div>
                </div>
                <a href=" " class="apply-btn"> Apply Now </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "../Header";
import Footer from "../Footer";

export default {

  components: {Footer, Header},
  data() {
    return {
      keyInfo: [
        {title: 'Published on:', info: '31 August, 2021'},
        {title: 'Vacancy:', info: '2'},
        {title: 'Experience:', info: '2 to 5 Years of professional experience'},
        {title: 'Salary:', info: 'Tk. 25,000 - 45,000 (Monthly)'},
        {title: 'Job type:', info: 'Full Time'},
        {title: 'Location:', info: 'Ring Road, House 18/5,Dhaka, 1207'},
      ],
    }
  }
}

</script>

<style lang="scss">
.image-container {
  margin-top: 48px;
  margin-bottom: 26px;
}

.menu-item {
  margin-bottom: 48px;
}

</style>