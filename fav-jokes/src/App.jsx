import './index.css'
import Joke from './components/Joke'
function App() {

  return (
    <>
      <Joke 
          punchline="I can't wait to see her face light up when she opens it."
          upvotes={10}
          downvotes={5}
          comments={["eww","cool"]}
          ispun={!true}
      />
      <Joke 
          setup="How did the hacker escape the police"
          punchline="He just ransomware!"
          upvotes={0}
          downvotes={5}
          comments={["eww","eeks"]}
          ispun={true}
      />
      <Joke 
          setup="Why don't pirates travel on mountain roads?"
          punchline="Scurvy."
          upvotes={30}
          downvotes={50}
          comments={["eww","sus"]}
          ispun={true}
      />
      <Joke 
          setup="Why do bees stay in the hive in the winter?"
          punchline="Swarns"
          upvotes={1}
          downvotes={5}
          comments={["eww","Nahh!"]}
          ispun={true}
      />
    </>
  )
}

export default App
