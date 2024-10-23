import { useState } from 'react'
import './App.css'
import Banner from './Components/Banner'
import Header from './Components/Header'
import OurRecipe from './Components/OurRecipe'
function App() {
  let [recipeQueue, setRecipeQueue] = useState([]);
  let [preparedRecipe, setPreparedRecipe] = useState([]);
  let [totalTime, setTime] = useState(0);
  let [totalCalorie, setCalorie] = useState(0);
  let AddToRecipeQueue = (recipe) => {
    let isExist = recipeQueue.find(previewRecipe => previewRecipe.recipeId === recipe.recipeId);
    if (!isExist) {
      setRecipeQueue([...recipeQueue, recipe]);
    }
    else {
      alert('This is already Exits!')
    }
    console.log(recipeQueue)
  }
  let removeRecipe = (id) => {
    let removeRecipe = recipeQueue.find(recipe => recipe.recipeId === id)
    setPreparedRecipe([...preparedRecipe, removeRecipe])
    let updateQueue = recipeQueue.filter(recipe => recipe.recipeId !== id);
    setRecipeQueue(updateQueue);

  }
  let CalculateTimeAndCaluries = (time,calorie)=> {
    setTime(totalTime + time  )
    setCalorie(totalCalorie + calorie)
  }
  return (
    <div className='w-10/12 mx-auto py-4'>
      <Header></Header>
      <Banner></Banner>
      <OurRecipe
        AddToRecipeQueue={AddToRecipeQueue}
        recipeQueue={recipeQueue}
        removeRecipe={removeRecipe}
        preparedRecipe={preparedRecipe}
        CalculateTimeAndCaluries={CalculateTimeAndCaluries}
        totalCalorie={totalCalorie}
        totalTime={totalTime}
        ></OurRecipe>

    </div>
  )
};

export default App
