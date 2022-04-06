import Home from './view/home'
import About from './view/about'
import Ids from './view/ids'
import NotFound from './view/notFound'

export default function () {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />

        <Route path="use">
          <Route path=":id" element={<Ids />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
      <footer className="fixed bottom-0 w-full justify-evenly flex">
        <Link to="/">Home</Link>
        <Link to="about">About</Link>
      </footer>
    </div>
  )
}
