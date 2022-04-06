const filter = (f, arr) => arr.filter(f)

export default () => {
  const [count, setCount] = useState(0)

  function foo() {
    return 'bar'
  }

  const memoizedCallback0 = useCallback(() => foo, [])
  const memoizedCallback = useCallback(foo, [])
  const memoizedResult2 = useMemo(foo, [])
  const memoizedResult = useMemo(() => foo, [])

  useEffect(() => {
    document.title = `You clicked ${count} times`
    console.log(memoizedCallback0()())
    console.log(memoizedCallback()) // 返回函数
    console.log(memoizedResult2) // 返回函数 执行结果
    console.log(memoizedResult()) // 返回函数同第一个

    return () => {
      console.log('remove')
    }
  }, [count]) // 不传参数，只有当count变化时才会执行 传递【】里面执行一次

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <h3>useCallback</h3>
      <hr />
      <h3>useMemo</h3>
    </div>
  )
}

// useCallback && useMemo https://medium.com/@jan.hesters/usecallback-vs-usememo-c23ad1dc60#:~:text=useCallback%20and%20useMemo%20both%20expect%20a%20function%20and,equivalent%20to%20useMemo%20%28%20%28%29%20%3D%3E%20fn%2C%20deps%29.

/**
  * useCallback [返回函数]

  * useMemo [返回函数&调用结果]


  useCallback and useMemo both expect a function and an array of dependencies. 
  The difference is that useCallback returns its function when the dependencies 
  change while useMemo calls its function and returns the result.
 * **/
