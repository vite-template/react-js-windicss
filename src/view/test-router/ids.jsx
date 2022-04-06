export default () => {
  const { id } = useParams() // 获取路由参数
  let [searchParams, setSearchParams] = useSearchParams() // 获取搜索参数
  return (
    <>
      <h1>Ids id = {id}</h1>
      <h3>
        {searchParams.get('id')} <span>setUrl </span>
      </h3>
      <nav>
        <Link to="/about">go About</Link>
      </nav>
    </>
  )
}
