const app = Vue.createApp({
data() {
return {
a: null,       
 b: null,       
 c: null,       
 result: null   
};
},
methods: {
        Max() {
          let max = this.a;
          if (this.b > max) {
            max = this.b;
          }
          if (this.c > max) {
            max = this.c;
          }
          this.result = max;
        }
},
});
app.mount("#app");
