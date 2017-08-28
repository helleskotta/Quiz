var app = angular.module("quizApp",[]);

app.controller("questionCtrl", function($scope){
  $scope.questions = [
    {question: "Vad är 5 + 5?",
    answers: [
      {answer: "9", isCorrect: false},
      {answer: "10", isCorrect: true}
    ]},
    {question: "Vilken färg har elefanter?",
    answers: [
      {answer: "Grå", isCorrect: true},
      {answer: "Rosa", isCorrect: false}
    ]}
  ];
  $scope.currentIndex = 0;
  $scope.rightAnswerCounter = 0;
  $scope.currentIsCorrect = false;
  $scope.listOfAnswers = [];
  
  // a.IsCorrect = trueOrFalseChecker
  $scope.saveAnswer = function(trueOrFalseChecker, selectedAnswer) {
    $scope.currentIsCorrect = trueOrFalseChecker; 
    $scope.listOfAnswers[$scope.currentIndex] = selectedAnswer;
  }
    
  $scope.nextQuestion = function() {
    $scope.currentIndex++;

    if($scope.currentIsCorrect)
      $scope.rightAnswerCounter++;

    $scope.currentIsCorrect = false;
  };

  $scope.previousQuestion = function(param) {
    $scope.currentIndex--;
  };

  $scope.firstQuestion = function() {
    location.reload();
  };

});