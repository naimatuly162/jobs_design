<template>
  <div>
    <div  class="container-fluid footer-top">
      <div class="col-8 offset-2">
        <div class="d-flex justify-content-center align-items-center" > <h2>Why Mediusware?</h2></div>
        <div class="row">
          <div link class="col-md-4" v-for="(item,index) in  whymedius" :key="index">
          <div  class="panel panel-default" >
              <div style="text-align: center" ><img :src="item.image" alt=""></div>
              <h5 style="text-align: center" class="panel-title">{{item.title}}</h5>
              <p class="panel-text">{{item.para}}</p>
           </div>
          </div>
          </div>
        </div>
      </div>
    <footer class="bg-light text-lg-start">
      <div  class="container-fluid">
        <div class="col-10 offset-1">
        <div class="row">
          <div class="col-sm-6 col-lg-3">
            <a href="#" class="footer-logo">
                <img src="../assets/logo 1.svg" alt class="img-fluid">
            </a>
            <p>
              Our mantra is to bring an evolution in the business world providing top-class services and game changing innovations.
            </p>

            <div link v-for="(item,index) in social" :key="index" class="d-inline-flex flex-wrap">
              <a  target="_blank" :href="item.route" class="social-icon">
                <i :class="item.icon"></i></a>
            </div>
          </div>

          <div class="col-sm-6 col-lg-3">
            <div class="title"> IT Services</div>
            <div link v-for="(item,index) in itService" :key="index" class="d-flex flex-column">
              <a target="_blank" :href="item.route" class="service-link">{{item.name}}</a>
            </div>
          </div>

          <div class="col-sm-6 col-lg-3">
            <div class="title"> Bangladesh Address </div>
            <div link v-for="(item,index) in address" :key="index" class="d-flex flex-item align-items-start" :to="item.image">
              <img :src="item.image" alt=""><p>{{item.name}}</p>
            </div>
          </div>

          <div class="col-sm-6 col-lg-3">
            <div class="title"> USA Address</div>
            <div link v-for="(item,index) in address" :key="index" class="d-flex flex-item align-items-start" :to="item.img">
              <img :src="item.img" alt=""><a>{{item.title}}</a>
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
  data(){
    return{
      whymedius:[
        {image:require('../assets/209434381.svg'), title:'Friendly Environment', para:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet nunc lobortis ullamcorper nunc nisi augue non.'},
        {image:require('../assets/209438921.svg'), title:'Dynamic Team', para:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet nunc lobortis ullamcorper nunc nisi augue non.'},
        {image:require('../assets/209449991.svg'), title:'Great Working Culture', para:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet nunc lobortis ullamcorper nunc nisi augue non.'},
      ],
      social:[
        {route:'https://www.facebook.com/mediusware',icon:'fa fa-facebook'},
        {route:'https://twitter.com/MediuswareLtd',icon:'fa fa-twitter'},
        {route:'https://www.linkedin.com/company/mediusware-ltd',icon:'fa fa-linkedin'},
        {route:'https://www.instagram.com/mediusware',icon:'fa fa-instagram'},
      ],
      itService:[
        {name:'Web Solution',route:'solution'},
        {name:'Mobile App Solution',route:'mobile_app'},
        {name:'Enterprise Solution',route:'enterprise'},
        {name:'E-commerce Solution',route:'e-commerce'},
        {name:'UI/UX Solution',route:'ux_ui'},
        {name:'API Integration',route:'api'},
        {name:'Software Development',route:'software'},
        {name:'SQA',route:'sqa'},
        {name:'Digital Marketing Solution',route:'marketing'}
      ],
      address:[
        {name:'18/5 Ring Road, Mohammadpur, Dhaka',image:''},
        {name:'+8801750020408',image:''},
        {name:'contact@mediusware.com',image:''},
        {name:'Monday to Friday: 9 AM - 6 PM',image:''},
        {title:'1903 commonwealth st, Houston tx 77006',img:''},
        {title:'+1 (978) 431-0122',img:''},
        {title:'contact@mediusware.com',img:''},
        {title:'Monday to Friday: 9 AM - 6 PM',img:''},
      ]
    }
  },
}
</script>

<style lang="scss">

</style>