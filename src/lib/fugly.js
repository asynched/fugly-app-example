export default class FuglyRenderer {
  constructor(view) {
    this.view = view
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
    this.view.render()
  }

  static withView(view) {
    return new FuglyRenderer(view)
  }
}
