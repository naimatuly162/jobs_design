<template>
  <div>
    <Header></Header>

    <div class="bg-image mask">
      <div class="d-flex align-items-center h-100 mobile-show" style="margin-left:260px;">
        <div class="text-white justify-content-center align-items-center">
          <h2 class="title mb-3">Join Our Team at Mediusware</h2>
          <h4 class="sub-title mb-3">UI/UX Designer</h4>
        </div>
      </div>
    </div>
    <div class="container-fluid">
      <div class="col-10 offset-1">
        <div class="row">
          <div class="col-md-12 d-flex justify-content-center">

            <div class="col-md-8">
              <div class="left-section">
                <div class="image-container"><img src="../../assets/group/Group 245.svg"/></div>
                <h4 class="title">UI/UX Designer</h4>
                <div class="menu-item d-flex flex-column flex-sm-row">
                  <a><img src="../../assets/jobdetails/package 1.svg" alt=""/>Status: Full-Time</a>
                  <a><img src="../../assets/jobdetails/layers 1.svg" alt=""/>Arts and Design</a>
                  <a><img src="../../assets/jobdetails/clock 1.svg" alt=""/>Deadline: 27th July</a>
                </div>
                <div class="description">
                  <h5>Description</h5>
                  <p>We are not just offering a job but a meaningful career! Come join our passionate team!
                    As a Fortune 50 company, we hire the best employees to serve our customers, making us leader the
                    insurance and financial services industry. State Farm embraces diversity and inclusion to ensure a
                    workforce that is engaged, builds on the strengths and talents of all associates, and creates a Good
                    Neighbor culture.
                  </p>
                </div>
                <h5>Vacancy</h5>
                <p><strong>05</strong></p>

                <div class="responsibility">
                  <h5>Job Responsibility</h5>
                  <div v-for="(item,index) in responsibility" :key="index">
                    <img class="image-item" src="../../assets/jobdetails/bullet-point.svg" alt=""/>
                    <a>{{ item.para }}</a>
                  </div>
                </div>

                <h5>Experience</h5>
                <p><strong>At least 2 years of working experience</strong></p>
                <h5>Education</h5>
                <p><strong>Bachelor degree in any discipline.</strong></p>

                <div class="requirements">
                  <h5>Requirements</h5>
                  <div v-for="(item,index) in requirements" :key="index">
                    <img class="image-item" src="../../assets/jobdetails/bullet-point.svg" alt=""/>
                    <a>{{ item.para }}</a>
                  </div>
                </div>

                <div class="skills">
                  <h5>Soft Skills</h5>
                  <div v-for="(item,index) in skills" :key="index">
                    <img class="image-item" src="../../assets/jobdetails/bullet-point.svg" alt=""/>
                    <a>{{ item.para }}</a>
                  </div>
                </div>
                <div class="appreciate">
                  <h5>Appreciate</h5>
                  <div v-for="(item,index) in appreciate" :key="index">
                    <img class="image-item" src="../../assets/jobdetails/bullet-point.svg" alt=""/>
                    <a>{{ item.para }}</a>
                  </div>
                </div>
                <h5>Salary</h5>
                <p><strong>25k - 30k(Based in skill)</strong></p>
                <h5>Location</h5>
                <p style="margin-bottom: 48px"><strong>Ring Road, House 18/5, Floor - 2nd Dhaka, 1207</strong></p>
                <button class="btn btn-default">Apply Now</button>
              </div>
            </div>

            <div class="col-md-4">
              <div class="right-section">
                <h3>Key Information</h3>
                <div class="d-flex key-info" v-for="(item,index) in keyInfo" :key="index">
                  <div class="w-50">{{ item.title }}</div>
                  <div class="w-50">{{ item.info }}</div>
                </div>
                <div class="apply-btn text-center">
                  <a class="btn btn-default" href="#">Apply Now</a>
                </div>
                <h5 class="text-center" style="margin-top: 14px">Share a Job</h5>
                <div class="social d-flex flex-wrap justify-content-center">
                  <div  v-for="(item,index) in socialLink" :key="index">
                    <a :href="item.route">
                      <img :src="item.image" alt="" class="card-link text-center">
                    </a>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
    <Offer></Offer>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "../Header";
import Footer from "../Footer";
import Offer from "./OfferSection";

export default {
  components: {Footer, Header, Offer},
  data() {
    return {
      keyInfo: [
        {title: 'Published on:', info: '31 August, 2021'},
        {title: 'Vacancy:', info: '2'},
        {title: 'Experience:', info: '2 years'},
        {title: 'Salary:', info: 'Tk. 25,000 - 45,000 (Monthly)'},
        {title: 'Job type:', info: 'Full Time'},
        {
          title: 'Location:', info: 'Ring Road, House \n' +
              '18/5, Floor - 2nd \n' +
              'Dhaka, 1207'
        },
      ],
      appreciate: [
        {para: 'Have a work experience with this UX/UI Sector and have strong portfolio'},
        {para: 'Leadership skills and lead a design team of total five people'},
        {para: 'Have experience to handle international client'},
        {para: 'Basic understanding of Backend logic'},
        {para: 'HTML and CSS3 Coding skills'},
      ],
      requirements: [
        {para: 'Primary goals will be to design the next generation of web applications, mobile apps, and other mobile interfaces across multiple platforms such as iOS, Android, and mobile web.'},
        {para: 'Illustrate design ideas and user journeys as required using storyboards, process flows, wireframes and sitemaps'},
        {
          para: 'Understanding the business requirements and proposing the right solution that suits the Group\n' +
              'ecosystem'
        },
        {para: 'Up-to-date knowledge of design software such as Adobe Creative Cloud, specifically Adobe Illustrator, Adobe XD, Adobe Photoshop, and common wireframe tools\n'},
        {para: 'Excellent communicator, highly organized and detail driven professional with a strong sense of team spirit to collaborate with various internal and external stakeholders\n'},
      ],
      responsibility: [
        {para: 'Developing wireframes and task flows based on user needs'},
        {para: 'Collaborating with Designers and Developers to create user-friendly software'},
        {para: 'Understand product specifications and user psychology.'},
      ],
      skill: [
        {para: 'Good communication skills and good people skills'},
        {para: 'Good problem solving and Analytical skills'},
        {para: 'Good writing skill and proper english'},
        {para: 'English speaking skill'},
        {para: 'Good visual taste '},
      ],
      socialLink: [
        {route: 'https://www.facebook.com/mediusware', image: require('../../assets/jobdetails/facebook.svg')},
        {route: 'https://twitter.com/MediuswareLtd', image: require('../../assets/jobdetails/twitter.svg')},
        {
          route: 'https://www.linkedin.com/company/mediusware-ltd',
          image: require('../../assets/jobdetails/linkedin.svg')
        },
        {route: 'https://www.instagram.com/mediusware', image: require('../../assets/jobdetails/link.svg')},
      ],
    }
  }
}
</script>

<style lang="scss">
.social{
  padding: 0 20px;
}
.card-link {
  margin-bottom: 38px;
  margin-top: 23px;
  margin-right: 20px;
}
</style>