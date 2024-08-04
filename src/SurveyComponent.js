// SurveyComponent.js
import React from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css";
import { themeJson } from "./theme";
import "./index.css";
import { json } from "./json";

function SurveyComponent() {
    const surveyJson = {
        "surveyId": "f107e3c1-8c03-4f13-b258-b6688f00cdc0",
        "surveyPostId": "4535b0cb-799a-4672-a8c1-8028575efb4e",
        "surveyShowDataSaving": true,
        ...json
    };

    const survey = new Model(surveyJson);
    survey.applyTheme(themeJson);

    survey.onComplete.add((sender, options) => {
        const xhr = new XMLHttpRequest();
        const url = `https://surveyjs.io/published?id=${surveyJson.surveyId}`;
        xhr.open("POST", url, true);
        xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                console.log("Survey results successfully submitted");
            } else if (xhr.readyState === 4) {
                console.error("Error submitting survey results");
            }
        };
        xhr.send(JSON.stringify(sender.data));
    });

    return (<Survey model={survey} />);
}

export default SurveyComponent;
