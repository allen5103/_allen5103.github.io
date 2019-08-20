
<style lang="scss">
$black: #2c3e50;
$green: #3d9ad8;

h3 {
  position: relative;
  margin: 0;
  &::before {
    position: absolute;
    content: "";
    top: 20%;
    left: -12px;
    height: 60%;
    width: 5px;
    background: $green;
  }
  span {
    font-size: 1rem;
  }
}
h2 {
  padding-left: 0.5rem;
  padding-right: 2rem;
  border-bottom: 1px solid $black;
}
</style>

<style lang="scss" scoped>
$maxWidth: 1024px;
$secondWidth: 500px;
$black: #2c3e50;
$green: #3d9ad8;
@keyframes growth {
  0% {
    transform: scaleXç(1);
  }
  50% {
    transform: scaleX(1.1);
  }
  100% {
    transform: scaleX(1);
  }
}
@keyframes shake {
  0% {
    transform: rotate(0deg);
  }
  33% {
    transform: rotate(-15deg);
  }
  66% {
    transform: rotate(15deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
.home {
  max-width: $maxWidth;
  margin: 0 auto;
  @media screen and (max-width: 750px) {
    padding-top: 4rem;
  }
}
.introduce,
.contact {
  text-align: left;
  padding-bottom: 1rem;
  overflow: hidden;
  h2 {
    position: relative;
    padding-right: 0;
    &::after {
      // content: "";
      position: absolute;
      right: 100px;
      top: -110px;
      width: 150px;
      height: 150px;
      background: white url("../assets/head.jpg") no-repeat;
      background-size: 95%;
      background-position: 50% 50%;
      border: 1px solid #ccc;
    }
  }

  p {
    text-indent: 2rem;
    margin-top: 2rem;
  }
  .img {
    width: 200px;
    background: #fff;
    float: right;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #ccc;
    padding: 1%;
    margin: -70px 1rem 0;
    position: relative;
    @media screen and (max-width: 650px) {
      margin: 0px 1rem 0;
    }
    img {
      width: 100%;
    }
    &::after {
      content: "";
      position: absolute;
      z-index: -1;
      left: 0.5rem;
      top: 0.5rem;
      width: 100%;
      height: 100%;
      background: #3d9ad8;
    }
  }
  @media screen and (max-width: $maxWidth) {
    width: 90%;
    margin: 0 auto;
  }
}
.contact {
  .way {
    display: inline-block;
    width: 50%;
    padding-left: 1rem;
    box-sizing: border-box;
    margin-bottom: 1rem;
    @media screen and (max-width: 650px) {
      width: 100%;
    }
    a {
      color: $black;
      display: inline-block;
      vertical-align: middle;
    }
    img {
      display: inline-block;
      vertical-align: middle;
      width: 20px;
      height: 20px;
    }
    &:hover {
      img {
        animation: shake 0.2s infinite;
      }
    }
  }
}
.learnAndWork,
.abilities,
.contact {
  text-align: left;
  display: inline-block;
  width: 50%;
  padding: 0 4px;
  box-sizing: border-box;
  vertical-align: top;
  @media screen and (max-width: $maxWidth) {
    width: 90%;
    margin: 0 auto;
  }
  > ul {
    padding-left: 1rem;
  }
}

.abilities {
  > ul {
    text-align: left;
    > li {
      display: inline-block;
      width: 48%;
      vertical-align: top;
      @media screen and (max-width: $secondWidth) {
        width: 90%;
      }
      h3 {
        display: inline-block;
      }
      .tool {
        position: relative;
        cursor: default;
        .bar {
          display: inline-block;
          position: absolute;
          width: 150px;
          height: 5px;
          background: #ccc;
          top: 100%;
          left: 0;
          overflow: hidden;
          .barIn {
            position: absolute;
            top: 0;
            left: 0;
            display: inline-block;
            height: 100%;
            width: 10%;
            background: $green;
            transform-origin: 0 50%;
            &.ani {
              animation: growth 0.5s infinite;
            }
          }
        }
      }
    }
  }
}
</style>
<template>
  <div class="home">
    <!-- <Helloworld :msg="allen" /> -->
    <div class="introduce">
      <h2>{{list[0].title}}</h2>
      <div class="img">
        <img src="../assets/head.jpg" alt />
      </div>
      <p>{{list[0].content}}</p>
    </div>
    <div class="contact">
      <h2>應徵職位</h2>
      <div class="way">
        <h3>前端工程師</h3>
      </div>
    </div>
    <div class="contact">
      <h2>聯絡方式</h2>
      <div class="way" v-for="(contact,index) in icon" :key="index">
        <img :src="contact.icon" :alt="contact.name" /> &nbsp;
        <span>{{contact.href}}</span>
      </div>
    </div>
    <div class="abilities">
      <h2>{{list[2].title}}</h2>
      <ul>
        <li v-for="classes in list[2].content" :key="classes.class">
          <h3>{{classes.class}}</h3>
          <ul>
            <li
              v-for="tool in classes.list"
              :key="tool.name"
              v-on:mouseenter="aniOn($event)"
              v-on:mouseleave="aniOff($event)"
            >
              <p class="tool">
                {{tool.name}}-{{tool.ability}}
                <span class="bar">
                  <span class="barIn" :style="{width:tool.ability}"></span>
                </span>
              </p>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="learnAndWork">
      <h2>{{list[1].title}}</h2>
      <ul>
        <li v-for="item in list[1].content" :key="item.do">
          <h3>
            {{item.do}}
            <br />
            <span>{{item.time}}</span>
          </h3>
          <p v-for="(t,index) in item.think" :key="index">- {{t}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
/* eslint-disable global-require */
// import Helloworld from '../components/HelloWorld.vue';

export default {
  name: 'home',
  // components: { Helloworld },
  data() {
    return {
      allen: 'allen',
      name: '劉序泰 HSU-TAI,LIU(Allen)',
      icon: [
        {
          name: 'mail',
          icon: require('../assets/logo/envelope.png'),
          href: 'Email: al510378@gmail.com',
          link: false,
        },
        {
          name: 'lineID',
          icon: require('../assets/logo/line.png'),
          href: 'Line ID: allen5103',
          link: false,
        },
        {
          name: 'phone',
          icon: require('../assets/logo/telephone.png'),
          href: '手機: 0970-852-205',
          link: false,
        },
      ],
      list: [
        {
          title: '劉序泰HSU-TAI,LIU(Allen)',
          content:
            '新北市永和人，臺北醫學大學醫務管理系畢業，醫院工作後認知自己真的不適合行政工作，毅然決然的辭職，並報名資策會的「互動式網站UI/UX設計師就業養成班」，轉而投入前端這個博大精深的無底洞；在程式的學習過程中，越寫越覺得前端真的有趣，直到現在都還記得自己第一次完成一頁切版的小小成就感。',
        },
        {
          title: '學歷/經歷',
          content: [
            {
              time: '2018/10 ~ 迄今',
              do: '前端工程師 振興發科技有限公司',
              think: [
                '了解如何與設計師及後端工程師(ASP.NET web service & ASP.NET MVC)溝通配合並完成專案(詳見作品集)',
                '自學 SCSS + PostCSS，用於規劃響應式網頁版型，提升工作效率',
                '使用 AJAX & RESTful API 進行前後端資料交換',
                '使用 jQuery Plugin 整合第三方插件動畫效果',
                '串接Google map API / TGOS API，製作互動式地圖效果',
                '目前公司以後端做為主力，故想尋覓一份前端團隊更有規模的工作',
              ],
            },
            {
              time: '2019/02 ~ 2019/03 & 2019/07 ~ 2019/08',
              do: 'Flycan飛肯 Vue.js前端框架業界開發實戰應用課程',
              think: [
                '身為一個2019的前端工程師，知道只有jQuery是不夠的',
                '選擇了Vue，除了一開始的自學外，還幸運的在飛肯受到奶綠茶老師的指導；並期望能在未來能實際應用於工作中',
              ],
            },
            {
              time: '2018/04 ~ 2018/09',
              do: '台北資策會 互動式網站UI/UX設計師就業養成 結訓',
              think: [
                '設計：Photoshop/ Illustrator的應用，培養對視覺美感的敏銳度，提升與設計師配合的效率跟畫面一制性，及製作RWD畫面的流暢度',
                '程式：HTML5/ CSS3/ jQuery / Javascript 的基礎奠定，透過結訓專題，從靜態網頁到動態特效，均能靈活運用，同時擅於自學新寫法提升效能',
              ],
            },
            {
              time: '2016/03 ~ 2017/11',
              do: '計畫助理 國泰綜合醫院 教學部',
              think: [
                '在醫院這個小型社會，在參與 醫院評鑑 及 規劃醫師在職課程 的過程中，學到如何與人有效溝通，以及在體制內有效率的完成任務。',
              ],
            },
            {
              time: '2010/09 ~ 2014/06',
              do: '臺北醫學大學 醫務管理系 畢業',
              think: ['結束學生的身份，對未來有些迷惘但更多的是期待。'],
            },
          ],
        },
        {
          title: '能力值/熟悉程度',
          content: [
            {
              class: '語言',
              list: [
                { name: '中文', ability: '95%' },
                { name: '英文', ability: '80%' },
              ],
            },
            {
              class: '設計軟體',
              list: [
                { name: 'Adobe Photoshop', ability: '50%' },
                { name: 'Adobe Illustrator', ability: '50%' },
              ],
            },
            {
              class: '前端技術',
              list: [
                { name: 'CSS/CSS3/RWD', ability: '90%' },
                { name: 'SCSS', ability: '70%' },
                { name: 'Javascript/ES5/ES6/AJAX', ability: '80%' },
                { name: 'jQuery', ability: '90%' },
                { name: 'Vue.js/Vuex', ability: '60%' },
                { name: 'SVN', ability: '60%' },
                { name: 'Git', ability: '50%' },
              ],
            },
          ],
        },
        { title: '聯絡方式', content: [] },
      ],
    };
  },
  methods: {
    aniOn(e) {
      e.target.querySelector('.barIn').classList.add('ani');
    },
    aniOff(e) {
      e.target.querySelector('.barIn').classList.remove('ani');
    },
  },
};
</script>
