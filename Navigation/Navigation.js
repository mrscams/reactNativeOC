// Navigation/Navigation.js

import { createStackNavigator,createAppContainer } from 'react-navigation'
import Search from '../Components/Search'
import FilmDetail from '../Components/FilmDetail';

const SearchStackNavigator = createStackNavigator({
  Search: { // Ici j'ai appelé la vue "Search" mais on peut mettre ce que l'on veut. C'est le nom qu'on utilisera pour appeler cette vue
    screen: Search,
    navigationOptions: {
      title: 'Rechercher'
    }
  },
  FilmDetail: {
      screen: FilmDetail
  }
})
/**
 * reason for createAppContainer IS 
 * Invariant Violation: The navigation prop is missing for this navigator. In 
react-navigation 3 you must set up your app container directly
 */
const App = createAppContainer(SearchStackNavigator); 


export default App