import { useEffect, useState } from "react";
import { IoTimeOutline } from "react-icons/io5";
import { FaFire } from "react-icons/fa";
import PropTypes from 'prop-types';
const OurRecipe = ({ AddToRecipeQueue, recipeQueue,removeRecipe,preparedRecipe,CalculateTimeAndCaluries,totalCalorie,totalTime }) => {
    let [recipes, setRecipes] = useState([]);
    useEffect(() => {
        fetch('Resipe.json')
            .then(res => res.json())
            .then(data => setRecipes(data))
    }, [])
    return (
        <>
            <div>
                <div className="md:flex justify-between gap-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:w-2/3">
                        {
                            recipes.map(recipe =>
                                <div className="card card-compact bg-base-100 shadow-xl">
                                    <div className="h-52 w-full ">
                                        <img className="h-full w-full rounded-t-xl" key={recipe.recipeId}
                                            src={recipe.recipeImage} />
                                    </div>
                                    <div className="card-body">
                                        <h2 className="card-title">{recipe.recipeName}</h2>
                                        <p>{recipe.recipeTitle}</p>
                                        <hr></hr>
                                        <div>
                                            <h1 className="mb-3"><span className="font-bold">Ingredients :</span> {recipe.ingredients.length} </h1>
                                            <ul className="font-[300] text-sm space-y-3 ml-7">
                                                {
                                                    recipe.ingredients.map((item, idx) => <li className="list-disc" key={idx}>{item}</li>)
                                                }
                                            </ul>
                                        </div>
                                        <hr />
                                        <div className="flex justify-between mt-2">
                                            <span className="flex items-center gap-1"><IoTimeOutline></IoTimeOutline>{recipe.preparingTime} mins</span> <br />
                                            <span className="flex items-center gap-1"><FaFire />{recipe.calories} Calories</span>
                                        </div>
                                        <div className="card-actions">
                                            <button onClick={() => AddToRecipeQueue(recipe)} className=' btn px-4 py-3 my-3 rounded-full text-sm font-[500] bg-[#0BE58A]'>Want to Cook</button>

                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                    <div className=" md:w-1/3 bg-base-100 shadow-xl p-3 rounded-xl">
                        <h1 className="font-bold text-center pb-2">Want To Cook : {recipeQueue.length}</h1> <hr />
                        <div className="overflow-x-auto text-sm">
                            <table className="table">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Time</th>
                                        <th>Calories</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        recipeQueue.map((recipe, index) =>
                                            <tr key={index}>
                                                <th>{index + 1}</th>
                                                <td className="text-sm">{recipe.recipeName}</td>
                                                <td className="text-sm">{recipe.preparingTime}</td>
                                                <td className="text-sm">
                                                    <button onClick={() => {
                                                        removeRecipe(recipe.recipeId),
                                                        CalculateTimeAndCaluries(recipe.preparingTime,recipe.calories)
                                                        }} className='bg-[#0BE58A] px-2 py-1 rounded-xl'>Preparing</button>
                                                </td>
                                            </tr>
                                        )
                                    }

                                </tbody>
                            </table>
                        </div>

                        <div className="mt-10">
                            <h1 className="font-bold text-center pb-2">Currently Cooking : {recipeQueue.length}</h1> <hr />
                            <div className="overflow-x-auto text-sm">
                                <table className="table">
                                    {/* head */}
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Time</th>
                                            <th>Calories</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            preparedRecipe.map((recipe, index) =>
                                                <tr key={index}>
                                                    <th>{index + 1}</th>
                                                    <td className="text-sm">{recipe.preparingTime}</td>
                                                    <td className="text-sm">{recipe.calories}</td>
                                                </tr>
                                            )
                                        }
                                        <tr>
                                            <th></th>
                                            <td>Total Preparing : {totalTime} </td>
                                            <td>Total Calories : {totalCalorie}</td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};
OurRecipe.propTypes = {
    recipeQueue: PropTypes.array, AddToRecipeQueue: PropTypes.func,preparedRecipe:PropTypes.array
}
export default OurRecipe;