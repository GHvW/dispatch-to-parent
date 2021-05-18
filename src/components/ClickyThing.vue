<script>
import { div, text, button } from "../fn-components/html.js";

export default {
  name: "ClickyThing",
  props: {
    msg: String,
    count: Number,
    // (action, payload) => NewState (Effect?)
    dispatch: Function,
  },
  render: function (el) {
    // console.log("got to clicky render");
    return div({}, [
      div({}, [text(`count: ${this.count}`)]),
      button(
        {
          on: {
            click: () => this.dispatch("+"),
          },
        },
        [text("increase")]
      ),
      button(
        {
          on: {
            click: () => this.dispatch("-"),
          },
        },
        [text("decrease")]
      ),
    ])(el);
    // return el("div", {}, [this.msg, this.msg]);
  },
};
</script>