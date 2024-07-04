import Header from '../Header/Header'
import Hero from '../Hero/Hero'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='App-Container'>
        <main className='App-Holder'>
          <section className='App-Content'>
            <Header/>
            <Hero/>
            <div className='App-Items'>
              <Outlet/>
            </div>
          </section>
        </main>
      </div>
  )
}

export default Layout