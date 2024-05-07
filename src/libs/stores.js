import { create } from 'zustand'

const useAppStore = create((set, get) => ({
    userdata: {},
    set: (data) => set((state) => ({ userdata: {...state.userdata, ...data} })),
    clear: () => set({ userdata: 0 }),
}))




//usage

//Fetching everything
// const state = useBearStore()
// const nuts = useBearStore((state) => state.nuts)
// const honey = useBearStore((state) => state.honey)

//import { useShallow } from 'zustand/react/shallow'
// Array pick, re-renders the component when either state.nuts or state.honey change
// const [nuts, honey] = useBearStore(
//   useShallow((state) => [state.nuts, state.honey]),
// )


//Overwriting state
// import omit from 'lodash-es/omit'
// const useFishStore = create((set) => ({
//   salmon: 1,
//   tuna: 2,
//   deleteEverything: () => set({}, true), // clears the entire store, actions included
//   deleteTuna: () => set((state) => omit(state, ['tuna']), true),
// }))


//Async actions
// const useFishStore = create((set) => ({
//   fishies: {},
//   fetch: async (pond) => {
//     const response = await fetch(pond)
//     set({ fishies: await response.json() })
//   },
// }))

//Read from state in actions
// const useSoundStore = create((set, get) => ({
//   sound: 'grunt',
//   action: () => {
//     const sound = get().sound
//     ...

//Reading/writing state and reacting to changes outside of components
// const useDogStore = create(() => ({ paw: true, snout: true, fur: true }))

//Getting non-reactive fresh state
// const paw = useDogStore.getState().paw
// Listening to all changes, fires synchronously on every change
// const unsub1 = useDogStore.subscribe(console.log)
// Updating state, will trigger listeners
// useDogStore.setState({ paw: false })
// Unsubscribe listeners
// unsub1()


//change deep nested states
// import { produce } from 'immer'
// const useLushStore = create((set) => ({
//   lush: { forest: { contains: { a: 'bear' } } },
//   clearForest: () =>
//     set(
//       produce((state) => {
//         state.lush.forest.contains = null
//       }),
//     ),
// }))

// const clearForest = useLushStore((state) => state.clearForest)
// clearForest()