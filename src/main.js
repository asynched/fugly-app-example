import HomeView from '@/views/Home'
import FuglyRenderer from '@/lib/fugly'
import '@/styles/globals.css'

const renderer = new FuglyRenderer(HomeView.fromDefaults())
renderer.render()
