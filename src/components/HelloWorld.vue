<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>
      <StatefulThing></StatefulThing>
      <ClickyThing
        msg="hello world vuex!"
        v-bind:count="count"
        v-bind:dispatch="dispatcher"
      >
      </ClickyThing>
    </div>
  </div>
</template>

<script>
import StatefulThing from "./StatefulThing.vue";
import ClickyThing from "./ClickyThing.vue";

export default {
  name: "HelloWorld",
  components: {
    StatefulThing,
    ClickyThing,
  },
  props: {
    msg: String,
  },
  computed: {
    count() {
      return this.$store.state.count;
    },
  },
  methods: {
    dispatcher(op) {
      if (op === "+") {
        this.$store.commit("increment");
      } else if (op === "-") {
        this.$store.commit("decrement");
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
