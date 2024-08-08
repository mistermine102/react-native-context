import { createContext } from 'react'

const BlogContext = createContext()

export const BlogProvider = ({ children }) => <BlogContext.Provider> {children}</BlogContext.Provider>
