<script>
import { counter } from "../application/reducers.js";
import { ClickyThing } from "./fns";

export default {
  name: "StatefulThing",
  data: function () {
    return {
      count: 0,
    };
  },
  methods: {
    dispatch(op) {
      this.count = counter(this.count, op);
    },
    // dispatch: counter.bind(null, this.count),
  },
  render: function (createElement) {
    // console.log("got to stateful render");
    return ClickyThing(
      {
        props: {
          msg: "hello world!",
          count: this.count,
          // dispatch: (op) => {
          //   if (op === "+") {
          //     this.count += 1;
          //   } else if (op === "-") {
          //     this.count -= 1;
          //   }
          // },
          dispatch: this.dispatch,
        },
      },
      []
    )(createElement);
  },
};
</script>