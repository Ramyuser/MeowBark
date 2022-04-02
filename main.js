function startClassification() {
    navigator.mediaDevices.getUserMedia({ audio: true });
    classifier = ml5.soundclassifier('https://teachablemachine.withgoogle.com/models/sSjb412_T/model.json', modelReady);
}

function modelReady() {
    classifier.classify(gotResults);
}