import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const QuizComponent = ({ questions , onFinish }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

    const handleAnswerPress = (selectedAnswer) => {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedAnswer === currentQuestion.answer) {
      setScore(score + 1);
    }
    if (currentQuestionIndex === questions.length - 1) {
      onFinish(score + (selectedAnswer === currentQuestion.answer ? 1 : 0));
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const currentQuestionData = questions[currentQuestionIndex];
  console.log(currentQuestionData)

  return (
    <View style={styles.container}>
      <View style={styles.questionContainer}>
        <Text style={styles.questionText}>{currentQuestionData && currentQuestionData.question}</Text>
      </View>
      <View style={styles.optionsContainer}>
        {currentQuestionData && currentQuestionData.options.map((option) => (
          <TouchableOpacity key={option} style={styles.optionButton} onPress={() => handleAnswerPress(option)}>
            <Text style={styles.optionText}>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  questionContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  questionText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  optionsContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  optionButton: {
    backgroundColor: '#DDDDDD',
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  optionText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default QuizComponent;