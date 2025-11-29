import { useContext, createContext } from "react";


export const DataContext = createContext(null)

export function ServerProvider({children}: {children: React.ReactNode}) {
  return (
    <DataContext.Provider value={null}>
      {children}
    </DataContext.Provider>
  )
}

export function useDataProvider() {
  const context = useContext(DataContext)
  if(!context) {
    throw new Error('useDataProvider must be used inside DataContextProvider')
  }
  return context
}
