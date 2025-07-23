import './App.css'
import Header from './components/header.jsx'
import Entry from './components/Entry.jsx'
import Data from './Data.js'
function App() {
const entryElement=Data.map((data)=>{
  return <Entry 
  key={data.id}
  {...data}
  />
})
  return (
    <>   
    <Header />
    {entryElement}
    </>
  )
}

export default App
