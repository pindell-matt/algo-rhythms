'use strict';

const meetingTimes = [
  {startTime: 0,  endTime: 1},
  {startTime: 3,  endTime: 5},
  {startTime: 4,  endTime: 8},
  {startTime: 10, endTime: 12},
  {startTime: 9,  endTime: 10},
]

const answer = [
  {startTime: 0, endTime: 1},
  {startTime: 3, endTime: 8},
  {startTime: 9, endTime: 12},
]

function condenseMeetingTimes(meetings) {
  let sorted = meetings.sort((m1, m2) => m1.startTime > m2.startTime);
  let mergedMeetings = [sorted[0]];
  
  for (let i = 1; i < sorted.length; i++) {
    let current = sorted[i];
    let lastMerged = mergedMeetings[mergedMeetings.length - 1];

    if (current.startTime <= lastMerged.endTime) {
      lastMerged.endTime = Math.max(lastMerged.endTime, current.endTime);
    } else {
      mergedMeetings.push(current);
    }
  }
  return mergedMeetings;
}

let result = condenseMeetingTimes(meetingTimes);
let correct = JSON.stringify(answer) === JSON.stringify(result)
console.log("correct? ", correct)
