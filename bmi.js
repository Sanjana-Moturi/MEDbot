const calculateButton = document.getElementById('calculateButton')
const weightInput = document.getElementById('weightInput')
const heightInput = document.getElementById('heightInput')
const resultBmiScore = document.getElementById('resultBmiScore')
const resultBmiCategory = document.getElementById('resultBmiCategory')
const bmiIndicator = document.getElementById('bmiIndicator')
const resetButton=document.getElementById('resetButton')

calculateButton.addEventListener('click', () => {
    calculateBmiScore()
})
resetButton.addEventListener('click',()=>{
    reset()
})

function calculateBmiScore() {
    const weight = parseFloat(weightInput.value)
    const height = parseFloat(heightInput.value) / 100

    if (weight > 0 && height > 0) {
        const bmiScore = (weight / (height * height)).toFixed(1)
        resultBmiScore.textContent = bmiScore
        showResultBmiCategory(bmiScore)
        showBmiIndicator(bmiScore)
    }
    else {
        alert('Please enter valid input! (height/weight)')
    }
}
function showResultBmiCategory(bmiScore) {
    if (bmiScore < 18.5) {
        resultBmiScore.style.color = '#0000FF'
        resultBmiCategory.textContent = "Underweight"
    }
    else if (bmiScore >= 18.5 && bmiScore <= 24.9) {
        resultBmiScore.style.color = '#008000'
        resultBmiCategory.textContent = "Normal"
    }
    else if (bmiScore >= 25 && bmiScore <= 29.9) {
        resultBmiScore.style.color = '#FFA500'
        resultBmiCategory.textContent = 'Overweight'
    } else {
        resultBmiScore.style.color = '#FF0000'
        resultBmiCategory.textContent = 'Obese'
    }
}
function showBmiIndicator(bmiScore) {
    let firstScoreRange, lastScoreRange
    let firstPercentRange, lastPercentRange

    if (bmiScore < 18.5) {
        firstScoreRange = 0
        lastScoreRange = 18.49
        firstPercentRange = 0
        lastPercentRange = 25
    }
    else if (bmiScore >= 18.5 && bmiScore <= 24.9) {
        firstScoreRange = 18.5
        lastScoreRange = 24.9
        firstPercentRange = 25
        lastPercentRange = 50
    }
    else if (bmiScore >= 25 && bmiScore <= 29.9) {
        firstScoreRange = 25
        lastScoreRange = 39.9
        firstPercentRange = 50
        lastPercentRange = 75
    }
    else{
        firstScoreRange = 30
        lastScoreRange = 40
        firstPercentRange = 75
        lastPercentRange = 100
    }
    const slope=(lastPercentRange-firstPercentRange)
    /(lastScoreRange-firstScoreRange)
    const intercept=firstPercentRange-slope* firstScoreRange
    const percentage=Math.min(slope*bmiScore+intercept,100)
    bmiIndicator.style.left=percentage+'%'
}
function reset(){
    weightInput.value=''
    heightInput.value=''
    resultBmiScore.textContent='0'
    resultBmiScore.style.color='black'
    resultBmiCategory.textContent='N/A'
    bmiIndicator.style.left='0%'
}