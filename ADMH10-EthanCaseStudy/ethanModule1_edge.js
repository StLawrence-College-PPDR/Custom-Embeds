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
                            id: 'ethanScene4',
                            type: 'group',
                            rect: ['0', '0', '2048', '1536', 'auto', 'auto'],
                            c: [
                            {
                                id: 'ethanGradientBg2',
                                type: 'image',
                                rect: ['0px', '0px', '2048px', '1536px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"ethanGradientBg.png",'0px','0px']
                            }]
                        },
                        {
                            id: 'ethanSchool',
                            type: 'group',
                            rect: ['0', '0', '2048', '1536', 'auto', 'auto'],
                            c: [
                            {
                                id: 'ethanSchoolBg',
                                type: 'image',
                                rect: ['-2500px', '0px', '2048px', '1536px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"ethanSchoolBg.png",'0px','0px'],
                                filter: [0, 0, 1, 1, 0, 0, 0, 42.66909408569336, "rgba(0,0,0,0)", 0, 0, 0]
                            },
                            {
                                id: 'ethanScene23BackButton',
                                type: 'group',
                                rect: ['38px', '1375', '164', '128', 'auto', 'auto'],
                                cursor: 'pointer',
                                c: [
                                {
                                    id: 'ethanScene23BackButtonBg',
                                    type: 'rect',
                                    rect: ['0px', '40px', '165px', '85px', 'auto', 'auto'],
                                    borderRadius: ["10px", "10px", "10px", "10px 10px"],
                                    fill: ["rgba(179,113,113,1)"],
                                    stroke: [0,"rgba(0, 0, 0, 0)","none"]
                                },
                                {
                                    id: 'ethanScene23BackButtonText',
                                    type: 'text',
                                    rect: ['0px', '70px', '162px', '35px', 'auto', 'auto'],
                                    text: "<p style=\"margin: 0px; text-align: center;\">​<span style=\"color: rgb(255, 255, 255); font-weight: 700; text-transform: uppercase; font-family: roboto, sans-serif;\">back</span></p>",
                                    align: "left",
                                    font: ['Arial, Helvetica, sans-serif', [24, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                                    textStyle: ["", "", "", "", "none"]
                                }]
                            }]
                        },
                        {
                            id: 'phoneGraphic',
                            type: 'image',
                            rect: ['724px', '699px', '600px', '600px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"phoneGraphic.png",'0px','0px'],
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(96,194,186,1.00)", 0, 0, 0],
                            transform: [[],['-18']]
                        },
                        {
                            id: 'ethanScene2Text1',
                            type: 'text',
                            rect: ['199px', '-306px', '1649px', '132px', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">​<span style=\"font-size: 40px; font-family: roboto, sans-serif;\">You have attended school meetings with Sam in the past for advocacy purposes and as a support person because Sam has had difficult interactions with the school in the past.</span></p>",
                            font: ['Arial, Helvetica, sans-serif', [24, ""], "rgba(0,0,0,1)", "normal", "none", "", "break-word", "normal"]
                        },
                        {
                            id: 'ethanScene2Text2',
                            type: 'text',
                            rect: ['-2000px', '300px', '1649px', '166px', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">​<span style=\"font-size: 40px; font-family: roboto, sans-serif;\">Today you received a call from Ethan's teacher Ms. Stone telling you that Ethan has been acting up at school. Ms. Stone says that Ethan is not paying attention, is loud when it is time to be quiet and isn't focusing on the lessons.</span></p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [24, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'msStoneScene2',
                            type: 'image',
                            rect: ['2500px', '504px', '249px', '1100px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"MsStone2.png",'0px','0px'],
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(96,194,186,1.00)", 0, 0, 0],
                            transform: [[],[],[],['-0.998']]
                        },
                        {
                            id: 'ethanScene3',
                            type: 'group',
                            rect: ['157px', '265', '345', '1556', 'auto', 'auto'],
                            c: [
                            {
                                id: 'Ethan',
                                type: 'image',
                                rect: ['0px', '0px', '345px', '1556px', 'auto', 'auto'],
                                cursor: 'pointer',
                                fill: ["rgba(0,0,0,0)",im+"Ethan.png",'0px','0px'],
                                filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(96,194,186,1.00)", 0, 0, 0]
                            },
                            {
                                id: 'ethanScene3Text1',
                                type: 'text',
                                rect: ['558px', '-740px', '1256px', '147px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​<span style=\"font-size: 40px; font-family: roboto, sans-serif;\">Ms. Stone says that she is not surprised to see this behaviour since she knows Ethan's father is an alcoholic and likely isn't maintaining routines and rules at home.</span></p>",
                                align: "left",
                                font: ['Arial, Helvetica, sans-serif', [24, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                                textStyle: ["", "", "", "", "none"]
                            },
                            {
                                id: 'chatBubbleGraphic',
                                type: 'image',
                                rect: ['-90px', '-419px', '534px', '534px', 'auto', 'auto'],
                                cursor: 'pointer',
                                opacity: '0',
                                fill: ["rgba(0,0,0,0)",im+"chatBubbleGraphic.png",'0px','0px'],
                                filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(96,194,186,1.00)", 0, 0, 0]
                            },
                            {
                                id: 'ethanScene3Text2',
                                type: 'text',
                                rect: ['558px', '4px', '1256px', '147px', 'auto', 'auto'],
                                opacity: '0',
                                text: "<p style=\"margin: 0px;\">​<span style=\"font-size: 40px; font-family: roboto, sans-serif;\">Ms. Stone said she also knows for a fact that Sam continues to abuse alcohol because Ethan told her that \"daddy and grandpa had a beer together on Father’s Day.\"</span></p>",
                                align: "left",
                                font: ['Arial, Helvetica, sans-serif', [24, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                                textStyle: ["", "", "", "", "none"]
                            },
                            {
                                id: 'ethanScene3BeerGraphic',
                                type: 'image',
                                rect: ['123px', '-447px', '98px', '99px', 'auto', 'auto'],
                                cursor: 'pointer',
                                opacity: '0',
                                fill: ["rgba(0,0,0,0)",im+"singleBeerGraphic.png",'0px','0px']
                            }]
                        },
                        {
                            id: 'ethanScene1',
                            type: 'group',
                            rect: ['0px', '-800', '2048', '2583', 'auto', 'auto'],
                            c: [
                            {
                                id: 'ethanGradientBg',
                                type: 'image',
                                rect: ['0', '800px', '2048px', '1536px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"ethanGradientBg.png",'0px','0px']
                            },
                            {
                                id: 'EthanDadFront',
                                type: 'image',
                                rect: ['243px', '879px', '396px', '1377px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"EthanDadFront.png",'0px','0px']
                            },
                            {
                                id: 'ethanScene1Text1',
                                type: 'text',
                                rect: ['738px', '1140px', '1226px', '115px', 'auto', 'auto'],
                                opacity: '0',
                                text: "<p style=\"margin: 0px;\">​<span style=\"font-size: 40px; font-family: roboto, sans-serif;\">You are an addictions counselor who has been working with Ethan's father Sam to support his ongoing recovery.</span></p>",
                                font: ['Arial, Helvetica, sans-serif', [24, ""], "rgba(0,0,0,1)", "normal", "none", "", "break-word", "normal"]
                            },
                            {
                                id: 'ethanScene1Text2',
                                type: 'text',
                                rect: ['738px', '1271px', '1226px', '115px', 'auto', 'auto'],
                                opacity: '0',
                                text: "<p style=\"margin: 0px;\">​<span style=\"font-family: roboto, sans-serif; font-size: 40px;\">Sam self-reports that he has not used alcohol to excess for many years but that he does enjoy having one beer on social occasions.</span></p>",
                                align: "left",
                                font: ['Arial, Helvetica, sans-serif', [24, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                                textStyle: ["", "", "", "", "none"]
                            },
                            {
                                id: 'multipleBeerGraphic',
                                type: 'image',
                                rect: ['713px', '2470px', '600px', '600px', 'auto', 'auto'],
                                cursor: 'pointer',
                                fill: ["rgba(0,0,0,0)",im+"multipleBeerGraphic.png",'0px','0px'],
                                filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(96,194,186,1.00)", 0, 0, 0]
                            },
                            {
                                id: 'incorrect',
                                type: 'image',
                                rect: ['1468px', '2570px', '400px', '400px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"incorrect.png",'0px','0px']
                            },
                            {
                                id: 'singleBeerGraphic',
                                type: 'image',
                                rect: ['730px', '2470px', '523px', '524px', 'auto', 'auto'],
                                cursor: 'pointer',
                                fill: ["rgba(0,0,0,0)",im+"singleBeerGraphic.png",'0px','0px'],
                                filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(96,194,186,1.00)", 0, 0, 0]
                            },
                            {
                                id: 'correct',
                                type: 'image',
                                rect: ['1468px', '2570px', '400px', '400px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"correct2.png",'0px','0px']
                            },
                            {
                                id: 'ethanScene1Title',
                                type: 'text',
                                rect: ['730px', '903px', '1213px', '147px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​<span style=\"font-size: 150px; text-transform: uppercase; font-weight: 700; font-family: roboto, sans-serif; color: rgb(211, 110, 110);\">ethan</span></p>",
                                align: "left",
                                font: ['Arial, Helvetica, sans-serif', [24, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                                textStyle: ["", "", "", "", "none"]
                            },
                            {
                                id: 'ethanScene1BackButton',
                                type: 'group',
                                rect: ['36', '2175', '164', '128', 'auto', 'auto'],
                                cursor: 'pointer',
                                c: [
                                {
                                    id: 'ethanScene1BackButtonBg',
                                    type: 'rect',
                                    rect: ['2px', '40px', '165px', '85px', 'auto', 'auto'],
                                    borderRadius: ["10px", "10px", "10px", "10px 10px"],
                                    fill: ["rgba(179,113,113,1.00)"],
                                    stroke: [0,"rgba(0, 0, 0, 0)","none"]
                                },
                                {
                                    id: 'ethanScene1BackButtonText',
                                    type: 'text',
                                    rect: ['0px', '70px', '162px', '35px', 'auto', 'auto'],
                                    text: "<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-family: roboto, sans-serif; color: rgb(255, 255, 255); font-weight: 700; text-transform: uppercase;\">back</span></p>",
                                    align: "left",
                                    font: ['Arial, Helvetica, sans-serif', [24, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                                    textStyle: ["", "", "", "", "none"]
                                }]
                            }]
                        },
                        {
                            id: 'Question1',
                            type: 'group',
                            rect: ['-3000px', '100', '1648', '1179', 'auto', 'auto'],
                            c: [
                            {
                                id: 'Question1Title',
                                type: 'text',
                                rect: ['0px', '0px', '1648px', '289px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-size: 60px; font-family: roboto, sans-serif; font-weight: 700;\">Consider what you think the impact might be on the family receiving services in this case example and what kind(s) of stigma they might face.</span></p>",
                                align: "left",
                                font: ['Arial, Helvetica, sans-serif', [24, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                                textStyle: ["", "", "", "", "none"]
                            },
                            {
                                id: 'Question1BackButton',
                                type: 'group',
                                rect: ['-164', '1275', '164', '128', 'auto', 'auto'],
                                cursor: 'pointer',
                                c: [
                                {
                                    id: 'Question1BackButtonBg',
                                    type: 'rect',
                                    rect: ['2px', '40px', '165px', '85px', 'auto', 'auto'],
                                    borderRadius: ["10px", "10px", "10px", "10px"],
                                    fill: ["rgba(179,113,113,1.00)"],
                                    stroke: [0,"rgba(0,0,0,1)","none"]
                                },
                                {
                                    id: 'Question1BackButtonText',
                                    type: 'text',
                                    rect: ['2px', '70px', '162px', '35px', 'auto', 'auto'],
                                    text: "<p style=\"margin: 0px;\">​<span style=\"text-transform: uppercase; font-weight: 700; color: rgb(255, 255, 255); font-family: roboto, sans-serif;\">back</span></p>",
                                    align: "center",
                                    font: ['Arial, Helvetica, sans-serif', [24, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                                    textStyle: ["", "", "", "", "none"]
                                }]
                            },
                            {
                                id: 'Question1Answer1',
                                type: 'group',
                                rect: ['0px', '428px', '1648', '145', 'auto', 'auto'],
                                cursor: 'pointer',
                                c: [
                                {
                                    id: 'Question1Answer1Bg',
                                    type: 'rect',
                                    rect: ['0px', '0px', '1648px', '145px', 'auto', 'auto'],
                                    borderRadius: ["20px", "20px", "20px", "20px 20px"],
                                    fill: ["rgba(255,255,255,1.00)"],
                                    stroke: [0,"rgba(0,0,0,0.00)","none"]
                                },
                                {
                                    id: 'Question1Answer1Text',
                                    type: 'text',
                                    rect: ['0px', '48px', '1648px', '50px', 'auto', 'auto'],
                                    text: "<p style=\"margin: 0px; text-align: center;\"><span style=\"font-family: roboto, sans-serif;\">Systemic</span></p>",
                                    align: "left",
                                    font: ['Arial, Helvetica, sans-serif', [40, "px"], "rgba(0,0,0,1)", "700", "none", "normal", "break-word", "normal"],
                                    textStyle: ["", "", "", "", "none"]
                                }]
                            },
                            {
                                id: 'Question1Answer2',
                                type: 'group',
                                rect: ['0px', '623px', '1648', '145', 'auto', 'auto'],
                                cursor: 'pointer',
                                c: [
                                {
                                    id: 'Question1Answer2Bg',
                                    type: 'rect',
                                    rect: ['0px', '0px', '1648px', '145px', 'auto', 'auto'],
                                    borderRadius: ["20px", "20px", "20px", "20px 20px"],
                                    fill: ["rgba(255,255,255,1.00)"],
                                    stroke: [0,"rgba(0,0,0,0.00)","none"]
                                },
                                {
                                    id: 'Question1Answer2Text',
                                    type: 'text',
                                    rect: ['0px', '48px', '1648px', '50px', 'auto', 'auto'],
                                    text: "<p style=\"margin: 0px; text-align: center;\"><span style=\"font-family: roboto, sans-serif;\">Self-Stigma</span></p>",
                                    align: "left",
                                    font: ['Arial, Helvetica, sans-serif', [40, "px"], "rgba(0,0,0,1)", "700", "none", "normal", "break-word", "normal"],
                                    textStyle: ["", "", "", "", "none"]
                                }]
                            },
                            {
                                id: 'Question1Answer3',
                                type: 'group',
                                rect: ['0px', '821px', '1648', '145', 'auto', 'auto'],
                                cursor: 'pointer',
                                c: [
                                {
                                    id: 'Question1Answer3Bg',
                                    type: 'rect',
                                    rect: ['0px', '0px', '1648px', '145px', 'auto', 'auto'],
                                    borderRadius: ["20px", "20px", "20px", "20px 20px"],
                                    fill: ["rgba(255,255,255,1.00)"],
                                    stroke: [0,"rgba(0,0,0,0.00)","none"]
                                },
                                {
                                    id: 'Question1Answer3Text',
                                    type: 'text',
                                    rect: ['0px', '46px', '1648px', '50px', 'auto', 'auto'],
                                    text: "<p style=\"margin: 0px; text-align: center;\"><span style=\"font-family: roboto, sans-serif;\">Family Stigma</span></p>",
                                    align: "left",
                                    font: ['Arial, Helvetica, sans-serif', [40, "px"], "rgba(0,0,0,1)", "700", "none", "normal", "break-word", "normal"],
                                    textStyle: ["", "", "", "", "none"]
                                }]
                            },
                            {
                                id: 'Question1ContinueButton',
                                type: 'group',
                                rect: ['1160px', '1051px', '488', '128', 'auto', 'auto'],
                                cursor: 'pointer',
                                c: [
                                {
                                    id: 'Question1ContinueButtonBg',
                                    type: 'rect',
                                    rect: ['0px', '0px', '488px', '128px', 'auto', 'auto'],
                                    borderRadius: ["20px", "20px", "20px", "20px 20px"],
                                    fill: ["rgba(167,230,182,1.00)"],
                                    stroke: [0,"rgba(0, 0, 0, 0)","none"]
                                },
                                {
                                    id: 'Question1ContinueButtonText',
                                    type: 'text',
                                    rect: ['0px', '42px', '488px', '43px', 'auto', 'auto'],
                                    text: "<p style=\"margin: 0px; text-align: center;\">​<span style=\"text-transform: uppercase; font-family: roboto, sans-serif;\">continue</span></p>",
                                    align: "left",
                                    font: ['Arial, Helvetica, sans-serif', [40, "px"], "rgba(0,0,0,1)", "700", "none", "normal", "break-word", "normal"],
                                    textStyle: ["", "", "", "", "none"]
                                }]
                            }]
                        },
                        {
                            id: 'Question1Response',
                            type: 'group',
                            rect: ['3000px', '482', '1757', '639', 'auto', 'auto'],
                            c: [
                            {
                                id: 'Question1Response1Body',
                                type: 'group',
                                rect: ['0', '0', '1757', '639', 'auto', 'auto'],
                                c: [
                                {
                                    id: 'Question1Response1Bg',
                                    type: 'rect',
                                    rect: ['0px', '0px', '1757px', '639px', 'auto', 'auto'],
                                    borderRadius: ["20px", "20px", "20px", "20px 20px"],
                                    fill: ["rgba(255,255,255,1.00)"],
                                    stroke: [0,"rgba(0,0,0,0.00)","none"]
                                },
                                {
                                    id: 'Question1Response1Text',
                                    type: 'text',
                                    rect: ['60px', '50px', '1648px', '534px', 'auto', 'auto'],
                                    text: "<p style=\"margin: 0px; text-align: left;\">​<span style=\"font-size: 40px; font-family: roboto, sans-serif; font-weight: 700;\">Systemic</span></p><p style=\"margin: 0px; text-align: left;\"><span style=\"font-size: 40px; font-family: roboto, sans-serif;\">There may very well be an element of systemic stigma in this example. In the case of Ms. Stone – her perceptions may be influenced by the macro-level policies of The Safe Schools Act which speak of zero tolerance for alcohol use or possession of alcohol at school. </span></p><p style=\"margin: 0px; text-align: left;\"><span style=\"font-size: 40px; font-family: roboto, sans-serif;\">​</span></p><p style=\"margin: 0px; text-align: left;\"><span style=\"font-size: 40px; font-family: roboto, sans-serif;\">They may also be influenced by widely held Societal beliefs that abstinence is the only path to recovery for people who have struggled with substance abuse. Regardless of Ms. Stone’s macro-influences, she is part of Ethan’s system of influences which means that there is the potential for her negative assumptions to perpetuate stigma across the system if they are not reduced or addressed.</span></p>",
                                    align: "center",
                                    font: ['Arial, Helvetica, sans-serif', [24, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                                    textStyle: ["", "", "", "", "none"]
                                }]
                            },
                            {
                                id: 'Question1Response1BackButton',
                                type: 'group',
                                rect: ['1269px', '699px', '490', '128', 'auto', 'auto'],
                                cursor: 'pointer',
                                c: [
                                {
                                    id: 'Question1Response1BackButtonBg',
                                    type: 'rect',
                                    rect: ['0px', '0px', '488px', '128px', 'auto', 'auto'],
                                    borderRadius: ["20px", "20px", "20px", "20px 20px"],
                                    fill: ["rgba(167,230,182,1.00)"],
                                    stroke: [0,"rgba(0, 0, 0, 0)","none"]
                                },
                                {
                                    id: 'Question1Response1BackButtonText',
                                    type: 'text',
                                    rect: ['2px', '40px', '488px', '50px', 'auto', 'auto'],
                                    text: "<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-size: 40px; font-weight: 700; text-transform: uppercase; font-family: roboto, sans-serif;\">back</span></p>",
                                    align: "left",
                                    font: ['Arial, Helvetica, sans-serif', [24, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                                    textStyle: ["", "", "", "", "none"]
                                }]
                            }]
                        },
                        {
                            id: 'Question1Response2',
                            type: 'group',
                            rect: ['145px', '482', '1757', '639', 'auto', 'auto'],
                            c: [
                            {
                                id: 'Question1Response2BackButton',
                                type: 'group',
                                rect: ['1269px', '513px', '490', '128', 'auto', 'auto'],
                                cursor: 'pointer',
                                c: [
                                {
                                    id: 'Question1Response2BackButtonBg',
                                    type: 'rect',
                                    rect: ['0px', '0px', '488px', '128px', 'auto', 'auto'],
                                    borderRadius: ["20px", "20px", "20px", "20px 20px"],
                                    fill: ["rgba(167,230,182,1.00)"],
                                    stroke: [0,"rgba(0, 0, 0, 0)","none"]
                                },
                                {
                                    id: 'Question1Response2BackButtonText',
                                    type: 'text',
                                    rect: ['2px', '40px', '488px', '50px', 'auto', 'auto'],
                                    text: "<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-size: 40px; font-weight: 700; text-transform: uppercase; font-family: roboto, sans-serif;\">back</span></p>",
                                    align: "left",
                                    font: ['Arial, Helvetica, sans-serif', [24, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                                    textStyle: ["", "", "", "", "none"]
                                }]
                            },
                            {
                                id: 'Question1Response2Bg',
                                type: 'rect',
                                rect: ['0px', '0px', '1757px', '439px', 'auto', 'auto'],
                                borderRadius: ["20px", "20px", "20px", "20px 20px"],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgba(0,0,0,0.00)","none"]
                            },
                            {
                                id: 'Question1Response2Text',
                                type: 'text',
                                rect: ['60px', '50px', '1648px', '325px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px; text-align: left;\">​<span style=\"font-family: roboto, sans-serif; font-size: 40px; font-weight: 700;\">Self-Stigma</span></p><p style=\"margin: 0px; text-align: left;\"><span style=\"font-size: 40px; font-family: roboto, sans-serif;\">There is a strong potential for self-stigma in this example, both for Sam and for Ethan. Sam might internalize the negative assumptions made about his having had one beer, or about his lack of parenting based on his history of substance abuse and might actually be at risk of abusing alcohol in response to those negative feelings. Ethan may also experience self-stigma as a result of negative perceptions of his behaviours.</span></p><p style=\"margin: 0px; text-align: left;\"><span style=\"font-size: 40px; font-family: roboto, sans-serif;\"></span></p>",
                                align: "center",
                                font: ['Arial, Helvetica, sans-serif', [24, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                                textStyle: ["", "", "", "", "none"]
                            }]
                        },
                        {
                            id: 'Question1Response3',
                            type: 'group',
                            rect: ['145px', '482', '1757', '639', 'auto', 'auto'],
                            c: [
                            {
                                id: 'Question1Response3BackButton',
                                type: 'group',
                                rect: ['1269px', '513px', '490', '128', 'auto', 'auto'],
                                cursor: 'pointer',
                                c: [
                                {
                                    id: 'Question1Response3BackButtonBg',
                                    type: 'rect',
                                    rect: ['0px', '0px', '488px', '128px', 'auto', 'auto'],
                                    borderRadius: ["20px", "20px", "20px", "20px 20px"],
                                    fill: ["rgba(167,230,182,1.00)"],
                                    stroke: [0,"rgba(0, 0, 0, 0)","none"]
                                },
                                {
                                    id: 'Question1Response3BackButtonText',
                                    type: 'text',
                                    rect: ['2px', '40px', '488px', '50px', 'auto', 'auto'],
                                    text: "<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-size: 40px; font-weight: 700; text-transform: uppercase; font-family: roboto, sans-serif;\">back</span></p>",
                                    align: "left",
                                    font: ['Arial, Helvetica, sans-serif', [24, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                                    textStyle: ["", "", "", "", "none"]
                                }]
                            },
                            {
                                id: 'Question1Response3Bg',
                                type: 'rect',
                                rect: ['0px', '0px', '1757px', '439px', 'auto', 'auto'],
                                borderRadius: ["20px", "20px", "20px", "20px 20px"],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgba(0,0,0,0.00)","none"]
                            },
                            {
                                id: 'Question1Response3Text',
                                type: 'text',
                                rect: ['60px', '77px', '1648px', '298px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px; text-align: left;\">​<span style=\"font-size: 40px; font-family: roboto, sans-serif; font-weight: 700;\">Family Stigma</span></p><p style=\"margin: 0px; text-align: left;\"><span style=\"font-size: 40px; font-family: roboto, sans-serif;\">There is the potential of stigma within the family system although there is no indication here that Sam and Ethan’s family members are perpetuating stigma. In this scenario, stigma from a service provider, self-stigma and systemic stigma are all more likely descriptors of the types of stigma that may impact this family.</span></p><p style=\"margin: 0px; text-align: left;\"><span style=\"font-size: 40px; font-family: roboto, sans-serif;\"></span></p><p style=\"margin: 0px; text-align: left;\"><span style=\"font-size: 40px; font-family: roboto, sans-serif;\"></span></p>",
                                align: "center",
                                font: ['Arial, Helvetica, sans-serif', [24, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                                textStyle: ["", "", "", "", "none"]
                            }]
                        },
                        {
                            id: 'Question2',
                            type: 'group',
                            rect: ['-3000px', '100', '1813', '1403', 'auto', 'auto'],
                            c: [
                            {
                                id: 'Question2Answer3',
                                type: 'group',
                                rect: ['164px', '821px', '1649', '145', 'auto', 'auto'],
                                cursor: 'pointer',
                                c: [
                                {
                                    id: 'Question2Answer3Bg',
                                    type: 'rect',
                                    rect: ['0px', '0px', '1648px', '145px', 'auto', 'auto'],
                                    borderRadius: ["20px", "20px", "20px", "20px 20px"],
                                    fill: ["rgba(255,255,255,1)"],
                                    stroke: [0,"rgba(0, 0, 0, 0)","none"]
                                },
                                {
                                    id: 'Question2Answer3Text',
                                    type: 'text',
                                    rect: ['1px', '48px', '1648px', '50px', 'auto', 'auto'],
                                    text: "<p style=\"margin: 0px;\"><span style=\"font-size: 40px; font-weight: 700; font-family: roboto, sans-serif;\">Advocacy and Supporting Empowerment</span></p>",
                                    align: "center",
                                    font: ['Arial, Helvetica, sans-serif', [24, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                                    textStyle: ["", "", "", "", "none"]
                                }]
                            },
                            {
                                id: 'Question2Answer2',
                                type: 'group',
                                rect: ['164px', '623px', '1649', '145', 'auto', 'auto'],
                                cursor: 'pointer',
                                c: [
                                {
                                    id: 'Question2Answer2Bg',
                                    type: 'rect',
                                    rect: ['0px', '0px', '1648px', '145px', 'auto', 'auto'],
                                    borderRadius: ["20px", "20px", "20px", "20px 20px"],
                                    fill: ["rgba(255,255,255,1)"],
                                    stroke: [0,"rgba(0, 0, 0, 0)","none"]
                                },
                                {
                                    id: 'Question2Answer2Text',
                                    type: 'text',
                                    rect: ['1px', '48px', '1648px', '50px', 'auto', 'auto'],
                                    text: "<p style=\"margin: 0px;\"><span style=\"font-size: 40px; font-weight: 700; font-family: roboto, sans-serif;\">Education</span></p>",
                                    align: "center",
                                    font: ['Arial, Helvetica, sans-serif', [24, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                                    textStyle: ["", "", "", "", "none"]
                                }]
                            },
                            {
                                id: 'Question2Answer1',
                                type: 'group',
                                rect: ['164px', '428px', '1649', '145', 'auto', 'auto'],
                                cursor: 'pointer',
                                c: [
                                {
                                    id: 'Question2Answer1Bg',
                                    type: 'rect',
                                    rect: ['0px', '0px', '1648px', '145px', 'auto', 'auto'],
                                    borderRadius: ["20px", "20px", "20px", "20px 20px"],
                                    fill: ["rgba(255,255,255,1)"],
                                    stroke: [0,"rgba(0, 0, 0, 0)","none"]
                                },
                                {
                                    id: 'Question2Answer1Text',
                                    type: 'text',
                                    rect: ['1px', '48px', '1648px', '50px', 'auto', 'auto'],
                                    text: "<p style=\"margin: 0px;\"><span style=\"font-size: 40px; font-weight: 700; font-family: roboto, sans-serif;\">Positive Personal Contact​</span></p>",
                                    align: "center",
                                    font: ['Arial, Helvetica, sans-serif', [24, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                                    textStyle: ["", "", "", "", "none"]
                                }]
                            },
                            {
                                id: 'Question2BackButton',
                                type: 'group',
                                rect: ['0px', '1275px', '164', '128', 'auto', 'auto'],
                                cursor: 'pointer',
                                c: [
                                {
                                    id: 'Question2BackButtonBg',
                                    type: 'rect',
                                    rect: ['3px', '40px', '165px', '85px', 'auto', 'auto'],
                                    borderRadius: ["10px", "10px", "10px", "10px 10px"],
                                    fill: ["rgba(179,113,113,1)"],
                                    stroke: [0,"rgb(0, 0, 0)","none"]
                                },
                                {
                                    id: 'Question2BackButtonText',
                                    type: 'text',
                                    rect: ['2px', '70px', '162px', '35px', 'auto', 'auto'],
                                    text: "<p style=\"margin: 0px;\">​<span style=\"font-family: roboto, sans-serif; color: rgb(255, 255, 255);\">​</span><span style=\"font-family: roboto, sans-serif; color: rgb(255, 255, 255); text-transform: uppercase; font-weight: 700;\">back</span></p>",
                                    align: "center",
                                    font: ['Arial, Helvetica, sans-serif', [24, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                                    textStyle: ["", "", "", "", "none"]
                                }]
                            },
                            {
                                id: 'Question2Text',
                                type: 'text',
                                rect: ['164px', '0px', '1648px', '289px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​<span style=\"font-size: 60px; font-family: roboto, sans-serif; font-weight: 700;\">Consider what strategies you would employ to address the impact of the stigma on this family.</span></p>",
                                align: "center",
                                font: ['Arial, Helvetica, sans-serif', [24, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                                textStyle: ["", "", "", "", "none"]
                            },
                            {
                                id: 'Question2ContinueButton',
                                type: 'group',
                                rect: ['1325px', '1051px', '488', '128', 'auto', 'auto'],
                                cursor: 'pointer',
                                c: [
                                {
                                    id: 'Question2ContinueButtonBg',
                                    type: 'rect',
                                    rect: ['0px', '0px', '488px', '128px', 'auto', 'auto'],
                                    borderRadius: ["20px", "20px", "20px", "20px 20px"],
                                    fill: ["rgba(167,230,182,1)"],
                                    stroke: [0,"rgba(0, 0, 0, 0)","none"]
                                },
                                {
                                    id: 'Question2ContinueButtonText',
                                    type: 'text',
                                    rect: ['0px', '42px', '488px', '43px', 'auto', 'auto'],
                                    text: "<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-family: roboto, sans-serif; text-transform: uppercase;\">Continue</span></p>",
                                    align: "left",
                                    font: ['Arial, Helvetica, sans-serif', [40, "px"], "rgba(0,0,0,1)", "700", "none", "normal", "break-word", "normal"],
                                    textStyle: ["", "", "", "", "none"]
                                }]
                            }]
                        },
                        {
                            id: 'Question2Response1',
                            type: 'group',
                            rect: ['3000px', '482', '1759', '641', 'auto', 'auto'],
                            c: [
                            {
                                id: 'Question2Response1Body',
                                type: 'group',
                                rect: ['0px', '0px', '1757', '439', 'auto', 'auto'],
                                c: [
                                {
                                    id: 'Question2Response1Bg',
                                    type: 'rect',
                                    rect: ['0px', '0px', '1757px', '439px', 'auto', 'auto'],
                                    borderRadius: ["20px", "20px", "20px", "20px 20px"],
                                    fill: ["rgba(255,255,255,1)"],
                                    stroke: [0,"rgba(0, 0, 0, 0)","none"]
                                },
                                {
                                    id: 'Question2Response1Text',
                                    type: 'text',
                                    rect: ['60px', '128px', '1648px', '220px', 'auto', 'auto'],
                                    text: "<p style=\"margin: 0px;\">​<span style=\"font-family: roboto, sans-serif; font-size: 40px; font-weight: 700;\">Positive Personal Contact</span></p><p style=\"margin: 0px;\"><span style=\"font-family: roboto, sans-serif; font-size: 40px; font-weight: 700;\"></span><span style=\"font-size: 40px;\">In this example, it seems as though positive personal contact between Sam and the addiction counselor has already been established. This has likely been effective in reducing Sam’s self-stigma.</span></p>",
                                    align: "left",
                                    font: ['roboto, sans-serif', [24, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                                    textStyle: ["", "", "", "", "none"]
                                }]
                            },
                            {
                                id: 'Question2Response1BackButton',
                                type: 'group',
                                rect: ['1269px', '513px', '490', '128', 'auto', 'auto'],
                                cursor: 'pointer',
                                c: [
                                {
                                    id: 'Question2Response1BackButtonBg',
                                    type: 'rect',
                                    rect: ['0px', '0px', '488px', '128px', 'auto', 'auto'],
                                    borderRadius: ["20px", "20px", "20px", "20px 20px"],
                                    fill: ["rgba(167,230,182,1)"],
                                    stroke: [0,"rgba(0, 0, 0, 0)","none"]
                                },
                                {
                                    id: 'Question2Response1BackButtonText',
                                    type: 'text',
                                    rect: ['2px', '41px', '488px', '50px', 'auto', 'auto'],
                                    text: "<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-size: 40px; font-weight: 700;\">​</span><span style=\"font-size: 40px; font-weight: 700; text-transform: uppercase;\">back​</span></p>",
                                    align: "left",
                                    font: ['roboto, sans-serif', [24, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                                    textStyle: ["", "", "", "", "none"]
                                }]
                            }]
                        },
                        {
                            id: 'Question2Response2',
                            type: 'group',
                            rect: ['3000px', '482', '1759', '641', 'auto', 'auto'],
                            c: [
                            {
                                id: 'Question2Response2Body',
                                type: 'group',
                                rect: ['0px', '0px', '1757', '439', 'auto', 'auto'],
                                c: [
                                {
                                    id: 'Question2Response2Bg',
                                    type: 'rect',
                                    rect: ['0px', '0px', '1757px', '439px', 'auto', 'auto'],
                                    borderRadius: ["20px", "20px", "20px", "20px 20px"],
                                    fill: ["rgba(255,255,255,1)"],
                                    stroke: [0,"rgba(0, 0, 0, 0)","none"]
                                },
                                {
                                    id: 'Question2Response2Text',
                                    type: 'text',
                                    rect: ['60px', '120px', '1648px', '203px', 'auto', 'auto'],
                                    text: "<p style=\"margin: 0px;\"><span style=\"font-size: 40px; font-family: roboto, sans-serif; font-weight: 700;\">Education</span><span style=\"font-size: 40px;\">​</span></p><p style=\"margin: 0px;\"><span style=\"font-family: roboto, sans-serif; font-size: 40px;\">In this example, you would gently challenge Ms. Stone’s assumption and&nbsp;</span><span style=\"font-size: 40px;\">provide her with some information about your interactions with Sam and about the research support for</span></p><p style=\"margin: 0px;\"><span style=\"font-size: 40px;\">harm-reduction approaches to recovery. This would be a good strategy to reduce stigma.</span></p>",
                                    align: "left",
                                    font: ['Arial, Helvetica, sans-serif', [24, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                                    textStyle: ["", "", "", "", "none"]
                                }]
                            },
                            {
                                id: 'QuestionResponse2BackButton',
                                type: 'group',
                                rect: ['1269px', '513px', '490', '128', 'auto', 'auto'],
                                cursor: 'pointer',
                                c: [
                                {
                                    id: 'Question2Response2BackButtonBg',
                                    type: 'rect',
                                    rect: ['0px', '0px', '488px', '128px', 'auto', 'auto'],
                                    borderRadius: ["20px", "20px", "20px", "20px 20px"],
                                    fill: ["rgba(167,230,182,1.00)"],
                                    stroke: [0,"rgba(0, 0, 0, 0)","none"]
                                },
                                {
                                    id: 'Question2Response2BackButtonText',
                                    type: 'text',
                                    rect: ['2px', '41px', '488px', '50px', 'auto', 'auto'],
                                    text: "<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-weight: 700; font-size: 40px; font-family: roboto, sans-serif; text-transform: uppercase;\">Back</span></p>",
                                    align: "left",
                                    font: ['Arial, Helvetica, sans-serif', [24, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                                    textStyle: ["", "", "", "", "none"]
                                }]
                            }]
                        },
                        {
                            id: 'Question2Response3',
                            type: 'group',
                            rect: ['3000px', '482', '1757', '712', 'auto', 'auto'],
                            c: [
                            {
                                id: 'Question2Response3Body',
                                type: 'group',
                                rect: ['0px', '0px', '1757', '524', 'auto', 'auto'],
                                c: [
                                {
                                    id: 'Question2Response3Bg',
                                    type: 'rect',
                                    rect: ['0px', '0px', '1757px', '524px', 'auto', 'auto'],
                                    borderRadius: ["20px", "20px", "20px", "20px 20px"],
                                    fill: ["rgba(255,255,255,1.00)"],
                                    stroke: [0,"rgba(0, 0, 0, 0)","none"]
                                },
                                {
                                    id: 'Question2Response3Text',
                                    type: 'text',
                                    rect: ['60px', '77px', '1648px', '369px', 'auto', 'auto'],
                                    text: "<p style=\"margin: 0px;\"><span style=\"font-size: 40px; font-family: roboto, sans-serif; font-weight: 700;\">Advocacy and Supporting Empowerment​</span></p><p style=\"margin: 0px;\"><span style=\"font-family: roboto, sans-serif; font-size: 40px;\">In this example, as the addictions worker you might encourage Sam to contact the school and set up a meeting to discuss Ms. Stone’s supports. You could offer to attend the meeting with Sam to advocate for him but you can also empower Sam to share information about harm-reduction, or his parenting strategies at home. This would be a great strategy to assist Sam because you would be engaging in collaborative discussion, while empowering Sam to advocate for stigma-reduction with your support.</span></p>",
                                    align: "left",
                                    font: ['Arial, Helvetica, sans-serif', [24, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                                    textStyle: ["", "", "", "", "none"]
                                }]
                            },
                            {
                                id: 'Question2Response3BackButton',
                                type: 'group',
                                rect: ['1267px', '584px', '490', '128', 'auto', 'auto'],
                                cursor: 'pointer',
                                c: [
                                {
                                    id: 'Question2Response3BackButtonBg',
                                    type: 'rect',
                                    rect: ['0px', '0px', '488px', '128px', 'auto', 'auto'],
                                    borderRadius: ["20px", "20px", "20px", "20px 20px"],
                                    fill: ["rgba(167,230,182,1.00)"],
                                    stroke: [0,"rgba(0, 0, 0, 0)","none"]
                                },
                                {
                                    id: 'Question2Response3BackButtonText',
                                    type: 'text',
                                    rect: ['2px', '41px', '488px', '50px', 'auto', 'auto'],
                                    text: "<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-family: roboto, sans-serif; font-size: 40px;\">​</span><span style=\"font-family: roboto, sans-serif; font-size: 40px; text-transform: uppercase; font-weight: 700;\">Back</span></p>",
                                    align: "left",
                                    font: ['Arial, Helvetica, sans-serif', [24, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                                    textStyle: ["", "", "", "", "none"]
                                }]
                            }]
                        },
                        {
                            id: 'ethanSchoolBg2',
                            type: 'image',
                            rect: ['0px', '2000px', '2048px', '1536px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"ethanSchoolBg.png",'0px','0px']
                        },
                        {
                            id: 'moduleCompletedTitle',
                            type: 'text',
                            rect: ['200px', '200px', '1659px', '181px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px; text-align: center;\"><span style=\"font-size: 150px; font-weight: 700; text-transform: uppercase; color: rgb(211, 110, 110);\">Scenario Complete</span></p>",
                            align: "left",
                            font: ['roboto, sans-serif', [24, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'moduleCompleteText',
                            type: 'text',
                            rect: ['200px', '480px', '1659px', '50px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-size: 40px; font-weight: 700;\">Congratulations! You have completed this scenario.</span></p>",
                            align: "left",
                            font: ['roboto, sans-serif', [24, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "", "", "none"]
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
                            rect: ['-447px', '-57', '2495', '1625', 'auto', 'auto'],
                            c: [
                            {
                                id: 'startScreenBg',
                                type: 'rect',
                                rect: ['447px', '57px', '2048px', '1536px', 'auto', 'auto'],
                                fill: ["rgba(244,225,225,1.00)"],
                                stroke: [0,"rgba(0,0,0,0.00)","none"]
                            },
                            {
                                id: 'startScreenTitle',
                                type: 'text',
                                rect: ['1144px', '201px', '1172px', '474px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px; text-align: center;\">​<span style=\"text-transform: uppercase; font-size: 330px; font-weight: 700; color: rgb(211, 110, 110);\">ethan</span></p>",
                                font: ['roboto, sans-serif', [24, ""], "rgba(0,0,0,1)", "normal", "none", "", "break-word", "normal"]
                            },
                            {
                                id: 'ethanAge',
                                type: 'text',
                                rect: ['1149px', '604px', '1214px', '107px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px; text-align: center;\"><span style=\"font-size: 50px; font-weight: 700;\">Age 6</span></p>",
                                align: "left",
                                font: ['roboto, sans-serif', [24, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                                textStyle: ["", "", "", "", "none"]
                            },
                            {
                                id: 'EthanFront',
                                type: 'image',
                                rect: ['0px', '0px', '1625px', '1625px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"EthanFront.png",'0px','0px']
                            },
                            {
                                id: 'beginButton',
                                type: 'group',
                                rect: ['1405px', '953px', '702', '192', 'auto', 'auto'],
                                cursor: 'pointer',
                                c: [
                                {
                                    id: 'beginButtonBg',
                                    type: 'rect',
                                    rect: ['0px', '0px', '702px', '192px', 'auto', 'auto'],
                                    borderRadius: ["40px", "40px", "40px", "40px 40px"],
                                    fill: ["rgba(211,110,110,1.00)"],
                                    stroke: [0,"rgba(0, 0, 0, 0)","none"],
                                    filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(96,194,186,1.00)", 0, 0, 0]
                                },
                                {
                                    id: 'beginButtonText',
                                    type: 'text',
                                    rect: ['0px', '46px', '702px', '104px', 'auto', 'auto'],
                                    text: "<p style=\"margin: 0px; text-align: center;\">​<span style=\"color: rgb(255, 255, 255); text-transform: uppercase; font-size: 80px; font-weight: 700;\">begin</span></p>",
                                    align: "left",
                                    font: ['roboto, sans-serif', [24, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                                    textStyle: ["", "", "", "", "none"]
                                }]
                            }]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '2048px', '1536px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 43000,
                    autoPlay: true,
                    data: [
                        [
                            "eid182",
                            "left",
                            34500,
                            1000,
                            "easeOutQuad",
                            "${Question2}",
                            '2500px',
                            '35px'
                        ],
                        [
                            "eid184",
                            "left",
                            35500,
                            1000,
                            "easeInQuad",
                            "${Question2}",
                            '35px',
                            '-3000px'
                        ],
                        [
                            "eid186",
                            "left",
                            36500,
                            1000,
                            "easeOutQuad",
                            "${Question2}",
                            '-3000px',
                            '35px'
                        ],
                        [
                            "eid188",
                            "left",
                            37500,
                            1000,
                            "easeInQuad",
                            "${Question2}",
                            '35px',
                            '-3000px'
                        ],
                        [
                            "eid190",
                            "left",
                            38500,
                            1000,
                            "easeOutQuad",
                            "${Question2}",
                            '-3000px',
                            '35px'
                        ],
                        [
                            "eid192",
                            "left",
                            39500,
                            1000,
                            "easeInQuad",
                            "${Question2}",
                            '35px',
                            '-3000px'
                        ],
                        [
                            "eid193",
                            "left",
                            40500,
                            1000,
                            "easeOutQuad",
                            "${Question2}",
                            '-3000px',
                            '35px'
                        ],
                        [
                            "eid194",
                            "left",
                            41500,
                            1000,
                            "easeInQuad",
                            "${Question2}",
                            '35px',
                            '-3000px'
                        ],
                        [
                            "eid140",
                            "opacity",
                            24500,
                            500,
                            "linear",
                            "${ethanScene3Text2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid161",
                            "left",
                            27500,
                            1000,
                            "easeOutQuad",
                            "${Question1}",
                            '2452px',
                            '200px'
                        ],
                        [
                            "eid162",
                            "left",
                            28500,
                            1000,
                            "easeInQuad",
                            "${Question1}",
                            '200px',
                            '-3000px'
                        ],
                        [
                            "eid163",
                            "left",
                            29500,
                            1000,
                            "easeOutQuad",
                            "${Question1}",
                            '-3000px',
                            '200px'
                        ],
                        [
                            "eid164",
                            "left",
                            30500,
                            1000,
                            "easeInQuad",
                            "${Question1}",
                            '200px',
                            '-3000px'
                        ],
                        [
                            "eid167",
                            "left",
                            31500,
                            1000,
                            "easeOutQuad",
                            "${Question1}",
                            '-3000px',
                            '200px'
                        ],
                        [
                            "eid169",
                            "left",
                            32500,
                            1000,
                            "easeInQuad",
                            "${Question1}",
                            '200px',
                            '-3000px'
                        ],
                        [
                            "eid170",
                            "left",
                            33500,
                            1000,
                            "easeOutQuad",
                            "${Question1}",
                            '-3000px',
                            '200px'
                        ],
                        [
                            "eid179",
                            "left",
                            34500,
                            1000,
                            "easeInQuad",
                            "${Question1}",
                            '200px',
                            '-3000px'
                        ],
                        [
                            "eid63",
                            "opacity",
                            14500,
                            500,
                            "linear",
                            "${ethanScene2Text1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid200",
                            "left",
                            37500,
                            1000,
                            "easeOutQuad",
                            "${Question2Response2}",
                            '3000px',
                            '145px'
                        ],
                        [
                            "eid201",
                            "left",
                            38500,
                            1000,
                            "easeInQuad",
                            "${Question2Response2}",
                            '145px',
                            '3000px'
                        ],
                        [
                            "eid61",
                            "top",
                            14000,
                            1000,
                            "linear",
                            "${ethanScene2Text1}",
                            '-306px',
                            '144px'
                        ],
                        [
                            "eid243",
                            "left",
                            8000,
                            0,
                            "easeInQuad",
                            "${ethanScene1Text2}",
                            '738px',
                            '738px'
                        ],
                        [
                            "eid244",
                            "width",
                            8000,
                            0,
                            "easeInQuad",
                            "${ethanScene1Text2}",
                            '1226px',
                            '1226px'
                        ],
                        [
                            "eid129",
                            "width",
                            23000,
                            1000,
                            "easeOutElastic",
                            "${chatBubbleGraphic}",
                            '115px',
                            '534px'
                        ],
                        [
                            "eid160",
                            "top",
                            2000,
                            1000,
                            "easeOutBounce",
                            "${ethanScene1Title}",
                            '293px',
                            '903px'
                        ],
                        [
                            "eid81",
                            "top",
                            16500,
                            1000,
                            "linear",
                            "${ethanScene2Text2}",
                            '-500px',
                            '300px'
                        ],
                        [
                            "eid171",
                            "left",
                            28500,
                            1000,
                            "easeOutQuad",
                            "${Question1Response}",
                            '3000px',
                            '145px'
                        ],
                        [
                            "eid172",
                            "left",
                            29500,
                            1000,
                            "easeInQuad",
                            "${Question1Response}",
                            '145px',
                            '3000px'
                        ],
                        [
                            "eid71",
                            "filter.drop-shadow.color",
                            16000,
                            0,
                            "linear",
                            "${phoneGraphic}",
                            'rgba(96,194,186,1.00)',
                            'rgba(96,194,186,1.00)'
                        ],
                        [
                            "eid177",
                            "left",
                            32500,
                            1000,
                            "easeOutQuad",
                            "${Question1Response3}",
                            '3000px',
                            '145px'
                        ],
                        [
                            "eid178",
                            "left",
                            33500,
                            1000,
                            "easeInQuad",
                            "${Question1Response3}",
                            '145px',
                            '3000px'
                        ],
                        [
                            "eid215",
                            "top",
                            2000,
                            0,
                            "linear",
                            "${restartButton}",
                            '1294px',
                            '1294px'
                        ],
                        [
                            "eid154",
                            "top",
                            23849,
                            151,
                            "easeOutElastic",
                            "${ethanScene3BeerGraphic}",
                            '-447px',
                            '-99px'
                        ],
                        [
                            "eid136",
                            "top",
                            24000,
                            1000,
                            "easeOutElastic",
                            "${ethanScene3BeerGraphic}",
                            '-99px',
                            '-146px'
                        ],
                        [
                            "eid105",
                            "filter.drop-shadow.blur",
                            17500,
                            500,
                            "easeOutQuad",
                            "${msStoneScene2}",
                            '0px',
                            '40px'
                        ],
                        [
                            "eid106",
                            "filter.drop-shadow.blur",
                            18000,
                            500,
                            "easeOutQuad",
                            "${msStoneScene2}",
                            '40px',
                            '0px'
                        ],
                        [
                            "eid240",
                            "width",
                            3000,
                            0,
                            "easeInQuad",
                            "${ethanScene1Title}",
                            '1213px',
                            '1213px'
                        ],
                        [
                            "eid147",
                            "filter.drop-shadow.blur",
                            26000,
                            500,
                            "linear",
                            "${chatBubbleGraphic}",
                            '0px',
                            '35px'
                        ],
                        [
                            "eid148",
                            "filter.drop-shadow.blur",
                            26500,
                            500,
                            "linear",
                            "${chatBubbleGraphic}",
                            '35px',
                            '0px'
                        ],
                        [
                            "eid60",
                            "left",
                            14000,
                            0,
                            "linear",
                            "${ethanScene2Text1}",
                            '199px',
                            '199px'
                        ],
                        [
                            "eid114",
                            "left",
                            18500,
                            1000,
                            "easeInQuad",
                            "${ethanScene2Text1}",
                            '199px',
                            '-2000px'
                        ],
                        [
                            "eid118",
                            "top",
                            21000,
                            1000,
                            "easeOutQuad",
                            "${Ethan}",
                            '1644px',
                            '0px'
                        ],
                        [
                            "eid137",
                            "top",
                            24000,
                            1000,
                            "easeOutQuad",
                            "${ethanScene3Text2}",
                            '-544px',
                            '4px'
                        ],
                        [
                            "eid100",
                            "left",
                            16248,
                            252,
                            "easeOutQuad",
                            "${phoneGraphic}",
                            '724px',
                            '723px'
                        ],
                        [
                            "eid94",
                            "left",
                            16500,
                            1000,
                            "easeInQuad",
                            "${phoneGraphic}",
                            '723px',
                            '-1174px'
                        ],
                        [
                            "eid205",
                            "left",
                            39500,
                            1000,
                            "easeOutQuad",
                            "${Question2Response3}",
                            '3000px',
                            '145px'
                        ],
                        [
                            "eid206",
                            "left",
                            40500,
                            1000,
                            "easeInQuad",
                            "${Question2Response3}",
                            '145px',
                            '3000px'
                        ],
                        [
                            "eid130",
                            "left",
                            23000,
                            1000,
                            "easeOutElastic",
                            "${chatBubbleGraphic}",
                            '115px',
                            '-90px'
                        ],
                        [
                            "eid241",
                            "left",
                            3000,
                            0,
                            "easeInQuad",
                            "${ethanScene1Text1}",
                            '738px',
                            '738px'
                        ],
                        [
                            "eid10",
                            "top",
                            2000,
                            1000,
                            "easeOutQuad",
                            "${ethanScene1Text1}",
                            '86px',
                            '1140px'
                        ],
                        [
                            "eid218",
                            "top",
                            41500,
                            1500,
                            "easeOutQuad",
                            "${ethanSchoolBg2}",
                            '2000px',
                            '0px'
                        ],
                        [
                            "eid134",
                            "width",
                            24000,
                            1000,
                            "easeOutElastic",
                            "${ethanScene3BeerGraphic}",
                            '98px',
                            '190px'
                        ],
                        [
                            "eid8",
                            "left",
                            1000,
                            1000,
                            "easeInQuad",
                            "${startScreen}",
                            '-447px',
                            '-3447px'
                        ],
                        [
                            "eid75",
                            "filter.drop-shadow.blur",
                            16000,
                            248,
                            "linear",
                            "${phoneGraphic}",
                            '0px',
                            '50px'
                        ],
                        [
                            "eid76",
                            "filter.drop-shadow.blur",
                            16248,
                            252,
                            "linear",
                            "${phoneGraphic}",
                            '50px',
                            '0px'
                        ],
                        [
                            "eid47",
                            "filter.drop-shadow.blur",
                            10500,
                            500,
                            "easeOutQuad",
                            "${singleBeerGraphic}",
                            '0px',
                            '50px'
                        ],
                        [
                            "eid48",
                            "filter.drop-shadow.blur",
                            11000,
                            500,
                            "easeOutQuad",
                            "${singleBeerGraphic}",
                            '50px',
                            '0px'
                        ],
                        [
                            "eid116",
                            "filter.blur",
                            19500,
                            1500,
                            "easeInQuad",
                            "${ethanSchoolBg}",
                            '42.66909408569336px',
                            '0px'
                        ],
                        [
                            "eid58",
                            "left",
                            13000,
                            1000,
                            "easeInQuad",
                            "${ethanScene1}",
                            '0px',
                            '-3000px'
                        ],
                        [
                            "eid35",
                            "top",
                            7000,
                            1000,
                            "easeOutQuad",
                            "${ethanScene1Text2}",
                            '550px',
                            '1271px'
                        ],
                        [
                            "eid4",
                            "filter.drop-shadow.blur",
                            0,
                            500,
                            "linear",
                            "${beginButtonBg}",
                            '0.000000px',
                            '35px'
                        ],
                        [
                            "eid5",
                            "filter.drop-shadow.blur",
                            500,
                            500,
                            "linear",
                            "${beginButtonBg}",
                            '35px',
                            '0px'
                        ],
                        [
                            "eid239",
                            "left",
                            3000,
                            0,
                            "easeInQuad",
                            "${ethanScene1Title}",
                            '730px',
                            '730px'
                        ],
                        [
                            "eid152",
                            "left",
                            27000,
                            1000,
                            "easeInQuad",
                            "${ethanScene3}",
                            '157px',
                            '-2000px'
                        ],
                        [
                            "eid196",
                            "left",
                            35500,
                            1000,
                            "easeOutQuad",
                            "${Question2Response1}",
                            '3000px',
                            '145px'
                        ],
                        [
                            "eid197",
                            "left",
                            36500,
                            1000,
                            "easeInQuad",
                            "${Question2Response1}",
                            '145px',
                            '3000px'
                        ],
                        [
                            "eid128",
                            "height",
                            23000,
                            1000,
                            "easeOutElastic",
                            "${chatBubbleGraphic}",
                            '115px',
                            '534px'
                        ],
                        [
                            "eid131",
                            "opacity",
                            23000,
                            1000,
                            "easeOutElastic",
                            "${chatBubbleGraphic}",
                            '0',
                            '1'
                        ],
                        [
                            "eid210",
                            "left",
                            42000,
                            1000,
                            "easeOutQuad",
                            "${moduleCompleteText}",
                            '4965px',
                            '200px'
                        ],
                        [
                            "eid67",
                            "rotateZ",
                            16000,
                            62,
                            "linear",
                            "${phoneGraphic}",
                            '-19deg',
                            '-18deg'
                        ],
                        [
                            "eid68",
                            "rotateZ",
                            16062,
                            62,
                            "linear",
                            "${phoneGraphic}",
                            '-18deg',
                            '-19deg'
                        ],
                        [
                            "eid69",
                            "rotateZ",
                            16124,
                            62,
                            "linear",
                            "${phoneGraphic}",
                            '-19deg',
                            '-18deg'
                        ],
                        [
                            "eid70",
                            "rotateZ",
                            16186,
                            62,
                            "linear",
                            "${phoneGraphic}",
                            '-18deg',
                            '-19deg'
                        ],
                        [
                            "eid99",
                            "left",
                            16500,
                            1000,
                            "easeOutQuad",
                            "${msStoneScene2}",
                            '2500px',
                            '900px'
                        ],
                        [
                            "eid110",
                            "left",
                            18500,
                            1000,
                            "easeInQuad",
                            "${msStoneScene2}",
                            '900px',
                            '-931px'
                        ],
                        [
                            "eid208",
                            "top",
                            41500,
                            1500,
                            "easeOutBounce",
                            "${moduleCompletedTitle}",
                            '-338px',
                            '200px'
                        ],
                        [
                            "eid112",
                            "left",
                            18500,
                            1000,
                            "easeInQuad",
                            "${ethanScene2Text2}",
                            '199px',
                            '-2000px'
                        ],
                        [
                            "eid153",
                            "left",
                            23849,
                            151,
                            "easeOutElastic",
                            "${ethanScene3BeerGraphic}",
                            '123px',
                            '128px'
                        ],
                        [
                            "eid135",
                            "left",
                            24000,
                            1000,
                            "easeOutElastic",
                            "${ethanScene3BeerGraphic}",
                            '128px',
                            '77px'
                        ],
                        [
                            "eid16",
                            "top",
                            3000,
                            1000,
                            "easeOutQuad",
                            "${multipleBeerGraphic}",
                            '-464px',
                            '1400px'
                        ],
                        [
                            "eid31",
                            "top",
                            5500,
                            1000,
                            "easeInOutQuad",
                            "${multipleBeerGraphic}",
                            '1400px',
                            '2470px'
                        ],
                        [
                            "eid212",
                            "left",
                            27000,
                            1000,
                            "easeInQuad",
                            "${ethanScene23BackButton}",
                            '38px',
                            '-2500px'
                        ],
                        [
                            "eid25",
                            "filter.drop-shadow.blur",
                            4500,
                            500,
                            "easeOutQuad",
                            "${multipleBeerGraphic}",
                            '0px',
                            '50px'
                        ],
                        [
                            "eid26",
                            "filter.drop-shadow.blur",
                            5000,
                            500,
                            "easeOutQuad",
                            "${multipleBeerGraphic}",
                            '50px',
                            '0px'
                        ],
                        [
                            "eid39",
                            "opacity",
                            7500,
                            500,
                            "easeOutQuad",
                            "${ethanScene1Text2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid156",
                            "left",
                            27000,
                            1000,
                            "easeInQuad",
                            "${ethanSchoolBg}",
                            '0px',
                            '-2500px'
                        ],
                        [
                            "eid174",
                            "left",
                            30500,
                            1000,
                            "easeOutQuad",
                            "${Question1Response2}",
                            '3000px',
                            '145px'
                        ],
                        [
                            "eid175",
                            "left",
                            31500,
                            1000,
                            "easeInQuad",
                            "${Question1Response2}",
                            '145px',
                            '3000px'
                        ],
                        [
                            "eid44",
                            "top",
                            9500,
                            1000,
                            "easeOutQuad",
                            "${correct}",
                            '100px',
                            '1548px'
                        ],
                        [
                            "eid53",
                            "top",
                            12000,
                            1000,
                            "easeInQuad",
                            "${correct}",
                            '1548px',
                            '2570px'
                        ],
                        [
                            "eid28",
                            "top",
                            3500,
                            1000,
                            "easeOutQuad",
                            "${incorrect}",
                            '-434px',
                            '1447px'
                        ],
                        [
                            "eid33",
                            "top",
                            5750,
                            1250,
                            "easeInQuad",
                            "${incorrect}",
                            '1447px',
                            '2570px'
                        ],
                        [
                            "eid144",
                            "top",
                            22750,
                            250,
                            "easeOutElastic",
                            "${chatBubbleGraphic}",
                            '-419px',
                            '86px'
                        ],
                        [
                            "eid127",
                            "top",
                            23000,
                            1000,
                            "easeOutElastic",
                            "${chatBubbleGraphic}",
                            '86px',
                            '-275px'
                        ],
                        [
                            "eid84",
                            "opacity",
                            17000,
                            500,
                            "linear",
                            "${ethanScene2Text2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid242",
                            "width",
                            3000,
                            0,
                            "easeInQuad",
                            "${ethanScene1Text1}",
                            '1226px',
                            '1226px'
                        ],
                        [
                            "eid41",
                            "top",
                            9000,
                            1000,
                            "easeOutQuad",
                            "${singleBeerGraphic}",
                            '0px',
                            '1480px'
                        ],
                        [
                            "eid51",
                            "top",
                            11500,
                            1000,
                            "easeInQuad",
                            "${singleBeerGraphic}",
                            '1480px',
                            '2470px'
                        ],
                        [
                            "eid125",
                            "filter.drop-shadow.blur",
                            22000,
                            500,
                            "easeOutQuad",
                            "${Ethan}",
                            '0px',
                            '35px'
                        ],
                        [
                            "eid126",
                            "filter.drop-shadow.blur",
                            22500,
                            500,
                            "easeOutQuad",
                            "${Ethan}",
                            '35px',
                            '0px'
                        ],
                        [
                            "eid120",
                            "top",
                            21000,
                            1000,
                            "easeOutQuad",
                            "${ethanScene3Text1}",
                            '-740px',
                            '-178px'
                        ],
                        [
                            "eid133",
                            "height",
                            24000,
                            1000,
                            "easeOutElastic",
                            "${ethanScene3BeerGraphic}",
                            '99px',
                            '192px'
                        ],
                        [
                            "eid20",
                            "opacity",
                            2500,
                            500,
                            "easeOutQuad",
                            "${ethanScene1Text1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid132",
                            "opacity",
                            24000,
                            1000,
                            "easeOutElastic",
                            "${ethanScene3BeerGraphic}",
                            '0',
                            '1'
                        ]
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
                            borderRadius: ['10px', '10px', '10px', '10px 10px'],
                            id: 'restartButtonBg',
                            stroke: [0, 'rgba(0, 0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(74,80,115,1.00)']
                        },
                        {
                            type: 'text',
                            rect: ['0px', '29px', '160px', '40px', 'auto', 'auto'],
                            align: 'left',
                            id: 'Text13',
                            text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"color: rgb(255, 255, 255); font-weight: 700; text-transform: uppercase;\">restart</span></p>',
                            textStyle: ['', '', '', '', 'none'],
                            font: ['roboto, sans-serif', [24, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal']
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

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("ethanModule1_edgeActions.js");
})("EDGE-3507005");
