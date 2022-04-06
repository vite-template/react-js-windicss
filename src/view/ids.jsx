export default () => {
  const { id } = useParams()
  return (
    <>
      <h1>Ids id = {id}</h1>
      <nav>
        <Link to="/about">go About</Link>
      </nav>
    </>
  )
}
