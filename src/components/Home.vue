<template>
  <div>
    <div class="container-fluid">
      <div class="p-5 text-center bg-image mask">
        <div class="d-flex justify-content-center align-items-center h-100">
          <div class="text-white justify-content-center align-items-center">
            <h1 class="mb-3">Mediusware Jobs</h1>
          </div>
        </div>
      </div>
    </div>

    <div class="container-fluid" style="background-color: #f7f8fb;">
      <div class="row">
        <div class="tab-content" style="margin-bottom: 100px;">
          <div class="col-8 body-alignment offset-2">
            <div class="row">
              <div class="col-md-6" v-for="(item,index) in card" :key="index">
                <div class="card">
                  <div class="card-body">
                    <img :src="item.image" alt="">
                    <h2 class="card-title">{{ item.title }}</h2>
                    <h6 class="card-subtitle mb-2 text-muted">Deadline : {{ item.deadline }}</h6>
                    <h6 class="card-text">Vacancy : {{ item.vacancy }}</h6>
                    <a :href="item.route" class="card-link">Read more  <img src="../assets/arrow-right 2.png"></a>
                  </div>
                </div>
              </div>

              <div class="card-view">
                <div class="card-body d-flex justify-content-center align-items-center h-100">
                  <a href="#" class="card-link"><span>View more</span> <i class="fa fa-plus"></i></a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      card: [
        {
          image: require('../assets/group/Group 190.svg'),
          title: 'Software Engineer',
          deadline: '27th July,2021',
          vacancy: '03',
          route: ''
        },
        {
          image: require('../assets/group/Group 245.svg'),
          title: 'UI/UX Designer',
          deadline: '27th July 2021',
          vacancy: '04',
          route: ''
        },
        {
          image: require('../assets/group/Group 191.svg'),
          title: 'Social Media Marketing',
          deadline: '27th July 2021',
          vacancy: '02',
          route: ''
        },
        {
          image: require('../assets/group/Group 245.svg'),
          title: 'Graphics Designer',
          deadline: '27th July 2021',
          vacancy: '02',
          route: ''
        },
        {
          image: require('../assets/group/Group 192.svg'),
          title: 'Content Writer',
          deadline: '27th July,2021',
          vacancy: '07',
          route: ''
        },
        {
          image: require('../assets/group/Group 190.svg'),
          title: 'Laravel Developer',
          deadline: '27th July 2021',
          vacancy: '01',
          route: ''
        },
        {
          image: require('../assets/group/Group 192.svg'),
          title: 'Content Writer',
          deadline: '27th July 2021',
          vacancy: '07',
          route: ''
        },
        {
          image: require('../assets/group/Group 193.svg'),
          title: 'Database Developer',
          deadline: '27th July 2021',
          vacancy: '05',
          route: ''
        },
      ]
    }
  }
}

</script>
<style lang="scss">
.col-md-6 {
  border-radius: 13px;
  &:nth-child(2n) {
    margin-top: -82px;
  }
}
.card {
  height: 508px;
  padding: 50px 96px;
  background: #fff;
  border-radius: 10px;
  margin-bottom: 20px;
  margin-right: 20px;
  .card-body {
    font-family: Open Sans;
    h2 {
      font-size: 32px;
      line-height: 62px;
      font-weight: 600;
      margin-top: 42px;
      margin-bottom: 16px;
      color: #0060af;
    }
    .card-subtitle {
      font-size: 18px;
      line-height: 40px;
      font-weight: 600;
      margin-bottom: 12px;
      color: #3a3a3c!important;
    }

    .card-text {
      font-size: 18px;
      line-height: 40px;
      font-weight: 600;
      margin-bottom: 12px;
      color: #3a3a3c;
    }
    .card-link {
      font-size: 18px;
      line-height: 40px;
      font-weight: 600;
      margin-top: 66px;
      color: #0060af !important;
      display: inline-block;
      overflow: hidden;
      transition: all .5s;
    }
  }
}

.body-alignment {
  margin: 180px 0;
  position: relative;

  margin-bottom: 0 !important;
}

.body-alignment{
  position: relative;
  z-index: 9;
  &:after{
    content: "";
    position: absolute;
    top: -88px;
    left: -30px;
    background-image: url('../assets/Group 206.png');
    background-repeat: no-repeat;
    background-size: cover;
    width: 300px;
    height: 135px;
    z-index: -1;
  }
}
.card-view{
  width: 545px;
  height: 200px;
  background: #FFFFFF;
  border-radius: 13px;
  span{
    font-weight: 500;
    font-size: 24px;
    line-height: 40px;
    color: #0060AF!important;
    font-family: Roboto;
    font-style: normal;
    padding-right: 2px;
  }
  i{
    color: #0060AF!important;
  }
}
</style>