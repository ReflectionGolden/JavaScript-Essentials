// Variable declaration
let results = [4.2,5.1,3.8,4.7,5.3];
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