/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
            'roboto, sans-serif': '<script src=\"http://use.edgefonts.net/roboto:n9,i9,n7,i7,i4,n3,i3,n5,i5,n4,n2,i2:all.js\"></script>'        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "both",
                centerStage: "both",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'hollySceneBgLandscape2',
                            type: 'image',
                            rect: ['0px', '0px', '2058px', '1544px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"hollySceneBgLandscape2.png",'0px','0px'],
                            filter: [0, 0, 1, 1, 0, 0, 0, 5.3617294520548, "rgba(0,0,0,0)", 0, 0, 0]
                        },
                        {
                            id: 'hollyQuestion1',
                            type: 'rect',
                            rect: ['0px', '-100px', '2046px', '1535px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(192,192,192,0.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"],
                            c: [
                            {
                                id: 'yesButton',
                                type: 'group',
                                rect: ['-2281px', '589', '614', '710', 'auto', 'auto'],
                                cursor: 'pointer',
                                c: [
                                {
                                    id: 'yesButtonBg',
                                    type: 'rect',
                                    rect: ['0px', '0px', '614px', '710px', 'auto', 'auto'],
                                    borderRadius: ["40px", "40px", "40px", "40px 40px"],
                                    fill: ["rgba(255,255,255,1.00)"],
                                    stroke: [0,"rgba(0,0,0,0.00)","none"]
                                },
                                {
                                    id: 'MrEricssonFront',
                                    type: 'image',
                                    rect: ['0px', '0px', '614px', '614px', 'auto', 'auto'],
                                    cursor: 'pointer',
                                    fill: ["rgba(0,0,0,0)",im+"MrEricssonFront.png",'0px','0px']
                                },
                                {
                                    id: 'yesText',
                                    type: 'text',
                                    rect: ['226px', '625px', '163px', '85px', 'auto', 'auto'],
                                    text: "<p style=\"margin: 0px;\">​<span style=\"text-transform: uppercase; font-size: 60px; font-weight: 700;\">yes</span></p>",
                                    align: "center",
                                    font: ['roboto, sans-serif', [24, ""], "rgba(0,0,0,1)", "normal", "none", "", "break-word", "normal"]
                                }]
                            },
                            {
                                id: 'noButton',
                                type: 'group',
                                rect: ['-1338px', '589', '614', '710', 'auto', 'auto'],
                                cursor: 'pointer',
                                c: [
                                {
                                    id: 'noButtonBg',
                                    type: 'rect',
                                    rect: ['0px', '0px', '614px', '710px', 'auto', 'auto'],
                                    borderRadius: ["40px", "40px", "40px", "40px 40px"],
                                    fill: ["rgba(255,255,255,1.00)"],
                                    stroke: [0,"rgba(0,0,0,0.00)","none"]
                                },
                                {
                                    id: 'HollyFront3',
                                    type: 'image',
                                    rect: ['16px', '31px', '583px', '583px', 'auto', 'auto'],
                                    cursor: 'pointer',
                                    fill: ["rgba(0,0,0,0)",im+"HollyFront.png",'0px','0px']
                                },
                                {
                                    id: 'noText',
                                    type: 'text',
                                    rect: ['225px', '614px', '163px', '96px', 'auto', 'auto'],
                                    text: "<p style=\"margin: 0px;\">​<span style=\"text-transform: uppercase; font-weight: 700; font-size: 60px;\">No</span></p>",
                                    align: "center",
                                    font: ['roboto, sans-serif', [24, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                                    textStyle: ["", "", "", "", "none"]
                                }]
                            },
                            {
                                id: 'yesAnswer',
                                type: 'group',
                                rect: ['358px', '547px', '1343', '692px', 'auto', 'auto'],
                                c: [
                                {
                                    id: 'yesAnswerBg',
                                    type: 'rect',
                                    rect: ['0px', '0px', '1342px', '582px', 'auto', 'auto'],
                                    borderRadius: ["40px", "40px", "40px", "40px 40px"],
                                    fill: ["rgba(255,255,255,1)"],
                                    stroke: [0,"rgba(0, 0, 0, 0)","none"]
                                },
                                {
                                    id: 'yesAnswerText',
                                    type: 'text',
                                    rect: ['128px', '79px', '1126px', '571px', 'auto', 'auto'],
                                    text: "<p style=\"margin: 0px;\"><span style=\"font-size: 40px;\">YES</span><span style=\"font-size: 40px; font-weight: 400;\">,&nbsp;recall that under the Ministry of Education there is almost always a need to seek&nbsp;consent from a legal guardian which also means it is important to notify the legal guardian when an issue or concern is raised.</span></p><p style=\"margin: 0px;\"><span style=\"font-size: 40px; font-weight: 400;\">​</span></p><p style=\"margin: 0px;\"><span style=\"font-size: 40px; font-weight: 400;\">Even if Holly were 13 or 14, due to her reporting risky behaviours and self-harm it would&nbsp;be important to notify a legal guardian and engage them in safety planning.</span></p>",
                                    align: "left",
                                    font: ['roboto, sans-serif', [60, "px"], "rgba(0,0,0,1)", "700", "none", "normal", "break-word", "normal"],
                                    textStyle: ["", "", "44px", "", "none"]
                                },
                                {
                                    id: 'yesBackButton',
                                    type: 'group',
                                    rect: ['854', '655px', '489', '128', 'auto', 'auto'],
                                    cursor: 'pointer',
                                    c: [
                                    {
                                        id: 'yesBackBg',
                                        type: 'rect',
                                        rect: ['0px', '0px', '488px', '128px', 'auto', 'auto'],
                                        cursor: 'pointer',
                                        borderRadius: ["20px", "20px", "20px", "20px 20px"],
                                        fill: ["rgba(226,247,231,1.00)"],
                                        stroke: [0,"rgba(0, 0, 0, 0)","none"]
                                    },
                                    {
                                        id: 'yesBackText',
                                        type: 'text',
                                        rect: ['1px', '16px', '488px', '96px', 'auto', 'auto'],
                                        text: "<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-size: 40px; text-transform: uppercase;\">back</span></p>",
                                        align: "left",
                                        font: ['roboto, sans-serif', [60, "px"], "rgba(0,0,0,1)", "700", "none", "normal", "break-word", "normal"],
                                        textStyle: ["", "", "", "", "none"]
                                    }]
                                }]
                            },
                            {
                                id: 'noAnswer',
                                type: 'group',
                                rect: ['2271px', '668px', '1343', '520', 'auto', 'auto'],
                                c: [
                                {
                                    id: 'noAnswerBg',
                                    type: 'rect',
                                    rect: ['0px', '77px', '1342px', '154px', 'auto', 'auto'],
                                    borderRadius: ["40px", "40px", "40px", "40px 40px"],
                                    fill: ["rgba(255,255,255,1)"],
                                    stroke: [0,"rgba(0, 0, 0, 0)","none"]
                                },
                                {
                                    id: 'noAnswerText',
                                    type: 'text',
                                    rect: ['74px', '117px', '1189px', '143px', 'auto', 'auto'],
                                    text: "<p style=\"margin: 0px; line-height: 48px;\"><span style=\"font-size: 40px; font-weight: 700;\">No</span><span style=\"font-size: 40px;\">, The legislation does require that the legal guardian be notified.</span></p>",
                                    align: "left",
                                    font: ['roboto, sans-serif', [60, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                                    textStyle: ["", "", "", "", "none"]
                                },
                                {
                                    id: 'noBackButton',
                                    type: 'group',
                                    rect: ['854', '282px', '489', '128', 'auto', 'auto'],
                                    cursor: 'pointer',
                                    c: [
                                    {
                                        id: 'noBackBg',
                                        type: 'rect',
                                        rect: ['0px', '0px', '488px', '128px', 'auto', 'auto'],
                                        cursor: 'pointer',
                                        borderRadius: ["20px", "20px", "20px", "20px 20px"],
                                        fill: ["rgba(226,247,231,1.00)"],
                                        stroke: [0,"rgba(0, 0, 0, 0)","none"]
                                    },
                                    {
                                        id: 'noBackText',
                                        type: 'text',
                                        rect: ['1px', '16px', '488px', '96px', 'auto', 'auto'],
                                        text: "<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-size: 40px; text-transform: uppercase;\">Back</span></p>",
                                        align: "left",
                                        font: ['roboto, sans-serif', [60, "px"], "rgba(0,0,0,1)", "700", "none", "normal", "break-word", "normal"],
                                        textStyle: ["", "", "", "", "none"]
                                    }]
                                }]
                            },
                            {
                                id: 'theBackbutton3',
                                type: 'group',
                                rect: ['36px', '1475px', '164', '128', 'auto', 'auto'],
                                cursor: 'pointer',
                                c: [
                                {
                                    id: 'theBackButton3Bg',
                                    type: 'rect',
                                    rect: ['2px', '40px', '165px', '85px', 'auto', 'auto'],
                                    borderRadius: ["10px", "10px", "10px", "10px 10px"],
                                    fill: ["rgba(179,113,113,1.00)"],
                                    stroke: [0,"rgb(0, 0, 0)","none"]
                                },
                                {
                                    id: 'theBackButton3Text',
                                    type: 'text',
                                    rect: ['1px', '69px', '163px', '73px', 'auto', 'auto'],
                                    text: "<p style=\"margin: 0px; text-align: center;\">​<span style=\"color: rgb(255, 255, 255); text-transform: uppercase; font-family: roboto, sans-serif;\">back</span></p>",
                                    align: "left",
                                    font: ['Arial, Helvetica, sans-serif', [24, "px"], "rgba(0,0,0,1)", "700", "none", "normal", "break-word", "normal"],
                                    textStyle: ["", "", "", "", "none"]
                                }]
                            },
                            {
                                id: 'question1Text',
                                type: 'text',
                                rect: ['-2329px', '307px', '1660px', '69px', 'auto', 'auto'],
                                opacity: '1',
                                text: "<p style=\"margin: 0px;\"><span style=\"font-size: 60px; font-weight: 700;\">Is there a need to notify the legal guardian?​</span></p>",
                                align: "center",
                                font: ['roboto, sans-serif', [24, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                                textStyle: ["", "", "", "", "none"]
                            },
                            {
                                id: 'question1ContiueButton',
                                type: 'group',
                                rect: ['-1213px', '1357px', '489', '128', 'auto', 'auto'],
                                cursor: 'pointer',
                                c: [
                                {
                                    id: 'question1ContinueBg',
                                    type: 'rect',
                                    rect: ['0px', '0px', '488px', '128px', 'auto', 'auto'],
                                    cursor: 'pointer',
                                    borderRadius: ["20px", "20px", "20px", "20px 20px"],
                                    fill: ["rgba(226,247,231,1.00)"],
                                    stroke: [0,"rgba(0, 0, 0, 0)","none"]
                                },
                                {
                                    id: 'question1ContinueText',
                                    type: 'text',
                                    rect: ['1px', '16px', '488px', '96px', 'auto', 'auto'],
                                    text: "<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-size: 40px; text-transform: uppercase;\">continue</span></p>",
                                    align: "left",
                                    font: ['roboto, sans-serif', [60, "px"], "rgba(0,0,0,1)", "700", "none", "normal", "break-word", "normal"],
                                    textStyle: ["", "", "", "", "none"]
                                }]
                            }]
                        },
                        {
                            id: 'hollyQuestion2',
                            type: 'group',
                            rect: ['3000px', '187px', '1648', '1015', 'auto', 'auto'],
                            c: [
                            {
                                id: 'question2Answer3',
                                type: 'group',
                                rect: ['145px', '817px', '1342', '198', 'auto', 'auto'],
                                cursor: 'pointer',
                                c: [
                                {
                                    id: 'question2Answer3Bg',
                                    type: 'rect',
                                    rect: ['0px', '0px', '1342px', '198px', 'auto', 'auto'],
                                    borderRadius: ["20px", "20px", "20px", "20px 20px"],
                                    fill: ["rgba(255,255,255,1.00)"],
                                    stroke: [0,"rgba(0,0,0,0.00)","none"]
                                },
                                {
                                    id: 'question2Answer3Text',
                                    type: 'text',
                                    rect: ['0px', '72px', '1342px', '54px', 'auto', 'auto'],
                                    text: "<p style=\"margin: 0px;\"><span style=\"font-size: 40px; font-weight: 700;\">Other services or agencies</span></p>",
                                    align: "center",
                                    font: ['roboto, sans-serif', [24, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                                    textStyle: ["", "", "", "", "none"]
                                }]
                            },
                            {
                                id: 'question2Answer2',
                                type: 'group',
                                rect: ['145px', '531px', '1342', '198', 'auto', 'auto'],
                                cursor: 'pointer',
                                c: [
                                {
                                    id: 'question2Answer2Bg',
                                    type: 'rect',
                                    rect: ['0px', '0px', '1342px', '198px', 'auto', 'auto'],
                                    borderRadius: ["20px", "20px", "20px", "20px 20px"],
                                    fill: ["rgba(255,255,255,1.00)"],
                                    stroke: [0,"rgba(0,0,0,0.00)","none"]
                                },
                                {
                                    id: 'question2Answer2Text',
                                    type: 'text',
                                    rect: ['0px', '72px', '1342px', '54px', 'auto', 'auto'],
                                    text: "<p style=\"margin: 0px;\"><span style=\"font-size: 40px; font-weight: 700;\">The local youth mental health agency</span></p>",
                                    align: "center",
                                    font: ['roboto, sans-serif', [24, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                                    textStyle: ["", "", "", "", "none"]
                                }]
                            },
                            {
                                id: 'question2Answer1',
                                type: 'group',
                                rect: ['145px', '250px', '1342', '198', 'auto', 'auto'],
                                cursor: 'pointer',
                                c: [
                                {
                                    id: 'question2Answer1Bg',
                                    type: 'rect',
                                    rect: ['0px', '0px', '1342px', '198px', 'auto', 'auto'],
                                    borderRadius: ["20px", "20px", "20px", "20px 20px"],
                                    fill: ["rgba(255,255,255,1.00)"],
                                    stroke: [0,"rgba(0,0,0,0.00)","none"]
                                },
                                {
                                    id: 'question2Answer1Text',
                                    type: 'text',
                                    rect: ['0px', '70px', '1342px', '54px', 'auto', 'auto'],
                                    text: "<p style=\"margin: 0px;\"><span style=\"font-size: 40px; font-weight: 700;\">The Children's Aid Society​</span></p>",
                                    align: "center",
                                    font: ['roboto, sans-serif', [24, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                                    textStyle: ["", "", "", "", "none"]
                                }]
                            },
                            {
                                id: 'question2Text',
                                type: 'text',
                                rect: ['0px', '0px', '1648px', '85px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\"><span style=\"font-size: 60px; font-weight: 700;\">Who else might you notify?​</span></p>",
                                align: "center",
                                font: ['roboto, sans-serif', [24, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                                textStyle: ["", "", "", "", "none"]
                            },
                            {
                                id: 'theBackButton4',
                                type: 'group',
                                rect: ['-164', '1188', '164', '128', 'auto', 'auto'],
                                c: [
                                {
                                    id: 'theBackButton4Bg',
                                    type: 'rect',
                                    rect: ['2px', '40px', '165px', '85px', 'auto', 'auto'],
                                    borderRadius: ["10px", "10px", "10px", "10px 10px"],
                                    fill: ["rgba(179,113,113,1.00)"],
                                    stroke: [0,"rgb(0, 0, 0)","none"]
                                },
                                {
                                    id: 'theBackButton4Text',
                                    type: 'text',
                                    rect: ['1px', '71px', '163px', '73px', 'auto', 'auto'],
                                    text: "<p style=\"margin: 0px; text-align: center;\">​<span style=\"color: rgb(255, 255, 255); text-transform: uppercase; font-family: roboto, sans-serif;\">back</span></p>",
                                    align: "left",
                                    font: ['Arial, Helvetica, sans-serif', [24, "px"], "rgba(0,0,0,1)", "700", "none", "normal", "break-word", "normal"],
                                    textStyle: ["", "", "", "", "none"]
                                }]
                            }]
                        },
                        {
                            id: 'question2ContiueButton',
                            type: 'group',
                            rect: ['-2996px', '1257px', '489', '128', 'auto', 'auto'],
                            cursor: 'pointer',
                            c: [
                            {
                                id: 'question2ContinueBg',
                                type: 'rect',
                                rect: ['0px', '0px', '488px', '128px', 'auto', 'auto'],
                                cursor: 'pointer',
                                borderRadius: ["20px", "20px", "20px", "20px 20px"],
                                fill: ["rgba(226,247,231,1.00)"],
                                stroke: [0,"rgba(0, 0, 0, 0)","none"]
                            },
                            {
                                id: 'question2ContinueText',
                                type: 'text',
                                rect: ['1px', '16px', '488px', '96px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-size: 40px; text-transform: uppercase;\">continue</span></p>",
                                align: "left",
                                font: ['roboto, sans-serif', [60, "px"], "rgba(0,0,0,1)", "700", "none", "normal", "break-word", "normal"],
                                textStyle: ["", "", "", "", "none"]
                            }]
                        },
                        {
                            id: 'hollyQuestion3',
                            type: 'group',
                            rect: ['3000px', '127', '1648', '1060', 'auto', 'auto'],
                            c: [
                            {
                                id: 'question3Answer1',
                                type: 'group',
                                rect: ['153px', '320px', '628px', '198', 'auto', 'auto'],
                                cursor: 'pointer',
                                c: [
                                {
                                    id: 'question3Answer1Bg',
                                    type: 'rect',
                                    rect: ['0px', '0px', '628px', '198px', 'auto', 'auto'],
                                    borderRadius: ["20px", "20px", "20px", "20px 20px"],
                                    fill: ["rgba(255,255,255,1)"],
                                    stroke: [0,"rgba(0, 0, 0, 0)","none"]
                                },
                                {
                                    id: 'question3Answer1Text',
                                    type: 'text',
                                    rect: ['0px', '69px', '628px', '54px', 'auto', 'auto'],
                                    text: "<p style=\"margin: 0px;\">​Collaboration</p>",
                                    align: "center",
                                    font: ['roboto, sans-serif', [40, "px"], "rgba(0,0,0,1)", "700", "none", "normal", "break-word", "normal"],
                                    textStyle: ["", "", "", "", "none"]
                                }]
                            },
                            {
                                id: 'question3Answer2',
                                type: 'group',
                                rect: ['153px', '591px', '628px', '198', 'auto', 'auto'],
                                cursor: 'pointer',
                                c: [
                                {
                                    id: 'question3Answer2Bg',
                                    type: 'rect',
                                    rect: ['0px', '0px', '628px', '198px', 'auto', 'auto'],
                                    borderRadius: ["20px", "20px", "20px", "20px 20px"],
                                    fill: ["rgba(255,255,255,1)"],
                                    stroke: [0,"rgba(0, 0, 0, 0)","none"]
                                },
                                {
                                    id: 'question3Answer2Text',
                                    type: 'text',
                                    rect: ['0px', '69px', '628px', '54px', 'auto', 'auto'],
                                    text: "<p style=\"margin: 0px;\">Isolation</p>",
                                    align: "center",
                                    font: ['roboto, sans-serif', [40, "px"], "rgba(0,0,0,1)", "700", "none", "normal", "break-word", "normal"],
                                    textStyle: ["", "", "", "", "none"]
                                }]
                            },
                            {
                                id: 'question3Answer3',
                                type: 'group',
                                rect: ['153px', '862px', '628px', '198', 'auto', 'auto'],
                                cursor: 'pointer',
                                c: [
                                {
                                    id: 'question3Answer3Bg',
                                    type: 'rect',
                                    rect: ['0px', '0px', '628px', '198px', 'auto', 'auto'],
                                    borderRadius: ["20px", "20px", "20px", "20px 20px"],
                                    fill: ["rgba(255,255,255,1)"],
                                    stroke: [0,"rgba(0, 0, 0, 0)","none"]
                                },
                                {
                                    id: 'question3Answer3Text',
                                    type: 'text',
                                    rect: ['0px', '69px', '628px', '54px', 'auto', 'auto'],
                                    text: "<p style=\"margin: 0px;\">Education</p>",
                                    align: "center",
                                    font: ['roboto, sans-serif', [40, "px"], "rgba(0,0,0,1)", "700", "none", "normal", "break-word", "normal"],
                                    textStyle: ["", "", "", "", "none"]
                                }]
                            },
                            {
                                id: 'question3Answer4',
                                type: 'group',
                                rect: ['886px', '317px', '628px', '198', 'auto', 'auto'],
                                cursor: 'pointer',
                                c: [
                                {
                                    id: 'question3Answer4Bg',
                                    type: 'rect',
                                    rect: ['0px', '0px', '628px', '198px', 'auto', 'auto'],
                                    borderRadius: ["20px", "20px", "20px", "20px 20px"],
                                    fill: ["rgba(255,255,255,1)"],
                                    stroke: [0,"rgba(0, 0, 0, 0)","none"]
                                },
                                {
                                    id: 'question3Answer4Text',
                                    type: 'text',
                                    rect: ['0px', '69px', '628px', '54px', 'auto', 'auto'],
                                    text: "<p style=\"margin: 0px;\">Disruption</p>",
                                    align: "center",
                                    font: ['roboto, sans-serif', [40, "px"], "rgba(0,0,0,1)", "700", "none", "normal", "break-word", "normal"],
                                    textStyle: ["", "", "", "", "none"]
                                }]
                            },
                            {
                                id: 'question3Answer5',
                                type: 'group',
                                rect: ['886px', '588px', '628px', '198', 'auto', 'auto'],
                                cursor: 'pointer',
                                c: [
                                {
                                    id: 'question3Answer5Bg',
                                    type: 'rect',
                                    rect: ['0px', '0px', '628px', '198px', 'auto', 'auto'],
                                    borderRadius: ["20px", "20px", "20px", "20px 20px"],
                                    fill: ["rgba(255,255,255,1)"],
                                    stroke: [0,"rgba(0, 0, 0, 0)","none"]
                                },
                                {
                                    id: 'question3Answer5Text',
                                    type: 'text',
                                    rect: ['0px', '69px', '628px', '54px', 'auto', 'auto'],
                                    text: "<p style=\"margin: 0px;\">Relationship-building</p>",
                                    align: "center",
                                    font: ['roboto, sans-serif', [40, "px"], "rgba(0,0,0,1)", "700", "none", "normal", "break-word", "normal"],
                                    textStyle: ["", "", "", "", "none"]
                                }]
                            },
                            {
                                id: 'hollyQuestion3Text',
                                type: 'text',
                                rect: ['0px', '0px', '1648px', '160px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px; text-align: center;\">​What do you think is likely to happen if you notify<br>the legal guardian?</p>",
                                align: "left",
                                font: ['roboto, sans-serif', [60, "px"], "rgba(0,0,0,1)", "700", "none", "normal", "break-word", "normal"],
                                textStyle: ["", "", "", "", "none"]
                            },
                            {
                                id: 'theBackbutton5',
                                type: 'group',
                                rect: ['-164px', '1248', '164', '128', 'auto', 'auto'],
                                cursor: 'pointer',
                                c: [
                                {
                                    id: 'theBackButton5Bg',
                                    type: 'rect',
                                    rect: ['2px', '40px', '165px', '85px', 'auto', 'auto'],
                                    borderRadius: ["10px", "10px", "10px", "10px 10px"],
                                    fill: ["rgba(179,113,113,1.00)"],
                                    stroke: [0,"rgb(0, 0, 0)","none"]
                                },
                                {
                                    id: 'theBackButton5Text',
                                    type: 'text',
                                    rect: ['1px', '71px', '163px', '73px', 'auto', 'auto'],
                                    text: "<p style=\"margin: 0px; text-align: center;\">​<span style=\"color: rgb(255, 255, 255); text-transform: uppercase; font-family: roboto, sans-serif;\">back</span></p>",
                                    align: "left",
                                    font: ['Arial, Helvetica, sans-serif', [24, "px"], "rgba(0,0,0,1)", "700", "none", "normal", "break-word", "normal"],
                                    textStyle: ["", "", "", "", "none"]
                                }]
                            }]
                        },
                        {
                            id: 'question3ContinueButton',
                            type: 'group',
                            rect: ['1255px', '1257px', '405px', '128', 'auto', 'auto'],
                            cursor: 'pointer',
                            c: [
                            {
                                id: 'question3ContinueBg',
                                type: 'rect',
                                rect: ['-46px', '0px', '488px', '128px', 'auto', 'auto'],
                                borderRadius: ["20px", "20px", "20px", "20px 20px"],
                                fill: ["rgba(226,247,231,1)"],
                                stroke: [0,"rgba(0, 0, 0, 0)","none"]
                            },
                            {
                                id: 'question3ContinueText',
                                type: 'text',
                                rect: ['-46px', '12px', '488px', '96px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-size: 40px; text-transform: uppercase;\">continue</span></p>",
                                align: "left",
                                font: ['roboto, sans-serif', [60, "px"], "rgba(0,0,0,1)", "700", "none", "normal", "break-word", "normal"],
                                textStyle: ["", "", "", "", "none"]
                            }]
                        },
                        {
                            id: 'question2Response1',
                            type: 'group',
                            rect: ['3000px', '340', '1648', '981', 'auto', 'auto'],
                            c: [
                            {
                                id: 'question2Response1BackButton',
                                type: 'group',
                                rect: ['1159px', '893px', '489', '128', 'auto', 'auto'],
                                cursor: 'pointer',
                                c: [
                                {
                                    id: 'question2Response1BackButtonBg',
                                    type: 'rect',
                                    rect: ['0px', '0px', '488px', '128px', 'auto', 'auto'],
                                    cursor: 'pointer',
                                    borderRadius: ["20px", "20px", "20px", "20px 20px"],
                                    fill: ["rgba(226,247,231,1.00)"],
                                    stroke: [0,"rgba(0, 0, 0, 0)","none"]
                                },
                                {
                                    id: 'question2Response1BackButtonText',
                                    type: 'text',
                                    rect: ['1px', '16px', '488px', '96px', 'auto', 'auto'],
                                    text: "<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-size: 40px; text-transform: uppercase;\">back</span></p>",
                                    align: "left",
                                    font: ['roboto, sans-serif', [60, "px"], "rgba(0,0,0,1)", "700", "none", "normal", "break-word", "normal"],
                                    textStyle: ["", "", "", "", "none"]
                                }]
                            },
                            {
                                id: 'question2Response1Bg',
                                type: 'rect',
                                rect: ['0px', '16px', '1648px', '821px', 'auto', 'auto'],
                                borderRadius: ["20px", "20px", "20px", "20px 20px"],
                                fill: ["rgba(255,255,255,1)"],
                                stroke: [0,"rgba(0, 0, 0, 0)","none"]
                            },
                            {
                                id: 'question2Response1Text',
                                type: 'text',
                                rect: ['64px', '85px', '1517px', '705px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px; text-align: left;\">​<span style=\"font-size: 40px; font-weight: 700;\">The Children’s Aid Society</span><span style=\"font-size: 40px;\"> – The Duty to Report does require that protection concerns be reported, and if you are unsure it is best practice to call and allow the Society to determine whether they will open a file. In this situation, there is no indication that Holly’s grandmother is aware of her cutting or marijuana use, or that she is being neglectful of her mental health needs.</span></p><p style=\"margin: 0px; text-align: left;\"><span style=\"font-size: 40px;\">​</span></p><p style=\"margin: 0px; text-align: left;\"><span style=\"font-size: 40px;\">If you were to call her grandmother to notify her of the information, and she were to respond by saying that she was going to harm Holly as a consequence, or kick her out of the home, you would need to report that. If you tried to engage Holly’s grandmother in a plan to take Holly to see her family doctor for suicide screening and she refused to follow through, you would need to report that. If you had&nbsp;information to suggest that Holly’s grandmother was allowing her to stay with her mother and smoke marijuana with her, that would also fall under the duty to report.</span></p>",
                                align: "center",
                                font: ['roboto, sans-serif', [24, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                                textStyle: ["", "", "", "", "none"]
                            }]
                        },
                        {
                            id: 'question2Response3',
                            type: 'group',
                            rect: ['3000px', '340', '1648', '981', 'auto', 'auto'],
                            c: [
                            {
                                id: 'question2Response3BackButton',
                                type: 'group',
                                rect: ['1159px', '609px', '489', '128', 'auto', 'auto'],
                                cursor: 'pointer',
                                c: [
                                {
                                    id: 'question2Response3BackButtonBg',
                                    type: 'rect',
                                    rect: ['0px', '0px', '488px', '128px', 'auto', 'auto'],
                                    cursor: 'pointer',
                                    borderRadius: ["20px", "20px", "20px", "20px 20px"],
                                    fill: ["rgba(226,247,231,1.00)"],
                                    stroke: [0,"rgba(0, 0, 0, 0)","none"]
                                },
                                {
                                    id: 'question2Response3BackButtonText',
                                    type: 'text',
                                    rect: ['1px', '16px', '488px', '96px', 'auto', 'auto'],
                                    text: "<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-size: 40px; text-transform: uppercase;\">back</span></p>",
                                    align: "left",
                                    font: ['roboto, sans-serif', [60, "px"], "rgba(0,0,0,1)", "700", "none", "normal", "break-word", "normal"],
                                    textStyle: ["", "", "", "", "none"]
                                }]
                            },
                            {
                                id: 'question2Response3Bg',
                                type: 'rect',
                                rect: ['0px', '252px', '1648px', '272px', 'auto', 'auto'],
                                borderRadius: ["20px", "20px", "20px", "20px 20px"],
                                fill: ["rgba(255,255,255,1)"],
                                stroke: [0,"rgba(0, 0, 0, 0)","none"]
                            },
                            {
                                id: 'question2Response3Text',
                                type: 'text',
                                rect: ['65px', '351px', '1517px', '111px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px; text-align: left;\">​<span style=\"font-weight: 700;\">Other services or agencies.</span> With consent from Holly’s grandmother, you might pull together a team of supports to assist Holly.</p>",
                                align: "center",
                                font: ['roboto, sans-serif', [40, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                                textStyle: ["", "", "", "", "none"]
                            }]
                        },
                        {
                            id: 'question2Response2',
                            type: 'group',
                            rect: ['203px', '340px', '1648', '981px', 'auto', 'auto'],
                            c: [
                            {
                                id: 'question2Response2BackButton',
                                type: 'group',
                                rect: ['1159px', '689px', '489', '128', 'auto', 'auto'],
                                cursor: 'pointer',
                                c: [
                                {
                                    id: 'question2Response2BackButtonBg',
                                    type: 'rect',
                                    rect: ['0px', '0px', '488px', '128px', 'auto', 'auto'],
                                    cursor: 'pointer',
                                    borderRadius: ["20px", "20px", "20px", "20px 20px"],
                                    fill: ["rgba(226,247,231,1.00)"],
                                    stroke: [0,"rgba(0, 0, 0, 0)","none"]
                                },
                                {
                                    id: 'question2Response2BackButtonText',
                                    type: 'text',
                                    rect: ['1px', '16px', '488px', '96px', 'auto', 'auto'],
                                    text: "<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-size: 40px; text-transform: uppercase;\">back</span></p>",
                                    align: "left",
                                    font: ['roboto, sans-serif', [60, "px"], "rgba(0,0,0,1)", "700", "none", "normal", "break-word", "normal"],
                                    textStyle: ["", "", "", "", "none"]
                                }]
                            },
                            {
                                id: 'question2Response2Bg',
                                type: 'rect',
                                rect: ['0px', '197px', '1648px', '427px', 'auto', 'auto'],
                                borderRadius: ["20px", "20px", "20px", "20px 20px"],
                                fill: ["rgba(255,255,255,1)"],
                                stroke: [0,"rgba(0, 0, 0, 0)","none"]
                            },
                            {
                                id: 'question2Response2Text',
                                type: 'text',
                                rect: ['64px', '280px', '1517px', '272px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px; text-align: left;\">​<span style=\"font-size: 40px; font-weight: 700;\">The local youth mental health agency.</span><span style=\"font-size: 40px;\">&nbsp;This might be an excellent service to make a referral to; however, keep in mind that prior to making a referral you would need the ​consent of the legal guardian. It would also be helpful to speak to the youth about engaging with this service since she is close to the age of 12 and may soon need to onsent to counseling.</span></p>",
                                align: "center",
                                font: ['roboto, sans-serif', [24, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                                textStyle: ["", "", "", "", "none"]
                            }]
                        },
                        {
                            id: 'question3Response1',
                            type: 'group',
                            rect: ['3000px', '403px', '1648', '818px', 'auto', 'auto'],
                            c: [
                            {
                                id: 'question3Response1BackButton',
                                type: 'group',
                                rect: ['1159px', '734px', '489', '128', 'auto', 'auto'],
                                cursor: 'pointer',
                                c: [
                                {
                                    id: 'question3Response1BackButtonBg',
                                    type: 'rect',
                                    rect: ['0px', '0px', '488px', '128px', 'auto', 'auto'],
                                    cursor: 'pointer',
                                    borderRadius: ["20px", "20px", "20px", "20px 20px"],
                                    fill: ["rgba(226,247,231,1.00)"],
                                    stroke: [0,"rgba(0, 0, 0, 0)","none"]
                                },
                                {
                                    id: 'question3Response1BackButtonText',
                                    type: 'text',
                                    rect: ['1px', '16px', '488px', '96px', 'auto', 'auto'],
                                    text: "<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-size: 40px; text-transform: uppercase;\">back</span></p>",
                                    align: "left",
                                    font: ['roboto, sans-serif', [60, "px"], "rgba(0,0,0,1)", "700", "none", "normal", "break-word", "normal"],
                                    textStyle: ["", "", "", "", "none"]
                                }]
                            },
                            {
                                id: 'question3Response1Bg',
                                type: 'rect',
                                rect: ['0px', '0px', '1648px', '682px', 'auto', 'auto'],
                                borderRadius: ["20px", "20px", "20px", "20px 20px"],
                                fill: ["rgba(255,255,255,1)"],
                                stroke: [0,"rgba(0, 0, 0, 0)","none"]
                            },
                            {
                                id: 'question3Response1Text',
                                type: 'text',
                                rect: ['64px', '85px', '1517px', '546px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px; text-align: left;\">​<span style=\"font-size: 40px; font-weight: 700;\">Collaboration:</span></p><p style=\"margin: 0px; text-align: left;\"><span style=\"font-size: 40px;\">The opportunity to create a team of support around Holly at school and at home could be a beneficial outcome. If all of the adults in Holly's life are working together to support Holly, both Holly and her grandmother are likely to feel that they have additional resources to help Holly overcome her struggles.</span></p><p style=\"margin: 0px; text-align: left;\"><span style=\"font-size: 40px;\">​</span></p><p style=\"margin: 0px; text-align: left;\"><span style=\"font-size: 40px;\">If Holly's grandmother were not notified, the team of supports for Holly would be limited to school. This would undermine the significance of Holly's home life, and the potential that there are triggers for Holly's self-harm and marijuana use at her home and within her family.</span></p>",
                                align: "center",
                                font: ['roboto, sans-serif', [24, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                                textStyle: ["", "", "", "", "none"]
                            }]
                        },
                        {
                            id: 'question3Response2',
                            type: 'group',
                            rect: ['3000px', '567px', '1648', '584px', 'auto', 'auto'],
                            c: [
                            {
                                id: 'question3Response2BackButton',
                                type: 'group',
                                rect: ['1159px', '451px', '489', '128', 'auto', 'auto'],
                                cursor: 'pointer',
                                c: [
                                {
                                    id: 'question3Response2BackButtonBg',
                                    type: 'rect',
                                    rect: ['0px', '0px', '488px', '128px', 'auto', 'auto'],
                                    cursor: 'pointer',
                                    borderRadius: ["20px", "20px", "20px", "20px 20px"],
                                    fill: ["rgba(226,247,231,1.00)"],
                                    stroke: [0,"rgba(0, 0, 0, 0)","none"]
                                },
                                {
                                    id: 'question3Response2BackButtonText',
                                    type: 'text',
                                    rect: ['1px', '16px', '488px', '96px', 'auto', 'auto'],
                                    text: "<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-size: 40px; text-transform: uppercase;\">back</span></p>",
                                    align: "left",
                                    font: ['roboto, sans-serif', [60, "px"], "rgba(0,0,0,1)", "700", "none", "normal", "break-word", "normal"],
                                    textStyle: ["", "", "", "", "none"]
                                }]
                            },
                            {
                                id: 'question3Response2Bg',
                                type: 'rect',
                                rect: ['0px', '22px', '1648px', '362px', 'auto', 'auto'],
                                borderRadius: ["20px", "20px", "20px", "20px 20px"],
                                fill: ["rgba(255,255,255,1)"],
                                stroke: [0,"rgba(0, 0, 0, 0)","none"]
                            },
                            {
                                id: 'question3Response2Text',
                                type: 'text',
                                rect: ['64px', '85px', '1517px', '225px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px; text-align: left;\">​<span style=\"font-size: 40px; font-weight: 700;\">Isolation:</span></p><p style=\"margin: 0px; text-align: left;\"><span style=\"font-size: 40px;\">There is a possibility that Holly might stop sharing information with you, and might not have another person in her life that she is comfortable sharing information with. Consider how you might engage Holly in the next question.</span></p>",
                                align: "center",
                                font: ['roboto, sans-serif', [24, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                                textStyle: ["", "", "", "", "none"]
                            }]
                        },
                        {
                            id: 'question3Response3',
                            type: 'group',
                            rect: ['3000px', '567px', '1648', '584px', 'auto', 'auto'],
                            c: [
                            {
                                id: 'question3Response3BackButton',
                                type: 'group',
                                rect: ['1159px', '595px', '489', '128', 'auto', 'auto'],
                                cursor: 'pointer',
                                c: [
                                {
                                    id: 'question3Response3BackButtonBg',
                                    type: 'rect',
                                    rect: ['0px', '0px', '488px', '128px', 'auto', 'auto'],
                                    cursor: 'pointer',
                                    borderRadius: ["20px", "20px", "20px", "20px 20px"],
                                    fill: ["rgba(226,247,231,1.00)"],
                                    stroke: [0,"rgba(0, 0, 0, 0)","none"]
                                },
                                {
                                    id: 'question3Response3BackButtonText',
                                    type: 'text',
                                    rect: ['1px', '16px', '488px', '96px', 'auto', 'auto'],
                                    text: "<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-size: 40px; text-transform: uppercase;\">back</span></p>",
                                    align: "left",
                                    font: ['roboto, sans-serif', [60, "px"], "rgba(0,0,0,1)", "700", "none", "normal", "break-word", "normal"],
                                    textStyle: ["", "", "", "", "none"]
                                }]
                            },
                            {
                                id: 'question3Response3Bg',
                                type: 'rect',
                                rect: ['0px', '-142px', '1648px', '677px', 'auto', 'auto'],
                                borderRadius: ["20px", "20px", "20px", "20px 20px"],
                                fill: ["rgba(255,255,255,1)"],
                                stroke: [0,"rgba(0, 0, 0, 0)","none"]
                            },
                            {
                                id: 'question3Response3Text',
                                type: 'text',
                                rect: ['64px', '-95px', '1517px', '499px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px; text-align: left;\">​<span style=\"font-size: 40px; font-weight: 700;\">Education:</span><br><span style=\"font-size: 40px;\">Notifying Holly's grandmother might give you the opportunity to provide her with some education and tools so that she is able to note any signs of Holly’s marijuana use or cutting, and respond to them in an effective manner.</span></p><p style=\"margin: 0px; text-align: left;\"><span style=\"font-size: 40px;\">​</span></p><p style=\"margin: 0px; text-align: left;\"><span style=\"font-size: 40px;\">If Holly's grandmother is not notified, there is a risk that Holly's safety and well-being will be compromised as Holly's grandmother may not know to monitor her behaviours and emotions. Similarly, if Holly's grandmother does not have any support or coaching around how to respond to Holly's marijuana use and cutting, she may overreact or have a negative reaction which could result in further use and self-harm for Holly.</span></p><p style=\"margin: 0px; text-align: left;\"><span style=\"font-size: 40px;\"></span></p>",
                                align: "center",
                                font: ['roboto, sans-serif', [24, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                                textStyle: ["", "", "", "", "none"]
                            }]
                        },
                        {
                            id: 'question3Response4',
                            type: 'group',
                            rect: ['3000px', '567px', '1648', '584px', 'auto', 'auto'],
                            c: [
                            {
                                id: 'question3Response4BackButton',
                                type: 'group',
                                rect: ['1159px', '382px', '489', '128', 'auto', 'auto'],
                                cursor: 'pointer',
                                c: [
                                {
                                    id: 'question3Response4BackButtonBg',
                                    type: 'rect',
                                    rect: ['0px', '0px', '488px', '128px', 'auto', 'auto'],
                                    cursor: 'pointer',
                                    borderRadius: ["20px", "20px", "20px", "20px 20px"],
                                    fill: ["rgba(226,247,231,1.00)"],
                                    stroke: [0,"rgba(0, 0, 0, 0)","none"]
                                },
                                {
                                    id: 'question3Response4BackButtonText',
                                    type: 'text',
                                    rect: ['1px', '16px', '488px', '96px', 'auto', 'auto'],
                                    text: "<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-size: 40px; text-transform: uppercase;\">back</span></p>",
                                    align: "left",
                                    font: ['roboto, sans-serif', [60, "px"], "rgba(0,0,0,1)", "700", "none", "normal", "break-word", "normal"],
                                    textStyle: ["", "", "", "", "none"]
                                }]
                            },
                            {
                                id: 'question3Response4Bg',
                                type: 'rect',
                                rect: ['0px', '-53px', '1648px', '377px', 'auto', 'auto'],
                                borderRadius: ["20px", "20px", "20px", "20px 20px"],
                                fill: ["rgba(255,255,255,1)"],
                                stroke: [0,"rgba(0, 0, 0, 0)","none"]
                            },
                            {
                                id: 'question3Response4Text',
                                type: 'text',
                                rect: ['64px', '-6px', '1517px', '274px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px; text-align: left;\">​<span style=\"font-size: 40px; font-weight: 700;\">Disruption:</span></p><p style=\"margin: 0px; text-align: left;\"><span style=\"font-size: 40px;\">There is a possibility that Holly’s grandmother might kick her out of the home or mistreat her in response to the information – which could deepen Holly’s feelings of worry and stress. Consider this possibility in the next question when you consider strategies to engage Holly.</span></p>",
                                align: "center",
                                font: ['roboto, sans-serif', [24, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                                textStyle: ["", "", "", "", "none"]
                            }]
                        },
                        {
                            id: 'question3Response5',
                            type: 'group',
                            rect: ['3004px', '567px', '1648', '584px', 'auto', 'auto'],
                            c: [
                            {
                                id: 'question3Response5BackButton',
                                type: 'group',
                                rect: ['1159px', '535px', '489', '128', 'auto', 'auto'],
                                cursor: 'pointer',
                                c: [
                                {
                                    id: 'question3Response5BackButtonBg',
                                    type: 'rect',
                                    rect: ['0px', '0px', '488px', '128px', 'auto', 'auto'],
                                    cursor: 'pointer',
                                    borderRadius: ["20px", "20px", "20px", "20px 20px"],
                                    fill: ["rgba(226,247,231,1.00)"],
                                    stroke: [0,"rgba(0, 0, 0, 0)","none"]
                                },
                                {
                                    id: 'question3Response5BackButtonText',
                                    type: 'text',
                                    rect: ['1px', '16px', '488px', '96px', 'auto', 'auto'],
                                    text: "<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-size: 40px; text-transform: uppercase;\">back</span></p>",
                                    align: "left",
                                    font: ['roboto, sans-serif', [60, "px"], "rgba(0,0,0,1)", "700", "none", "normal", "break-word", "normal"],
                                    textStyle: ["", "", "", "", "none"]
                                }]
                            },
                            {
                                id: 'question3Response5Bg',
                                type: 'rect',
                                rect: ['0px', '-211px', '1648px', '690px', 'auto', 'auto'],
                                borderRadius: ["20px", "20px", "20px", "20px 20px"],
                                fill: ["rgba(255,255,255,1)"],
                                stroke: [0,"rgba(0, 0, 0, 0)","none"]
                            },
                            {
                                id: 'question3Response5Text',
                                type: 'text',
                                rect: ['64px', '-158px', '1517px', '535px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px; text-align: left;\">​<span style=\"font-size: 40px; font-weight: 700;\">Relationship-building:</span></p><p style=\"margin: 0px; text-align: left;\"><span style=\"font-size: 40px;\">Notifying Holly's grandmother might strengthen the relationship between Holly and her grandmother and increase the potential that she will go to her directly the next time she is struggling. Holly may also have some of her worries reduced if she is able to get reassurance from her grandmother that she will not kick her out of the home.</span></p><p style=\"margin: 0px; text-align: left;\"><span style=\"font-size: 40px;\">​</span></p><p style=\"margin: 0px; text-align: left;\"><span style=\"font-size: 40px;\">If Holly's grandmother accidentally stumbles upon Holly's behaviours without any knowledge or context for them, there is a risk of conflict between Holly and her grandmother. If Holly's grandmother continues to be unaware of her use, there is a risk that Holly may withdraw from her grandmother to protect her secrecy around her marijuana use and self-harm.</span></p>",
                                align: "center",
                                font: ['roboto, sans-serif', [24, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                                textStyle: ["", "", "", "", "none"]
                            }]
                        },
                        {
                            id: 'hollyQuestion4',
                            type: 'group',
                            rect: ['3000px', '163', '1649', '931', 'auto', 'auto'],
                            c: [
                            {
                                id: 'question4Answer1',
                                type: 'group',
                                rect: ['0px', '377px', '1649', '145', 'auto', 'auto'],
                                cursor: 'pointer',
                                c: [
                                {
                                    id: 'question4Answer1Bg',
                                    type: 'rect',
                                    rect: ['1px', '0px', '1648px', '145px', 'auto', 'auto'],
                                    cursor: 'pointer',
                                    borderRadius: ["20px", "20px", "20px", "20px 20px"],
                                    fill: ["rgba(255,255,255,1.00)"],
                                    stroke: [0,"rgba(0,0,0,0.00)","none"]
                                },
                                {
                                    id: 'question4Answer1Text',
                                    type: 'text',
                                    rect: ['0px', '47px', '1648px', '50px', 'auto', 'auto'],
                                    text: "<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-size: 40px; font-family: roboto, sans-serif;\">​Tell Holly about your requirement to notify her grandmother...</span></p>",
                                    align: "left",
                                    font: ['Arial, Helvetica, sans-serif', [24, "px"], "rgba(0,0,0,1)", "700", "none", "normal", "break-word", "normal"],
                                    textStyle: ["", "", "", "", "none"]
                                }]
                            },
                            {
                                id: 'question4Answer2',
                                type: 'group',
                                rect: ['0px', '582px', '1649', '145', 'auto', 'auto'],
                                cursor: 'pointer',
                                c: [
                                {
                                    id: 'question4Answer2Bg',
                                    type: 'rect',
                                    rect: ['1px', '0px', '1648px', '145px', 'auto', 'auto'],
                                    cursor: 'pointer',
                                    borderRadius: ["20px", "20px", "20px", "20px 20px"],
                                    fill: ["rgba(255,255,255,1.00)"],
                                    stroke: [0,"rgba(0,0,0,0.00)","none"]
                                },
                                {
                                    id: 'question4Answer2Text',
                                    type: 'text',
                                    rect: ['0px', '47px', '1648px', '50px', 'auto', 'auto'],
                                    text: "<p style=\"margin: 0px; text-align: center;\"><span style=\"font-size: 40px; font-family: roboto, sans-serif;\">Invite Holly's grandmother into the school to meet with you...</span></p>",
                                    align: "left",
                                    font: ['Arial, Helvetica, sans-serif', [24, "px"], "rgba(0,0,0,1)", "700", "none", "normal", "break-word", "normal"],
                                    textStyle: ["", "", "", "", "none"]
                                }]
                            },
                            {
                                id: 'question4Answer3',
                                type: 'group',
                                rect: ['0px', '786px', '1649', '145', 'auto', 'auto'],
                                cursor: 'pointer',
                                c: [
                                {
                                    id: 'question4Answer3Bg',
                                    type: 'rect',
                                    rect: ['1px', '0px', '1648px', '145px', 'auto', 'auto'],
                                    cursor: 'pointer',
                                    borderRadius: ["20px", "20px", "20px", "20px 20px"],
                                    fill: ["rgba(255,255,255,1.00)"],
                                    stroke: [0,"rgba(0,0,0,0.00)","none"]
                                },
                                {
                                    id: 'question4Answer3Text',
                                    type: 'text',
                                    rect: ['0px', '47px', '1648px', '50px', 'auto', 'auto'],
                                    text: "<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-size: 40px; font-family: roboto, sans-serif;\">Help Holly come up with a set of words, or a visual image that you could use...</span></p>",
                                    align: "left",
                                    font: ['Arial, Helvetica, sans-serif', [24, "px"], "rgba(0,0,0,1)", "700", "none", "normal", "break-word", "normal"],
                                    textStyle: ["", "", "", "", "none"]
                                }]
                            },
                            {
                                id: 'hollyQuestion4Text',
                                type: 'text',
                                rect: ['0px', '0px', '1648px', '198px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-size: 60px; font-family: roboto, sans-serif;\">How would you engage the<br>scenario&nbsp;once she becomes aware that you have<br>notified the caregivers?</span></p>",
                                font: ['Arial, Helvetica, sans-serif', [24, ""], "rgba(0,0,0,1)", "700", "none", "", "break-word", "normal"]
                            },
                            {
                                id: 'theBackButton6',
                                type: 'group',
                                rect: ['-164', '1212', '164', '128', 'auto', 'auto'],
                                cursor: 'pointer',
                                c: [
                                {
                                    id: 'theBackButton6Bg',
                                    type: 'rect',
                                    rect: ['2px', '40px', '165px', '85px', 'auto', 'auto'],
                                    borderRadius: ["10px", "10px", "10px", "10px 10px"],
                                    fill: ["rgba(179,113,113,1.00)"],
                                    stroke: [0,"rgb(0, 0, 0)","none"]
                                },
                                {
                                    id: 'theBackButton6Text',
                                    type: 'text',
                                    rect: ['1px', '71px', '163px', '73px', 'auto', 'auto'],
                                    text: "<p style=\"margin: 0px; text-align: center;\">​<span style=\"color: rgb(255, 255, 255); text-transform: uppercase; font-family: roboto, sans-serif;\">back</span></p>",
                                    align: "left",
                                    font: ['Arial, Helvetica, sans-serif', [24, "px"], "rgba(0,0,0,1)", "700", "none", "normal", "break-word", "normal"],
                                    textStyle: ["", "", "", "", "none"]
                                }]
                            }]
                        },
                        {
                            id: 'question4ContinueButton',
                            type: 'group',
                            rect: ['3000px', '1177', '488', '128', 'auto', 'auto'],
                            cursor: 'pointer',
                            c: [
                            {
                                id: 'question4ContinueBg',
                                type: 'rect',
                                rect: ['0px', '0px', '488px', '128px', 'auto', 'auto'],
                                borderRadius: ["20px", "20px", "20px", "20px 20px"],
                                fill: ["rgba(226,247,231,1.00)"],
                                stroke: [0,"rgba(0, 0, 0, 0)","none"]
                            },
                            {
                                id: 'question4ContinueText',
                                type: 'text',
                                rect: ['0px', '19px', '488px', '73px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-size: 40px;\">​</span><span style=\"font-size: 40px; text-transform: uppercase;\">​continue</span></p>",
                                align: "left",
                                font: ['roboto, sans-serif', [60, "px"], "rgba(0,0,0,1)", "700", "none", "normal", "break-word", "normal"],
                                textStyle: ["", "", "", "", "none"]
                            }]
                        },
                        {
                            id: 'question4Response1',
                            type: 'group',
                            rect: ['3000px', '561', '1651', '556', 'auto', 'auto'],
                            c: [
                            {
                                id: 'question4Response1BackButton',
                                type: 'group',
                                rect: ['1162px', '428px', '489', '128', 'auto', 'auto'],
                                cursor: 'pointer',
                                c: [
                                {
                                    id: 'question4Response1BackButtonBg',
                                    type: 'rect',
                                    rect: ['0px', '0px', '488px', '128px', 'auto', 'auto'],
                                    cursor: 'pointer',
                                    borderRadius: ["20px", "20px", "20px", "20px 20px"],
                                    fill: ["rgba(226,247,231,1.00)"],
                                    stroke: [0,"rgba(0, 0, 0, 0)","none"]
                                },
                                {
                                    id: 'question4Response1BackButtonText',
                                    type: 'text',
                                    rect: ['1px', '16px', '488px', '96px', 'auto', 'auto'],
                                    text: "<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-size: 40px; text-transform: uppercase;\">back</span></p>",
                                    align: "left",
                                    font: ['roboto, sans-serif', [60, "px"], "rgba(0,0,0,1)", "700", "none", "normal", "break-word", "normal"],
                                    textStyle: ["", "", "", "", "none"]
                                }]
                            },
                            {
                                id: 'question4Response1Bg',
                                type: 'rect',
                                rect: ['0px', '0px', '1648px', '367px', 'auto', 'auto'],
                                borderRadius: ["20px", "20px", "20px", "20px 20px"],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgba(0,0,0,0.00)","none"]
                            },
                            {
                                id: 'question4Response1Text',
                                type: 'text',
                                rect: ['94px', '56px', '1443px', '301px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​<span style=\"font-size: 40px; font-family: roboto, sans-serif;\">Tell Holly about your requirement to notify her grandmother and explain to her what&nbsp;might happen next.</span></p><p style=\"margin: 0px;\"><span style=\"font-size: 40px; font-family: roboto, sans-serif;\">​</span></p><p style=\"margin: 0px;\"><span style=\"font-size: 40px; font-family: roboto, sans-serif;\">​</span><span style=\"font-weight: 400; font-size: 40px; font-family: roboto, sans-serif;\">This could help to reduce her worries about the unknown and be the first step to</span></p><p style=\"margin: 0px;\"><span style=\"font-weight: 400; font-size: 40px; font-family: roboto, sans-serif;\">empowering her to be part of the process.</span></p><p style=\"margin: 0px;\"><br></p>",
                                font: ['Arial, Helvetica, sans-serif', [24, ""], "rgba(0,0,0,1)", "700", "none", "", "break-word", "normal"]
                            }]
                        },
                        {
                            id: 'question4Response2',
                            type: 'group',
                            rect: ['3000px', '521px', '1651', '556', 'auto', 'auto'],
                            c: [
                            {
                                id: 'question4Response2BackButton',
                                type: 'group',
                                rect: ['1162px', '478px', '489', '128', 'auto', 'auto'],
                                cursor: 'pointer',
                                c: [
                                {
                                    id: 'question4Response2BackButtonBg',
                                    type: 'rect',
                                    rect: ['0px', '0px', '488px', '128px', 'auto', 'auto'],
                                    cursor: 'pointer',
                                    borderRadius: ["20px", "20px", "20px", "20px 20px"],
                                    fill: ["rgba(226,247,231,1.00)"],
                                    stroke: [0,"rgba(0, 0, 0, 0)","none"]
                                },
                                {
                                    id: 'question4Response2BackButtonText',
                                    type: 'text',
                                    rect: ['1px', '16px', '488px', '96px', 'auto', 'auto'],
                                    text: "<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-size: 40px; text-transform: uppercase;\">back</span></p>",
                                    align: "left",
                                    font: ['roboto, sans-serif', [60, "px"], "rgba(0,0,0,1)", "700", "none", "normal", "break-word", "normal"],
                                    textStyle: ["", "", "", "", "none"]
                                }]
                            },
                            {
                                id: 'question4Response2Bg',
                                type: 'rect',
                                rect: ['0px', '0px', '1648px', '435px', 'auto', 'auto'],
                                borderRadius: ["20px", "20px", "20px", "20px 20px"],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgba(0,0,0,0.00)","none"]
                            },
                            {
                                id: 'question4Response2Text',
                                type: 'text',
                                rect: ['94px', '36px', '1443px', '301px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​<span style=\"font-size: 40px; font-family: roboto, sans-serif;\">Invite Holly’s grandmother into the school to meet with you and Holly together to help&nbsp;Holly tell her grandmother about how she is struggling.</span></p><p style=\"margin: 0px;\"><span style=\"font-size: 40px; font-family: roboto, sans-serif;\">​</span></p><p style=\"margin: 0px;\"><span style=\"font-size: 40px; font-family: roboto, sans-serif;\">​</span><span style=\"font-size: 40px; font-weight: 500; font-family: roboto, sans-serif;\">This could help to guide the conversation and if there is a legitimate concern that&nbsp;Holly's grandmother might be overwhelmed, you could also be part of offering education and support to reassure Holly's grandmother and preserve Holly's placement with her.</span></p><p style=\"margin: 0px;\"><span style=\"font-size: 40px; font-family: roboto, sans-serif;\">​</span></p><p style=\"margin: 0px;\"><span style=\"font-size: 40px; font-family: roboto, sans-serif;\">​</span></p><p style=\"margin: 0px;\"><span style=\"font-weight: 400; font-size: 40px;\"></span></p><p style=\"margin: 0px;\"><br></p>",
                                font: ['Arial, Helvetica, sans-serif', [24, ""], "rgba(0,0,0,1)", "700", "none", "", "break-word", "normal"]
                            }]
                        },
                        {
                            id: 'question4Response3',
                            type: 'group',
                            rect: ['3000px', '521px', '1651', '556', 'auto', 'auto'],
                            c: [
                            {
                                id: 'question4Response3BackButton',
                                type: 'group',
                                rect: ['1162px', '478px', '489', '128', 'auto', 'auto'],
                                cursor: 'pointer',
                                c: [
                                {
                                    id: 'question4Response3BackButtonBg',
                                    type: 'rect',
                                    rect: ['0px', '0px', '488px', '128px', 'auto', 'auto'],
                                    cursor: 'pointer',
                                    borderRadius: ["20px", "20px", "20px", "20px 20px"],
                                    fill: ["rgba(226,247,231,1.00)"],
                                    stroke: [0,"rgba(0, 0, 0, 0)","none"]
                                },
                                {
                                    id: 'question4Response3BackButtonText',
                                    type: 'text',
                                    rect: ['1px', '16px', '488px', '96px', 'auto', 'auto'],
                                    text: "<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-size: 40px; text-transform: uppercase;\">back</span></p>",
                                    align: "left",
                                    font: ['roboto, sans-serif', [60, "px"], "rgba(0,0,0,1)", "700", "none", "normal", "break-word", "normal"],
                                    textStyle: ["", "", "", "", "none"]
                                }]
                            },
                            {
                                id: 'question4Response3Bg',
                                type: 'rect',
                                rect: ['0px', '10px', '1648px', '416px', 'auto', 'auto'],
                                borderRadius: ["20px", "20px", "20px", "20px 20px"],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgba(0,0,0,0.00)","none"]
                            },
                            {
                                id: 'question4Response3Text',
                                type: 'text',
                                rect: ['94px', '58px', '1443px', '301px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​<span style=\"font-size: 40px; font-family: roboto, sans-serif;\">Help Holly come up with a set of words, or a visual image that you could use when meeting with Holly’s grandmother, to help her to understand how Holly is feeling andwhy she might be self-harming or using marijuana.</span></p><p style=\"margin: 0px;\"><span style=\"font-size: 40px; font-family: roboto, sans-serif;\">​</span></p><p style=\"margin: 0px;\"><span style=\"font-size: 40px; font-family: roboto, sans-serif;\">​</span><span style=\"font-size: 40px; font-weight: 400; font-family: roboto, sans-serif;\">This could help to emphasize Holly's feelings rather than her behaviour and to engage her grandmother in a plan to help support Holly, rather than blame her.</span></p>",
                                font: ['Arial, Helvetica, sans-serif', [24, ""], "rgba(0,0,0,1)", "700", "none", "", "break-word", "normal"]
                            }]
                        },
                        {
                            id: 'questionNav',
                            type: 'group',
                            rect: ['1888px', '490', '117', '568', 'auto', 'auto'],
                            c: [
                            {
                                id: 'questionNavBg',
                                type: 'rect',
                                rect: ['0px', '0px', '117px', '568px', 'auto', 'auto'],
                                borderRadius: ["40px", "40px", "40px", "40px 40px"],
                                fill: ["rgba(255,255,255,0.70)"],
                                stroke: [0,"rgba(0,0,0,1)","none"]
                            },
                            {
                                id: 'questionNavButton1',
                                type: 'ellipse',
                                rect: ['34px', '77px', '50px', '50px', 'auto', 'auto'],
                                cursor: 'pointer',
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(165,165,165,1.00)"],
                                stroke: [0,"rgba(0,0,0,0.00)","none"]
                            },
                            {
                                id: 'questionNavButton1Active',
                                display: 'block',
                                type: 'ellipse',
                                rect: ['34px', '77px', '50px', '50px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(95,95,95,1.00)"],
                                stroke: [0,"rgba(0,0,0,0.00)","none"]
                            },
                            {
                                id: 'question1NavButton2',
                                type: 'ellipse',
                                rect: ['34px', '197px', '50px', '50px', 'auto', 'auto'],
                                cursor: 'pointer',
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(165,165,165,1.00)"],
                                stroke: [0,"rgba(0,0,0,0.00)","none"]
                            },
                            {
                                id: 'question1NavButton2Active',
                                display: 'block',
                                type: 'ellipse',
                                rect: ['34px', '197px', '50px', '50px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(95,95,95,1.00)"],
                                stroke: [0,"rgba(0,0,0,0.00)","none"]
                            },
                            {
                                id: 'question1NavButton3',
                                type: 'ellipse',
                                rect: ['34px', '317px', '50px', '50px', 'auto', 'auto'],
                                cursor: 'pointer',
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(165,165,165,1.00)"],
                                stroke: [0,"rgba(0,0,0,0.00)","none"]
                            },
                            {
                                id: 'question1NavButton3Active',
                                display: 'block',
                                type: 'ellipse',
                                rect: ['34px', '317px', '50px', '50px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(95,95,95,1.00)"],
                                stroke: [0,"rgba(0,0,0,0.00)","none"]
                            },
                            {
                                id: 'question1NavButton4',
                                type: 'ellipse',
                                rect: ['34px', '437px', '50px', '50px', 'auto', 'auto'],
                                cursor: 'pointer',
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(165,165,165,1.00)"],
                                stroke: [0,"rgba(0,0,0,0.00)","none"]
                            },
                            {
                                id: 'question1NavButton4Active',
                                display: 'block',
                                type: 'ellipse',
                                rect: ['34px', '437px', '50px', '50px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(95,95,95,1.00)"],
                                stroke: [0,"rgba(0,0,0,0.00)","none"]
                            }]
                        },
                        {
                            id: 'hollyScene2',
                            type: 'rect',
                            rect: ['0px', '0px', '2056px', '1544px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgba(0,0,0,1)","none"],
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0],
                            c: [
                            {
                                id: 'hollyScene2Bg',
                                type: 'rect',
                                rect: ['0px', '0px', '2048px', '1536px', 'auto', 'auto'],
                                fill: ["rgba(226,247,231,1.00)"],
                                stroke: [0,"rgba(0, 0, 0, 0)","none"]
                            },
                            {
                                id: 'HollyGrandmaFront',
                                type: 'image',
                                rect: ['-129px', '864px', '1100px', '1100px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"HollyGrandmaFront.png",'0px','0px']
                            },
                            {
                                id: 'HollyFront2',
                                type: 'image',
                                rect: ['1131px', '914px', '1000px', '1000px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"HollyFront2.png",'0px','0px']
                            },
                            {
                                id: 'glassGraphic',
                                type: 'image',
                                rect: ['725px', '995px', '600px', '600px', 'auto', 'auto'],
                                cursor: 'pointer',
                                opacity: '0',
                                fill: ["rgba(0,0,0,0)",im+"glassGraphic2.png",'0px','0px'],
                                filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(96,194,186,1.00)", 0, 0, 0]
                            },
                            {
                                id: 'potLeafGraphic',
                                type: 'image',
                                rect: ['733px', '467px', '600px', '600px', 'auto', 'auto'],
                                cursor: 'pointer',
                                fill: ["rgba(0,0,0,0)",im+"potLeafGraphic.png",'0px','0px'],
                                filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(96,194,186,1.00)", 0, 0, 35]
                            },
                            {
                                id: 'briefcaseGraphic',
                                type: 'image',
                                rect: ['723px', '644px', '600px', '600px', 'auto', 'auto'],
                                cursor: 'pointer',
                                fill: ["rgba(0,0,0,0)",im+"briefcaseGraphic.png",'0px','0px'],
                                filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(96,194,186,1.00)", 0, 0, 0]
                            },
                            {
                                id: 'hollyText2',
                                type: 'text',
                                rect: ['201px', '109px', '1648px', '145px', 'auto', 'auto'],
                                opacity: '0',
                                text: "<p style=\"margin: 0px;\">​<span style=\"font-size: 40px;\">During the fourth meeting, Holly tells the counselor that she has been self-harming by cutting her arm. Holly tells her that she doesn't want to die or seriously harm herself but that it relieves some pressure when she cuts her arm.</span></p>",
                                align: "left",
                                font: ['roboto, sans-serif', [24, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                                textStyle: ["", "", "43px", "", "none"]
                            },
                            {
                                id: 'hollyScene2Frame',
                                type: 'rect',
                                rect: ['0px', '0px', '163px', '1535px', 'auto', 'auto'],
                                fill: ["rgba(92,160,108,1.00)"],
                                stroke: [0,"rgba(0,0,0,1)","none"]
                            },
                            {
                                id: 'hollyScene2Frame2',
                                type: 'rect',
                                rect: ['1885px', '0px', '163px', '1535px', 'auto', 'auto'],
                                fill: ["rgba(92,160,108,1.00)"],
                                stroke: [0,"rgba(0,0,0,1)","none"]
                            },
                            {
                                id: 'hollyText3',
                                type: 'text',
                                rect: ['201px', '294px', '1648px', '145px', 'auto', 'auto'],
                                opacity: '0',
                                text: "<p style=\"margin: 0px;\">​<span style=\"font-size: 40px;\">Holly also tells the counselor that she smokes marijuana on occasion to help to ease her worries. Holly tells the counselor that she used to smoke marijuana with her mother before going to live with her grandmother, but that her grandmother doesn't smoke any marijuana.</span></p>",
                                align: "left",
                                font: ['roboto, sans-serif', [24, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                                textStyle: ["", "", "43px", "", "none"]
                            },
                            {
                                id: 'hollyText3Copy',
                                type: 'text',
                                rect: ['201px', '495px', '1648px', '145px', 'auto', 'auto'],
                                opacity: '0',
                                text: "<p style=\"margin: 0px;\">​<span style=\"font-size: 40px;\">Holly tells the school counselor that she doesn't want her grandmother to know about her self-harm or her marijuana use because her grandmother might kick her out and then she would have to go live in foster care.</span></p>",
                                align: "left",
                                font: ['roboto, sans-serif', [24, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                                textStyle: ["", "", "43px", "", "none"]
                            },
                            {
                                id: 'theBackButton2',
                                type: 'group',
                                rect: ['36', '1375', '164', '128', 'auto', 'auto'],
                                cursor: 'pointer',
                                c: [
                                {
                                    id: 'theBackButton2Bg',
                                    type: 'rect',
                                    rect: ['2px', '40px', '165px', '85px', 'auto', 'auto'],
                                    borderRadius: ["10px", "10px", "10px", "10px 10px"],
                                    fill: ["rgba(179,113,113,1.00)"],
                                    stroke: [0,"rgb(0, 0, 0)","none"]
                                },
                                {
                                    id: 'theBackButton2Text',
                                    type: 'text',
                                    rect: ['1px', '69px', '163px', '73px', 'auto', 'auto'],
                                    text: "<p style=\"margin: 0px; text-align: center;\">​<span style=\"color: rgb(255, 255, 255); text-transform: uppercase; font-family: roboto, sans-serif;\">back</span></p>",
                                    align: "left",
                                    font: ['Arial, Helvetica, sans-serif', [24, "px"], "rgba(0,0,0,1)", "700", "none", "normal", "break-word", "normal"],
                                    textStyle: ["", "", "", "", "none"]
                                }]
                            }]
                        },
                        {
                            id: 'hollyScene1',
                            type: 'rect',
                            rect: ['-3000px', '0px', '2048px', '1536px', 'auto', 'auto'],
                            fill: ["rgba(226,247,231,0.00)"],
                            stroke: [0,"rgba(0, 0, 0, 0)","none"],
                            c: [
                            {
                                id: 'hollySceneBgLandscape',
                                type: 'image',
                                rect: ['0px', '0', '2048px', '1536px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"hollySceneBgLandscape2.png",'0px','0px']
                            },
                            {
                                id: 'MrEricsson',
                                type: 'image',
                                rect: ['630px', '725px', '469px', '627px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"MrEricsson.png",'0px','0px']
                            },
                            {
                                id: 'Holly',
                                type: 'image',
                                rect: ['961px', '823px', '428px', '571px', 'auto', 'auto'],
                                cursor: 'pointer',
                                fill: ["rgba(0,0,0,0)",im+"Holly.png",'0px','0px'],
                                filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(96,194,186,1.00)", 0, 0, 0],
                                transform: [[],[],[],['-1.00077']]
                            },
                            {
                                id: 'hollyText1',
                                type: 'text',
                                rect: ['200px', '278px', '1648px', '374px', 'auto', 'auto'],
                                opacity: '0',
                                text: "<p style=\"margin: 0px;\">​<span style=\"font-size: 40px;\">The school has received a signed permission slip from Holly's legal guardian which allows her to visit with the school counselor.</span></p><p style=\"margin: 0px;\"><span style=\"font-size: 40px;\">​</span></p><p style=\"margin: 0px;\"><span style=\"font-size: 40px;\">The school teacher, Mr. Ericson sent the permission slip to Holly's grandmother, her legal guardian, because he noticed that Holly had been more quiet and withdrawn in class and he was worried that she might be struggling. Holly meets with the school counselor on a few occasions but isn't open to sharing information.</span></p>",
                                align: "left",
                                font: ['roboto, sans-serif', [24, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                                textStyle: ["", "", "", "", "none"]
                            },
                            {
                                id: 'hollyTextTitle',
                                type: 'text',
                                rect: ['200px', '89px', '523px', '198px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​<span style=\"font-weight: 700; font-size: 150px; text-transform: uppercase; color: rgb(81, 125, 88);\">Holly</span></p>",
                                align: "left",
                                font: ['roboto, sans-serif', [24, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                                textStyle: ["", "", "", "", "none"]
                            },
                            {
                                id: 'theBackbutton',
                                type: 'group',
                                rect: ['36', '1415px', '164', '128', 'auto', 'auto'],
                                cursor: 'pointer',
                                c: [
                                {
                                    id: 'theBackButtonBg',
                                    type: 'rect',
                                    rect: ['0px', '0px', '165px', '85px', 'auto', 'auto'],
                                    borderRadius: ["10px", "10px", "10px", "10px 10px"],
                                    fill: ["rgba(179,113,113,1.00)"],
                                    stroke: [0,"rgb(0, 0, 0)","none"]
                                },
                                {
                                    id: 'theBackButtonText',
                                    type: 'text',
                                    rect: ['1px', '28px', '163px', '73px', 'auto', 'auto'],
                                    text: "<p style=\"margin: 0px; text-align: center;\">​<span style=\"color: rgb(255, 255, 255); text-transform: uppercase; font-family: roboto, sans-serif;\">back</span></p>",
                                    align: "left",
                                    font: ['Arial, Helvetica, sans-serif', [24, "px"], "rgba(0,0,0,1)", "700", "none", "normal", "break-word", "normal"],
                                    textStyle: ["", "", "", "", "none"]
                                }]
                            }]
                        },
                        {
                            id: 'restartButton',
                            symbolName: 'restartButton',
                            type: 'rect',
                            rect: ['39', '1294px', '160', '85', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'startScreen',
                            type: 'rect',
                            rect: ['0px', '0px', '2048px', '1536px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(141,181,148,0.00)"],
                            stroke: [0,"rgba(0, 0, 0, 0)","none"],
                            c: [
                            {
                                id: 'bgColour',
                                type: 'rect',
                                rect: ['-5px', '0px', '2058px', '1536px', 'auto', 'auto'],
                                fill: ["rgba(226,247,231,1.00)"],
                                stroke: [0,"rgba(0,0,0,0.00)","none"]
                            },
                            {
                                id: 'HollyFront',
                                type: 'image',
                                rect: ['-468px', '-26px', '1597px', '1597px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"HollyFront.png",'0px','0px']
                            },
                            {
                                id: 'hollyTitle',
                                type: 'text',
                                rect: ['697px', '144px', '1210px', '470px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​<span style=\"text-transform: uppercase; font-size: 357px; font-weight: 700; color: rgb(141, 181, 148);\">Holly</span></p>",
                                align: "center",
                                font: ['roboto, sans-serif', [24, ""], "rgba(0,0,0,1)", "700", "none", "", "break-word", "normal"]
                            },
                            {
                                id: 'hollyAge',
                                type: 'text',
                                rect: ['702px', '547px', '1214px', '107px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-size: 50px; font-weight: 700;\">Age 11</span></p>",
                                align: "left",
                                font: ['roboto, sans-serif', [24, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                                textStyle: ["", "", "", "", "none"]
                            },
                            {
                                id: 'beginButton',
                                symbolName: 'beginButton',
                                type: 'rect',
                                rect: ['951', '928', '702', '192', 'auto', 'auto'],
                                cursor: 'pointer',
                                filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(96,194,186,1.00)", 0, 0, 0]
                            }]
                        },
                        {
                            id: 'moduleCompletedTitle',
                            type: 'text',
                            rect: ['200px', '200px', '1651px', '181px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-size: 150px; text-transform: uppercase; color: rgb(81, 125, 88); font-family: roboto, sans-serif;\">scenario Complete</span></p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [24, "px"], "rgba(0,0,0,1)", "700", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'moduleCompletedMessage',
                            type: 'group',
                            rect: ['3000px', '686', '1651', '303px', 'auto', 'auto'],
                            c: [
                            {
                                id: 'moduleCompletedText',
                                type: 'text',
                                rect: ['0px', '-136px', '1659px', '49px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-size: 40px; font-family: roboto, sans-serif;\">Congratulations! You have completed this scenario.</span></p>",
                                align: "left",
                                font: ['Arial, Helvetica, sans-serif', [24, "px"], "rgba(0,0,0,1)", "700", "none", "normal", "break-word", "normal"],
                                textStyle: ["", "", "", "", "none"]
                            }]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '2048px', '1536px', 'auto', 'auto'],
                            sizeRange: ['700px','','',''],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 55500,
                    autoPlay: true,
                    labels: {
                        "buttonLoop": 1000,
                        "hollyButtonLoop1": 6000,
                        "glassButtonLoop": 12000,
                        "potButtonLoop": 16000,
                        "briefcaseButtonLoop": 20000,
                        "question1Prompt": 23000,
                        "noAnswer1": 24000,
                        "yesAnswer1": 26000,
                        "q2Answer1": 29000,
                        "q2Answer2": 31000
                    },
                    data: [
                        [
                            "eid318",
                            "left",
                            53000,
                            1000,
                            "easeInQuad",
                            "${questionNav}",
                            '1888px',
                            '-2000px'
                        ],
                        [
                            "eid270",
                            "left",
                            49000,
                            1000,
                            "easeOutSine",
                            "${question4Response2}",
                            '3000px',
                            '200px'
                        ],
                        [
                            "eid271",
                            "left",
                            50000,
                            1000,
                            "easeInSine",
                            "${question4Response2}",
                            '200px',
                            '3000px'
                        ],
                        [
                            "eid309",
                            "display",
                            20000,
                            0,
                            "linear",
                            "${questionNavButton1Active}",
                            'block',
                            'block'
                        ],
                        [
                            "eid310",
                            "display",
                            28001,
                            0,
                            "linear",
                            "${questionNavButton1Active}",
                            'block',
                            'none'
                        ],
                        [
                            "eid184",
                            "left",
                            35000,
                            1000,
                            "easeInSine",
                            "${question3ContinueButton}",
                            '3000px',
                            '1255px'
                        ],
                        [
                            "eid192",
                            "left",
                            36000,
                            1000,
                            "easeOutSine",
                            "${question3ContinueButton}",
                            '1255px',
                            '-3000px'
                        ],
                        [
                            "eid193",
                            "left",
                            37000,
                            1000,
                            "easeInSine",
                            "${question3ContinueButton}",
                            '-3000px',
                            '1255px'
                        ],
                        [
                            "eid194",
                            "left",
                            38000,
                            1000,
                            "easeOutSine",
                            "${question3ContinueButton}",
                            '1255px',
                            '-3000px'
                        ],
                        [
                            "eid195",
                            "left",
                            39000,
                            1000,
                            "easeInSine",
                            "${question3ContinueButton}",
                            '-3000px',
                            '1255px'
                        ],
                        [
                            "eid196",
                            "left",
                            40000,
                            1000,
                            "easeOutSine",
                            "${question3ContinueButton}",
                            '1255px',
                            '-3000px'
                        ],
                        [
                            "eid197",
                            "left",
                            41000,
                            1000,
                            "easeInSine",
                            "${question3ContinueButton}",
                            '-3000px',
                            '1255px'
                        ],
                        [
                            "eid198",
                            "left",
                            42000,
                            1000,
                            "easeOutSine",
                            "${question3ContinueButton}",
                            '1255px',
                            '-3000px'
                        ],
                        [
                            "eid232",
                            "left",
                            43000,
                            1000,
                            "easeInSine",
                            "${question3ContinueButton}",
                            '-3000px',
                            '1255px'
                        ],
                        [
                            "eid234",
                            "left",
                            44000,
                            1000,
                            "easeOutSine",
                            "${question3ContinueButton}",
                            '1255px',
                            '-3000px'
                        ],
                        [
                            "eid237",
                            "left",
                            45000,
                            1000,
                            "easeInSine",
                            "${question3ContinueButton}",
                            '-3000px',
                            '1255px'
                        ],
                        [
                            "eid240",
                            "left",
                            46000,
                            1000,
                            "easeOutSine",
                            "${question3ContinueButton}",
                            '1255px',
                            '-3000px'
                        ],
                        [
                            "eid13",
                            "left",
                            1750,
                            7,
                            "easeInQuad",
                            "${startScreen}",
                            '0px',
                            '-3000px'
                        ],
                        [
                            "eid98",
                            "left",
                            24000,
                            1000,
                            "easeOutSine",
                            "${noAnswer}",
                            '2153px',
                            '352px'
                        ],
                        [
                            "eid105",
                            "left",
                            25000,
                            1000,
                            "linear",
                            "${noAnswer}",
                            '352px',
                            '2266px'
                        ],
                        [
                            "eid158",
                            "left",
                            26000,
                            3000,
                            "easeOutSine",
                            "${noAnswer}",
                            '2266px',
                            '2271px'
                        ],
                        [
                            "eid300",
                            "top",
                            14000,
                            0,
                            "easeOutSine",
                            "${hollyText3}",
                            '294px',
                            '294px'
                        ],
                        [
                            "eid26",
                            "opacity",
                            9000,
                            1000,
                            "easeOutSine",
                            "${hollyText2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid121",
                            "left",
                            28000,
                            1000,
                            "easeOutSine",
                            "${hollyQuestion2}",
                            '3000px',
                            '205px'
                        ],
                        [
                            "eid122",
                            "left",
                            29000,
                            1000,
                            "easeOutSine",
                            "${hollyQuestion2}",
                            '205px',
                            '-3000px'
                        ],
                        [
                            "eid123",
                            "left",
                            30000,
                            1000,
                            "easeInSine",
                            "${hollyQuestion2}",
                            '-3000px',
                            '200px'
                        ],
                        [
                            "eid124",
                            "left",
                            31000,
                            1000,
                            "easeOutSine",
                            "${hollyQuestion2}",
                            '200px',
                            '-3000px'
                        ],
                        [
                            "eid125",
                            "left",
                            32000,
                            1000,
                            "easeInSine",
                            "${hollyQuestion2}",
                            '-3000px',
                            '200px'
                        ],
                        [
                            "eid126",
                            "left",
                            33000,
                            1000,
                            "easeInSine",
                            "${hollyQuestion2}",
                            '200px',
                            '-3000px'
                        ],
                        [
                            "eid159",
                            "left",
                            34000,
                            1000,
                            "easeOutSine",
                            "${hollyQuestion2}",
                            '-3000px',
                            '200px'
                        ],
                        [
                            "eid163",
                            "left",
                            35000,
                            1000,
                            "easeInSine",
                            "${hollyQuestion2}",
                            '200px',
                            '-3000px'
                        ],
                        [
                            "eid2",
                            "filter.drop-shadow.color",
                            0,
                            0,
                            "linear",
                            "${beginButton}",
                            'rgba(96,194,186,1.00)',
                            'rgba(96,194,186,1.00)'
                        ],
                        [
                            "eid281",
                            "left",
                            54500,
                            1000,
                            "easeOutSine",
                            "${moduleCompletedMessage}",
                            '3000px',
                            '200px'
                        ],
                        [
                            "eid33",
                            "filter.drop-shadow.color",
                            11000,
                            0,
                            "easeOutQuad",
                            "${glassGraphic}",
                            'rgba(96,194,186,1.00)',
                            'rgba(96,194,186,1.00)'
                        ],
                        [
                            "eid70",
                            "line-height",
                            18000,
                            0,
                            "easeOutSine",
                            "${hollyText3}",
                            '43px',
                            '43px'
                        ],
                        [
                            "eid95",
                            "left",
                            24000,
                            1000,
                            "easeOutSine",
                            "${yesButton}",
                            '248px',
                            '-2226px'
                        ],
                        [
                            "eid110",
                            "left",
                            25000,
                            1000,
                            "easeOutSine",
                            "${yesButton}",
                            '-2226px',
                            '248px'
                        ],
                        [
                            "eid113",
                            "left",
                            26000,
                            1000,
                            "easeOutSine",
                            "${yesButton}",
                            '248px',
                            '-2226px'
                        ],
                        [
                            "eid148",
                            "left",
                            27000,
                            1000,
                            "easeOutSine",
                            "${yesButton}",
                            '-2226px',
                            '248px'
                        ],
                        [
                            "eid154",
                            "left",
                            28000,
                            1000,
                            "easeOutSine",
                            "${yesButton}",
                            '248px',
                            '-2281px'
                        ],
                        [
                            "eid294",
                            "left",
                            21000,
                            1000,
                            "linear",
                            "${hollyScene2}",
                            '0px',
                            '-3000px'
                        ],
                        [
                            "eid301",
                            "top",
                            18000,
                            0,
                            "easeOutSine",
                            "${hollyText3Copy}",
                            '495px',
                            '495px'
                        ],
                        [
                            "eid306",
                            "display",
                            20000,
                            0,
                            "linear",
                            "${question1NavButton2Active}",
                            'block',
                            'none'
                        ],
                        [
                            "eid311",
                            "display",
                            28001,
                            0,
                            "linear",
                            "${question1NavButton2Active}",
                            'none',
                            'block'
                        ],
                        [
                            "eid312",
                            "display",
                            35001,
                            0,
                            "linear",
                            "${question1NavButton2Active}",
                            'block',
                            'none'
                        ],
                        [
                            "eid298",
                            "top",
                            27000,
                            0,
                            "linear",
                            "${yesAnswer}",
                            '547px',
                            '547px'
                        ],
                        [
                            "eid161",
                            "left",
                            33000,
                            1000,
                            "easeOutSine",
                            "${question2Response3}",
                            '3000px',
                            '200px'
                        ],
                        [
                            "eid162",
                            "left",
                            34000,
                            1000,
                            "easeInSine",
                            "${question2Response3}",
                            '200px',
                            '3000px'
                        ],
                        [
                            "eid308",
                            "display",
                            20000,
                            0,
                            "linear",
                            "${question1NavButton4Active}",
                            'block',
                            'none'
                        ],
                        [
                            "eid315",
                            "display",
                            46001,
                            0,
                            "linear",
                            "${question1NavButton4Active}",
                            'none',
                            'block'
                        ],
                        [
                            "eid182",
                            "left",
                            35000,
                            1000,
                            "easeInSine",
                            "${hollyQuestion3}",
                            '3000px',
                            '200px'
                        ],
                        [
                            "eid185",
                            "left",
                            36000,
                            1000,
                            "easeOutSine",
                            "${hollyQuestion3}",
                            '200px',
                            '-3000px'
                        ],
                        [
                            "eid186",
                            "left",
                            37000,
                            1000,
                            "easeInSine",
                            "${hollyQuestion3}",
                            '-3000px',
                            '200px'
                        ],
                        [
                            "eid187",
                            "left",
                            38000,
                            1000,
                            "easeOutSine",
                            "${hollyQuestion3}",
                            '200px',
                            '-3000px'
                        ],
                        [
                            "eid188",
                            "left",
                            39000,
                            1000,
                            "easeInSine",
                            "${hollyQuestion3}",
                            '-3000px',
                            '200px'
                        ],
                        [
                            "eid189",
                            "left",
                            40000,
                            1000,
                            "easeOutSine",
                            "${hollyQuestion3}",
                            '200px',
                            '-3000px'
                        ],
                        [
                            "eid190",
                            "left",
                            41000,
                            1000,
                            "easeInSine",
                            "${hollyQuestion3}",
                            '-3000px',
                            '200px'
                        ],
                        [
                            "eid191",
                            "left",
                            42000,
                            1000,
                            "easeOutSine",
                            "${hollyQuestion3}",
                            '200px',
                            '-3000px'
                        ],
                        [
                            "eid233",
                            "left",
                            43000,
                            1000,
                            "easeInSine",
                            "${hollyQuestion3}",
                            '-3000px',
                            '200px'
                        ],
                        [
                            "eid235",
                            "left",
                            44000,
                            1000,
                            "easeOutSine",
                            "${hollyQuestion3}",
                            '200px',
                            '-3000px'
                        ],
                        [
                            "eid238",
                            "left",
                            45000,
                            1000,
                            "easeInSine",
                            "${hollyQuestion3}",
                            '-3000px',
                            '200px'
                        ],
                        [
                            "eid239",
                            "left",
                            46000,
                            1000,
                            "easeOutSine",
                            "${hollyQuestion3}",
                            '200px',
                            '-3000px'
                        ],
                        [
                            "eid31",
                            "opacity",
                            10000,
                            1000,
                            "linear",
                            "${glassGraphic}",
                            '0',
                            '1'
                        ],
                        [
                            "eid267",
                            "left",
                            47000,
                            1000,
                            "easeOutSine",
                            "${question4Response1}",
                            '3000px',
                            '200px'
                        ],
                        [
                            "eid268",
                            "left",
                            48000,
                            1000,
                            "easeInSine",
                            "${question4Response1}",
                            '200px',
                            '3000px'
                        ],
                        [
                            "eid307",
                            "display",
                            20000,
                            0,
                            "linear",
                            "${question1NavButton3Active}",
                            'block',
                            'none'
                        ],
                        [
                            "eid313",
                            "display",
                            35001,
                            0,
                            "linear",
                            "${question1NavButton3Active}",
                            'none',
                            'block'
                        ],
                        [
                            "eid314",
                            "display",
                            46001,
                            0,
                            "linear",
                            "${question1NavButton3Active}",
                            'block',
                            'none'
                        ],
                        [
                            "eid19",
                            "filter.drop-shadow.color",
                            5000,
                            0,
                            "linear",
                            "${Holly}",
                            'rgba(96,194,186,1.00)',
                            'rgba(96,194,186,1.00)'
                        ],
                        [
                            "eid71",
                            "line-height",
                            18000,
                            0,
                            "easeOutSine",
                            "${hollyText3Copy}",
                            '43px',
                            '43px'
                        ],
                        [
                            "eid242",
                            "left",
                            44000,
                            1000,
                            "easeOutSine",
                            "${question3Response5}",
                            '3000px',
                            '200px'
                        ],
                        [
                            "eid243",
                            "left",
                            45000,
                            1000,
                            "easeInSine",
                            "${question3Response5}",
                            '200px',
                            '3000px'
                        ],
                        [
                            "eid296",
                            "left",
                            46000,
                            5000,
                            "linear",
                            "${question3Response5}",
                            '3000px',
                            '3004px'
                        ],
                        [
                            "eid167",
                            "left",
                            28000,
                            1000,
                            "easeOutSine",
                            "${question2ContiueButton}",
                            '3877px',
                            '1198px'
                        ],
                        [
                            "eid168",
                            "left",
                            29000,
                            1000,
                            "easeInSine",
                            "${question2ContiueButton}",
                            '1198px',
                            '-3000px'
                        ],
                        [
                            "eid169",
                            "left",
                            30000,
                            1000,
                            "easeOutSine",
                            "${question2ContiueButton}",
                            '-3000px',
                            '1198px'
                        ],
                        [
                            "eid170",
                            "left",
                            31000,
                            1000,
                            "easeInSine",
                            "${question2ContiueButton}",
                            '1198px',
                            '-3000px'
                        ],
                        [
                            "eid171",
                            "left",
                            32000,
                            1000,
                            "easeOutSine",
                            "${question2ContiueButton}",
                            '-3000px',
                            '1198px'
                        ],
                        [
                            "eid172",
                            "left",
                            33000,
                            1000,
                            "easeInSine",
                            "${question2ContiueButton}",
                            '1198px',
                            '-3000px'
                        ],
                        [
                            "eid173",
                            "left",
                            34000,
                            1000,
                            "easeOutSine",
                            "${question2ContiueButton}",
                            '-3000px',
                            '1198px'
                        ],
                        [
                            "eid174",
                            "left",
                            35000,
                            1000,
                            "easeInSine",
                            "${question2ContiueButton}",
                            '1198px',
                            '-3000px'
                        ],
                        [
                            "eid131",
                            "left",
                            24000,
                            1000,
                            "easeOutSine",
                            "${question1ContiueButton}",
                            '1316px',
                            '-2000px'
                        ],
                        [
                            "eid132",
                            "left",
                            25000,
                            1000,
                            "easeOutSine",
                            "${question1ContiueButton}",
                            '-2000px',
                            '1316px'
                        ],
                        [
                            "eid133",
                            "left",
                            26000,
                            1000,
                            "easeOutSine",
                            "${question1ContiueButton}",
                            '1316px',
                            '-2000px'
                        ],
                        [
                            "eid146",
                            "left",
                            27000,
                            1000,
                            "easeOutSine",
                            "${question1ContiueButton}",
                            '-2000px',
                            '1316px'
                        ],
                        [
                            "eid153",
                            "left",
                            28000,
                            1000,
                            "easeOutSine",
                            "${question1ContiueButton}",
                            '1316px',
                            '-1213px'
                        ],
                        [
                            "eid201",
                            "left",
                            36000,
                            1000,
                            "easeOutSine",
                            "${question3Response1}",
                            '3000px',
                            '200px'
                        ],
                        [
                            "eid202",
                            "left",
                            37000,
                            1000,
                            "easeInSine",
                            "${question3Response1}",
                            '200px',
                            '3000px'
                        ],
                        [
                            "eid213",
                            "left",
                            38000,
                            1000,
                            "easeOutSine",
                            "${question3Response2}",
                            '3000px',
                            '200px'
                        ],
                        [
                            "eid214",
                            "left",
                            39000,
                            1000,
                            "easeInSine",
                            "${question3Response2}",
                            '200px',
                            '3000px'
                        ],
                        [
                            "eid228",
                            "left",
                            42000,
                            1000,
                            "easeOutSine",
                            "${question3Response4}",
                            '3000px',
                            '200px'
                        ],
                        [
                            "eid229",
                            "left",
                            43000,
                            1000,
                            "easeInSine",
                            "${question3Response4}",
                            '200px',
                            '3000px'
                        ],
                        [
                            "eid139",
                            "left",
                            31000,
                            1000,
                            "easeOutSine",
                            "${question2Response2}",
                            '3000px',
                            '203px'
                        ],
                        [
                            "eid140",
                            "left",
                            32000,
                            1000,
                            "easeInSine",
                            "${question2Response2}",
                            '203px',
                            '3000px'
                        ],
                        [
                            "eid4",
                            "filter.drop-shadow.blur",
                            0,
                            500,
                            "easeOutQuad",
                            "${beginButton}",
                            '0px',
                            '30px'
                        ],
                        [
                            "eid5",
                            "filter.drop-shadow.blur",
                            500,
                            500,
                            "easeInQuad",
                            "${beginButton}",
                            '30px',
                            '0px'
                        ],
                        [
                            "eid82",
                            "filter.drop-shadow.blur",
                            19000,
                            500,
                            "easeOutSine",
                            "${briefcaseGraphic}",
                            '0px',
                            '25px'
                        ],
                        [
                            "eid83",
                            "filter.drop-shadow.blur",
                            19500,
                            500,
                            "easeOutSine",
                            "${briefcaseGraphic}",
                            '25px',
                            '0px'
                        ],
                        [
                            "eid156",
                            "left",
                            28000,
                            1000,
                            "easeOutSine",
                            "${question1Text}",
                            '200px',
                            '-2329px'
                        ],
                        [
                            "eid302",
                            "height",
                            5000,
                            0,
                            "easeOutSine",
                            "${hollyText1}",
                            '374px',
                            '374px'
                        ],
                        [
                            "eid7",
                            "opacity",
                            1500,
                            250,
                            "easeInQuad",
                            "${startScreen}",
                            '1',
                            '0'
                        ],
                        [
                            "eid28",
                            "top",
                            10000,
                            1000,
                            "easeOutQuad",
                            "${glassGraphic}",
                            '-600px',
                            '410px'
                        ],
                        [
                            "eid45",
                            "top",
                            13000,
                            1000,
                            "easeInSine",
                            "${glassGraphic}",
                            '410px',
                            '1557px'
                        ],
                        [
                            "eid128",
                            "left",
                            29000,
                            1000,
                            "easeOutSine",
                            "${question2Response1}",
                            '3000px',
                            '200px'
                        ],
                        [
                            "eid135",
                            "left",
                            30000,
                            1000,
                            "easeInSine",
                            "${question2Response1}",
                            '200px',
                            '3000px'
                        ],
                        [
                            "eid35",
                            "filter.drop-shadow.blur",
                            11000,
                            500,
                            "easeOutQuad",
                            "${glassGraphic}",
                            '0px',
                            '25px'
                        ],
                        [
                            "eid36",
                            "filter.drop-shadow.blur",
                            11500,
                            500,
                            "easeInQuad",
                            "${glassGraphic}",
                            '25px',
                            '0px'
                        ],
                        [
                            "eid17",
                            "top",
                            1750,
                            1000,
                            "easeOutBounce",
                            "${hollyTextTitle}",
                            '-300px',
                            '89px'
                        ],
                        [
                            "eid279",
                            "top",
                            53000,
                            1500,
                            "easeOutBounce",
                            "${moduleCompletedTitle}",
                            '-370px',
                            '200px'
                        ],
                        [
                            "eid100",
                            "top",
                            25000,
                            0,
                            "easeOutSine",
                            "${noAnswer}",
                            '668px',
                            '668px'
                        ],
                        [
                            "eid78",
                            "top",
                            17000,
                            1000,
                            "easeOutSine",
                            "${briefcaseGraphic}",
                            '-600px',
                            '644px'
                        ],
                        [
                            "eid251",
                            "left",
                            46000,
                            1000,
                            "easeOutSine",
                            "${question4ContinueButton}",
                            '3000px',
                            '1355px'
                        ],
                        [
                            "eid253",
                            "left",
                            47000,
                            1000,
                            "easeInSine",
                            "${question4ContinueButton}",
                            '1355px',
                            '-3000px'
                        ],
                        [
                            "eid255",
                            "left",
                            48000,
                            1000,
                            "easeOutSine",
                            "${question4ContinueButton}",
                            '-3000px',
                            '1355px'
                        ],
                        [
                            "eid257",
                            "left",
                            49000,
                            1000,
                            "easeInSine",
                            "${question4ContinueButton}",
                            '1355px',
                            '-3000px'
                        ],
                        [
                            "eid259",
                            "left",
                            50000,
                            1000,
                            "easeOutSine",
                            "${question4ContinueButton}",
                            '-3000px',
                            '1355px'
                        ],
                        [
                            "eid261",
                            "left",
                            51000,
                            1000,
                            "easeInSine",
                            "${question4ContinueButton}",
                            '1355px',
                            '-3000px'
                        ],
                        [
                            "eid263",
                            "left",
                            52000,
                            1000,
                            "easeOutSine",
                            "${question4ContinueButton}",
                            '-3000px',
                            '1355px'
                        ],
                        [
                            "eid265",
                            "left",
                            53000,
                            1000,
                            "easeInSine",
                            "${question4ContinueButton}",
                            '1355px',
                            '-3000px'
                        ],
                        [
                            "eid115",
                            "left",
                            26000,
                            1000,
                            "easeOutSine",
                            "${yesAnswer}",
                            '2267px',
                            '358px'
                        ],
                        [
                            "eid145",
                            "left",
                            27000,
                            1000,
                            "easeOutSine",
                            "${yesAnswer}",
                            '358px',
                            '3000px'
                        ],
                        [
                            "eid52",
                            "filter.drop-shadow.color",
                            15000,
                            0,
                            "easeOutSine",
                            "${potLeafGraphic}",
                            'rgba(96,194,186,1.00)',
                            'rgba(96,194,186,1.00)'
                        ],
                        [
                            "eid58",
                            "opacity",
                            17000,
                            1000,
                            "easeOutSine",
                            "${hollyText3Copy}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid84",
                            "filter.drop-shadow.color",
                            19500,
                            0,
                            "easeOutSine",
                            "${briefcaseGraphic}",
                            'rgba(96,194,186,1.00)',
                            'rgba(96,194,186,1.00)'
                        ],
                        [
                            "eid285",
                            "left",
                            24000,
                            1000,
                            "easeOutSine",
                            "${theBackbutton3}",
                            '36px',
                            '-2000px'
                        ],
                        [
                            "eid286",
                            "left",
                            25000,
                            1000,
                            "easeOutSine",
                            "${theBackbutton3}",
                            '-2000px',
                            '36px'
                        ],
                        [
                            "eid288",
                            "left",
                            26000,
                            1000,
                            "easeOutSine",
                            "${theBackbutton3}",
                            '36px',
                            '-2000px'
                        ],
                        [
                            "eid289",
                            "left",
                            27000,
                            1000,
                            "easeOutSine",
                            "${theBackbutton3}",
                            '-2000px',
                            '36px'
                        ],
                        [
                            "eid283",
                            "left",
                            28000,
                            1000,
                            "easeOutSine",
                            "${theBackbutton3}",
                            '36px',
                            '-2000px'
                        ],
                        [
                            "eid15",
                            "opacity",
                            2750,
                            1000,
                            "linear",
                            "${hollyText1}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid96",
                            "left",
                            24000,
                            1000,
                            "easeOutSine",
                            "${noButton}",
                            '1191px',
                            '-1283px'
                        ],
                        [
                            "eid108",
                            "left",
                            25000,
                            1000,
                            "easeOutSine",
                            "${noButton}",
                            '-1283px',
                            '1191px'
                        ],
                        [
                            "eid112",
                            "left",
                            26000,
                            1000,
                            "easeOutSine",
                            "${noButton}",
                            '1191px',
                            '-1283px'
                        ],
                        [
                            "eid147",
                            "left",
                            27000,
                            1000,
                            "easeOutSine",
                            "${noButton}",
                            '-1283px',
                            '1191px'
                        ],
                        [
                            "eid155",
                            "left",
                            28000,
                            1000,
                            "easeOutSine",
                            "${noButton}",
                            '1191px',
                            '-1338px'
                        ],
                        [
                            "eid220",
                            "left",
                            40000,
                            1000,
                            "easeOutSine",
                            "${question3Response3}",
                            '3000px',
                            '200px'
                        ],
                        [
                            "eid221",
                            "left",
                            41000,
                            1000,
                            "easeInSine",
                            "${question3Response3}",
                            '200px',
                            '3000px'
                        ],
                        [
                            "eid53",
                            "filter.drop-shadow.blur",
                            15000,
                            500,
                            "easeOutSine",
                            "${potLeafGraphic}",
                            '0px',
                            '25px'
                        ],
                        [
                            "eid54",
                            "filter.drop-shadow.blur",
                            15500,
                            500,
                            "easeOutSine",
                            "${potLeafGraphic}",
                            '25px',
                            '0px'
                        ],
                        [
                            "eid47",
                            "top",
                            13000,
                            1000,
                            "easeOutSine",
                            "${potLeafGraphic}",
                            '-600px',
                            '467px'
                        ],
                        [
                            "eid56",
                            "top",
                            17000,
                            1000,
                            "easeInSine",
                            "${potLeafGraphic}",
                            '467px',
                            '1557px'
                        ],
                        [
                            "eid24",
                            "left",
                            7000,
                            2000,
                            "easeOutSine",
                            "${hollyScene1}",
                            '0px',
                            '-3000px'
                        ],
                        [
                            "eid21",
                            "filter.drop-shadow.blur",
                            5000,
                            500,
                            "easeInQuad",
                            "${Holly}",
                            '0.000000px',
                            '25px'
                        ],
                        [
                            "eid22",
                            "filter.drop-shadow.blur",
                            5500,
                            500,
                            "easeOutQuad",
                            "${Holly}",
                            '25px',
                            '0px'
                        ],
                        [
                            "eid72",
                            "line-height",
                            18000,
                            0,
                            "easeOutSine",
                            "${hollyText2}",
                            '43px',
                            '43px'
                        ],
                        [
                            "eid48",
                            "opacity",
                            13000,
                            1000,
                            "easeOutSine",
                            "${hollyText3}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid247",
                            "left",
                            46000,
                            1000,
                            "easeOutSine",
                            "${hollyQuestion4}",
                            '3000px',
                            '200px'
                        ],
                        [
                            "eid252",
                            "left",
                            47000,
                            1000,
                            "easeInSine",
                            "${hollyQuestion4}",
                            '200px',
                            '-3000px'
                        ],
                        [
                            "eid254",
                            "left",
                            48000,
                            1000,
                            "easeOutSine",
                            "${hollyQuestion4}",
                            '-3000px',
                            '200px'
                        ],
                        [
                            "eid256",
                            "left",
                            49000,
                            1000,
                            "easeInSine",
                            "${hollyQuestion4}",
                            '200px',
                            '-3000px'
                        ],
                        [
                            "eid258",
                            "left",
                            50000,
                            1000,
                            "easeOutSine",
                            "${hollyQuestion4}",
                            '-3000px',
                            '200px'
                        ],
                        [
                            "eid260",
                            "left",
                            51000,
                            1000,
                            "easeInSine",
                            "${hollyQuestion4}",
                            '200px',
                            '-3000px'
                        ],
                        [
                            "eid262",
                            "left",
                            52000,
                            1000,
                            "easeOutSine",
                            "${hollyQuestion4}",
                            '-3000px',
                            '200px'
                        ],
                        [
                            "eid264",
                            "left",
                            53000,
                            1000,
                            "easeInSine",
                            "${hollyQuestion4}",
                            '200px',
                            '-3000px'
                        ],
                        [
                            "eid273",
                            "left",
                            51000,
                            1000,
                            "easeOutSine",
                            "${question4Response3}",
                            '3000px',
                            '200px'
                        ],
                        [
                            "eid274",
                            "left",
                            52000,
                            1000,
                            "easeInSine",
                            "${question4Response3}",
                            '200px',
                            '3000px'
                        ]
                    ]
                }
            },
            "beginButton": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'beginButton',
                            stroke: [0, 'rgba(0, 0, 0, 0)', 'none'],
                            rect: ['0px', '0px', '702px', '192px', 'auto', 'auto'],
                            borderRadius: ['40px', '40px', '40px', '40px 40px'],
                            fill: ['rgba(141,181,148,1.00)'],
                            c: [
                            {
                                font: ['roboto, sans-serif', [24, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                                type: 'text',
                                align: 'left',
                                id: 'beginButtonText',
                                textStyle: ['', '', '', '', 'none'],
                                text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"text-transform: uppercase; color: rgb(255, 255, 255); font-size: 80px; font-weight: 700;\">Begin</span></p>',
                                rect: ['0px', '46px', '702px', '104px', 'auto', 'auto']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '702px', '192px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "restartButton": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '160px', '85px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'restartButtonBg',
                            stroke: [0, 'rgba(0, 0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(74,80,115,1.00)']
                        },
                        {
                            type: 'text',
                            id: 'restartButtonText',
                            text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"color: rgb(255, 255, 255); font-weight: 700; text-transform: uppercase; font-family: roboto, sans-serif;\">restart</span></p>',
                            rect: ['0px', '29px', '160px', '41px', 'auto', 'auto'],
                            font: ['roboto, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '160px', '85px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("HollyModule1_edgeActions.js");
})("EDGE-734474316");
