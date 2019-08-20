
<style lang="scss" scoped>
$maxWidth: 1024px;
$secondWidth: 500px;
$black: #2c3e50;
$green: #3d9ad8;

h2 {
  display: inline-block;
  padding: 0 1rem;
  margin-left: 1rem;
}
.about {
  max-width: $maxWidth;
  margin: 0 auto;
  @media screen and (max-width: 750px) {
    padding-top: 4rem;
  }
}
a:visited {
  color: $black;
}
a:hover,
a:active {
  color: $green;
}
.webDisplay,
.uiDisplay {
  text-align: left;
  > ul {
    li {
      border: 1px solid #ccc;
      display: inline-block;
      width: calc(50% - 2.2rem);
      margin: 1rem;
      vertical-align: top;
      border-radius: 4px;
      transition: 0.3s all;
      @media screen and (max-width: 750px) {
        width: 90%;
      }
      &:hover {
        transform: scale(1.05);
        box-shadow: 5px 5px 10px #ddd;
      }
      p {
        padding: 1%;
        box-sizing: border-box;
        &.screenshot {
          width: 95%;
          margin: 0.5rem auto;
          background: #000;
          box-sizing: border-box;
          overflow: hidden;
          border: 1px solid $green;
          display: flex;
          justify-content: center;
          align-items: center;
          img {
            display: inline-block;
            margin: 0 auto;
            width: 100%;
          }
        }
      }
    }
  }
}
</style>

<template>
  <div class="about">
    <div class="webDisplay">
      <h2>專案作品</h2>
      <ul>
        <li v-for="web in list.webs" :key="web.href">
          <p class="screenshot">
            <img :src="web.imgSrc" alt />
          </p>
          <p>名稱：{{web.name}}</p>
          <p>
            網址：
            <a :href="web.href" target="_blank">{{web.href}}</a>
          </p>
          <p>使用技術：{{web.tech}}</p>
          <p>簡述：{{web.describe}}</p>
        </li>
      </ul>
    </div>
    <div class="uiDisplay">
      <h2>UI實作</h2>
      <ul>
        <li v-for="ui in list.uis" :key="ui.href">
          <p class="screenshot">
            <img :src="ui.imgSrc" alt />
          </p>
          <p>名稱：{{ui.name}}</p>
          <p>
            網址：
            <a :href="ui.href" target="_blank">{{ui.href}}</a>
          </p>
          <p>使用技術：{{ui.tech}}</p>
          <p>簡述：{{ui.describe}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
/* eslint-disable global-require */
export default {
  name: 'collection',
  data() {
    return {
      list: {
        webs: [
          {
            name: 'github.io 個人頁面',
            href: 'https://allen5103.github.io',
            imgSrc: require('../assets/resume.png'),
            tech: 'CSS3 / Javascript / Vue.js / Vue Router',
            describe: '以vue-cli環境開發，完成後發佈至github.io呈現',
          },

          {
            name: '衛生福利部中央健康保險署(新站)',
            href: 'https://wwwx.nhi.gov.tw/',
            imgSrc: require('../assets/nhi.png'),
            tech: 'CSS3 / Javascript / jQuery / RWD',
            describe: '前端切版 & UI效果Javascript',
          },
          {
            name: '教育部體育署',
            href: 'https://www.sa.gov.tw/',
            imgSrc: require('../assets/sa.png'),
            tech: 'CSS3 / Javascript / jQuery / RWD',
            describe: '前端切版 & UI效果Javascript',
          },
          {
            name: '資策會 結訓專題',
            href:
              'http://localhost:8888/Reverb-Dimension%20_noGit/project/__index.php#',
            imgSrc: require('../assets/rd.png'),
            tech: 'CSS3 / Javascript / jQuery',
            describe: '專題發想 / UI設計 / UX規劃 / 前端切版 / UI效果Javascript',
          },
          {
            name: '行政院環境保護署公害陳情網路受理系統 - 環保署公害陳情系統',
            href: 'https://ww3.epa.gov.tw/public/index.aspx',
            imgSrc: require('../assets/high.png'),
            tech: 'CSS3 / Javascript / jQuery / RWD',
            describe: '前端切版 & UI效果Javascript',
          },
        ],
        uis: [
          {
            name: '動態特效-loading動畫',
            href: 'https://codepen.io/allen-liu/pen/WBzGEJ',
            imgSrc: require('../assets/loading.png'),
            tech: 'CSS3 / Javascript',
            describe: '可透過Javascript調整動畫圓圈數量、轉速、縮放大小。',
          },
          {
            name: '網頁元件功能-客製化下拉式選單',
            href: 'https://codepen.io/allen-liu/pen/voKoQm',
            imgSrc: require('../assets/selection.png'),
            tech: 'CSS3 / Javascript',
            describe:
              '隱藏瀏覽器原生下拉式選單，並用Javascript產生可供CSS控制樣式的選項資料。',
          },
          {
            name: '網頁元件功能-圖片上傳即時預覽',
            href: 'https://codepen.io/allen-liu/pen/EqZWNR',
            imgSrc: require('../assets/imgPreview.png'),
            tech: 'CSS3 / Javascript / HTML5',
            describe:
              '利用HTML5的FileReader物件，達到在上傳圖片後可即時預覽的功能。',
          },
          {
            name: '網頁元件功能-萬年曆',
            href: 'https://codepen.io/allen-liu/pen/KLWBba',
            imgSrc: require('../assets/calendar.png'),
            tech: 'CSS3 / Javascript / Vue.js',
            describe: '利用Vue.js的資料綁定，實作可以無限點擊的萬年曆。',
          },
        ],
      },
    };
  },
};
</script>
