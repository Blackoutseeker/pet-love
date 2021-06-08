const INITIAL_STATE: string = 'light'

export interface IThemeAction {
  type: 'CHANGE_THEME'
}

const Theme = (state: string = INITIAL_STATE, action: IThemeAction) => {
  switch (action.type) {
    case 'CHANGE_THEME':
      return state === INITIAL_STATE ? 'dark' : 'light'
    default:
      return state
  }
}

export default Theme
