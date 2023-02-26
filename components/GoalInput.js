import { View, TextInput, Button, StyleSheet } from 'react-native'
import { useState } from 'react'
function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState('')

  function goalInputHandler(enteredText) {
    //console.log(enteredText)
    setEnteredGoalText(enteredText)
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText)
    setEnteredGoalText('')
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder='Your Course Goal'
        onChangeText={goalInputHandler}
        value={enteredGoalText}
      />
      <Button title='Add Goal' onPress={addGoalHandler} />
    </View>
  )
}

export default GoalInput

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  textInput: {
    borderWidth: 1,
    width: '70%',
    borderColor: '#cccccc',
    marginRight: 8,
    padding: 8,
  },
})
