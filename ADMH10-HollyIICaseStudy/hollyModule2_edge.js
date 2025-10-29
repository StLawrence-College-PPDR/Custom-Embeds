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
                            id: 'scene5',
                            type: 'group',
                            rect: ['0', '0', '2048', '2196', 'auto', 'auto'],
                            c: [
                            {
                                id: 'hollyChurchBg',
                                type: 'image',
                                rect: ['-200px', '0', '2248px', '1586px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"hollyChurchBg.png",'0px','0px'],
                                filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0]
                            },
                            {
                                id: 'HollyFront2',
                                type: 'image',
                                rect: ['900px', '566px', '446px', '1629px', 'auto', 'auto'],
                                cursor: 'pointer',
                                fill: ["rgba(0,0,0,0)",im+"HollyFront2.png",'0px','0px'],
                                filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(96,194,186,1.00)", 0, 0, 0]
                            },
                            {
                                id: 'scene5BackButton',
                                type: 'group',
                                rect: ['38px', '1375', '164', '128', 'auto', 'auto'],
                                cursor: 'pointer',
                                c: [
                                {
                                    id: 'scene5BackButtonBg',
                                    type: 'rect',
                                    rect: ['0px', '40px', '165px', '85px', 'auto', 'auto'],
                                    borderRadius: ["10px", "10px", "10px", "10px"],
                                    fill: ["rgba(179,113,113,1)"],
                                    stroke: [0,"rgb(0, 0, 0)","none"]
                                },
                                {
                                    id: 'scene5BackButtonText',
                                    type: 'text',
                                    rect: ['0px', '69px', '164px', '50px', 'auto', 'auto'],
                                    text: "<p style=\"margin: 0px;\">back​</p>",
                                    align: "center",
                                    font: ['roboto, sans-serif', [24, "px"], "rgba(255,255,255,1.00)", "700", "none", "normal", "break-word", "normal"],
                                    textStyle: ["", "", "", "", "uppercase"]
                                }]
                            },
                            {
                                id: 'scene5Text',
                                type: 'text',
                                rect: ['200px', '-500px', '1174px', '430px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​Holly describes her grandmother as being “old-fashioned” and closed. Holly said that when her uncle committed suicide her grandmother didn’t even have a funeral for him because she felt it was nobody’s business what happened to him. Holly said that one positive ritual she shares with her grandmother is weekly attendance at church where she can meet up with her friends from her old school and also have time away from the stress of home and school.</p>",
                                align: "left",
                                font: ['roboto, sans-serif', [40, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                                textStyle: ["", "", "", "", "none"]
                            }]
                        },
                        {
                            id: 'scenarioCompleteTitle',
                            type: 'text',
                            rect: ['200px', '-370px', '1659px', '181px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-size: 150px;\">​</span><span style=\"font-size: 150px; font-weight: 700;\">​</span><span style=\"font-size: 150px; font-weight: 700; text-transform: uppercase;\">​scenario Complete</span></p>",
                            align: "center",
                            font: ['roboto, sans-serif', [150, "px"], "rgba(141,181,148,1.00)", "700", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "", "", "uppercase"]
                        },
                        {
                            id: 'scenarioCompleteText',
                            type: 'text',
                            rect: ['3000px', '550px', '1659px', '50px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">Congratulations! You have completed this scenario.</p>",
                            align: "center",
                            font: ['roboto, sans-serif', [40, "px"], "rgba(0,0,0,1.00)", "700", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'hollyGradientBg',
                            type: 'image',
                            rect: ['0px', '0px', '2048px', '1536px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"ethanGradientBg.png",'0px','0px']
                        },
                        {
                            id: 'scene4',
                            type: 'group',
                            rect: ['38px', '0px', '1810', '1627px', 'auto', 'auto'],
                            c: [
                            {
                                id: 'scene4BackButton',
                                type: 'group',
                                rect: ['0px', '2000px', '164', '128', 'auto', 'auto'],
                                cursor: 'pointer',
                                c: [
                                {
                                    id: 'scene4BackButtonBg',
                                    type: 'rect',
                                    rect: ['0px', '40px', '165px', '85px', 'auto', 'auto'],
                                    borderRadius: ["10px", "10px", "10px", "10px"],
                                    fill: ["rgba(179,113,113,1.00)"],
                                    stroke: [0,"rgba(0,0,0,1)","none"]
                                },
                                {
                                    id: 'scene4BackButtonText',
                                    type: 'text',
                                    rect: ['0px', '71px', '164px', '50px', 'auto', 'auto'],
                                    text: "<p style=\"margin: 0px;\"><span style=\"font-family: roboto, sans-serif;\">​back</span></p>",
                                    align: "center",
                                    font: ['roboto, sans-serif', [24, ""], "rgba(255,255,255,1.00)", "700", "none", "", "break-word", "normal"],
                                    textStyle: ["", "", "", "", "uppercase"]
                                }]
                            },
                            {
                                id: 'HollyGrandmaFront',
                                type: 'image',
                                rect: ['265px', '2000px', '435px', '1627px', 'auto', 'auto'],
                                cursor: 'pointer',
                                fill: ["rgba(0,0,0,0)",im+"HollyGrandmaFront.png",'0px','0px'],
                                filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(96,194,186,1.00)", 0, 0, 0]
                            },
                            {
                                id: 'scene4Text',
                                type: 'text',
                                rect: ['887px', '2000px', '923px', '689px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​Holly also tells the counselor that she smokes marijuana on occasion to help to ease her worries.</p><p style=\"margin: 0px;\">Holly tells the counselor that she used to smoke marijuana with her mother before the Children’s</p><p style=\"margin: 0px;\">Aid Society took her from her mom and sent her to live with her grandmother. Holly says her</p><p style=\"margin: 0px;\">grandmother doesn't smoke any marijuana.</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">Holly tells the school counselor that she doesn't want her grandmother to know about her self-harm or her marijuana use because her grandmother might kick her out and then she would have to go live in foster care.</p>",
                                align: "left",
                                font: ['roboto, sans-serif', [40, "px"], "rgba(0,0,0,1.00)", "400", "none", "normal", "break-word", "normal"],
                                textStyle: ["", "", "", "", "none"]
                            }]
                        },
                        {
                            id: 'scene3',
                            type: 'group',
                            rect: ['38px', '183', '2010', '1320', 'auto', 'auto'],
                            c: [
                            {
                                id: 'scene3BackButton',
                                type: 'group',
                                rect: ['0px', '-583px', '165', '128', 'auto', 'auto'],
                                cursor: 'pointer',
                                c: [
                                {
                                    id: 'scene3BackButtonBg',
                                    type: 'rect',
                                    rect: ['0px', '40px', '165px', '85px', 'auto', 'auto'],
                                    borderRadius: ["10px", "10px", "10px", "10px"],
                                    fill: ["rgba(179,113,113,1.00)"],
                                    stroke: [0,"rgba(0,0,0,1)","none"]
                                },
                                {
                                    id: 'scene3BackButtonText',
                                    type: 'text',
                                    rect: ['1px', '69px', '164px', '50px', 'auto', 'auto'],
                                    text: "<p style=\"margin: 0px; text-align: center;\">​<span style=\"color: rgb(255, 255, 255); font-size: 24px;\">​</span><span style=\"color: rgb(255, 255, 255); font-weight: 700; font-size: 24px;\">​</span><span style=\"color: rgb(255, 255, 255); font-weight: 700; text-transform: uppercase; font-size: 24px;\">​back​</span></p>",
                                    align: "left",
                                    font: ['roboto, sans-serif', [24, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                                    textStyle: ["", "", "", "", "none"]
                                }]
                            },
                            {
                                id: 'boxGraphic',
                                type: 'image',
                                rect: ['910px', '0px', '1100px', '1100px', 'auto', 'auto'],
                                cursor: 'pointer',
                                fill: ["rgba(0,0,0,0)",im+"boxGraphic.png",'0px','0px'],
                                filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(96,194,186,1.00)", 0, 0, 0]
                            },
                            {
                                id: 'scene3Text',
                                type: 'text',
                                rect: ['162px', '-1183px', '824px', '849px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​Holly says that she might go two weeks without cutting but then might cut her arm three days in a row if she is bullied at school. Holly said she has never thought about killing herself or made any plans to, even though there are some days when she doesn’t want to get out of bed or go to school.</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">Holly said she enjoys school and gets very high marks but it has been difficult to make friends at the new school since she moved in with her grandmother. Holly said that she does have a group of positive friends from her old school and that sometimes when she feels like cutting her arm she will speak to one of them instead.</p>",
                                align: "left",
                                font: ['roboto, sans-serif', [40, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                                textStyle: ["", "", "", "", "none"],
                                filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0]
                            }]
                        },
                        {
                            id: 'scene2',
                            type: 'group',
                            rect: ['38px', '200px', '2028', '1658', 'auto', 'auto'],
                            c: [
                            {
                                id: 'boxAndBedGraphic',
                                type: 'image',
                                rect: ['2058px', '609px', '1884px', '1884px', 'auto', 'auto'],
                                cursor: 'pointer',
                                fill: ["rgba(0,0,0,0)",im+"boxAndBedGraphic.png",'0px','0px'],
                                filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(96,194,186,1.00)", 0, 0, 0]
                            },
                            {
                                id: 'scene2Text',
                                type: 'text',
                                rect: ['162px', '-900px', '879px', '542px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​<span style=\"color: rgb(0, 0, 0);\">​</span><span style=\"color: rgb(0, 0, 0); font-size: 40px;\">​</span>Holly meets with the school counselor on a few occasions but isn't open to sharing information at first. During the fourth meeting, Holly tells the counselor that she has been self-harming by</p><p style=\"margin: 0px;\">cutting her arm using a piece of glass that she keeps in a special box under her bed.</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">Holly tells the counselor that she doesn't want to die or seriously harm herself but that it relieves some pressure when she cuts her arm.</p><p style=\"margin: 0px;\"><span style=\"color: rgb(0, 0, 0); font-size: 40px;\"></span></p>",
                                align: "left",
                                font: ['roboto, sans-serif', [40, "px"], "rgba(0,0,0,1.00)", "400", "none", "normal", "break-word", "normal"],
                                textStyle: ["", "", "", "", "none"]
                            },
                            {
                                id: 'scene2BackButton',
                                type: 'group',
                                rect: ['0px', '1175px', '164', '128', 'auto', 'auto'],
                                cursor: 'pointer',
                                c: [
                                {
                                    id: 'scene2BackButtonBg',
                                    type: 'rect',
                                    rect: ['0px', '40px', '165px', '85px', 'auto', 'auto'],
                                    borderRadius: ["10px", "10px", "10px", "10px"],
                                    fill: ["rgba(179,113,113,1)"],
                                    stroke: [0,"rgb(0, 0, 0)","none"]
                                },
                                {
                                    id: 'scene2BackButtonText',
                                    type: 'text',
                                    rect: ['0px', '69px', '164px', '50px', 'auto', 'auto'],
                                    text: "<p style=\"margin: 0px; text-align: center;\">​<span style=\"color: rgb(255, 255, 255);\">​</span><span style=\"color: rgb(255, 255, 255); font-size: 24px;\">​</span><span style=\"color: rgb(255, 255, 255); font-size: 24px; font-weight: 700;\">​</span><span style=\"color: rgb(255, 255, 255); font-size: 24px; font-weight: 700; text-transform: uppercase;\">​back</span></p>",
                                    align: "left",
                                    font: ['roboto, sans-serif', [24, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                                    textStyle: ["", "", "", "", "none"]
                                }]
                            }]
                        },
                        {
                            id: 'scene1',
                            type: 'group',
                            rect: ['38px', '100', '1810', '1856', 'auto', 'auto'],
                            c: [
                            {
                                id: 'hollySceneBgLandscape',
                                type: 'image',
                                rect: ['-38px', '-100px', '2048px', '1536px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"hollySceneBgLandscape.png",'0px','0px']
                            },
                            {
                                id: 'scene1BackButton',
                                type: 'group',
                                rect: ['0px', '1275px', '164', '128', 'auto', 'auto'],
                                cursor: 'pointer',
                                c: [
                                {
                                    id: 'scene1BackButtonBg',
                                    type: 'rect',
                                    rect: ['0px', '40px', '165px', '85px', 'auto', 'auto'],
                                    borderRadius: ["10px", "10px", "10px", "10px"],
                                    fill: ["rgba(179,113,113,1.00)"],
                                    stroke: [0,"rgb(0, 0, 0)","none"]
                                },
                                {
                                    id: 'scene1BackButtonText',
                                    type: 'text',
                                    rect: ['0px', '69px', '164px', '50px', 'auto', 'auto'],
                                    text: "<p style=\"margin: 0px;\">​back</p>",
                                    align: "center",
                                    font: ['roboto, sans-serif', [24, "px"], "rgba(255,255,255,1)", "700", "none", "normal", "break-word", "normal"],
                                    textStyle: ["", "", "", "", "uppercase"]
                                }]
                            },
                            {
                                id: 'MrEricsson',
                                type: 'image',
                                rect: ['194px', '679px', '881px', '1178px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"MrEricsson.png",'0px','0px'],
                                filter: [0, 0, 1, 1, 0, 0, 0, 5, "rgba(0,0,0,0)", 0, 0, 0]
                            },
                            {
                                id: 'Holly',
                                type: 'image',
                                rect: ['887px', '738px', '667px', '890px', 'auto', 'auto'],
                                cursor: 'pointer',
                                fill: ["rgba(0,0,0,0)",im+"Holly.png",'0px','0px'],
                                filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(96,194,186,1.00)", 0, 0, 0],
                                transform: [[],[],[],['-1']]
                            },
                            {
                                id: 'scene1Title',
                                type: 'text',
                                rect: ['162px', '0px', '525px', '200px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​Holly</p>",
                                align: "left",
                                font: ['roboto, sans-serif', [150, "px"], "rgba(81,125,88,1.00)", "700", "none", "normal", "break-word", "normal"],
                                textStyle: ["", "", "", "", "uppercase"]
                            },
                            {
                                id: 'scene1Text',
                                type: 'text',
                                rect: ['162px', '200px', '1648px', '430px', 'auto', 'auto'],
                                opacity: '0',
                                text: "<p style=\"margin: 0px;\"><span style=\"font-size: 40px;\">The school has received a signed permission slip from Holly's legal guardian which allows her to&nbsp;</span>visit with the school counselor.</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">The school teacher, Mr. Ericson sent the permission slip to Holly's grandmother, her legal guardian, because he noticed that Holly had been more quiet and withdrawn in class and he was worried that she might be struggling. Mr. Ericson has known Holly for years because he used to live across the street from Holly’s mother and would sometimes bring over extra food or clothing from his own children to help.</p>",
                                align: "left",
                                font: ['roboto, sans-serif', [40, "px"], "rgba(0,0,0,1.00)", "400", "none", "normal", "break-word", "normal"],
                                textStyle: ["", "", "", "", "none"]
                            }]
                        },
                        {
                            id: 'restartButton',
                            type: 'group',
                            rect: ['38', '1294px', '165px', '85', 'auto', 'auto'],
                            cursor: 'pointer',
                            c: [
                            {
                                id: 'restartButtonBg',
                                type: 'rect',
                                rect: ['0px', '0px', '164px', '85px', 'auto', 'auto'],
                                borderRadius: ["10px", "10px", "10px", "10px"],
                                fill: ["rgba(74,80,115,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'restartButtonText',
                                type: 'text',
                                rect: ['0px', '29px', '164px', '50px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px; text-align: center;\">restart​<span style=\"font-family: roboto, sans-serif;\">​</span><span style=\"font-family: roboto, sans-serif; font-weight: 700;\">​</span><span style=\"font-family: roboto, sans-serif; font-weight: 700; text-decoration: underline;\">​</span><span style=\"font-family: roboto, sans-serif; font-weight: 700;\">​</span><span style=\"font-family: roboto, sans-serif; font-weight: 700; text-transform: uppercase;\">​</span></p>",
                                align: "center",
                                font: ['roboto, sans-serif', [24, ""], "rgba(255,255,255,1.00)", "700", "none", "", "break-word", "normal"],
                                textStyle: ["", "", "", "", "uppercase"]
                            }]
                        },
                        {
                            id: 'startScreen',
                            type: 'group',
                            rect: ['-468px', '-26', '2516', '1597', 'auto', 'auto'],
                            c: [
                            {
                                id: 'startScreenBg',
                                type: 'rect',
                                rect: ['468px', '26px', '2048px', '1536px', 'auto', 'auto'],
                                fill: ["rgba(226,247,231,1.00)"],
                                stroke: [0,"rgba(0,0,0,1)","none"]
                            },
                            {
                                id: 'HollyFront',
                                type: 'image',
                                rect: ['0px', '0px', '1597px', '1597px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"HollyFront.png",'0px','0px']
                            },
                            {
                                id: 'beginButton',
                                type: 'group',
                                rect: ['1419px', '954px', '703', '192', 'auto', 'auto'],
                                cursor: 'pointer',
                                c: [
                                {
                                    id: 'beginButtonBg',
                                    type: 'rect',
                                    rect: ['0px', '0px', '702px', '192px', 'auto', 'auto'],
                                    borderRadius: ["40px", "40px", "40px", "40px 40px"],
                                    fill: ["rgba(141,181,148,1.00)"],
                                    stroke: [0,"rgb(0, 0, 0)","none"],
                                    filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(96,194,186,1.00)", 0, 0, 0]
                                },
                                {
                                    id: 'beginButtonText',
                                    type: 'text',
                                    rect: ['1px', '44px', '702px', '104px', 'auto', 'auto'],
                                    text: "<p style=\"margin: 0px;\">​<span style=\"color: rgb(255, 255, 255); text-transform: uppercase; font-size: 80px;\">begin</span></p>",
                                    align: "center",
                                    font: ['roboto, sans-serif', [50, "px"], "rgba(0,0,0,1)", "700", "none", "normal", "break-word", "normal"],
                                    textStyle: ["", "", "", "", "none"]
                                }]
                            },
                            {
                                id: 'startScreenTitle',
                                type: 'text',
                                rect: ['1165px', '170px', '1210px', '470px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​<span style=\"text-transform: uppercase; font-family: roboto, sans-serif; color: rgb(141, 181, 148);\">holly</span></p>",
                                align: "center",
                                font: ['Arial, Helvetica, sans-serif', [357, "px"], "rgba(0,0,0,1)", "700", "none", "", "break-word", "normal"]
                            },
                            {
                                id: 'startScreenAge',
                                type: 'text',
                                rect: ['1170px', '573px', '1214px', '107px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">Age 11</p>",
                                align: "center",
                                font: ['roboto, sans-serif', [50, "px"], "rgba(0,0,0,1)", "700", "none", "normal", "break-word", "normal"],
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
                    duration: 23500,
                    autoPlay: true,
                    data: [
                        [
                            "eid95",
                            "left",
                            20000,
                            1000,
                            "easeInQuad",
                            "${scene5BackButton}",
                            '38px',
                            '-3000px'
                        ],
                        [
                            "eid119",
                            "top",
                            23488,
                            0,
                            "linear",
                            "${scenarioCompleteText}",
                            '550px',
                            '550px'
                        ],
                        [
                            "eid106",
                            "left",
                            17419,
                            81,
                            "easeOutQuad",
                            "${scene4}",
                            '38px',
                            '-3000px'
                        ],
                        [
                            "eid62",
                            "top",
                            13500,
                            1000,
                            "easeOutQuad",
                            "${scene4Text}",
                            '2000px',
                            '410px'
                        ],
                        [
                            "eid79",
                            "top",
                            16500,
                            1000,
                            "easeInQuad",
                            "${scene4Text}",
                            '410px',
                            '-3000px'
                        ],
                        [
                            "eid39",
                            "top",
                            10000,
                            1000,
                            "easeInQuad",
                            "${scene2}",
                            '200px',
                            '2000px'
                        ],
                        [
                            "eid97",
                            "left",
                            20000,
                            1000,
                            "easeInQuad",
                            "${scene5Text}",
                            '200px',
                            '-3000px'
                        ],
                        [
                            "eid15",
                            "filter.drop-shadow.blur",
                            4500,
                            500,
                            "linear",
                            "${Holly}",
                            '0.000000px',
                            '35px'
                        ],
                        [
                            "eid16",
                            "filter.drop-shadow.blur",
                            5000,
                            500,
                            "linear",
                            "${Holly}",
                            '35px',
                            '0px'
                        ],
                        [
                            "eid54",
                            "top",
                            10000,
                            1000,
                            "easeOutQuad",
                            "${scene3BackButton}",
                            '-583px',
                            '1192px'
                        ],
                        [
                            "eid75",
                            "top",
                            16500,
                            1000,
                            "easeInQuad",
                            "${hollyGradientBg}",
                            '0px',
                            '-3000px'
                        ],
                        [
                            "eid56",
                            "left",
                            12500,
                            1000,
                            "easeInQuad",
                            "${scene3}",
                            '38px',
                            '-3000px'
                        ],
                        [
                            "eid26",
                            "top",
                            6000,
                            2000,
                            "easeOutQuad",
                            "${boxAndBedGraphic}",
                            '609px',
                            '232px'
                        ],
                        [
                            "eid43",
                            "top",
                            10500,
                            1000,
                            "easeOutQuad",
                            "${scene3Text}",
                            '-1183px',
                            '108px'
                        ],
                        [
                            "eid22",
                            "width",
                            6000,
                            2000,
                            "easeOutQuad",
                            "${boxAndBedGraphic}",
                            '1884px',
                            '1426px'
                        ],
                        [
                            "eid88",
                            "top",
                            17500,
                            1500,
                            "easeOutQuad",
                            "${scene5Text}",
                            '-500px',
                            '150px'
                        ],
                        [
                            "eid3",
                            "filter.drop-shadow.blur",
                            0,
                            500,
                            "linear",
                            "${beginButtonBg}",
                            '0.000000px',
                            '35px'
                        ],
                        [
                            "eid4",
                            "filter.drop-shadow.blur",
                            500,
                            500,
                            "linear",
                            "${beginButtonBg}",
                            '35px',
                            '0px'
                        ],
                        [
                            "eid83",
                            "left",
                            16500,
                            2500,
                            "easeOutQuad",
                            "${hollyChurchBg}",
                            '-200px',
                            '0px'
                        ],
                        [
                            "eid18",
                            "left",
                            5500,
                            1000,
                            "easeInQuad",
                            "${scene1}",
                            '38px',
                            '-3000px'
                        ],
                        [
                            "eid58",
                            "top",
                            13000,
                            1000,
                            "easeOutQuad",
                            "${HollyGrandmaFront}",
                            '2000px',
                            '-30px'
                        ],
                        [
                            "eid77",
                            "top",
                            16500,
                            1000,
                            "easeInQuad",
                            "${HollyGrandmaFront}",
                            '-30px',
                            '-2000px'
                        ],
                        [
                            "eid9",
                            "top",
                            2000,
                            1500,
                            "easeOutBounce",
                            "${scene1Title}",
                            '-413px',
                            '0px'
                        ],
                        [
                            "eid69",
                            "filter.drop-shadow.blur",
                            15500,
                            500,
                            "easeOutQuad",
                            "${HollyGrandmaFront}",
                            '0px',
                            '25px'
                        ],
                        [
                            "eid70",
                            "filter.drop-shadow.blur",
                            16000,
                            500,
                            "easeOutQuad",
                            "${HollyGrandmaFront}",
                            '25px',
                            '0px'
                        ],
                        [
                            "eid20",
                            "height",
                            6000,
                            2000,
                            "easeOutQuad",
                            "${boxAndBedGraphic}",
                            '1884px',
                            '1426px'
                        ],
                        [
                            "eid90",
                            "filter.drop-shadow.blur",
                            19000,
                            500,
                            "easeOutQuad",
                            "${HollyFront2}",
                            '0px',
                            '35px'
                        ],
                        [
                            "eid91",
                            "filter.drop-shadow.blur",
                            19500,
                            500,
                            "easeOutQuad",
                            "${HollyFront2}",
                            '35px',
                            '0px'
                        ],
                        [
                            "eid104",
                            "left",
                            23000,
                            500,
                            "easeOutQuad",
                            "${scenarioCompleteText}",
                            '3000px',
                            '200px'
                        ],
                        [
                            "eid86",
                            "left",
                            16500,
                            2500,
                            "easeOutQuad",
                            "${HollyFront2}",
                            '900px',
                            '430px'
                        ],
                        [
                            "eid93",
                            "left",
                            20000,
                            1000,
                            "easeInQuad",
                            "${HollyFront2}",
                            '430px',
                            '-3000px'
                        ],
                        [
                            "eid48",
                            "filter.drop-shadow.color",
                            11500,
                            0,
                            "easeOutQuad",
                            "${boxGraphic}",
                            'rgba(96,194,186,1.00)',
                            'rgba(96,194,186,1.00)'
                        ],
                        [
                            "eid102",
                            "top",
                            22500,
                            1000,
                            "easeOutBounce",
                            "${scenarioCompleteTitle}",
                            '-370px',
                            '200px'
                        ],
                        [
                            "eid28",
                            "filter.blur",
                            6000,
                            2000,
                            "easeOutQuad",
                            "${boxAndBedGraphic}",
                            '10px',
                            '0px'
                        ],
                        [
                            "eid41",
                            "top",
                            10000,
                            1000,
                            "easeOutQuad",
                            "${boxGraphic}",
                            '-2079px',
                            '0px'
                        ],
                        [
                            "eid65",
                            "top",
                            13000,
                            1000,
                            "easeOutQuad",
                            "${scene4BackButton}",
                            '2000px',
                            '1375px'
                        ],
                        [
                            "eid81",
                            "top",
                            16500,
                            1000,
                            "easeInQuad",
                            "${scene4BackButton}",
                            '1375px',
                            '-3000px'
                        ],
                        [
                            "eid51",
                            "filter.drop-shadow.blur",
                            11500,
                            500,
                            "easeOutQuad",
                            "${boxGraphic}",
                            '0px',
                            '35px'
                        ],
                        [
                            "eid52",
                            "filter.drop-shadow.blur",
                            12000,
                            500,
                            "easeOutQuad",
                            "${boxGraphic}",
                            '35px',
                            '0px'
                        ],
                        [
                            "eid11",
                            "opacity",
                            2500,
                            1000,
                            "easeOutBounce",
                            "${scene1Text}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid32",
                            "top",
                            8000,
                            1000,
                            "easeOutQuad",
                            "${scene2Text}",
                            '-900px',
                            '0px'
                        ],
                        [
                            "eid34",
                            "filter.drop-shadow.blur",
                            9000,
                            500,
                            "easeOutQuad",
                            "${boxAndBedGraphic}",
                            '0px',
                            '35px'
                        ],
                        [
                            "eid35",
                            "filter.drop-shadow.blur",
                            9500,
                            500,
                            "easeOutQuad",
                            "${boxAndBedGraphic}",
                            '35px',
                            '0px'
                        ],
                        [
                            "eid6",
                            "left",
                            1000,
                            1000,
                            "easeInQuad",
                            "${startScreen}",
                            '-468px',
                            '-3000px'
                        ],
                        [
                            "eid24",
                            "left",
                            6000,
                            2000,
                            "easeOutQuad",
                            "${boxAndBedGraphic}",
                            '2058px',
                            '602px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("hollyModule2_edgeActions.js");
})("EDGE-9128925");
