import React from 'react'

import { categories } from '../data/categories'

export default function Form(): React.JSX.Element {
    return (
        <form className='space-y-5 bg-white shadow p-10 rounded-lg'>
            <div className="grid grid-cols-1 gap-3">
                <label htmlFor="category" className="font-bold">Category:</label>
                <select className="border border-slate-300 p-2 rounded-lg w-full bg-white" id="category">
                    {categories.map(category => (
                        <option key={category.id} value={category.id}>
                            {category.name}
                        </option>
                    ))}
                </select>
            </div>

            <div className="grid grid-cols-1 gap-3">
                <label htmlFor="excercise" className="font-bold">Excercise:</label>
                <input id="excercise" type="text" className="border border-slate-300 p-2 rounded-lg" placeholder="Ej. Food" />
            </div>

            <div className="grid grid-cols-1 gap-3">
                <label htmlFor="calories" className="font-bold">Calories:</label>
                <input id="calories" type="number" className="border border-slate-300 p-2 rounded-lg" placeholder="Calories" />
            </div>

            <input type="submit" className="bg-gray-800 hover:bg-gray-900 w-full p-2 font-bold uppercase text-white cursor-pointer" value="Save food or excercise" />
        </form>
    )
}