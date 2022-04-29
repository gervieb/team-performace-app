import { level } from "constants/level";
import { ISurvey } from "types/Survey";
import { tScore } from "types/Score";

const getResultMessage = (totalPoints: number) => {
  const message = [];

  switch (true) {
    case totalPoints < 25:
      message.push(level.low);
      break;
    case totalPoints < 65:
      message.push(level.mid);
      break;
    case totalPoints < 100:
      message.push(level.high);
      break;
    default:
      break;
  }

  return {
    total: totalPoints,
    value: message.flat(),
  };
};

const getScore = (level: string, value: string) => {
  const low_score: tScore = { "25": 4, "50": 3, "75": 2, "100": 1 };
  const high_score: tScore = { "25": 1, "50": 2, "75": 3, "100": 4 };

  let result = 0;

  switch (level) {
    case "low":
      result = low_score[value as keyof tScore];
      break;
    case "high":
      result = high_score[value as keyof tScore];
      break;
    default:
      break;
  }

  return result;
};

export const calculateResult = (data: ISurvey[]) => {
  let totalPoints = 0;

  data?.map((el: ISurvey) => {
    const value = el.answer as number;

    switch (true) {
      case value < 25:
        totalPoints += getScore(el.psychological_safety, "25");
        break;
      case value < 50:
        totalPoints += getScore(el.psychological_safety, "50");
        break;
      case value < 75:
        totalPoints += getScore(el.psychological_safety, "75");
        break;
      case value < 100:
        totalPoints += getScore(el.psychological_safety, "100");
        break;
      default:
        break;
    }
  });

  let maxPoint = 4;
  const average = Number(
    ((totalPoints / (data.length * maxPoint)) * 100).toFixed(2)
  );

  return getResultMessage(average);
};
