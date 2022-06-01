export default class FuglyRenderer {
  constructor(view, ...args) {
    this.view = view
    this.args = args
    this.setup()
  }

  setup() {
    window.dispatch = (key, args) => {
      const event = new CustomEvent(key, {
        detail: args,
      })

      this.view.container.dispatchEvent(event)
    }
  }

  render() {
    this.view.render(...this.args)
  }
}
