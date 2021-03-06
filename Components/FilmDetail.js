// Components/FilmDetail.js

import React from 'react'
import { StyleSheet, View, Text, ActivityIndicator,ScrollView } from 'react-native'
import {getFilmDetailFromApi} from '../API/TMDBApi'

class FilmDetail extends React.Component {
  constructor(props){
    super(props)
    this.state= {
      film : undefined,
      isLoading : true
    }
  }

  componentDidMount() {
    getFilmDetailFromApi(this.props.navigation.state.params.idFilm).then(data => {
      this.setState({
        film: data,
        isLoading: false
      })
    })
}

  _displayLoading() {
    if (this.state.isLoading) {
        return (
            <View style={styles.loading_container}>
                <ActivityIndicator size='large' />
                {/* Le component ActivityIndicator possède une propriété size 
        pour définir la taille du visuel de chargement : small ou large.
        Par défaut size vaut small, on met donc large pour que le chargement soit bien visible */}
            </View>
        )
    }
  }

  _displayFilm(){
    if(this.state.film != undefined){
      return(
        <ScrollView>
          
        </ScrollView>
      )
    }
  }

  render() {
    return (
      <View style={styles.main_container}>
        {this._displayLoading()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
  },
  loading_container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  }

})

export default FilmDetail