<template>
  <div>
    <div class="offer-wrapper">
      <div class="offer-section">
        <div class="col-10 offset-1">
          <div class="row">
            <div class="col-md-12">
              <h3 class="text-center">What we offer ?</h3>
            </div>
              <div class="col-lg-3 col-md-6 card-box" v-for="(offer,index) in offerSection" :key="index">
                <div class="offer-item text-center">
                  <div class="image"><img :src="offer.img" alt="" class="img-fluid"></div>
                  <h5 class="title">{{ offer.title }}</h5>
                  <p>{{ offer.para }}</p>
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
  data() {
    return {
      offerSection: [
        {
          img: require('../../assets/jobdetails/coffee.svg'),
          title: 'Boost yourself with unlimited coffee.',
          para: 'You can always take a tea or coffee break and enjoy your  time with your colleague.'
        },
        {
          img: require('../../assets/jobdetails/Group 254.svg'),
          title: 'Enjoy your lunch with everyone.',
          para: 'To get a outstanding lunch experience we facilitate uncharged lunch for all.'
        },
        {
          img: require('../../assets/jobdetails/Group 254 (1).svg'),
          title: 'try some evening snack with everyone! ',
          para: 'Hungry stomach is not good for health. our evening snack keep your stomach calm.'
        },
        {
          img: require('../../assets/jobdetails/Group 259.png'),
          title: 'Refresh your mind by playing game! ',
          para: 'Team up and play for a while to refresh your mind and enjoy your time.'
        },
        {
          img: require('../../assets/jobdetails/Group 261.svg'),
          title: 'Spend weekend with your Family. ',
          para: 'Mediusware offer you two days (Saturday and Sunday) of weekend.'
        },
        {
          img: require('../../assets/jobdetails/coffee.svg'),
          title: 'You will never\n' + 'get bored in here.',
          para: 'You will enjoy every bit of your time with some amazing people in our office.'
        },
        {
          img: require('../../assets/jobdetails/Group 262.svg'),
          title: 'Keep yourself fit by exercising daily. ',
          para: 'We care about your health. We have some arrangement for you to excercise.'
        },
        {
          img: require('../../assets/jobdetails/Group 263.svg'),
          title: 'Enjoy your annual retreat with us! ',
          para: 'Happy employees are that we concern. we arrange two annual retreat in every year.'
        },
      ],
    }
  }
}

</script>


<style lang="scss">
.image{
  margin-top: 41.59px ;
}
.card-box {
  position: relative;
  z-index: 0;
  transition: 0.2s all;
  margin-top: 64px;
  img {
    height: 45px;
    width: 45px;
    transition: all .3s;
  }
  &:hover {
    z-index: 1;
    box-shadow: 0px 0px 20px rgba(0, 96, 175, 0.15);
    border-radius: 8px;
    transform: scale(1);
    img {
      transform: rotate(1turn);
    }
  }
}

</style>