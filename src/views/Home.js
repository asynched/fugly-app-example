import View from '@/lib/view'
import Home from '@/templates/Home.fugly'

export default class HomeView extends View {
  constructor() {
    super({
      renderer: Home,
      dispatchers: {
        increment: () => {
          this.state.counter++
        },
        decrement: () => {
          this.state.counter--
        },
      },
      state: {
        counter: 0,
        name: '@asynched',
      },
    })
  }

  static fromDefaults() {
    return new HomeView()
  }
}
