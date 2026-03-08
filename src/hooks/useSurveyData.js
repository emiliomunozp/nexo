import { surveyData } from '../data/surveyResults';

// Mimics a database call and keeps components clean
export const useSurveyData = () => {
    // In a real app, this might use useEffect and state to fetch data
    return surveyData;
};
