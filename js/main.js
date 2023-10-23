new Vue({
  el: "#app",
  data: {
    count: [],  
    stat1: "Собирает фотографии из заказов пользователей.",
    stat2: "Выгружает по папкам.",
    visible: true,
    title:"",
    IDNumber:"",
    },
    methods: {
      showMessage(triger) {
      this.title = triger.event,
      this.IDNumber = triger.id,
      this.link = triger.id
      }
    },
  created() {
    fetch("https://dev-cabinet.seenday.com/e.scripts?page=pages:unload&event=get")
    .then(response => { return response.json(); })
    .then(resp => {console.log(resp.response);
    this.count = resp.response.data})
  }
});

Vue.component('block', {
  props: ['dat'],
  template: 
  `<div class="block" :class="dat.status">
  Задача выполнена: <span class="text-bold">{{dat.date}}</span><br/>
  Статус задачи: <span class="text-bold">{{dat.status_text}}</span><br/>
  ID выгрузки: <span class="text-bold">{{dat.id}}</span><br/>
  <span v-html=dat.event></span><br/>
  Размер выгрузки: <span class="text-bold">{{dat.size}}</span>
  </div> `,
})










