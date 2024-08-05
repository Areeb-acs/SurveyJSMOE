import React from "react";
import { Model, surveyLocalization, StylesManager } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css";
import { themeJson } from "./theme";
import "./index.css";
import { json as surveyData } from "./json";

function SurveyComponent() {
    const surveyJson = {
        "surveyPostId": "4535b0cb-799a-4672-a8c1-8028575efb4e",
        ...surveyData,
        "completedHtml": "<div class='sv_complete_text'>!شكراً لك على إكمال الاستبيان</div>"
    };
    React.useEffect(() => {
        const style = document.createElement('style');
        style.textContent = `
            .sd-root-modern {
                direction: rtl;
            }
    
            @media (min-width: 620px) {
                h3.sd-title {
                    position: relative;
                    left: -57%;
                }
                .sd-description {
                    position: relative;
                    left: -57%;
                }
                .sd-logo {
                    position: relative;
                    left: -100%;
                    top: -25%;
                }
            }

            
        `;
        document.head.appendChild(style);
    
        return () => {
            document.head.removeChild(style);
        };
    }, []);

    StylesManager.applyTheme("defaultV2");


    surveyLocalization.defaultLocale = "ar";
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
        // ... (rest of your translations)
    };

    const survey = new Model(surveyJson);
    survey.applyTheme(themeJson);
    survey.locale = "ar";

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

    return <Survey model={survey} />;
}

export default SurveyComponent;