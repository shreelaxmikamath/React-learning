import './index.css'
import Joke from './components/Joke'
function App() {

  return (
    <>
      <Joke 
          punchline="I can't wait to see her face light up when she opens it."
      />
      <Joke 
          setup="How did the hacker escape the police"
          punchline="He just ransomware!"
      />
      <Joke 
          setup="Why don't pirates travel on mountain roads?"
          punchline="Scurvy."
      />
      <Joke 
          setup="Why do bees stay in the hive in the winter?"
          punchline="Swarns"
      />
    </>
  )
}

export default App
