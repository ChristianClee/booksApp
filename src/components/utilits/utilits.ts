type checkClosestParantT = (event: React.MouseEvent, list: string[], dispatch: (arg: boolean) => void) => void

export const checkClosestParant: checkClosestParantT = (event, list, dispatch) => {
  let result = false
  console.log(list)
  if (list.length > 0) {
    list.forEach(elem => {
      if (event.target instanceof HTMLElement) {        // checking for TypeScript
        const answer = event.target.closest(`.${elem}`)
        if (answer) result = true
      }
    })
  }
  dispatch(result)
}