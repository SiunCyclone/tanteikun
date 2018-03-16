Vue.component('predict-area', {
  template: `
    <div class="predict-area">
      <h3>残り候補数: {{ restOptionNumber }}</h3>
    </div>
  `,

  props: {
    difficulty: Number
  },

  data() {
    return {
      predictNumbers: [],
      minNumber: 1,
      maxNumber: 9,
      restOptionNumber: 0
    };
  },

  mounted() {
    this.restOptionNumber = _.reduce(_.range(10 - difficulty, 9), (a, b) => { return a * b; });
    //Math.floor(Math.random() * maxNumber) + minNumber;
  },

  methods: {

  }
});

Vue.component('select-buttons', {
  template: `
    <div class="select-buttons">
      <slot></slot>
      <ul>
        <li v-for="i in Number(difficulty)">
          <select-button @click="select(i-1)" :val="i-1">{{ i - 1 }}</select-button>
        </li>
      </ul>
      <br>
    </div>
  `,

  props: {
    difficulty: String
  },

  data() {
    return {
      buttons: []
    };
  },

  created() {
    this.buttons = this.$children;
  },

  methods: {
    select(index) {
      this.buttons.forEach(button => {
        button.isActive = (button.index == index);
      });
    }
  }
});

Vue.component('select-button', {
  template: `
    <button class="select-button" :class="{ 'is-active': isActive }" @click="$emit('click')"><slot></slot></button>
  `,

  props: {
    val: Number
  },

  data() {
    return {
      isActive: false,
      index: this.val
    };
  }
});

new Vue({
  el: '#main',

  data: {
    difficulty: '3',
    maxDifficulty: 5
  }
})

