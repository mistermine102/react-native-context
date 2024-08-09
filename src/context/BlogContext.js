import { createContext, useReducer } from 'react'

const BlogContext = createContext()

const reducer = (state, action) => {
  switch (action.type) {
    case 'add_post':
      return { ...state, posts: [...state.posts, action.payload] }
    default:
      break
  }
}

export const BlogProvider = ({ children }) => {
  const [{ posts }, dispatch] = useReducer(reducer, {
    posts: [
      {
        title: 'Blog #1',
      },
      {
        title: 'Blog #2',
      },
    ],
  })

  const addPost = newPost => {
    dispatch({ type: 'add_post', payload: newPost })
  }

  return <BlogContext.Provider value={{ data: posts, addPost }}>{children}</BlogContext.Provider>
}

export default BlogContext
