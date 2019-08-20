<template>
  <div id="app">
    <div id="nav">
      <router-link class="link" to="/">Resume</router-link>
      <router-link class="link" to="/portfolio">Portfolio</router-link>
    </div>
    <router-view />
    <a class="toTop" href="javascript:;" @click="toTop()">
      <img src="./assets/pointing-up-arrow.png" alt />
    </a>
  </div>
</template>
<script>
export default {
  data() {
    return {
      doc: document,
      win: window,
    };
  },
  methods: {
    setToTop() {
      this.doc.addEventListener('scroll', () => {
        if (this.win.scrollY > 50) {
          this.doc.querySelector('.toTop').style.display = 'inline-block';
        } else {
          this.doc.querySelector('.toTop').style.display = 'none';
        }
      });
      this.doc.querySelectorAll('.link').forEach((a) => {
        a.addEventListener('click', () => {
          window.scrollTo(0, 0);
        });
      });
    },
    toTop() {
      this.win.scrollTo(0, 0);
    },
  },
  mounted() {
    this.setToTop();
  },
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #fff;
}
#nav {
  padding: 15px 30px;
  text-align: left;
  position: relative;
  max-width: 1024px;
  margin: 0 auto 1rem;
  background: #fff;
  z-index: 1;
  @media screen and (max-width: 750px) {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 2;
  }
  &::after {
    transition: 0.3s all;
    content: "";
    height: 3px;
    width: 50%;
    top: calc(50% - 2px);
    left: 2rem;
    position: absolute;
    background-color: #3d9ad8;
    z-index: -1;
    @media screen and (max-width: 750px) {
      width: 70%;
    }
  }
  a {
    font-size: 1.3rem;
    color: #2c3e50;
    padding: 0 1rem;
    margin-right: 0.5rem;
    border: 1px solid #dadada;
    text-decoration: none;
    transition: 0.3s transform;
    background: #fff;
    display: inline-block;
    &:hover,
    &.router-link-exact-active {
      background: #3d9ad8;
      color: white;
    }
    &:hover {
      transform: scale(1.1);
      font-weight: 600;
    }
  }
}
</style>
