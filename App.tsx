
import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import FlatCards from './Components/FlatCards'
import ElevatedCards from './Components/ElevatedCards'
import FancyCards from './Components/FancyCards'
import ActionCards from './Components/ActionCards'
import ContactList from './Components/ContactList'

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
      
      <FlatCards/>
      <ElevatedCards/>
      <FancyCards/>
      <ContactList/>
      <ActionCards/>
      
      </ScrollView>
    </SafeAreaView>
  )
}

export default App