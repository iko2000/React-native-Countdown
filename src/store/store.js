import { create } from 'zustand'

export const useStorgecomponent = create((set) => ({
  time: 5,
  currentTopic: "",
  topicsHistory: [],
  setTimerto10: () => set((time) => ({ time: 10 })),
  setTimerto15: () => set((time) => ({ time: 15 })),
  setTimerto5: () => set((time) => ({ time: 5})),
  setcurrentTopic: (topic) => set({ currentTopic: topic }),
  setHistory: (topic) => set((state) => ({ topicsHistory: [...state.topicsHistory, topic] }))
}))