import React from "react";
import { Model, surveyLocalization, StylesManager } from '@areeb297/survey-js/build/survey-core';
import { Survey } from '@areeb297/survey-js/build/survey-react-ui';
import '@areeb297/survey-js/defaultV2.min.css';
import { themeJson } from "./theme";
import "./index.css";
import { json as surveyData } from "./json";

function SurveyComponent() {
    const surveyJson = {
        "surveyPostId": "4535b0cb-799a-4672-a8c1-8028575efb4e",
        ...surveyData,
        "completedHtml": "<div class='sv_complete_text'>شكراً لك على إكمال الاستبيان!</div>"
    };
//
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
                .sv-ranking-item,
                .sv-ranking-item__content {
                    padding-left: 7px !important;
                    padding-right: 7px !important;
                }
            }



        `;
        document.head.appendChild(style);
    
        return () => {
            document.head.removeChild(style);
        };
    }, []);

    // Update

    StylesManager.applyTheme("defaultV2");

    surveyLocalization.defaultLocale = "ar";
    surveyLocalization.locales["ar"] = {
        pagePrevText: "السابق",
        pageNextText: "التالي",
        completeText: "إرسال البيانات",
        previewText: "معاينة",
        editText: "تعديل",
        startSurveyText: "بداية",
        otherItemText: "نص آخر",
        noneItemText: "لا شيء",
        refuseItemText: "رفض الإجابة",
        dontKnowItemText: "لا أعرف",
        selectAllItemText: "اختر الكل",
        progressText: "{1} صفحة {0} من",
        indexText: "{0} من {1}",
        panelDynamicProgressText: "سجل {0} من {1}",
        panelDynamicTabTextFormat: "لوحة {بانل إندكس}",
        questionsProgressText: "تمت الإجابة على أسئلة {0} / {1}",
        emptySurvey: "لا توجد صفحة مرئية أو سؤال في النموذج",
        completingSurvey: "شكرا لكم لاستكمال النموذج!",
        completingSurveyBefore: "تظهر سجلاتنا أنك قد أكملت هذا الاستطلاع بالفعل.",
        loadingSurvey: "...يتم تحميل النموذج",
        placeholder: "...اختر",
        ratingOptionsCaption: "اختار...",
        value: "القيمة",
        requiredError: ".يرجى الإجابة على السؤال",
        requiredErrorInPanel: "الرجاء الإجابة على سؤال واحد على الأقل.",
        requiredInAllRowsError: "يرجى الإجابة على الأسئلة في جميع الصفوف",
        eachRowUniqueError: "يجب أن يكون لكل صف قيمة فريدة.",
        numericError: "يجب أن تكون القيمة رقمية.",
        minError: "يجب ألا تقل القيمة عن {0}",
        maxError: "يجب ألا تزيد القيمة عن {0}",
        textMinLength: "الرجاء إدخال ما لا يقل عن {0} حروف",
        textMaxLength: "الرجاء إدخال أقل من {0} حروف",
        textMinMaxLength: "يرجى إدخال أكثر من {0} وأقل من {1} حروف",
        minRowCountError: "يرجى ملء ما لا يقل عن {0} الصفوف",
        minSelectError: "يرجى تحديد ما لا يقل عن {0} المتغيرات",
        maxSelectError: "يرجى تحديد ما لا يزيد عن {0} المتغيرات",
        numericMinMax: "و'{0}' يجب أن تكون مساوية أو أكثر من {1} وتساوي أو أقل من {2}ا",
        numericMin: "و'{0}' يجب أن تكون مساوية أو أكثر من {1}ا",
        numericMax: "و'{0}' يجب أن تكون مساوية أو أقل من {1}ا",
        invalidEmail: "الرجاء إدخال بريد الكتروني صحيح",
        invalidExpression: "يجب أن يعرض التعبير: {0} 'صواب'.",
        urlRequestError: "طلب إرجاع خطأ '{0}'. {1}ا",
        urlGetChoicesError: "عاد طلب البيانات فارغ أو 'المسار' غير صحيح ",
        exceedMaxSize: "ينبغي ألا يتجاوز حجم الملف {0}ا",
        noUploadFilesHandler: "لا يمكن تحميل الملفات. يرجى إضافة معالج لحدث \"onUploadFiles\".",
        otherRequiredError: "الرجاء إدخال قيمة أخرى",
        uploadingFile: "تحميل الملف الخاص بك. يرجى الانتظار عدة ثوان والمحاولة لاحقًا",
        loadingFile: "جار التحميل...",
        chooseFile: "اختر الملفات...",
        noFileChosen: "لم تقم باختيار ملف",
        filePlaceholder: "اسحب ملفا وأفلته هنا أو انقر فوق الزر أدناه واختر ملفا لتحميله.",
        confirmDelete: "هل تريد حذف السجل؟",
        keyDuplicationError: "يجب أن تكون هذه القيمة فريدة.",
        addColumn: "أضف العمود",
        addRow: "اضافة صف",
        removeRow: "إزالة صف",
        emptyRowsText: "لا توجد صفوف.",
        addPanel: "اضف جديد",
        removePanel: "إزالة",
        showDetails: "اظهر التفاصيل",
        hideDetails: "إخفاء التفاصيل",
        choices_Item: "بند",
        matrix_column: "عمود",
        matrix_row: "صف",
        multipletext_itemname: "نص",
        savingData: "يتم حفظ النتائج على الخادم ...",
        savingDataError: "حدث خطأ ولم نتمكن من حفظ النتائج.",
        savingDataSuccess: "!تم حفظ النتائج بنجاح!",
        savingExceedSize: "ردك يتجاوز 64 كيلوبايت. يرجى تقليل حجم الملف (الملفات) والمحاولة مرة أخرى أو الاتصال بمالك الاستطلاع.",
        saveAgainButton: "حاول مجددا",
        timerMin: "دقيقة",
        timerSec: "ثانية",
        timerSpentAll: "لقد أنفقت {0} على هذه الصفحة و {1} إجمالاً.",
        timerSpentPage: "لقد أنفقت {0} على هذه الصفحة.",
        timerSpentSurvey: "لقد أنفقت {0} إجمالاً.",
        timerLimitAll: "لقد أنفقت {0} من {1} في هذه الصفحة و {2} من إجمالي {3}.",
        timerLimitPage: "لقد أنفقت {0} من {1} في هذه الصفحة.",
        timerLimitSurvey: "لقد أنفقت {0} من إجمالي {1}.",
        clearCaption: "واضح",
        signaturePlaceHolder: "وقع هنا",
        signaturePlaceHolderReadOnly: "لا يوجد توقيع",
        chooseFileCaption: "اختر ملف",
        takePhotoCaption: "التقاط صورة",
        photoPlaceholder: "انقر فوق الزر أدناه لالتقاط صورة باستخدام الكاميرا.",
        fileOrPhotoPlaceholder: "قم بسحب ملف وإفلاته أو تحديده لتحميله أو التقاط صورة باستخدام الكاميرا.",
        replaceFileCaption: "استبدال الملف",
        removeFileCaption: "قم بإزالة هذا الملف",
        booleanCheckedLabel: "نعم",
        booleanUncheckedLabel: "لا",
        confirmRemoveFile: "هل أنت متأكد أنك تريد إزالة هذا الملف: {0}؟",
        confirmRemoveAllFiles: "هل أنت متأكد أنك تريد إزالة كافة الملفات؟",
        questionTitlePatternText: "عنوان السؤال",
        modalCancelButtonText: "إلغاء الأمر",
        modalApplyButtonText: "طبق",
        filterStringPlaceholder: "اكتب للبحث...",
        emptyMessage: "لا توجد بيانات للعرض",
        noEntriesText: "لا توجد إدخالات حتى الآن.\nانقر فوق الزر أدناه لإضافة إدخال جديد.",
        noEntriesReadonlyText: "لا توجد إدخالات.",
        tabTitlePlaceholder: "لوحة جديدة",
        more: "أكثر",
        // tagboxDoneButtonCaption: "موافق",
        // tagboxCancel: "إلغاء الأمر",
        selectToRankEmptyRankedAreaText: "يتم ترتيب جميع الخيارات",
        selectToRankEmptyUnrankedAreaText: "قم بسحب وإسقاط الخيارات هنا لترتيبها",
        // Cancel: "إلغاء الأمر"
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
