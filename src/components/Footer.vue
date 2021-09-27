<template>
  <div>
    <footer class="bg-light text-lg-start">
      <div class="container-fluid">
        <div class="col-10 offset-1">
          <div class="row">
            <div class="col-sm-6 col-lg-3">
              <a href="#" class="footer-logo">
                <img src="../assets/logo 1.svg" alt class="img-fluid">
              </a>
              <p>
                Our mantra is to bring an evolution in the business world providing top-class services and game changing
                innovations.
              </p>

              <div link v-for="(item,index) in social" :key="index" class="d-inline-flex flex-wrap">
                <a target="_blank" :href="item.route" class="social-icon">
                  <i :class="item.icon"></i></a>
              </div>
            </div>

            <div class="col-sm-6 col-lg-3">
              <div class="title"> IT Services</div>
              <div link v-for="(item,index) in itService" :key="index" class="d-flex flex-column">
                <a target="_blank" :href="item.route" class="service-link"><span>{{ item.name }}</span></a>
              </div>
            </div>

            <div class="col-sm-6 col-lg-3">
              <div class="title"> Bangladesh Address</div>
              <div link v-for="(item,index) in bdAddress" :key="index" class="d-flex flex-item align-items-baseline"
                   :to="item.image">
                <img :src="item.image" alt=""><i class="address-icon" :class="item.icon"></i><a>{{ item.name }}</a>
              </div>
            </div>

            <div class="col-sm-6 col-lg-3">
              <div class="title">USA Address</div>
              <div link v-for="(item,index) in usaAddress" :key="index" class="d-flex flex-item align-items-baseline"
                   :to="item.img">
                <img :src="item.img" alt=""><i class="address-icon" :class="item.icon"></i><a>{{ item.title }}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Copyright -->
    </footer>
  </div>

</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      social: [
        {route: 'https://www.facebook.com/mediusware', icon: 'fa fa-facebook'},
        {route: 'https://twitter.com/MediuswareLtd', icon: 'fa fa-twitter'},
        {route: 'https://www.pinterest.com/mediusware', icon: 'fa fa-pinterest-p'},
        {route: 'https://www.linkedin.com/company/mediusware-ltd', icon: 'fa fa-linkedin'},
        {route: 'https://www.instagram.com/mediusware', icon: 'fa fa-instagram'},


      ],
      itService: [
        {name: 'Web Solution', route: 'solution'},
        {name: 'Mobile App Solution', route: 'mobile_app'},
        {name: 'Enterprise Solution', route: 'enterprise'},
        {name: 'E-commerce Solution', route: 'e-commerce'},
        {name: 'UI/UX Solution', route: 'ux_ui'},
        {name: 'API Integration', route: 'api'},
        {name: 'Software Development', route: 'software'},
        {name: 'SQA', route: 'sqa'},
        {name: 'Digital Marketing Solution', route: 'marketing'}
      ],
      bdAddress: [
        {name: '18/5 Ring Road, Mohammadpur, Dhaka', image: '', icon: 'fa fa-map-marker'},
        {name: '+8801750020408', image: '', icon: 'fa fa-phone', route: ''},
        {name: 'contact@mediusware.com', image: '', icon: 'fa fa-envelope', route: 'mailto:contact@mediusware.com'},
        {name: 'Monday to Friday: 9 AM - 6 PM', image: '', icon: 'fa fa-clock-o'},
      ],
      usaAddress: [
        {title: '1903 commonwealth st, Houston tx 77006', img: '', icon: 'fa fa-map-marker'},
        {title: '+1 (978) 431-0122', img: '', icon: 'fa fa-phone'},
        {title: 'contact@mediusware.com', img: '', icon: 'fa fa-envelope'},
        {title: 'Monday to Friday: 9 AM - 6 PM', img: '', icon: 'fa fa-clock-o'},
      ]
    }
  },
}
</script>

<style lang="scss">
.address-icon {
  color: #0B70E1;
  font-size: 20px !important;
  margin-right: 10px;
}

</style>