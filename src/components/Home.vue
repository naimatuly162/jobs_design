
<template>
  <div class="container-fluid">

    <div>
    <div class="p-5 text-center bg-image mask">
      <div class="d-flex justify-content-center align-items-center h-100">
        <div class="text-white justify-content-center align-items-center">
          <h1 class="mb-3">Mediusware Jobs</h1>
        </div>
      </div>
    </div>

      <div class="col-8 offset-2" style="background-color: #F7F8FB;">
        <div  class="row">
          <div class="col-md-6" v-for="(item,index) in card" :key="index">
          <div class="card" >
            <div class="card-body">
              <h2 class="card-title">{{item.title}}</h2>
              <h6 class="card-subtitle mb-2 text-muted">{{item.deadline}}</h6>
              <h6 class="card-text">{{item.vacancy}}</h6>
              <a :href="item.route" class="card-link">Read More -></a>
            </div>
          </div>
        </div>

<!--              <div class="tab-content">-->
<!--                <div class="tab-pane active">-->
<!--                  <div class="d-flex flex-wrap">-->
<!--                    <div class="flex-item">-->
<!--                      <div  class="img">-->
<!--                        <img  src="assets/undefined.svg" alt="">-->
<!--                      </div>-->
<!--                      <div class="name">SOFTWARE ENGINEER (PHP, Laravel)</div>-->
<!--                      <div class="deadline">Salary : Tk. 25,000 - 45,000 (Monthly) </div>-->
<!--                      <div class="vacancy">Experience : <span data-v-1e0d0ff2="">2 to 5 Years of professional experience</span></div>-->
<!--                      <a  href="/job/software-engineer-php-laravel" class="read-more">Read more <span class="arrow-left">-->
<!--                        <img  src="/assets/arrow-right.svg" alt=""></span>-->
<!--                      </a>-->
<!--                    </div>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </div>-->
<!--          -->
          </div>
        </div>
      </div>
    </div>


</template>

<script>
export default {
  name:'Home',
  data(){
    return{
      card:[
        {img:'', title:'Software Engineer',deadline:'27th July,2021',vacancy:'03',route:''},
        {img:'', title:'UI/UX Designer',deadline:'27th July,2021',vacancy:'04',route:''},
        {img:'', title:'Laravel Developer',deadline:'27th July,2021',vacancy:'01',route:''},
        {img:'', title:'Content Writer',deadline:'27th July,2021',vacancy:'07',route:''},
        {img:'', title:'database Developer',deadline:'27th July,2021',vacancy:'05',route:''},
        {img:'', title:'Social Media MArketing',deadline:'27th July,2021',vacancy:'02',route:''},
      ]
    }
  }
}

</script>
<style lang="scss">

.col-md-6{
  width: 545px;
  background: #FFFFFF;
  border-radius: 13px;
}
.card-left{
  padding-top: 166px;
}
.card-right{
  padding-top: 70px;
}

</style>