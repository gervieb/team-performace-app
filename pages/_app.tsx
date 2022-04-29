import { Provider } from 'react-redux'
import { store } from '../redux/store'
import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'

import '../scss/app.scss'
import '../styles/globals.css'

let persistor = persistStore(store);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ChakraProvider>
          <Component {...pageProps} />
        </ChakraProvider>
      </PersistGate>
    </Provider>
  )
}

export default MyApp
