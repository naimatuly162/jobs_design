<template>
  <div>
    <div class="p-5 text-center bg-image mask">
      <div class="d-flex justify-content-center align-items-center h-100">
        <div class="text-white justify-content-center align-items-center">
          <h1 class="mb-3 bg-header">Mediusware Jobs</h1>
        </div>

        <div class=" mobile-view justify-content-center text-start font-weight-bold">
          <div class="container">
            <div class="row">
              <h6>Career at Mediusware</h6>
              <h2 class="mb-3">Start</h2>
              <h4>Your Dream Career with us!</h4>
            </div>
          </div>
        </div>

      </div>
    </div>

    <div class="container-fluid" style="background-color: #f7f8fb;">
      <div class="row">
        <div class="col-md-12 body-style">
          <div class="row">
            <!--       Mobile-View-->
            <div class="col-10 offset-1">
              <div class="card-body-top">
                <div class="align-items-center text-center"><h2>Mediusware Jobs</h2></div>
              </div>
              <div class="d-flex justify-content-center search-button flex-wrap">
                <button type="button" class="btn btn-primary active">All(20)</button>
                <button type="button" class="btn btn-default">Art and Design</button>
                <button type="button" class="btn btn-default">Coding</button>
                <button type="button" class="btn btn-default">Database</button>
                <button type="button" class="btn btn-default">Management</button>
              </div>
            </div>
          </div>

          <!--   End-Mobile-View-->

          <div class="tab-content">
            <div class="body-alignment">
              <div class="row">
                <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 card-content" v-for="(item,index) in card"
                     :key="index">
                  <div class="card">
                    <div class="card-body">
                      <img :src="item.image" alt="" class="card-logo">
                      <h2 class="card-title">{{ item.title }}</h2>
                      <h6 class="card-subtitle mb-2 text-muted">Deadline : {{ item.deadline }}</h6>
                      <h6 class="card-text">Vacancy : {{ item.vacancy }}</h6>
                      <a :href="item.route" class="card-link">Read more <img src="../assets/arrow-right 2.png"></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!--              <div class="card-view">-->
            <!--                <div class="card-body d-flex justify-content-center align-items-center h-100">-->
            <!--                  <a href="#" class="card-link"><span>View more</span> <i class="fa fa-plus"></i></a>-->
            <!--                </div>-->
            <!--              </div>-->
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid footer-top">
      <div class="col-md-12">
        <div class="col-10 offset-1">
          <div class="align-items-center"><h2>Why Mediusware?</h2></div>
          <div class="row">
            <div link class="col-md-4" v-for="(item,index) in  whymedius" :key="index">
              <div class="panel panel-default">
                <div style="text-align: center;  padding-bottom: 40px;"><img :src="item.image" alt="" style="width: 200px; height: 134px"></div>
                <h3 style="text-align: center ; padding-bottom: 16px; font-size:20px;" class="panel-title">
                  {{ item.title }}</h3>
                <p class="panel-text">{{ item.para }}</p>
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
      ],
      whymedius: [
        {
          image: require('../assets/209434381.svg'),
          title: 'Friendly Environment',
          para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet nunc lobortis ullamcorper nunc nisi augue non.'
        },
        {
          image: require('../assets/209438921.svg'),
          title: 'Dynamic Team',
          para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet nunc lobortis ullamcorper nunc nisi augue non.'
        },
        {
          image: require('../assets/209449991.svg'),
          title: 'Great Working Culture',
          para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet nunc lobortis ullamcorper nunc nisi augue non.'
        },
      ],
    }
  }
}

</script>
<style lang="scss">

.footer-top {

  p {
    font-family: Poppins;
    //width: 328px;
    margin: 0 auto;
    font-style: normal;
    font-weight: normal;
    line-height: 30px;
    margin-bottom: 105px;
    text-align: center;
  }
}

</style>