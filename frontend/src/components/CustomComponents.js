// Function to generate a specified number of random RGB colors without repetition
export function generateRandomColorsWithoutRepetition(count) {
  function randomRGB() {
    return Math.floor(Math.random() * 156) + 100;
  }

  if (count <= 0) return [];

  const usedColors = [];
  const randomColors = [];

  while (randomColors.length < count) {
    const rgb = `rgb(${randomRGB()}, ${randomRGB()}, ${randomRGB()})`;
    if (!usedColors.includes(rgb)) {
      usedColors.push(rgb);
      randomColors.push(rgb);
    }
  }

  return randomColors;
}

// Example usage:
const numberOfColors = 5;
const randomColors = generateRandomColorsWithoutRepetition(numberOfColors);
console.log(randomColors);

export class DataGenerator {
  constructor(labels, dataArray, backgroundColor) {
    this.labels = labels;
    this.dataArray = dataArray;
    this.backgroundColor = backgroundColor;
  }

  generateDataObject() {
    return {
      labels: this.labels,
      datasets: [
        {
          label: "Dataset 1",
          data: this.dataArray.map(() =>
            this.generateRandomNumber(-1000, 1000)
          ),
          borderColor: ["#FFFFFF"],
          backgroundColor: [this.backgroundColor],
          lineTension: 0.5,
        },
      ],
    };
  }

  generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

export function returnArr(data, xAxis, yAxis) {
  const topicCounts = {};
  try {
    data.forEach((item) => {
      let topic = item[xAxis];
      if (topic === "") {
        // Skip this iteration if the item is an empty string
        return; // or use "continue;"
      }

      if (topicCounts[topic]) {
        topicCounts[topic] = topicCounts[topic] + item[yAxis];
      } else {
        topicCounts[topic] = 1;
      }
    });
    return topicCounts;
  } catch (err) {
    console.log(err);
  }
}

export function searchInArrayOfObjects(array, searchString, inputYear) {
  let data = array.filter((obj) =>
    Object.values(obj).some(
      (value) => typeof value === "string" && value.includes(searchString)
    )
  );
  if (!isNaN(inputYear) && inputYear != null && inputYear !== "") {
    return data.filter(
      (obj) => obj.start_year === inputYear || obj.end_year === inputYear
    );
  }
  return data
}
