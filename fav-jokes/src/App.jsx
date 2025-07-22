import './index.css'
import Joke from './components/Joke'
import jokesData from './jokesData'
function App() {
const JokeElements=jokesData.map((joke)=>{
  return <Joke  setup={joke.setup} 
  punchline={joke.punchline} 
  upvotes={joke.upvotes}
  downvotes={joke.downvotes}
  comments={joke.comments}
  ispun={joke.ispun}
  />
})
  return (
    <>
    {JokeElements}
    </>
  )
}

export default App
