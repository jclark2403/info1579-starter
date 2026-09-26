//TODO: Include your multi-line comment header
/*
    Name: Jason Myers 
    Date: 9/20/26
    Assignment: 2
    Quarter: Fall
    Instructor: Tania Kuisma
*/

// TODO: Import "use strict" directive
"use strict";

// DO NOT MODIFY
const display = (label, value) =>
  (document.getElementById("output").innerHTML += `${label}: ${value}<br>`);
// END DO NOT MODIFY

// ADD YOUR CODE BELOW

// Course modules array preparation
const courseModules = [
  "Module 1",
  "Module 2",
  "Module 3",
  "Module 4",
  "Module 5",
  "Module 6",
  "Module 7",
  "Module 8",
  "Module 9",
  "Module 10"
];

// Initial completedModules array
let completedModules = ["Module 1", "Module 2"];

// TODO: Create variables for your name (string), total number of modules for our class (number), and if you're enrolled (boolean)
const name = "Jason Myers";
const totalModules = 10;
const isEnrolled = true;

// TODO: Use a template literal to output a welcome message. Use at least one ${}.
const welcomeMessage = `Welcome to INFO 1579, ${name}!`;

// TODO: Calculate the total study hours for the course. There are 10 modules. Each module takes roughly 6 hours.
// Formula: totalStudyHours = totalModules * hoursPerWeek
const hoursPerModule = 6;
const totalStudyHours = totalModules * hoursPerModule;

// TODO: Calculate the number of study hours each day. Convert the output to minutes (this formula is not provided).
// Formula: dailyStudyHours = hoursPerWeek / 7
const dailyStudyHours = totalStudyHours / 7;
const dailyStudyMinutes = dailyStudyHours * 60;

// TODO: Give yourself a rest day and exclude one day out of your week. Calculate the new number of hours and set it to adjustedDailyHours. Convert the output to minutes (this formula is not provided).
const adjustedDailyHours = totalStudyHours / 6;
const adjustedDailyMinutes = adjustedDailyHours * 60;

// DISPLAY STARTER RESULTS
display("Welcome Message", welcomeMessage);
display("My Name", name);
display("Enrolled", isEnrolled);
display("Total Modules", totalModules);
display("Daily Study Hours (7 days)", dailyStudyHours.toFixed(2));
display("Daily Study Minutes (7 days)", dailyStudyMinutes.toFixed(2));
display("Daily Study Hours (with rest day)", adjustedDailyHours.toFixed(2));
display("Daily Study Minutes (with rest day)", adjustedDailyMinutes.toFixed(2));

// ==========================================
// Part 1: What’s my current progress?
// ==========================================
// Modify completedModules to get user input
completedModules = parseInt(prompt("Enter the number of completed modules (1-10): "), 10);

let percentComplete = 0;
let percentRemaining = 0;
let courseProgress = "";

if (isNaN(completedModules) || completedModules < 0 || completedModules > totalModules) {
  courseProgress = "Invalid entry.";
} else {
  percentComplete = (completedModules / totalModules) * 100;
  percentRemaining = 100 - percentComplete;

  if (percentRemaining === 0) {
    courseProgress = "Current Progress: Finished!";
  } else if (percentRemaining >= 1 && percentRemaining < 25) {
    courseProgress = "Current Progress: Almost Finished!";
  } else if (percentRemaining >= 25 && percentRemaining < 75) {
    courseProgress = "Current Progress: Making Progress";
  } else if (percentRemaining >= 75 && percentRemaining <= 100) {
    courseProgress = "Current Progress: Just Getting Started";
  } else {
    courseProgress = "Invalid entry.";
  }
}

if (courseProgress !== "Invalid entry.") {
  display("Percent Complete", `${percentComplete.toFixed(2)}%`);
  display("Percent Remaining", `${percentRemaining.toFixed(2)}%`);
}

display("Course Progress", courseProgress);

// ==========================================
// Part 2: What’s my grade?
// ==========================================
let courseGrade = "";

if (courseProgress === "Invalid entry.") {
  courseGrade = "Invalid entry.";
} else {
  if (percentComplete >= 90 && percentComplete <= 100) {
    courseGrade = "Course Grade: A";
  } else if (percentComplete >= 80 && percentComplete < 90) {
    courseGrade = "Course Grade: B";
  } else if (percentComplete >= 70 && percentComplete < 80) {
    courseGrade = "Course Grade: C";
  } else if (percentComplete >= 60 && percentComplete < 70) {
    courseGrade = "Course Grade: D";
  } else if (percentComplete >= 0 && percentComplete < 60) {
    courseGrade = "Course Grade: F";
  } else {
    courseGrade = "Invalid entry.";
  }
}

display("Grade", courseGrade);

// ==========================================
// Part 3: What does my study week look like?
// ==========================================
let studyDay = "";
let studyPlan = "";
const studyMinutes = adjustedDailyMinutes.toFixed(2); // 51.43

if (percentRemaining === 0 && courseProgress !== "Invalid entry.") {
  studyDay = "Complete";
} else {
  studyDay = prompt("Enter a day of the week (e.g., Monday, Tuesday, Wednesday...): ");
}

switch (studyDay) {
  case "Monday":
    studyPlan = `Study Day: Study for ${studyMinutes} minutes today.`;
    break;
  case "Tuesday":
    studyPlan = `Lab Day: Study for ${studyMinutes} minutes today.`;
    break;
  case "Wednesday":
    studyPlan = `Applied Programming Activity Day: Study for ${studyMinutes} minutes today.`;
    break;
  case "Thursday":
    studyPlan = "Reading and Research Day";
    break;
  case "Friday":
    studyPlan = "Catch-up & Review Day";
    break;
  case "Saturday":
    studyPlan = "Rest Day";
    break;
  case "Sunday":
    studyPlan = "Weekly Planning & Code Prep";
    break;
  case "Complete":
    studyPlan = "Course Completed!";
    break;
  default:
    studyPlan = "Invalid day entered.";
    break;
}

display("Study Day", studyDay);
display("Study Plan", studyPlan);