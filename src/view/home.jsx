export default () => {
  return (
    <>
      <main>
        <h2 className="bg-light-900">Welcome to the Home!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <nav>
        <Link to="/about">go About</Link>
        <br />
        <Link to="/use/123">go Ids123</Link>
        <br />
        <Link to="/user">go 404</Link>
      </nav>
    </>
  )
}
