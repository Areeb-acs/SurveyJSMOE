import React from "react";
import { Model, surveyLocalization } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css";
import { themeJson } from "./theme";
import "./index.css";
import { json as surveyData } from "./json"; // Ensure the correct path and casing


function SurveyComponent() {
    const surveyJson = {
        "surveyPostId": "4535b0cb-799a-4672-a8c1-8028575efb4e",
        ...surveyData,

    };

    // Set the default locale to Arabic
    surveyLocalization.defaultLocale = "ar";

    // Add Arabic translations
    surveyLocalization.locales["ar"] = {
        pagePrevText: "السابق",
        pageNextText: "التالي",
        completeText: "إنهاء",
        otherItemText: "أخرى (يرجى التحديد)",
        progressText: "الصفحة {0} من {1}",
        emptySurvey: "لا توجد صفحة مرئية أو سؤال في الاستبيان.",
        completingSurvey: "!شكراً لك على إكمال الاستبيان",
        loadingSurvey: "جار تحميل الاستبيان...",
        optionsCaption: "اختر...",
        requiredError: "الرجاء الإجابة على السؤال.",
        requiredErrorFormat: "الرجاء إدخال التنسيق الصحيح.",
        numericError: "يجب أن تكون القيمة رقمية.",
        // Add more translations as needed
    };
    const survey = new Model(surveyJson);

    survey.applyTheme(themeJson);

    // Set the locale for this specific survey
    survey.locale = "ar";
    // Apply custom CSS for the completion message
    survey.onComplete.add((sender) => {
        const completionMessage = document.querySelector(".sv_complete_text");
        if (completionMessage) {
            completionMessage.classList.add("completion-message");
        }
    });


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