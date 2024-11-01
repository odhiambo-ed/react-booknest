// Process to creating a react context

// Create a context
// Take your provider and wrap around the component tree
// Pass the data
// Read the data you have passed.


import { Component, createContext } from 'react'

export const ThemeContext = createContext();
export default class ThemeContextProvider extends Component {
  render() {
    return (
      <div>Provider</div>
    )
  }
}
