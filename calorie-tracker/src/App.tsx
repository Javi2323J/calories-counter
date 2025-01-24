import React, { useReducer, useEffect, useMemo } from 'react'

import { activityReducer, initialState } from './reducers/activity-reducer'

import Form from './components/Form'
import ActivityList from './components/ActivityList'

function App(): React.JSX.Element {
  const [state, dispatch] = useReducer(activityReducer, initialState)

  const canRestartApp = () => useMemo(() => state.activities.length, [state.activities])

  useEffect(() => { // Sincronizado con el state
    localStorage.setItem('activities', JSON.stringify(state.activities))
  }, [state.activities])

  return (
    <>
      <header className="bg-lime-600 py-3">
        <div className="max-w-4xl mx-auto flex justify-between">
          <h1 className="text-center text-lg font-bold text-white uppercase">Calories Counter</h1>

          <button
            onClick={() => dispatch({ type: 'restart-app' })}
            className="bg-gray-800 hover:bg-gray-900 p-2 font-bold uppercase text-white cursor-pointer rounded-lg text-sm disabled:opacity-10"
            disabled={!canRestartApp()}
          >Restart App</button>
        </div>
      </header>

      <section className="bg-lime-500 py-20 px-5">
        <div className="max-w-4xl mx-auto">
          <Form
            dispatch={dispatch}
            state={state}
          />
        </div>
      </section>

      <section className="p-10 mx-auto max-w-4xl">
        <ActivityList
          activities={state.activities}
          dispatch={dispatch}
        />
      </section>
    </>
  )
}

export default App