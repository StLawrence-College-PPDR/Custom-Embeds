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
                            id: 'chrisTherapistOffice',
                            type: 'image',
                            rect: ['0', '0', '2048px', '1536px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"chrisTherapistOffice.png",'0px','0px'],
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0]
                        },
                        {
                            id: 'sittingChris',
                            type: 'image',
                            rect: ['1495px', '941px', '477px', '477px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"sittingChris.png",'0px','0px'],
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0],
                            transform: [[],[],[],['-0.99967']]
                        },
                        {
                            id: 'ethanGradientBg',
                            type: 'image',
                            rect: ['0px', '0', '2048px', '1536px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"ethanGradientBg.png",'0px','0px']
                        },
                        {
                            id: 'Chris',
                            type: 'image',
                            rect: ['150px', '211px', '257px', '1000px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Chris.png",'0px','0px']
                        },
                        {
                            id: 'question1BackButton',
                            type: 'group',
                            rect: ['38px', '1375px', '160', '128', 'auto', 'auto'],
                            cursor: 'pointer',
                            c: [
                            {
                                id: 'question1BackButtonBg',
                                type: 'rect',
                                rect: ['0px', '40px', '165px', '85px', 'auto', 'auto'],
                                borderRadius: ["10px", "10px", "10px", "10px 10px"],
                                fill: ["rgba(179,113,113,1.00)"],
                                stroke: [0,"rgba(0, 0, 0, 0)","none"]
                            },
                            {
                                id: 'question1BackButtonText',
                                type: 'text',
                                rect: ['0px', '70px', '165px', '35px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px; text-align: center;\">​<span style=\"color: rgb(255, 255, 255); text-transform: uppercase; font-weight: 700;\">back</span></p>",
                                align: "left",
                                font: ['roboto, sans-serif', [24, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                                textStyle: ["", "", "", "", "none"]
                            }]
                        },
                        {
                            id: 'question1Text',
                            type: 'text',
                            rect: ['585px', '100px', '1359px', '175px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​<span style=\"font-size: 60px; font-weight: 700;\">Consider&nbsp;a treatment method that you think would be effective to support Chris and his family.</span></p>",
                            font: ['roboto, sans-serif', [24, ""], "rgba(0,0,0,1)", "normal", "none", "", "break-word", "normal"]
                        },
                        {
                            id: 'question1Answer1',
                            type: 'group',
                            rect: ['585px', '400px', '1359', '145', 'auto', 'auto'],
                            cursor: 'pointer',
                            c: [
                            {
                                id: 'question1Answer1Bg',
                                type: 'rect',
                                rect: ['0px', '0px', '1359px', '145px', 'auto', 'auto'],
                                borderRadius: ["20px", "20px", "20px", "20px 20px"],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgba(0,0,0,0.00)","none"]
                            },
                            {
                                id: 'question1Answer1Text',
                                type: 'text',
                                rect: ['0px', '46px', '1359px', '55px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-size: 40px;\">​</span><span style=\"font-size: 40px; font-weight: 700;\">​Recovery-Oriented Mutual Help Group</span></p>",
                                align: "left",
                                font: ['roboto, sans-serif', [24, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                                textStyle: ["", "", "", "", "none"]
                            }]
                        },
                        {
                            id: 'question1Answer2',
                            type: 'group',
                            rect: ['585px', '594px', '1359', '145', 'auto', 'auto'],
                            cursor: 'pointer',
                            c: [
                            {
                                id: 'question1Answer2Bg',
                                type: 'rect',
                                rect: ['0px', '0px', '1359px', '145px', 'auto', 'auto'],
                                borderRadius: ["20px", "20px", "20px", "20px 20px"],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgba(0,0,0,0.00)","none"]
                            },
                            {
                                id: 'question1Answer2Text',
                                type: 'text',
                                rect: ['0px', '46px', '1359px', '55px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px; text-align: center;\"><span style=\"font-size: 40px; font-weight: 700;\">Individual Counseling – Cognitive Behavioural Therapy</span></p>",
                                align: "left",
                                font: ['roboto, sans-serif', [24, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                                textStyle: ["", "", "", "", "none"]
                            }]
                        },
                        {
                            id: 'question1Answer3',
                            type: 'group',
                            rect: ['585px', '782px', '1359', '145', 'auto', 'auto'],
                            cursor: 'pointer',
                            c: [
                            {
                                id: 'question1Answer3Bg',
                                type: 'rect',
                                rect: ['0px', '0px', '1359px', '145px', 'auto', 'auto'],
                                borderRadius: ["20px", "20px", "20px", "20px 20px"],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgba(0,0,0,0.00)","none"]
                            },
                            {
                                id: 'question1Answer3Text',
                                type: 'text',
                                rect: ['0px', '46px', '1359px', '55px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-size: 40px;\">​</span><span style=\"font-size: 40px; font-weight: 700;\">Solution-Focused Family Therapy</span></p>",
                                align: "left",
                                font: ['roboto, sans-serif', [24, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                                textStyle: ["", "", "", "", "none"]
                            }]
                        },
                        {
                            id: 'question1Answer4',
                            type: 'group',
                            rect: ['585px', '973px', '1359', '145', 'auto', 'auto'],
                            cursor: 'pointer',
                            c: [
                            {
                                id: 'question1Answer4Bg',
                                type: 'rect',
                                rect: ['0px', '0px', '1359px', '145px', 'auto', 'auto'],
                                borderRadius: ["20px", "20px", "20px", "20px 20px"],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgba(0,0,0,0.00)","none"]
                            },
                            {
                                id: 'question1Answer4Text',
                                type: 'text',
                                rect: ['0px', '46px', '1359px', '55px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-size: 40px;\">​</span><span style=\"font-size: 40px; font-weight: 700;\">Other Methodology</span></p>",
                                align: "left",
                                font: ['roboto, sans-serif', [24, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                                textStyle: ["", "", "", "", "none"]
                            }]
                        },
                        {
                            id: 'question1ContinueButton',
                            type: 'group',
                            rect: ['1455px', '1151px', '489', '128', 'auto', 'auto'],
                            cursor: 'pointer',
                            c: [
                            {
                                id: 'question1ContinueButtonBg',
                                type: 'rect',
                                rect: ['0px', '0px', '488px', '128px', 'auto', 'auto'],
                                borderRadius: ["10px", "10px", "10px", "10px"],
                                fill: ["rgba(167,230,182,1.00)"],
                                stroke: [0,"rgba(0, 0, 0, 0)","none"]
                            },
                            {
                                id: 'question1ContinueButtonText',
                                type: 'text',
                                rect: ['1px', '42px', '488px', '43px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-family: roboto, sans-serif; font-size: 40px; text-transform: uppercase; font-weight: 700;\">continue</span></p>",
                                font: ['Arial, Helvetica, sans-serif', [24, ""], "rgba(0,0,0,1)", "normal", "none", "", "break-word", "normal"]
                            }]
                        },
                        {
                            id: 'response1',
                            type: 'group',
                            rect: ['3000px', '474', '1757', '764', 'auto', 'auto'],
                            c: [
                            {
                                id: 'response1Body',
                                type: 'group',
                                rect: ['0px', '0px', '1757', '468', 'auto', 'auto'],
                                c: [
                                {
                                    id: 'response1Bg',
                                    type: 'rect',
                                    rect: ['0px', '0px', '1757px', '468px', 'auto', 'auto'],
                                    borderRadius: ["20px", "20px", "20px", "20px 20px"],
                                    fill: ["rgba(255,255,255,1.00)"],
                                    stroke: [0,"rgba(0, 0, 0, 0)","none"]
                                },
                                {
                                    id: 'response1Text',
                                    type: 'text',
                                    rect: ['60px', '79px', '1648px', '316px', 'auto', 'auto'],
                                    text: "<p style=\"margin: 0px;\">​<span style=\"font-size: 40px; font-weight: 700;\">Recovery-Oriented Mutual Help Group</span></p><p style=\"margin: 0px;\"><span style=\"font-size: 40px;\">This treatment method is supported by the research as being an effective way to treat adolescent mental health and substance abuse issues. One potential barrier to this type of treatment is that if the dynamics of the group shift toward making substance use seem “cool” they risk having adverse effects. An effective facilitator can employ strategies to ensure that this does not occur.</span></p>",
                                    align: "left",
                                    font: ['roboto, sans-serif', [24, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                                    textStyle: ["", "", "", "", "none"]
                                }]
                            },
                            {
                                id: 'response1BackButton',
                                type: 'group',
                                rect: ['1385px', '539px', '372', '121', 'auto', 'auto'],
                                cursor: 'pointer',
                                c: [
                                {
                                    id: 'response1BackButtonBg',
                                    type: 'rect',
                                    rect: ['0px', '0px', '372px', '121px', 'auto', 'auto'],
                                    borderRadius: ["10px", "10px", "10px", "10px 10px"],
                                    fill: ["rgba(167,230,182,1.00)"],
                                    stroke: [0,"rgba(0, 0, 0, 0)","none"]
                                },
                                {
                                    id: 'response1BackButtonText',
                                    type: 'text',
                                    rect: ['0px', '31px', '372px', '50px', 'auto', 'auto'],
                                    text: "<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-size: 40px; text-transform: uppercase; font-weight: 700;\">back</span></p>",
                                    align: "left",
                                    font: ['roboto, sans-serif', [24, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                                    textStyle: ["", "", "", "", "none"]
                                }]
                            }]
                        },
                        {
                            id: 'response2',
                            type: 'group',
                            rect: ['3000px', '409', '1757', '808', 'auto', 'auto'],
                            c: [
                            {
                                id: 'response2Body',
                                type: 'group',
                                rect: ['0px', '0px', '1757', '626', 'auto', 'auto'],
                                c: [
                                {
                                    id: 'response2Bg',
                                    type: 'rect',
                                    rect: ['0px', '0px', '1757px', '626px', 'auto', 'auto'],
                                    borderRadius: ["20px", "20px", "20px", "20px 20px"],
                                    fill: ["rgba(255,255,255,1.00)"],
                                    stroke: [0,"rgba(0, 0, 0, 0)","none"]
                                },
                                {
                                    id: 'response2Text',
                                    type: 'text',
                                    rect: ['60px', '77px', '1648px', '485px', 'auto', 'auto'],
                                    text: "<p style=\"margin: 0px;\">​<span style=\"font-family: roboto, sans-serif; font-size: 40px; font-weight: 700;\">Individual Counseling – Cognitive Behavioural Therapy</span></p><p style=\"margin: 0px;\"><span style=\"font-family: roboto, sans-serif; font-size: 40px;\">This treatment method is supported by the research as being an effective way to treat adolescent mental health and substance abuse issues. One possible barrier to this type of approach is that often counselor or clinicians are only able to meet with clients once per week at a maximum and sometimes as infrequently as once per month.</span></p><p style=\"margin: 0px;\"><span style=\"font-family: roboto, sans-serif; font-size: 40px;\">​</span></p><p style=\"margin: 0px;\"><span style=\"font-family: roboto, sans-serif; font-size: 40px;\">If the youth is not involved with any other services/treatment methodologies and if there is no family work being done between sessions it may be difficult for this method alone to support Chris and his family.</span></p>",
                                    font: ['Arial, Helvetica, sans-serif', [24, ""], "rgba(0,0,0,1)", "normal", "none", "", "break-word", "normal"]
                                }]
                            },
                            {
                                id: 'response2BackButton',
                                type: 'group',
                                rect: ['1267px', '680px', '488', '128', 'auto', 'auto'],
                                cursor: 'pointer',
                                c: [
                                {
                                    id: 'response2BackButtonBg',
                                    type: 'rect',
                                    rect: ['0px', '0px', '488px', '128px', 'auto', 'auto'],
                                    borderRadius: ["10px", "10px", "10px", "10px 10px"],
                                    fill: ["rgba(167,230,182,1.00)"],
                                    stroke: [0,"rgba(0, 0, 0, 0)","none"]
                                },
                                {
                                    id: 'response2BackButtonText',
                                    type: 'text',
                                    rect: ['0px', '33px', '488px', '50px', 'auto', 'auto'],
                                    text: "<p style=\"margin: 0px;\">​<span style=\"font-family: roboto, sans-serif;\">back</span></p>",
                                    align: "center",
                                    font: ['roboto, sans-serif', [40, "px"], "rgba(0,0,0,1)", "700", "none", "normal", "break-word", "normal"],
                                    textStyle: ["", "", "", "", "uppercase"]
                                }]
                            }]
                        },
                        {
                            id: 'response3',
                            type: 'group',
                            rect: ['3000px', '272', '1759', '1027', 'auto', 'auto'],
                            c: [
                            {
                                id: 'response3Body',
                                type: 'group',
                                rect: ['0px', '0px', '1757', '839', 'auto', 'auto'],
                                c: [
                                {
                                    id: 'response3Bg',
                                    type: 'rect',
                                    rect: ['0px', '0px', '1757px', '839px', 'auto', 'auto'],
                                    borderRadius: ["20px", "20px", "20px", "20px 20px"],
                                    fill: ["rgba(255,255,255,1.00)"],
                                    stroke: [0,"rgba(0, 0, 0, 0)","none"]
                                },
                                {
                                    id: 'response3Text',
                                    type: 'text',
                                    rect: ['60px', '69px', '1648px', '694px', 'auto', 'auto'],
                                    text: "<p style=\"margin: 0px;\">​<span style=\"font-family: roboto, sans-serif; font-size: 40px; font-weight: 600;\">Solution-Focused Family Therapy</span></p><p style=\"margin: 0px;\"><span style=\"font-family: roboto, sans-serif; font-size: 40px;\">This would be an effective treatment methodology to assist Chris and his family for a couple of reasons. The emphasis on a brief or solution-focused approach will help to come up with concrete solutions in a timely manner. This is helpful for this family because they are describing that the situation is quite serious and Chris may need to leave the home if things do not improve quickly.</span></p><p style=\"margin: 0px;\"><span style=\"font-family: roboto, sans-serif; font-size: 40px;\">​</span></p><p style=\"margin: 0px;\"><span style=\"font-family: roboto, sans-serif; font-size: 40px;\"> </span></p><p style=\"margin: 0px;\"><span style=\"font-family: roboto, sans-serif; font-size: 40px;\">The use of a family-based method is also helpful because in this example Chris is one part of a family system and there is information to suggest that every member of the family is impacted by Chris’ behaviours. Chris’ behaviours may also be impacted by every member of the family. Meeting with the family members together will help you to determine how to treat and support the whole family, and encourage the family to keep working on a solution outside of therapy time.</span></p>",
                                    font: ['Arial, Helvetica, sans-serif', [24, ""], "rgba(0,0,0,1)", "normal", "none", "", "break-word", "normal"]
                                }]
                            },
                            {
                                id: 'response3BackButton',
                                type: 'group',
                                rect: ['1269px', '899px', '490', '128', 'auto', 'auto'],
                                cursor: 'pointer',
                                c: [
                                {
                                    id: 'response3BackButtonBg',
                                    type: 'rect',
                                    rect: ['0px', '0px', '488px', '128px', 'auto', 'auto'],
                                    borderRadius: ["10px", "10px", "10px", "10px"],
                                    fill: ["rgba(167,230,182,1.00)"],
                                    stroke: [0,"rgba(0, 0, 0, 0)","none"]
                                },
                                {
                                    id: 'response3BackButtonText',
                                    type: 'text',
                                    rect: ['2px', '32px', '488px', '50px', 'auto', 'auto'],
                                    text: "<p style=\"margin: 0px; text-align: center;\"><span style=\"font-family: roboto, sans-serif; font-size: 40px; text-transform: uppercase; font-weight: 700;\">back</span></p>",
                                    font: ['Arial, Helvetica, sans-serif', [24, ""], "rgba(0,0,0,1)", "normal", "none", "", "break-word", "normal"]
                                }]
                            }]
                        },
                        {
                            id: 'response4',
                            type: 'group',
                            rect: ['3000px', '516', '1757', '585', 'auto', 'auto'],
                            c: [
                            {
                                id: 'response4Body',
                                type: 'group',
                                rect: ['0px', '0px', '1757', '389', 'auto', 'auto'],
                                c: [
                                {
                                    id: 'response4Bg',
                                    type: 'rect',
                                    rect: ['0px', '0px', '1757px', '389px', 'auto', 'auto'],
                                    borderRadius: ["20px", "20px", "20px", "20px 20px"],
                                    fill: ["rgba(255,255,255,1.00)"],
                                    stroke: [0,"rgba(0, 0, 0, 0)","none"]
                                },
                                {
                                    id: 'response4Text',
                                    type: 'text',
                                    rect: ['60px', '57px', '1648px', '269px', 'auto', 'auto'],
                                    text: "<p style=\"margin: 0px;\">​<span style=\"font-family: roboto, sans-serif; font-size: 40px; font-weight: 700;\">Other Methodology</span></p><p style=\"margin: 0px;\"><span style=\"font-family: roboto, sans-serif; font-size: 40px;\">If you selected this option because you were not confident that any of the above treatment methods alone would be sufficient to support Chris and his family you may be on the right track. Research supports the use of multiple treatment methods to treat adolescent mental health and/or substance abuse issues.</span></p>",
                                    align: "left",
                                    font: ['Arial, Helvetica, sans-serif', [24, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                                    textStyle: ["", "", "", "", "none"]
                                }]
                            },
                            {
                                id: 'response4BackButton',
                                type: 'group',
                                rect: ['1267px', '457px', '490', '128', 'auto', 'auto'],
                                cursor: 'pointer',
                                c: [
                                {
                                    id: 'response4BackButtonBg',
                                    type: 'rect',
                                    rect: ['2px', '0px', '488px', '128px', 'auto', 'auto'],
                                    borderRadius: ["10px", "10px", "10px", "10px"],
                                    fill: ["rgba(167,230,182,1.00)"],
                                    stroke: [0,"rgba(0, 0, 0, 0)","none"]
                                },
                                {
                                    id: 'response4BackButtonText',
                                    type: 'text',
                                    rect: ['0px', '32px', '490px', '50px', 'auto', 'auto'],
                                    text: "<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-family: roboto, sans-serif; font-size: 40px; font-weight: 700; text-transform: uppercase;\">back</span></p>",
                                    align: "left",
                                    font: ['Arial, Helvetica, sans-serif', [24, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                                    textStyle: ["", "", "", "", "none"]
                                }]
                            }]
                        },
                        {
                            id: 'chrisScene4',
                            type: 'group',
                            rect: ['0px', '-752px', '2048px', '2288', 'auto', 'auto'],
                            c: [
                            {
                                id: 'chrisHouseBg',
                                type: 'image',
                                rect: ['0px', '752px', '2048px', '1536px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"chrisHouseBg.png",'0px','0px'],
                                filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0]
                            },
                            {
                                id: 'evictionLetterGraphic',
                                type: 'image',
                                rect: ['200px', '1348px', '600px', '600px', 'auto', 'auto'],
                                cursor: 'pointer',
                                fill: ["rgba(0,0,0,0)",im+"evictionLetterGraphic.png",'0px','0px'],
                                filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(96,194,186,1.00)", 0, 0, 0]
                            },
                            {
                                id: 'chrisScene4Text',
                                type: 'text',
                                rect: ['200px', '952px', '1674px', '95px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px; line-height: 44px;\">​<span style=\"font-size: 40px; font-family: roboto, sans-serif;\">Joanne reports that due to Chris' damage to the home she is also worried she might be evicted&nbsp;from her own home and is not sure how she will manage the financial cost of moving.</span></p>",
                                align: "left",
                                font: ['Arial, Helvetica, sans-serif', [24, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                                textStyle: ["", "", "", "", "none"]
                            },
                            {
                                id: 'backButtonScene4',
                                symbolName: 'backButton',
                                type: 'rect',
                                rect: ['-1000px', '2167px', 'undefined', 'undefined', 'auto', 'auto'],
                                cursor: 'pointer'
                            }]
                        },
                        {
                            id: 'chrisScene3',
                            type: 'group',
                            rect: ['-106px', '-42', '2159', '1794', 'auto', 'auto'],
                            c: [
                            {
                                id: 'chrisHouse2Bg2',
                                type: 'image',
                                rect: ['100px', '0px', '2159px', '1620px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"chrisHouse2Bg.png",'0px','0px']
                            },
                            {
                                id: 'ChrisMom',
                                type: 'image',
                                rect: ['359px', '972px', '222px', '822px', 'auto', 'auto'],
                                cursor: 'pointer',
                                fill: ["rgba(0,0,0,0)",im+"ChrisMom.png",'0px','0px'],
                                filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(96,194,186,1.00)", 0, 0, 0],
                                transform: [[],[],[],['-1.00728']]
                            },
                            {
                                id: 'chrisScene3Text',
                                type: 'text',
                                rect: ['306px', '182px', '1648px', '253px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px; line-height: 44px;\"><span style=\"font-size: 40px; font-family: roboto, sans-serif;\">Joanne knows that Chris drinks alcohol with his friends and smokes some marijuana but because of his behaviours she worries that Chris might be using more serious drugs.</span></p><p style=\"margin: 0px; line-height: 44px;\"><br><span style=\"font-family: roboto, sans-serif; font-size: 40px;\">Joanne said she also overheard Chris talking about \"ice\" to his friends and she is worried he might be using crystal meth as a result.</span></p>",
                                align: "left",
                                font: ['Arial, Helvetica, sans-serif', [24, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                                textStyle: ["", "", "29px", "", "none"]
                            },
                            {
                                id: 'backButtonScene3',
                                symbolName: 'backButton',
                                type: 'rect',
                                rect: ['142px', '1457px', 'undefined', 'undefined', 'auto', 'auto'],
                                cursor: 'pointer'
                            }]
                        },
                        {
                            id: 'chrisScene2',
                            type: 'group',
                            rect: ['-106px', '-42', '2160', '1953', 'auto', 'auto'],
                            c: [
                            {
                                id: 'chrisRoomBg',
                                type: 'image',
                                rect: ['0px', '0px', '2160px', '1620px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"chrisRoomBg.png",'0px','0px']
                            },
                            {
                                id: 'chrisFrontScene2',
                                type: 'image',
                                rect: ['635px', '473px', '477px', '1480px', 'auto', 'auto'],
                                cursor: 'pointer',
                                fill: ["rgba(0,0,0,0)",im+"ChrisFront2.png",'0px','0px'],
                                filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(96,194,186,1.00)", 0, 0, 0]
                            },
                            {
                                id: 'chrisScene2Text',
                                type: 'text',
                                rect: ['306px', '181px', '1648px', '144px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px; line-height: 44px;\">​<span style=\"font-size: 40px; font-family: roboto, sans-serif;\">Joanne reports that Chris has been skipping school, using drugs, and getting into fights.</span></p><p style=\"margin: 0px; line-height: 44px;\"><span style=\"font-size: 40px; font-family: roboto, sans-serif;\">​</span></p><p style=\"margin: 0px; line-height: 44px;\"><span style=\"font-size: 40px; font-family: roboto, sans-serif;\"> Joanne reports that Chris has always had some issues with impulsivity and anger but that when he uses drugs he is aggressive toward her by yelling and damaging items in the home.</span></p>",
                                font: ['Arial, Helvetica, sans-serif', [24, ""], "rgba(0,0,0,1)", "normal", "none", "", "break-word", "normal"]
                            },
                            {
                                id: 'backButtonScene2',
                                symbolName: 'backButton',
                                type: 'rect',
                                rect: ['142px', '1457px', 'undefined', 'undefined', 'auto', 'auto'],
                                cursor: 'pointer'
                            }]
                        },
                        {
                            id: 'chrisScene1',
                            type: 'group',
                            rect: ['0px', '0', '2048', '1794', 'auto', 'auto'],
                            c: [
                            {
                                id: 'chrisHouse1Bg',
                                type: 'image',
                                rect: ['0', '0', '2048px', '1536px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"chrisHouse1Bg.png",'0px','0px']
                            },
                            {
                                id: 'chrisMomPhone2',
                                type: 'image',
                                rect: ['1438px', '694px', '431px', '1100px', 'auto', 'auto'],
                                cursor: 'pointer',
                                fill: ["rgba(0,0,0,0)",im+"chrisMomPhone2.png",'0px','0px'],
                                filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(96,194,186,1.00)", 0, 0, 0]
                            },
                            {
                                id: 'chrisScene1Text',
                                type: 'text',
                                rect: ['200px', '269px', '1630px', '140px', 'auto', 'auto'],
                                opacity: '0',
                                text: "<p style=\"margin: 0px; line-height: 44px;\">​<span style=\"font-size: 40px; font-family: roboto, sans-serif;\">Chris' mother Joanne recently called the Children's Aid Society because she is having difficulty managing Chris' high risk behaviours and she is worried that she will not be able to continue to care for him because of the impact he is having on his younger siblings.</span></p>",
                                font: ['Arial, Helvetica, sans-serif', [24, ""], "rgba(0,0,0,1)", "normal", "none", "", "break-word", "normal"]
                            },
                            {
                                id: 'chrisScene1Title',
                                type: 'text',
                                rect: ['200px', '-300px', '438px', '218px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​Chris</p>",
                                align: "left",
                                font: ['roboto, sans-serif', [150, "px"], "rgba(134,153,188,1.00)", "700", "none", "normal", "break-word", "normal"],
                                textStyle: ["", "", "", "", "uppercase"]
                            },
                            {
                                id: 'backButtonScene1',
                                symbolName: 'backButton',
                                type: 'rect',
                                rect: ['35px', '1415px', 'undefined', 'undefined', 'auto', 'auto'],
                                cursor: 'pointer'
                            }]
                        },
                        {
                            id: 'restartButton',
                            symbolName: 'restartButton',
                            type: 'rect',
                            rect: ['38', '1294px', '160', '85', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'startScreen',
                            type: 'group',
                            rect: ['-433px', '0', '2481', '1536', 'auto', 'auto'],
                            c: [
                            {
                                id: 'startScreenBg',
                                type: 'rect',
                                rect: ['433px', '0px', '2048px', '1546px', 'auto', 'auto'],
                                fill: ["rgba(225,232,244,1.00)"],
                                stroke: [0,"rgba(0,0,0,0.00)","none"]
                            },
                            {
                                id: 'ChrisFront',
                                type: 'image',
                                rect: ['0px', '18px', '1491px', '1500px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"ChrisFront.png",'0px','0px']
                            },
                            {
                                id: 'startScreenTitle',
                                type: 'text',
                                rect: ['1130px', '144px', '1172px', '474px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\"><span style=\"font-size: 357px; font-weight: 700; font-family: roboto, sans-serif; text-transform: uppercase; color: rgb(134, 153, 188);\">Chris</span></p>",
                                align: "center",
                                font: ['Arial, Helvetica, sans-serif', [24, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                                textStyle: ["", "", "", "", "none"]
                            },
                            {
                                id: 'chrisAge',
                                type: 'text',
                                rect: ['1135px', '547px', '1214px', '107px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-size: 50px; font-weight: 700;\">Age 15</span></p>",
                                align: "left",
                                font: ['roboto, sans-serif', [24, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                                textStyle: ["", "", "", "", "none"]
                            },
                            {
                                id: 'beginButton',
                                type: 'group',
                                rect: ['1391px', '896', '702', '192', 'auto', 'auto'],
                                cursor: 'pointer',
                                c: [
                                {
                                    id: 'beginButtonBg',
                                    type: 'rect',
                                    rect: ['0px', '0px', '702px', '192px', 'auto', 'auto'],
                                    borderRadius: ["40px", "40px", "40px", "40px 40px"],
                                    fill: ["rgba(134,153,188,1.00)"],
                                    stroke: [0,"rgba(0, 0, 0, 0)","none"],
                                    boxShadow: ["", 0, 0, 0, 0, "rgba(96,194,186,1.00)"],
                                    filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0]
                                },
                                {
                                    id: 'beginButtonText',
                                    type: 'text',
                                    rect: ['0px', '46px', '702px', '104px', 'auto', 'auto'],
                                    text: "<p style=\"margin: 0px; text-align: center;\">​<span style=\"text-transform: uppercase; color: rgb(255, 255, 255); font-size: 80px; font-weight: 700;\">Begin</span></p>",
                                    align: "left",
                                    font: ['roboto, sans-serif', [24, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                                    textStyle: ["", "", "", "", "none"]
                                }]
                            }]
                        },
                        {
                            id: 'scenarioCompleteTitle',
                            type: 'text',
                            rect: ['200px', '-370px', '1659px', '181px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px; text-align: center;\"><span style=\"font-family: roboto, sans-serif; text-transform: uppercase; font-weight: 700; font-size: 150px; color: rgb(71, 91, 128);\">Scenario Complete</span></p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [24, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'scenarioCompleteText',
                            type: 'text',
                            rect: ['3000px', '550px', '1659px', '50px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-size: 40px; font-family: roboto, sans-serif; font-weight: 700;\">Congratulations! You have completed this scenario.</span></p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [24, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "", "", "none"]
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
                    duration: 29500,
                    autoPlay: true,
                    data: [
                        [
                            "eid104",
                            "left",
                            13500,
                            3000,
                            "easeOutQuint",
                            "${evictionLetterGraphic}",
                            '200px',
                            '200px'
                        ],
                        [
                            "eid105",
                            "left",
                            16500,
                            1000,
                            "easeOutQuint",
                            "${evictionLetterGraphic}",
                            '200px',
                            '-2000px'
                        ],
                        [
                            "eid18",
                            "left",
                            0,
                            2750,
                            "easeInOutSine",
                            "${chrisMomPhone2}",
                            '1359px',
                            '1438px'
                        ],
                        [
                            "eid261",
                            "top",
                            29500,
                            0,
                            "linear",
                            "${scenarioCompleteText}",
                            '550px',
                            '550px'
                        ],
                        [
                            "eid33",
                            "top",
                            2750,
                            1000,
                            "easeOutBounce",
                            "${chrisScene1Title}",
                            '-300px',
                            '50px'
                        ],
                        [
                            "eid40",
                            "left",
                            4750,
                            3000,
                            "easeInOutSine",
                            "${chrisRoomBg}",
                            '43px',
                            '0px'
                        ],
                        [
                            "eid139",
                            "left",
                            17500,
                            1500,
                            "easeOutQuad",
                            "${question1ContinueButton}",
                            '3890px',
                            '1405px'
                        ],
                        [
                            "eid151",
                            "left",
                            19000,
                            1000,
                            "easeInQuad",
                            "${question1ContinueButton}",
                            '1405px',
                            '-3022px'
                        ],
                        [
                            "eid159",
                            "left",
                            20000,
                            1000,
                            "easeOutQuad",
                            "${question1ContinueButton}",
                            '-3022px',
                            '1405px'
                        ],
                        [
                            "eid164",
                            "left",
                            21000,
                            1000,
                            "easeInQuad",
                            "${question1ContinueButton}",
                            '1405px',
                            '-3022px'
                        ],
                        [
                            "eid170",
                            "left",
                            22000,
                            1000,
                            "easeOutQuad",
                            "${question1ContinueButton}",
                            '-3022px',
                            '1405px'
                        ],
                        [
                            "eid178",
                            "left",
                            23000,
                            1000,
                            "easeInQuad",
                            "${question1ContinueButton}",
                            '1405px',
                            '-3022px'
                        ],
                        [
                            "eid186",
                            "left",
                            24000,
                            1000,
                            "easeOutQuad",
                            "${question1ContinueButton}",
                            '-3022px',
                            '1405px'
                        ],
                        [
                            "eid194",
                            "left",
                            25000,
                            1000,
                            "easeInQuad",
                            "${question1ContinueButton}",
                            '1405px',
                            '-3022px'
                        ],
                        [
                            "eid202",
                            "left",
                            26000,
                            1000,
                            "easeOutQuad",
                            "${question1ContinueButton}",
                            '-3022px',
                            '1405px'
                        ],
                        [
                            "eid239",
                            "left",
                            27000,
                            1000,
                            "easeInQuad",
                            "${question1ContinueButton}",
                            '1405px',
                            '-3022px'
                        ],
                        [
                            "eid141",
                            "left",
                            17500,
                            1500,
                            "easeOutQuad",
                            "${question1Answer2}",
                            '3020px',
                            '535px'
                        ],
                        [
                            "eid149",
                            "left",
                            19000,
                            1000,
                            "easeInQuad",
                            "${question1Answer2}",
                            '535px',
                            '-2984px'
                        ],
                        [
                            "eid156",
                            "left",
                            20000,
                            1000,
                            "easeOutQuad",
                            "${question1Answer2}",
                            '-2984px',
                            '535px'
                        ],
                        [
                            "eid167",
                            "left",
                            21000,
                            1000,
                            "easeInQuad",
                            "${question1Answer2}",
                            '535px',
                            '-2984px'
                        ],
                        [
                            "eid173",
                            "left",
                            22000,
                            1000,
                            "easeOutQuad",
                            "${question1Answer2}",
                            '-2984px',
                            '535px'
                        ],
                        [
                            "eid181",
                            "left",
                            23000,
                            1000,
                            "easeInQuad",
                            "${question1Answer2}",
                            '535px',
                            '-2984px'
                        ],
                        [
                            "eid189",
                            "left",
                            24000,
                            1000,
                            "easeOutQuad",
                            "${question1Answer2}",
                            '-2984px',
                            '535px'
                        ],
                        [
                            "eid197",
                            "left",
                            25000,
                            1000,
                            "easeInQuad",
                            "${question1Answer2}",
                            '535px',
                            '-2984px'
                        ],
                        [
                            "eid205",
                            "left",
                            26000,
                            1000,
                            "easeOutQuad",
                            "${question1Answer2}",
                            '-2984px',
                            '535px'
                        ],
                        [
                            "eid242",
                            "left",
                            27000,
                            1000,
                            "easeInQuad",
                            "${question1Answer2}",
                            '535px',
                            '-2984px'
                        ],
                        [
                            "eid126",
                            "left",
                            16500,
                            1000,
                            "easeInQuad",
                            "${chrisHouseBg}",
                            '0px',
                            '-3000px'
                        ],
                        [
                            "eid124",
                            "left",
                            16500,
                            1000,
                            "easeInQuad",
                            "${backButtonScene4}",
                            '36px',
                            '-1000px'
                        ],
                        [
                            "eid49",
                            "filter.drop-shadow.blur",
                            8500,
                            500,
                            "easeInSine",
                            "${chrisFrontScene2}",
                            '0px',
                            '25px'
                        ],
                        [
                            "eid50",
                            "filter.drop-shadow.blur",
                            9000,
                            500,
                            "easeInSine",
                            "${chrisFrontScene2}",
                            '25px',
                            '0px'
                        ],
                        [
                            "eid10",
                            "boxShadow.blur",
                            0,
                            500,
                            "linear",
                            "${beginButtonBg}",
                            '0px',
                            '35px'
                        ],
                        [
                            "eid11",
                            "boxShadow.blur",
                            500,
                            500,
                            "linear",
                            "${beginButtonBg}",
                            '35px',
                            '0px'
                        ],
                        [
                            "eid76",
                            "top",
                            13500,
                            1000,
                            "easeOutBounce",
                            "${evictionLetterGraphic}",
                            '73px',
                            '1348px'
                        ],
                        [
                            "eid66",
                            "filter.drop-shadow.blur",
                            11500,
                            500,
                            "easeInOutSine",
                            "${ChrisMom}",
                            '0px',
                            '25px'
                        ],
                        [
                            "eid67",
                            "filter.drop-shadow.blur",
                            12000,
                            500,
                            "easeInOutSine",
                            "${ChrisMom}",
                            '25px',
                            '0px'
                        ],
                        [
                            "eid225",
                            "left",
                            19000,
                            1000,
                            "easeOutQuad",
                            "${response1}",
                            '3000px',
                            '145px'
                        ],
                        [
                            "eid226",
                            "left",
                            20000,
                            1000,
                            "easeInQuad",
                            "${response1}",
                            '145px',
                            '3000px'
                        ],
                        [
                            "eid54",
                            "left",
                            9500,
                            1000,
                            "easeOutSine",
                            "${chrisScene2}",
                            '-106px',
                            '-3106px'
                        ],
                        [
                            "eid16",
                            "left",
                            1000,
                            1000,
                            "easeOutSine",
                            "${startScreen}",
                            '-433px',
                            '-3000px'
                        ],
                        [
                            "eid234",
                            "left",
                            25000,
                            1000,
                            "easeOutQuad",
                            "${response4}",
                            '3000px',
                            '145px'
                        ],
                        [
                            "eid235",
                            "left",
                            26000,
                            1000,
                            "easeInQuad",
                            "${response4}",
                            '145px',
                            '3000px'
                        ],
                        [
                            "eid61",
                            "top",
                            10500,
                            1000,
                            "easeInOutQuad",
                            "${chrisScene3Text}",
                            '-283px',
                            '182px'
                        ],
                        [
                            "eid95",
                            "left",
                            16500,
                            1000,
                            "easeOutQuad",
                            "${chrisScene4Text}",
                            '200px',
                            '-2000px'
                        ],
                        [
                            "eid30",
                            "filter.drop-shadow.blur",
                            4750,
                            500,
                            "linear",
                            "${chrisMomPhone2}",
                            '0px',
                            '25px'
                        ],
                        [
                            "eid31",
                            "filter.drop-shadow.blur",
                            5250,
                            500,
                            "linear",
                            "${chrisMomPhone2}",
                            '25px',
                            '0px'
                        ],
                        [
                            "eid143",
                            "left",
                            17500,
                            1500,
                            "easeOutQuad",
                            "${question1Answer4}",
                            '3020px',
                            '535px'
                        ],
                        [
                            "eid152",
                            "left",
                            19000,
                            1000,
                            "easeInQuad",
                            "${question1Answer4}",
                            '535px',
                            '-3022px'
                        ],
                        [
                            "eid158",
                            "left",
                            20000,
                            1000,
                            "easeOutQuad",
                            "${question1Answer4}",
                            '-3022px',
                            '535px'
                        ],
                        [
                            "eid165",
                            "left",
                            21000,
                            1000,
                            "easeInQuad",
                            "${question1Answer4}",
                            '535px',
                            '-3022px'
                        ],
                        [
                            "eid171",
                            "left",
                            22000,
                            1000,
                            "easeOutQuad",
                            "${question1Answer4}",
                            '-3022px',
                            '535px'
                        ],
                        [
                            "eid179",
                            "left",
                            23000,
                            1000,
                            "easeInQuad",
                            "${question1Answer4}",
                            '535px',
                            '-3022px'
                        ],
                        [
                            "eid187",
                            "left",
                            24000,
                            1000,
                            "easeOutQuad",
                            "${question1Answer4}",
                            '-3022px',
                            '535px'
                        ],
                        [
                            "eid195",
                            "left",
                            25000,
                            1000,
                            "easeInQuad",
                            "${question1Answer4}",
                            '535px',
                            '-3022px'
                        ],
                        [
                            "eid203",
                            "left",
                            26000,
                            1000,
                            "easeOutQuad",
                            "${question1Answer4}",
                            '-3022px',
                            '535px'
                        ],
                        [
                            "eid240",
                            "left",
                            27000,
                            1000,
                            "easeInQuad",
                            "${question1Answer4}",
                            '535px',
                            '-3022px'
                        ],
                        [
                            "eid140",
                            "left",
                            17500,
                            1500,
                            "easeOutQuad",
                            "${question1Text}",
                            '3020px',
                            '535px'
                        ],
                        [
                            "eid150",
                            "left",
                            19000,
                            1000,
                            "easeInQuad",
                            "${question1Text}",
                            '535px',
                            '-3022px'
                        ],
                        [
                            "eid154",
                            "left",
                            20000,
                            1000,
                            "easeOutQuad",
                            "${question1Text}",
                            '-3022px',
                            '535px'
                        ],
                        [
                            "eid162",
                            "left",
                            21000,
                            1000,
                            "easeInQuad",
                            "${question1Text}",
                            '535px',
                            '-3022px'
                        ],
                        [
                            "eid175",
                            "left",
                            22000,
                            1000,
                            "easeOutQuad",
                            "${question1Text}",
                            '-3022px',
                            '535px'
                        ],
                        [
                            "eid183",
                            "left",
                            23000,
                            1000,
                            "easeInQuad",
                            "${question1Text}",
                            '535px',
                            '-3022px'
                        ],
                        [
                            "eid191",
                            "left",
                            24000,
                            1000,
                            "easeOutQuad",
                            "${question1Text}",
                            '-3022px',
                            '535px'
                        ],
                        [
                            "eid199",
                            "left",
                            25000,
                            1000,
                            "easeInQuad",
                            "${question1Text}",
                            '535px',
                            '-3022px'
                        ],
                        [
                            "eid207",
                            "left",
                            26000,
                            1000,
                            "easeOutQuad",
                            "${question1Text}",
                            '-3022px',
                            '535px'
                        ],
                        [
                            "eid244",
                            "left",
                            27000,
                            1000,
                            "easeInQuad",
                            "${question1Text}",
                            '535px',
                            '-3022px'
                        ],
                        [
                            "eid266",
                            "top",
                            16500,
                            0,
                            "linear",
                            "${backButtonScene4}",
                            '2167px',
                            '2167px'
                        ],
                        [
                            "eid263",
                            "top",
                            5250,
                            0,
                            "linear",
                            "${restartButton}",
                            '1294px',
                            '1294px'
                        ],
                        [
                            "eid265",
                            "top",
                            12500,
                            0,
                            "linear",
                            "${backButtonScene3}",
                            '1457px',
                            '1457px'
                        ],
                        [
                            "eid262",
                            "top",
                            5250,
                            0,
                            "linear",
                            "${backButtonScene1}",
                            '1415px',
                            '1415px'
                        ],
                        [
                            "eid87",
                            "filter.drop-shadow.blur",
                            15500,
                            500,
                            "easeInSine",
                            "${evictionLetterGraphic}",
                            '0px',
                            '15px'
                        ],
                        [
                            "eid88",
                            "filter.drop-shadow.blur",
                            16000,
                            500,
                            "easeInSine",
                            "${evictionLetterGraphic}",
                            '15px',
                            '0px'
                        ],
                        [
                            "eid72",
                            "left",
                            12500,
                            1000,
                            "easeInOutQuad",
                            "${chrisScene3}",
                            '-106px',
                            '-3106px'
                        ],
                        [
                            "eid38",
                            "left",
                            5750,
                            1000,
                            "linear",
                            "${chrisScene1}",
                            '0px',
                            '-3000px'
                        ],
                        [
                            "eid259",
                            "filter.blur",
                            28000,
                            1500,
                            "linear",
                            "${sittingChris}",
                            '0.000000px',
                            '0px'
                        ],
                        [
                            "eid36",
                            "opacity",
                            3750,
                            1000,
                            "linear",
                            "${chrisScene1Text}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid252",
                            "left",
                            28000,
                            1000,
                            "easeOutQuad",
                            "${scenarioCompleteText}",
                            '3000px',
                            '200px'
                        ],
                        [
                            "eid231",
                            "left",
                            23000,
                            1000,
                            "easeOutQuad",
                            "${response3}",
                            '3000px',
                            '145px'
                        ],
                        [
                            "eid232",
                            "left",
                            24000,
                            1000,
                            "easeInQuad",
                            "${response3}",
                            '145px',
                            '3000px'
                        ],
                        [
                            "eid42",
                            "left",
                            4750,
                            3000,
                            "easeInOutSine",
                            "${chrisFrontScene2}",
                            '526px',
                            '635px'
                        ],
                        [
                            "eid45",
                            "top",
                            6750,
                            1000,
                            "easeInOutSine",
                            "${chrisScene2Text}",
                            '-283px',
                            '181px'
                        ],
                        [
                            "eid82",
                            "top",
                            14500,
                            1000,
                            "easeOutQuint",
                            "${chrisScene4Text}",
                            '8px',
                            '952px'
                        ],
                        [
                            "eid249",
                            "top",
                            27500,
                            1500,
                            "easeOutBounce",
                            "${scenarioCompleteTitle}",
                            '-370px',
                            '200px'
                        ],
                        [
                            "eid223",
                            "left",
                            27000,
                            1000,
                            "easeInQuad",
                            "${ethanGradientBg}",
                            '0px',
                            '-3000px'
                        ],
                        [
                            "eid131",
                            "left",
                            16500,
                            1500,
                            "easeOutQuad",
                            "${Chris}",
                            '-1153px',
                            '150px'
                        ],
                        [
                            "eid145",
                            "left",
                            19000,
                            1000,
                            "easeInQuad",
                            "${Chris}",
                            '150px',
                            '-3022px'
                        ],
                        [
                            "eid160",
                            "left",
                            20000,
                            1000,
                            "easeOutQuad",
                            "${Chris}",
                            '-3022px',
                            '128px'
                        ],
                        [
                            "eid169",
                            "left",
                            21000,
                            1000,
                            "easeInQuad",
                            "${Chris}",
                            '128px',
                            '-3022px'
                        ],
                        [
                            "eid177",
                            "left",
                            22000,
                            1000,
                            "easeOutQuad",
                            "${Chris}",
                            '-3022px',
                            '128px'
                        ],
                        [
                            "eid185",
                            "left",
                            23000,
                            1000,
                            "easeInQuad",
                            "${Chris}",
                            '128px',
                            '-3022px'
                        ],
                        [
                            "eid193",
                            "left",
                            24000,
                            1000,
                            "easeOutQuad",
                            "${Chris}",
                            '-3022px',
                            '128px'
                        ],
                        [
                            "eid201",
                            "left",
                            25000,
                            1000,
                            "easeInQuad",
                            "${Chris}",
                            '128px',
                            '-3022px'
                        ],
                        [
                            "eid209",
                            "left",
                            26000,
                            1010,
                            "easeOutQuad",
                            "${Chris}",
                            '-3022px',
                            '128px'
                        ],
                        [
                            "eid246",
                            "left",
                            27010,
                            990,
                            "easeInQuad",
                            "${Chris}",
                            '128px',
                            '-3022px'
                        ],
                        [
                            "eid138",
                            "left",
                            17500,
                            1500,
                            "easeOutQuad",
                            "${question1Answer1}",
                            '3020px',
                            '535px'
                        ],
                        [
                            "eid148",
                            "left",
                            19000,
                            1000,
                            "easeInQuad",
                            "${question1Answer1}",
                            '535px',
                            '-3022px'
                        ],
                        [
                            "eid155",
                            "left",
                            20000,
                            1000,
                            "easeOutQuad",
                            "${question1Answer1}",
                            '-3022px',
                            '535px'
                        ],
                        [
                            "eid168",
                            "left",
                            21000,
                            1000,
                            "easeInQuad",
                            "${question1Answer1}",
                            '535px',
                            '-3022px'
                        ],
                        [
                            "eid174",
                            "left",
                            22000,
                            1000,
                            "easeOutQuad",
                            "${question1Answer1}",
                            '-3022px',
                            '535px'
                        ],
                        [
                            "eid182",
                            "left",
                            23000,
                            1000,
                            "easeInQuad",
                            "${question1Answer1}",
                            '535px',
                            '-3022px'
                        ],
                        [
                            "eid190",
                            "left",
                            24000,
                            1000,
                            "easeOutQuad",
                            "${question1Answer1}",
                            '-3022px',
                            '535px'
                        ],
                        [
                            "eid198",
                            "left",
                            25000,
                            1000,
                            "easeInQuad",
                            "${question1Answer1}",
                            '535px',
                            '-3022px'
                        ],
                        [
                            "eid206",
                            "left",
                            26000,
                            1000,
                            "easeOutQuad",
                            "${question1Answer1}",
                            '-3022px',
                            '535px'
                        ],
                        [
                            "eid243",
                            "left",
                            27000,
                            1000,
                            "easeInQuad",
                            "${question1Answer1}",
                            '535px',
                            '-3022px'
                        ],
                        [
                            "eid228",
                            "left",
                            21000,
                            1000,
                            "easeOutQuad",
                            "${response2}",
                            '3000px',
                            '145px'
                        ],
                        [
                            "eid229",
                            "left",
                            22000,
                            1000,
                            "easeInQuad",
                            "${response2}",
                            '145px',
                            '3000px'
                        ],
                        [
                            "eid57",
                            "left",
                            8500,
                            3000,
                            "easeOutSine",
                            "${ChrisMom}",
                            '188px',
                            '359px'
                        ],
                        [
                            "eid69",
                            "left",
                            7750,
                            3750,
                            "easeInOutSine",
                            "${chrisHouse2Bg2}",
                            '100px',
                            '0px'
                        ],
                        [
                            "eid238",
                            "left",
                            17379,
                            121,
                            "easeInQuad",
                            "${chrisScene4}",
                            '0px',
                            '-3000px'
                        ],
                        [
                            "eid142",
                            "left",
                            17500,
                            1500,
                            "easeOutQuad",
                            "${question1Answer3}",
                            '3020px',
                            '535px'
                        ],
                        [
                            "eid153",
                            "left",
                            19000,
                            1000,
                            "easeInQuad",
                            "${question1Answer3}",
                            '535px',
                            '-3022px'
                        ],
                        [
                            "eid157",
                            "left",
                            20000,
                            1000,
                            "easeOutQuad",
                            "${question1Answer3}",
                            '-3022px',
                            '535px'
                        ],
                        [
                            "eid166",
                            "left",
                            21000,
                            1000,
                            "easeInQuad",
                            "${question1Answer3}",
                            '535px',
                            '-3022px'
                        ],
                        [
                            "eid172",
                            "left",
                            22000,
                            1000,
                            "easeOutQuad",
                            "${question1Answer3}",
                            '-3022px',
                            '535px'
                        ],
                        [
                            "eid180",
                            "left",
                            23000,
                            1000,
                            "easeInQuad",
                            "${question1Answer3}",
                            '535px',
                            '-3022px'
                        ],
                        [
                            "eid188",
                            "left",
                            24000,
                            1000,
                            "easeOutQuad",
                            "${question1Answer3}",
                            '-3022px',
                            '535px'
                        ],
                        [
                            "eid196",
                            "left",
                            25000,
                            1000,
                            "easeInQuad",
                            "${question1Answer3}",
                            '535px',
                            '-3022px'
                        ],
                        [
                            "eid204",
                            "left",
                            26000,
                            1000,
                            "easeOutQuad",
                            "${question1Answer3}",
                            '-3022px',
                            '535px'
                        ],
                        [
                            "eid241",
                            "left",
                            27000,
                            1000,
                            "easeInQuad",
                            "${question1Answer3}",
                            '535px',
                            '-3022px'
                        ],
                        [
                            "eid147",
                            "left",
                            19000,
                            1000,
                            "easeInQuad",
                            "${question1BackButton}",
                            '38px',
                            '-3022px'
                        ],
                        [
                            "eid161",
                            "left",
                            20000,
                            1000,
                            "easeOutQuad",
                            "${question1BackButton}",
                            '-3022px',
                            '38px'
                        ],
                        [
                            "eid163",
                            "left",
                            21000,
                            1000,
                            "easeInQuad",
                            "${question1BackButton}",
                            '38px',
                            '-3022px'
                        ],
                        [
                            "eid176",
                            "left",
                            22000,
                            1000,
                            "easeOutQuad",
                            "${question1BackButton}",
                            '-3022px',
                            '38px'
                        ],
                        [
                            "eid184",
                            "left",
                            23000,
                            1000,
                            "easeInQuad",
                            "${question1BackButton}",
                            '38px',
                            '-3022px'
                        ],
                        [
                            "eid192",
                            "left",
                            24000,
                            1000,
                            "easeOutQuad",
                            "${question1BackButton}",
                            '-3022px',
                            '38px'
                        ],
                        [
                            "eid200",
                            "left",
                            25000,
                            1000,
                            "easeInQuad",
                            "${question1BackButton}",
                            '38px',
                            '-3022px'
                        ],
                        [
                            "eid208",
                            "left",
                            26000,
                            1000,
                            "easeOutQuad",
                            "${question1BackButton}",
                            '-3022px',
                            '38px'
                        ],
                        [
                            "eid245",
                            "left",
                            27000,
                            1000,
                            "easeInQuad",
                            "${question1BackButton}",
                            '38px',
                            '-3022px'
                        ]
                    ]
                }
            },
            "backButton": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '165px', '85px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'backButtonBg',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(179,113,113,1.00)']
                        },
                        {
                            rect: ['2px', '30px', '163px', '63px', 'auto', 'auto'],
                            textStyle: ['', '', '', '', 'none'],
                            font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(0,0,0,1)', '700', 'none', 'normal', 'break-word', 'normal'],
                            id: 'backButtonText',
                            text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"color: rgb(255, 255, 255); text-transform: uppercase; font-family: roboto, sans-serif;\">back</span></p>',
                            align: 'left',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '165px', '128px']
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
                            stroke: [0, 'rgba(0,0,0,0.00)', 'none'],
                            type: 'rect',
                            fill: ['rgba(74,80,115,1.00)']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                            id: 'restartButtonText',
                            text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"color: rgb(255, 255, 255);\">​</span><span style=\"color: rgb(255, 255, 255); font-family: roboto, sans-serif;\">​</span><span style=\"color: rgb(255, 255, 255); font-family: roboto, sans-serif; text-transform: uppercase;\">​</span><span style=\"color: rgb(255, 255, 255); font-family: roboto, sans-serif; text-transform: uppercase; font-weight: 700;\">​restart</span></p>',
                            type: 'text',
                            rect: ['0px', '28px', '160px', '44px', 'auto', 'auto']
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

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("chrisModule2_edgeActions.js");
})("EDGE-1360279075");
