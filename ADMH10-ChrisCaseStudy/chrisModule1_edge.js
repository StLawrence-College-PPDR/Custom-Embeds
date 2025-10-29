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
                            id: 'chrisScene4',
                            type: 'group',
                            rect: ['0', '-752', '4648', '2288', 'auto', 'auto'],
                            c: [
                            {
                                id: 'chrisHouseBg',
                                type: 'image',
                                rect: ['0', '752px', '2048px', '1536px', 'auto', 'auto'],
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
                                id: 'scenarioCompleteTitle',
                                type: 'text',
                                rect: ['200px', '952px', '1649px', '155px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px; text-align: center;\"><span style=\"font-size: 150px; text-transform: uppercase; color: rgb(134, 153, 188); font-family: roboto, sans-serif;\">Scenario Complete</span></p>",
                                align: "left",
                                font: ['Arial, Helvetica, sans-serif', [24, "px"], "rgba(0,0,0,1)", "700", "none", "normal", "break-word", "normal"],
                                textStyle: ["", "", "", "", "none"]
                            },
                            {
                                id: 'scenarioCompleteText',
                                type: 'text',
                                rect: ['3000px', '1232px', '1648px', '44px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px; text-align: center;\"><span style=\"font-size: 40px;\">Congratulations! You have completed this scenario.</span></p>",
                                align: "left",
                                font: ['Arial, Helvetica, sans-serif', [24, "px"], "rgba(0,0,0,1)", "700", "none", "normal", "break-word", "normal"],
                                textStyle: ["", "", "", "", "none"]
                            },
                            {
                                id: 'backButtonScene4',
                                symbolName: 'backButton',
                                type: 'rect',
                                rect: ['38px', '2167px', 'undefined', 'undefined', 'auto', 'auto'],
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
                                rect: ['144px', '1457px', 'undefined', 'undefined', 'auto', 'auto'],
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
                                rect: ['144px', '1457px', 'undefined', 'undefined', 'auto', 'auto'],
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
                                rect: ['38px', '1415px', 'undefined', 'undefined', 'auto', 'auto'],
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
                    duration: 19500,
                    autoPlay: true,
                    data: [
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
                            "eid134",
                            "top",
                            16500,
                            0,
                            "linear",
                            "${backButtonScene4}",
                            '2167px',
                            '2167px'
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
                            "eid100",
                            "left",
                            18500,
                            1000,
                            "easeOutQuad",
                            "${scenarioCompleteText}",
                            '3000px',
                            '200px'
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
                            "eid98",
                            "top",
                            17500,
                            1000,
                            "easeOutBounce",
                            "${scenarioCompleteTitle}",
                            '452px',
                            '952px'
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
                            "eid124",
                            "left",
                            16500,
                            1000,
                            "easeInQuad",
                            "${backButtonScene4}",
                            '38px',
                            '-1000px'
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
                            "eid202",
                            "top",
                            19500,
                            0,
                            "linear",
                            "${scenarioCompleteText}",
                            '1232px',
                            '1232px'
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
                            "eid72",
                            "left",
                            12500,
                            1000,
                            "easeInOutQuad",
                            "${chrisScene3}",
                            '-106px',
                            '-3106px'
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
                            id: 'backButonBg',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(179,113,113,1.00)']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(0,0,0,1)', '700', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            align: 'left',
                            id: 'backButtonText',
                            textStyle: ['', '', '', '', 'none'],
                            text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"color: rgb(255, 255, 255); text-transform: uppercase; font-family: roboto, sans-serif;\">back</span></p>',
                            rect: ['2px', '30px', '163px', '63px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '165px', '128px']
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

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("chrisModule1_edgeActions.js");
})("EDGE-1360279075");
