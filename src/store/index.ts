import { createStore, combineReducers } from 'redux'
import Theme from './reducers/theme'

export interface IStore {
  theme: string
}

const rootReducer = combineReducers<IStore>({
  theme: Theme
})

const store = createStore(rootReducer)

export default store
