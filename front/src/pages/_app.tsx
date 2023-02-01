import type { AppProps } from 'next/app'
import { store } from '@/rtk/store'
import { Provider } from 'react-redux'
import { setupWorker } from 'msw'
import { setupServer } from 'msw/node'
import { handlers } from '@/mock/handlers'
import 'normalize.css'
import '@/styles/global.scss'

if (process.env.NODE_ENV === 'development') {
  if (typeof window === 'undefined') {
    setupServer(...handlers).listen()
  } else {
    setupWorker(...handlers).start({ onUnhandledRequest: 'bypass' })
  }
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}
