import HomeView from '@/views/Home'
import FuglyRenderer from '@/lib/fugly'
import '@/styles/globals.css'

FuglyRenderer.withView(new HomeView()).render()
