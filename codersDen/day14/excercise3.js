/*Let's try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) 
and measure of variability(range, variance, standard deviation). In addition to those measures find the min, 
max, count, percentile, and frequency distribution of the sample. You can create a class called Statistics and 
create all the functions which do statistical calculations as method for the Statistics class. Check the output 
below.*/

ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]
    /*mean, median, mode, range, variance, standard deviation. 
    min,max,count,percentile,frequency distribution */

class Statistics {
    constructor(mean, median, mode, range, variance, standard_deviation,
        min, max, count, percentile, frequency_distribution) {
        this.mean = mean;
        this.median = median;
        this.mode = mode;
        this.range = range;
        this.variance = variance;
        this.standardDeviation = standard_deviation;
        this.min = min;
        this.max = max;
        this.count = count;
        this.percentile = percentile;
        this.frequencyDistribution = frequency_distribution
    }
    mean(arr) {
        average = []
        for (i = 0; i < arr.length; i++) {
            return average += arr[i] / arr.length
        }
    }
    median(nock) {
        if (nock.length % 2 == 0) {
            let even1 = +(nock.slice(nock.length / 2 - 1, nock.length / 2))
            let even2 = +(nock.slice(nock.length / 2, nock.length / 2 + 1))
            return evenSumMean = (even1 + even2) / 2
        } else {
            let oddNumberHalve1 = +(Math.floor(nock.length / 2))
            let oddNumberslice = +nock.slice(oddNumberHalve1, oddNumberHalve1 + 1)
            return oddNumberslice
        }
    }
    mode(modeNum) {
        let obj = {}
        for (let key of modeNum) {
            key in obj ? obj[key]++ : obj[key] = 1
        }
        let output = { keys: 0, counts: 0 }
        for (let num in obj) {
            if (obj[num] > output["counts"]) {
                output['counts'] = obj[num];
                output["keys"] = num

            }
            return output
        }
    }
    min(minimum) {
        let numberSetTotal = minimum.reduce((acc, cv) => (acc < cv) ? acc : cv)
        return numberSetTotal
    }

    max(maximum) {
        let numberSetTotal = maximum.reduce((acc, cv) => (acc < cv) ? cv : acc)
        return numberSetTotal
    }

}