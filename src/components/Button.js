import react from "react"

const Button = ( ) => {
  const [count, setCount] = useState(0)
  return <View>
    <Text>{count}</Text>
    <Button onClick={() => setCount(count + 1)} />
  </View>   
}

<switch>
  <Route path="/">
    <ComponentA data={data} />
  </Route>
</switch>