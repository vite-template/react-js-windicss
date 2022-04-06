import React from 'react'
import Home from './view/test-router/home'
import About from './view//test-router/about'
import Ids from './view//test-router/ids'
import NotFound from './view//test-router/notFound'
import State from './view/state'
import UseCallback from './view/callback'
import { Route } from 'react-router-dom'

const themes = {
  light: {
    foreground: '#000000',
    background: '#eeeeee',
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222',
  },
}

const ThemeContext = React.createContext(themes.light)

export default function () {
  return (
    <div className="App">
      <ThemeContext.Provider value={themes.dark}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="UseCallback" element={<UseCallback />} />

          <Route path="use">
            <Route path=":id" element={<Ids />} />
          </Route>

          <Route path="*" element={<NotFound />} />
          <Route path="state" element={<State />} />
        </Routes>
        <footer className="fixed bottom-0 w-full justify-evenly flex">
          <Link to="/">Home</Link>
          <Link to="about">About</Link>
        </footer>
      </ThemeContext.Provider>
    </div>
  )
}
