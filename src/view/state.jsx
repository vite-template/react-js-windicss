export default () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    document.title = `You clicked ${count} times`
    return () => {
      console.log('remove')
    }
  }, [count]) // 不传参数，只有当count变化时才会执行 传递【】里面执行一次

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  )
}
