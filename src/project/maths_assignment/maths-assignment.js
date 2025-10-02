// Variable declaration
let results = [1.58, 3.45, 3.55, 4.57, 7.51];
let mean;

// Function
function calcMean(values) {
    console.log("The results are: "+values);
    let calcedMean;
    let roundMean;
    let sum = 0;

    //getting the sum of the values
    for (let i = 0; i < values.length; i++) {
        const element = values[i];
        sum += element;
    }
    console.log("The sum of results is "+sum);

    //dividing the sum by the number of values
    calcedMean = sum / values.length;
    console.log("The mean (before rounding) is "+calcedMean);

    //ensuring the mean is rounded to 2 decimal places
    roundMean = Math.round((calcedMean + Number.EPSILON) * 100) / 100

    return roundMean;
}

mean = calcMean(results);

console.log("The average (mean) result to 2 decimal places is "+mean);