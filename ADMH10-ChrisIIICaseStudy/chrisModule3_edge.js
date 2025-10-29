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
                            id: 'question1',
                            type: 'group',
                            rect: ['0px', '0px', '2048', '1561', 'auto', 'auto'],
                            c: [
                            {
                                id: 'chrisDoorBg',
                                type: 'image',
                                rect: ['0', '0px', '2048px', '1536px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"chrisDoorBg.png",'0px','0px'],
                                filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0]
                            },
                            {
                                id: 'doorGraphic',
                                type: 'image',
                                rect: ['225px', '316px', '732px', '1245px', 'auto', 'auto'],
                                cursor: 'pointer',
                                fill: ["rgba(0,0,0,0)",im+"doorGraphic.png",'0px','0px'],
                                filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgb(96,193,186)", 0, 0, 0]
                            },
                            {
                                id: 'question1BackButton',
                                type: 'group',
                                rect: ['38', '1375px', '164', '128', 'auto', 'auto'],
                                cursor: 'pointer',
                                c: [
                                {
                                    id: 'question1BackButtonBg',
                                    type: 'rect',
                                    rect: ['0px', '40px', '164px', '85px', 'auto', 'auto'],
                                    borderRadius: ["10px", "10px", "10px", "10px"],
                                    fill: ["rgba(179,113,113,1.00)"],
                                    stroke: [0,"rgba(0,0,0,1)","none"]
                                },
                                {
                                    id: 'question1BackButtonText',
                                    type: 'text',
                                    rect: ['0px', '69px', '164px', '50px', 'auto', 'auto'],
                                    text: "<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-family: roboto, sans-serif;\">​</span><span style=\"font-family: roboto, sans-serif; color: rgb(255, 255, 255);\">​</span><span style=\"font-family: roboto, sans-serif; color: rgb(255, 255, 255); text-transform: uppercase;\">​back</span></p>",
                                    align: "left",
                                    font: ['roboto, sans-serif', [24, "px"], "rgba(0,0,0,1)", "700", "none", "normal", "break-word", "normal"],
                                    textStyle: ["", "", "", "", "none"]
                                }]
                            },
                            {
                                id: 'question1Text1',
                                type: 'text',
                                rect: ['3000px', '2000px', '750px', '745px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">When you meet with Chris for the first time you realize that he didn’t know that a worker would be coming to his home to meet with him. At first, he goes to his room and says he won’t talk to you and slams his door. Joanne tells Chris that if he does not meet with you, she will not give him the money she had agreed to give him to go to the movies with his friends later this weekend.</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">Chris mutters that he will talk to you but it won’t do any good and you have no idea what you’re talking about anyway.​</p>",
                                align: "left",
                                font: ['roboto, sans-serif', [40, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                                textStyle: ["", "", "", "", "none"]
                            },
                            {
                                id: 'question1Text2',
                                type: 'text',
                                rect: ['1245px', '-1000px', '755px', '157px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">Identify how you might respond to Chris:​</p>",
                                align: "center",
                                font: ['roboto, sans-serif', [60, "px"], "rgba(0,0,0,1)", "700", "none", "normal", "break-word", "normal"],
                                textStyle: ["", "", "", "", "none"]
                            },
                            {
                                id: 'question1ContinueButton',
                                type: 'group',
                                rect: ['2500px', '1162px', '488', '128', 'auto', 'auto'],
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
                                    rect: ['0px', '35px', '488px', '50px', 'auto', 'auto'],
                                    text: "<p style=\"margin: 0px;\">continue</p>",
                                    align: "center",
                                    font: ['roboto, sans-serif', [40, "px"], "rgba(0,0,0,1)", "700", "none", "normal", "break-word", "normal"],
                                    textStyle: ["", "", "", "", "uppercase"]
                                }]
                            }]
                        },
                        {
                            id: 'question1Answer3',
                            type: 'group',
                            rect: ['2500px', '978px', '805', '135', 'auto', 'auto'],
                            cursor: 'pointer',
                            c: [
                            {
                                id: 'question1Answer3Bg',
                                type: 'rect',
                                rect: ['0px', '0px', '805px', '135px', 'auto', 'auto'],
                                borderRadius: ["10px", "10px", "10px", "10px"],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgba(0,0,0,0.00)","none"]
                            },
                            {
                                id: 'question1Answer3Text',
                                type: 'text',
                                rect: ['0px', '38px', '805px', '60px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">Ask Joanne to sit down with you</p>",
                                align: "center",
                                font: ['roboto, sans-serif', [40, "px"], "rgba(0,0,0,1)", "700", "none", "normal", "break-word", "normal"],
                                textStyle: ["", "", "", "", "none"]
                            }]
                        },
                        {
                            id: 'question1Answer2',
                            type: 'group',
                            rect: ['2500px', '781px', '805', '135', 'auto', 'auto'],
                            cursor: 'pointer',
                            c: [
                            {
                                id: 'question1Answer2Bg',
                                type: 'rect',
                                rect: ['0px', '0px', '805px', '135px', 'auto', 'auto'],
                                borderRadius: ["10px", "10px", "10px", "10px"],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgba(0,0,0,0.00)","none"]
                            },
                            {
                                id: 'question1Answer2Text',
                                type: 'text',
                                rect: ['0px', '42px', '805px', '60px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​Decide not to meet with Chris that day</p>",
                                align: "center",
                                font: ['roboto, sans-serif', [40, "px"], "rgba(0,0,0,1)", "700", "none", "normal", "break-word", "normal"],
                                textStyle: ["", "", "", "", "none"]
                            }]
                        },
                        {
                            id: 'question1Answer1',
                            type: 'group',
                            rect: ['2500px', '586px', '805', '135', 'auto', 'auto'],
                            cursor: 'pointer',
                            c: [
                            {
                                id: 'question1Answer1Bg',
                                type: 'rect',
                                rect: ['0px', '0px', '805px', '135px', 'auto', 'auto'],
                                borderRadius: ["10px", "10px", "10px", "10px"],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgba(0,0,0,0.00)","none"]
                            },
                            {
                                id: 'question1Answer1Text',
                                type: 'text',
                                rect: ['0px', '43px', '805px', '50px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">Use a questioning approach<span style=\"font-size: 40px;\">​</span></p>",
                                align: "center",
                                font: ['roboto, sans-serif', [40, "px"], "rgba(0,0,0,1)", "700", "none", "normal", "break-word", "normal"],
                                textStyle: ["", "", "", "", "none"]
                            }]
                        },
                        {
                            id: 'response1',
                            type: 'group',
                            rect: ['2500px', '247px', '805', '1018', 'auto', 'auto'],
                            c: [
                            {
                                id: 'response1Bg',
                                type: 'rect',
                                rect: ['0px', '0px', '805px', '1018px', 'auto', 'auto'],
                                borderRadius: ["10px", "10px", "10px", "10px"],
                                fill: ["rgba(255,255,255,1)"],
                                stroke: [0,"rgba(0, 0, 0, 0)","none"]
                            },
                            {
                                id: 'response1Text',
                                type: 'text',
                                rect: ['46px', '51px', '715px', '918px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​<span style=\"font-weight: 700;\">Use a questioning approach to determine why Chris is reluctant to meet with you.</span></p><p style=\"margin: 0px;\"><span style=\"font-weight: 700;\">​</span></p><p style=\"margin: 0px;\">This would be an effective strategy because it would allow to hear from Chris about whether he is really resistant to your involvement or perhaps afraid of what your involvement might mean.</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">It’s also an opportunity to let him know that you are interested in knowing</p><p style=\"margin: 0px;\">about what he thinks is important. It will also allow you to ask questions to ensure you are providing a culturally sensitive approach.</p>",
                                align: "left",
                                font: ['roboto, sans-serif', [40, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                                textStyle: ["", "", "", "", "none"]
                            },
                            {
                                id: 'response1BackButton',
                                type: 'group',
                                rect: ['317px', '1054px', '489', '128', 'auto', 'auto'],
                                cursor: 'pointer',
                                c: [
                                {
                                    id: 'response1BackButtonBg',
                                    type: 'rect',
                                    rect: ['0px', '0px', '488px', '128px', 'auto', 'auto'],
                                    borderRadius: ["10px", "10px", "10px", "10px"],
                                    fill: ["rgba(167,230,182,1.00)"],
                                    stroke: [0,"rgba(0, 0, 0, 0)","none"]
                                },
                                {
                                    id: 'response1BackButtonText',
                                    type: 'text',
                                    rect: ['1px', '40px', '488px', '50px', 'auto', 'auto'],
                                    text: "<p style=\"margin: 0px;\">back​</p>",
                                    align: "center",
                                    font: ['roboto, sans-serif', [40, "px"], "rgba(0,0,0,1)", "700", "none", "normal", "break-word", "normal"],
                                    textStyle: ["", "", "", "", "uppercase"]
                                }]
                            }]
                        },
                        {
                            id: 'response2',
                            type: 'group',
                            rect: ['2500px', '146px', '805', '1160', 'auto', 'auto'],
                            c: [
                            {
                                id: 'response2Bg',
                                type: 'rect',
                                rect: ['0px', '0px', '805px', '1160px', 'auto', 'auto'],
                                borderRadius: ["10px", "10px", "10px", "10px"],
                                fill: ["rgba(255,255,255,1)"],
                                stroke: [0,"rgba(0, 0, 0, 0)","none"]
                            },
                            {
                                id: 'response2Text',
                                type: 'text',
                                rect: ['46px', '48px', '715px', '1063px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​<span style=\"font-weight: 700;\">Decide not to meet with Chris that day and instead plan for another time when he expects you.</span></p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">It is important to recognize that kids and teenagers have bad days just as adults do, and they don’t always want to talk. The risk in not having any contact in an initial meeting though is that</p><p style=\"margin: 0px;\">Chris may interpret that if he is agitated the next time you come to his home, he won’t have to meet with you.</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">Meeting with Chris – even if it’s only for a short visit – can be valuable for buildinga relationship. You can use that time to determine how he would be most comfortable meeting with you again (i.e. going out for a hot chocolate, meeting at school etc.)</p>",
                                align: "left",
                                font: ['roboto, sans-serif', [40, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                                textStyle: ["", "", "", "", "none"]
                            },
                            {
                                id: 'response2BackButton',
                                type: 'group',
                                rect: ['317px', '1201px', '489', '128', 'auto', 'auto'],
                                cursor: 'pointer',
                                c: [
                                {
                                    id: 'response2BackButtonBg',
                                    type: 'rect',
                                    rect: ['0px', '0px', '488px', '128px', 'auto', 'auto'],
                                    borderRadius: ["10px", "10px", "10px", "10px"],
                                    fill: ["rgba(167,230,182,1)"],
                                    stroke: [0,"rgba(0, 0, 0, 0)","none"]
                                },
                                {
                                    id: 'response2BackButtonText',
                                    type: 'text',
                                    rect: ['0px', '38px', '489px', '50px', 'auto', 'auto'],
                                    text: "<p style=\"margin: 0px;\">back</p>",
                                    align: "center",
                                    font: ['roboto, sans-serif', [40, "px"], "rgba(0,0,0,1)", "700", "none", "normal", "break-word", "normal"],
                                    textStyle: ["", "", "", "", "uppercase"]
                                }]
                            }]
                        },
                        {
                            id: 'response3',
                            type: 'group',
                            rect: ['2500px', '58', '805', '1295', 'auto', 'auto'],
                            c: [
                            {
                                id: 'response3Bg',
                                type: 'rect',
                                rect: ['0px', '0px', '805px', '1295px', 'auto', 'auto'],
                                borderRadius: ["10px", "10px", "10px", "10px"],
                                fill: ["rgba(255,255,255,1)"],
                                stroke: [0,"rgba(0, 0, 0, 0)","none"]
                            },
                            {
                                id: 'response3Text',
                                type: 'text',
                                rect: ['39px', '63px', '732px', '1172px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​<span style=\"font-weight: 700;\">Ask Joanne to sit down with you and Chris for your conversation.</span></p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">This is an effective strategy because it would allow you to ask Joanne questions to help to break the ice and Chris might feel more comfortable sharing if a safe person is present. If Joanne does join the conversation be mindful to ensure that the conversation does not become a list of complaints that Joanne has about Chris or a list of everything he is doing wrong.</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">As a facilitator, you can encourage a more strengths-based dialogue by asking questions such as: “tell me something that you and Chris like to do together that you both enjoy” or “tell me about a time that things that were going very well for your family? What did that look like? “</p>",
                                align: "left",
                                font: ['roboto, sans-serif', [40, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                                textStyle: ["", "", "", "", "none"]
                            },
                            {
                                id: 'response3BackButton',
                                type: 'group',
                                rect: ['317px', '1326px', '490', '128', 'auto', 'auto'],
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
                                    rect: ['1px', '39px', '489px', '50px', 'auto', 'auto'],
                                    text: "<p style=\"margin: 0px;\">back​</p>",
                                    align: "center",
                                    font: ['roboto, sans-serif', [40, "px"], "rgba(0,0,0,1)", "700", "none", "normal", "break-word", "normal"],
                                    textStyle: ["", "", "", "", "uppercase"]
                                }]
                            }]
                        },
                        {
                            id: 'chrisScene4',
                            type: 'group',
                            rect: ['0', '-3000px', '4648', '2288', 'auto', 'auto'],
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
                            rect: ['1212px', '-370px', '783px', '181px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​<span style=\"color: rgb(64, 83, 117);\">scenario complete</span></p>",
                            align: "center",
                            font: ['roboto, sans-serif', [150, "px"], "rgba(0,0,0,1)", "700", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "", "", "uppercase"]
                        },
                        {
                            id: 'scenarioCompleteText',
                            type: 'text',
                            rect: ['1305px', '568px', '554px', '113px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">Congratulations! You have completed this scenario.</p>",
                            align: "center",
                            font: ['roboto, sans-serif', [40, "px"], "rgba(0,0,0,1)", "700", "none", "normal", "break-word", "normal"],
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
                    duration: 34000,
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
                            "eid256",
                            "width",
                            34000,
                            0,
                            "easeOutQuad",
                            "${scenarioCompleteText}",
                            '554px',
                            '554px'
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
                            "eid220",
                            "top",
                            27000,
                            0,
                            "easeOutQuad",
                            "${response2}",
                            '146px',
                            '146px'
                        ],
                        [
                            "eid188",
                            "left",
                            23000,
                            1000,
                            "easeOutQuad",
                            "${question1ContinueButton}",
                            '2500px',
                            '1529px'
                        ],
                        [
                            "eid235",
                            "top",
                            30000,
                            1087,
                            "easeInQuad",
                            "${question1BackButton}",
                            '1375px',
                            '2500px'
                        ],
                        [
                            "eid242",
                            "top",
                            4000,
                            0,
                            "linear",
                            "${backButtonScene1}",
                            '1415px',
                            '1415px'
                        ],
                        [
                            "eid132",
                            "left",
                            21000,
                            93,
                            "linear",
                            "${doorGraphic}",
                            '225px',
                            '210px'
                        ],
                        [
                            "eid135",
                            "left",
                            21093,
                            282,
                            "linear",
                            "${doorGraphic}",
                            '210px',
                            '225px'
                        ],
                        [
                            "eid139",
                            "left",
                            22000,
                            0,
                            "easeOutQuad",
                            "${doorGraphic}",
                            '225px',
                            '225px'
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
                            "eid205",
                            "left",
                            24000,
                            1000,
                            "easeOutQuad",
                            "${response1}",
                            '2500px',
                            '1212px'
                        ],
                        [
                            "eid206",
                            "left",
                            25000,
                            1000,
                            "easeInQuad",
                            "${response1}",
                            '1212px',
                            '2500px'
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
                            "eid131",
                            "top",
                            21000,
                            93,
                            "linear",
                            "${doorGraphic}",
                            '316px',
                            '297px'
                        ],
                        [
                            "eid133",
                            "top",
                            21093,
                            282,
                            "linear",
                            "${doorGraphic}",
                            '297px',
                            '316px'
                        ],
                        [
                            "eid137",
                            "top",
                            22000,
                            0,
                            "easeOutQuad",
                            "${doorGraphic}",
                            '316px',
                            '316px'
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
                            "eid261",
                            "top",
                            34000,
                            0,
                            "easeOutQuad",
                            "${scenarioCompleteText}",
                            '568px',
                            '568px'
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
                            "eid258",
                            "left",
                            34000,
                            0,
                            "easeOutQuad",
                            "${scenarioCompleteTitle}",
                            '1212px',
                            '1212px'
                        ],
                        [
                            "eid130",
                            "height",
                            21000,
                            93,
                            "linear",
                            "${doorGraphic}",
                            '1245px',
                            '1275px'
                        ],
                        [
                            "eid134",
                            "height",
                            21093,
                            282,
                            "linear",
                            "${doorGraphic}",
                            '1275px',
                            '1245px'
                        ],
                        [
                            "eid138",
                            "height",
                            22000,
                            0,
                            "easeOutQuad",
                            "${doorGraphic}",
                            '1245px',
                            '1245px'
                        ],
                        [
                            "eid147",
                            "top",
                            22000,
                            1000,
                            "easeInQuad",
                            "${question1Text1}",
                            '380px',
                            '2000px'
                        ],
                        [
                            "eid161",
                            "left",
                            23000,
                            1000,
                            "easeOutQuad",
                            "${question1Answer3}",
                            '2500px',
                            '1212px'
                        ],
                        [
                            "eid190",
                            "top",
                            24000,
                            1000,
                            "easeInQuad",
                            "${question1ContinueButton}",
                            '1162px',
                            '3000px'
                        ],
                        [
                            "eid191",
                            "top",
                            25000,
                            1000,
                            "easeOutQuad",
                            "${question1ContinueButton}",
                            '3000px',
                            '1162px'
                        ],
                        [
                            "eid194",
                            "top",
                            26000,
                            1000,
                            "easeInQuad",
                            "${question1ContinueButton}",
                            '1162px',
                            '3000px'
                        ],
                        [
                            "eid195",
                            "top",
                            27000,
                            1000,
                            "easeOutQuad",
                            "${question1ContinueButton}",
                            '3000px',
                            '1162px'
                        ],
                        [
                            "eid196",
                            "top",
                            28000,
                            1000,
                            "easeInQuad",
                            "${question1ContinueButton}",
                            '1162px',
                            '3000px'
                        ],
                        [
                            "eid197",
                            "top",
                            29000,
                            1000,
                            "easeOutQuad",
                            "${question1ContinueButton}",
                            '3000px',
                            '1162px'
                        ],
                        [
                            "eid201",
                            "top",
                            30000,
                            1000,
                            "easeInQuad",
                            "${question1ContinueButton}",
                            '1162px',
                            '3000px'
                        ],
                        [
                            "eid129",
                            "width",
                            21000,
                            93,
                            "linear",
                            "${doorGraphic}",
                            '732px',
                            '762px'
                        ],
                        [
                            "eid136",
                            "width",
                            21093,
                            282,
                            "linear",
                            "${doorGraphic}",
                            '762px',
                            '732px'
                        ],
                        [
                            "eid140",
                            "width",
                            22000,
                            0,
                            "easeOutQuad",
                            "${doorGraphic}",
                            '732px',
                            '732px'
                        ],
                        [
                            "eid171",
                            "top",
                            24000,
                            1000,
                            "easeInQuad",
                            "${question1Answer1}",
                            '586px',
                            '3000px'
                        ],
                        [
                            "eid172",
                            "top",
                            25000,
                            1000,
                            "easeOutQuad",
                            "${question1Answer1}",
                            '3000px',
                            '586px'
                        ],
                        [
                            "eid175",
                            "top",
                            26000,
                            1000,
                            "easeInQuad",
                            "${question1Answer1}",
                            '586px',
                            '3000px'
                        ],
                        [
                            "eid178",
                            "top",
                            27000,
                            1000,
                            "easeOutQuad",
                            "${question1Answer1}",
                            '3000px',
                            '586px'
                        ],
                        [
                            "eid181",
                            "top",
                            28000,
                            1000,
                            "easeInQuad",
                            "${question1Answer1}",
                            '586px',
                            '3000px'
                        ],
                        [
                            "eid184",
                            "top",
                            29000,
                            1000,
                            "easeOutQuad",
                            "${question1Answer1}",
                            '3000px',
                            '586px'
                        ],
                        [
                            "eid198",
                            "top",
                            30000,
                            1000,
                            "easeInQuad",
                            "${question1Answer1}",
                            '586px',
                            '3000px'
                        ],
                        [
                            "eid241",
                            "top",
                            4000,
                            0,
                            "linear",
                            "${restartButton}",
                            '1294px',
                            '1294px'
                        ],
                        [
                            "eid260",
                            "width",
                            34000,
                            0,
                            "easeOutQuad",
                            "${scenarioCompleteTitle}",
                            '783px',
                            '783px'
                        ],
                        [
                            "eid222",
                            "left",
                            28000,
                            1000,
                            "easeOutQuad",
                            "${response3}",
                            '2500px',
                            '1212px'
                        ],
                        [
                            "eid223",
                            "left",
                            29000,
                            1000,
                            "easeInQuad",
                            "${response3}",
                            '1212px',
                            '2500px'
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
                            "eid208",
                            "left",
                            26000,
                            1000,
                            "easeOutQuad",
                            "${response2}",
                            '2500px',
                            '1212px'
                        ],
                        [
                            "eid209",
                            "left",
                            27000,
                            1000,
                            "easeInQuad",
                            "${response2}",
                            '1212px',
                            '2500px'
                        ],
                        [
                            "eid144",
                            "filter.drop-shadow.blur",
                            21000,
                            500,
                            "easeOutQuad",
                            "${doorGraphic}",
                            '0px',
                            '35px'
                        ],
                        [
                            "eid145",
                            "filter.drop-shadow.blur",
                            21500,
                            500,
                            "easeOutQuad",
                            "${doorGraphic}",
                            '35px',
                            '0px'
                        ],
                        [
                            "eid229",
                            "filter.drop-shadow.color",
                            31000,
                            1,
                            "easeOutQuad",
                            "${doorGraphic}",
                            'rgb(96,193,186)',
                            'rgba(96,193,186,0.00)'
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
                            "eid240",
                            "left",
                            33000,
                            1000,
                            "easeOutQuad",
                            "${scenarioCompleteText}",
                            '3000px',
                            '1305px'
                        ],
                        [
                            "eid237",
                            "top",
                            32500,
                            1000,
                            "easeOutBounce",
                            "${scenarioCompleteTitle}",
                            '-370px',
                            '110px'
                        ],
                        [
                            "eid150",
                            "top",
                            22000,
                            1000,
                            "easeOutQuad",
                            "${question1Text2}",
                            '-1000px',
                            '50px'
                        ],
                        [
                            "eid218",
                            "top",
                            26000,
                            1000,
                            "easeInQuad",
                            "${question1Text2}",
                            '50px',
                            '-300px'
                        ],
                        [
                            "eid219",
                            "top",
                            27000,
                            1000,
                            "easeOutQuad",
                            "${question1Text2}",
                            '-300px',
                            '50px'
                        ],
                        [
                            "eid224",
                            "top",
                            28000,
                            1000,
                            "easeInQuad",
                            "${question1Text2}",
                            '50px',
                            '-300px'
                        ],
                        [
                            "eid225",
                            "top",
                            29000,
                            1000,
                            "easeOutQuad",
                            "${question1Text2}",
                            '-300px',
                            '50px'
                        ],
                        [
                            "eid203",
                            "top",
                            30000,
                            1000,
                            "easeInQuad",
                            "${question1Text2}",
                            '50px',
                            '3000px'
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
                            "eid169",
                            "top",
                            24000,
                            1000,
                            "easeInQuad",
                            "${question1Answer2}",
                            '781px',
                            '3000px'
                        ],
                        [
                            "eid173",
                            "top",
                            25000,
                            1000,
                            "easeOutQuad",
                            "${question1Answer2}",
                            '3000px',
                            '781px'
                        ],
                        [
                            "eid176",
                            "top",
                            26000,
                            1000,
                            "easeInQuad",
                            "${question1Answer2}",
                            '781px',
                            '3000px'
                        ],
                        [
                            "eid179",
                            "top",
                            27000,
                            1000,
                            "easeOutQuad",
                            "${question1Answer2}",
                            '3000px',
                            '781px'
                        ],
                        [
                            "eid182",
                            "top",
                            28000,
                            1000,
                            "easeInQuad",
                            "${question1Answer2}",
                            '781px',
                            '3000px'
                        ],
                        [
                            "eid185",
                            "top",
                            29000,
                            1000,
                            "easeOutQuad",
                            "${question1Answer2}",
                            '3000px',
                            '781px'
                        ],
                        [
                            "eid199",
                            "top",
                            30000,
                            1000,
                            "easeInQuad",
                            "${question1Answer2}",
                            '781px',
                            '3000px'
                        ],
                        [
                            "eid170",
                            "top",
                            24000,
                            1000,
                            "easeInQuad",
                            "${question1Answer3}",
                            '978px',
                            '3000px'
                        ],
                        [
                            "eid174",
                            "top",
                            25000,
                            1000,
                            "easeOutQuad",
                            "${question1Answer3}",
                            '3000px',
                            '978px'
                        ],
                        [
                            "eid177",
                            "top",
                            26000,
                            1000,
                            "easeInQuad",
                            "${question1Answer3}",
                            '978px',
                            '3000px'
                        ],
                        [
                            "eid180",
                            "top",
                            27000,
                            1000,
                            "easeOutQuad",
                            "${question1Answer3}",
                            '3000px',
                            '978px'
                        ],
                        [
                            "eid183",
                            "top",
                            28000,
                            1000,
                            "easeInQuad",
                            "${question1Answer3}",
                            '978px',
                            '3000px'
                        ],
                        [
                            "eid186",
                            "top",
                            29000,
                            1000,
                            "easeOutQuad",
                            "${question1Answer3}",
                            '3000px',
                            '978px'
                        ],
                        [
                            "eid200",
                            "top",
                            30000,
                            1000,
                            "easeInQuad",
                            "${question1Answer3}",
                            '978px',
                            '3000px'
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
                            "eid126",
                            "top",
                            17500,
                            1000,
                            "easeInQuad",
                            "${chrisScene4}",
                            '-752px',
                            '-3000px'
                        ],
                        [
                            "eid162",
                            "left",
                            23000,
                            1000,
                            "easeOutQuad",
                            "${question1Answer1}",
                            '2500px',
                            '1212px'
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
                            "eid255",
                            "height",
                            34000,
                            0,
                            "easeOutQuad",
                            "${scenarioCompleteText}",
                            '113px',
                            '113px'
                        ],
                        [
                            "eid160",
                            "left",
                            23000,
                            1000,
                            "easeOutQuad",
                            "${question1Answer2}",
                            '2500px',
                            '1212px'
                        ],
                        [
                            "eid128",
                            "left",
                            18500,
                            1000,
                            "easeOutQuad",
                            "${question1Text1}",
                            '3000px',
                            '1245px'
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
                            rect: ['0px', '0px', '163px', '85px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'backButtonBg',
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
                            rect: ['2px', '32px', '163px', '63px', 'auto', 'auto']
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
                            type: 'text',
                            id: 'restartButtonText',
                            text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"color: rgb(255, 255, 255);\">​</span><span style=\"color: rgb(255, 255, 255); font-family: roboto, sans-serif;\">​</span><span style=\"color: rgb(255, 255, 255); font-family: roboto, sans-serif; text-transform: uppercase;\">​</span><span style=\"color: rgb(255, 255, 255); font-family: roboto, sans-serif; text-transform: uppercase; font-weight: 700;\">​restart</span></p>',
                            rect: ['0px', '28px', '160px', '44px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal']
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

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("chrisModule3_edgeActions.js");
})("EDGE-1360279075");
