import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import QuizComponent from './QuizComponent';
import ResultsComponent from './ResultsComponent';
import quizData from './quizData.json';
export default function App() {
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);
  const [score, setScore] = useState(0);

  const handleQuizStart = () => {
    setQuizStarted(true);
  };

  const handleQuizFinish = (score) => {
    setScore(score);
    setQuizFinished(true);
  };

  const handleRestartQuiz = () => {
    setQuizStarted(false);
    setQuizFinished(false);
    setScore(0);
  };

  return (
    <View style={styles.container}>
      {quizFinished ? (
        <ResultsComponent score={score} onRestart={handleRestartQuiz} />
      ) : quizStarted ? (
        <QuizComponent questions={quizData.questions} onFinish={handleQuizFinish} />
      ) : (
        <View style={styles.startContainer}>
          <Text style={styles.startText}>Welcome to the Quiz App!</Text>
          <Text style={styles.startSubText}>Press the button below to start the quiz.</Text>
          <Text style={styles.startSubText}>Good luck!</Text>
          <View style={styles.startButtonContainer}>
            <TouchableOpacity style={styles.startButton} onPress={handleQuizStart}>
              <Text style={styles.startButtonText}>Start Quiz</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  startContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  startText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  startSubText: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 10,
  },
  startButtonContainer: {
    marginTop: 20,
  },
  startButton: {
    backgroundColor: '#DDDDDD',
    padding: 10,
    borderRadius: 5,
  },
  startButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
