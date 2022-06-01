const makeObservableState = (state, observer) => {
  return new Proxy(state, {
    get: Reflect.get,
    set: (...args) => {
      const output = Reflect.set(...args)
      observer()
      return output
    },
  })
}

export default class View {
  constructor({
    renderer = () => void 0,
    state = {},
    dispatchers = {},
    container = document.body,
  } = {}) {
    this.dispatchers = dispatchers
    this.container = container
    this.renderer = renderer
    this.state = state
    this.setup()
  }

  setup() {
    this.state = makeObservableState(this.state, this.render.bind(this))

    for (const [key, dispatcher] of Object.entries(this.dispatchers)) {
      this.container.addEventListener(key, (e) => {
        dispatcher(e)
      })
    }
  }

  render() {
    const html = this.renderer(this.state)
    this.container.innerHTML = html
  }
}
