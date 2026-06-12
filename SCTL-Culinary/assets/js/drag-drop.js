jQuery(document).ready(function($) {
    
    var messageNotification = $(".interactive-pool").find('.message-container'),
        dataParent = '',
        parent = '';
    
        messageNotification.append('<div class="message-modal"><i class="fas fa-layer-group" aria-hidden="true"></i><h3>Drag and Drop Diagram</h3><p>Drag each of the following terms into the correct location (dashed boxes) in the diagram.</p><button class="begin-button">Start Activity</button></div>');

        $(".interactive-pool").addClass('notificiation-visible');
    
        var stop = true;
        $(".drag").on("drag", function (e) {

            stop = true;

            if (e.originalEvent.clientY < 150) {
                stop = false;
                scroll(-1)
            }

            if (e.originalEvent.clientY > ($(window).height() - 150)) {
                stop = false;
                scroll(1)
            }

        });
    
    
        $(".drag").on("dragend", function (e) {
             stop = true;
        });

        var scroll = function (step) {
            var scrollY = $(window).scrollTop();
            $(window).scrollTop(scrollY + step);
            if (!stop) {
                setTimeout(function () { scroll(step) }, 20);
            }
        }
    
        $('.begin-button').on('click', function() {
            var buttonParent = $(this).closest('.interactive-pool'),
                dataParent = buttonParent.attr('data-value');

            if (dataParent == '1') {
                var parent = $('#drag1');
                console.log(parent);
                console.log('First Activity');

            } else if (dataParent == '2') {
                var parent = $('#drag2');
                console.log(parent);
                console.log('Second Activity');

            } else if (dataParent == '3') {
                var parent = $('#drag3');
                console.log(parent);
                console.log('Third Activity');

            } else {
                var parent = "";
                console.log(parent);
                console.log('Default');
                console.log("Parent is not defined.");
            }
            
            if (dataParent.length > 0) {
                var drag_items = parent.find('.drag-drop .drag'),
                    drop_items = parent.find('.drag-drop .drop'),
                    messageNotification = buttonParent.find('.message-container');
                
                buttonParent.removeClass('notificiation-visible');
                messageNotification.empty();
            

                var updateScrollPos = function(e) {
                    $('html').css('cursor', 'row-resize');
                    $(window).scrollTop($(window).scrollTop() + (clickY - e.pageY));
                }
                
//                var nodeList = document.getElementsByClassName('drag');
// 
//                for(var i=0;i<nodeList.length;i++) {
//                    var obj = nodeList[i];
//
//                    obj.addEventListener('touchmove', function(event) {
//                        var touch = event.targetTouches[0];
//                        $(this).addClass('draggable');
//                        $(this).css('left', touch.clientX - touch.radiusX - $(this).width() + 'px');
//                        $(this).css('top', touch.screenY - touch.radiusY - $(this).height() + 'px');
//                        event.preventDefault();
//
//                    }, false);
//
//
//                    obj.addEventListener('touchstart', function(event) {
//                        var touch = event.targetTouches[0];
//                        $(this).addClass('draggable');
//                        $(this).css('left', touch.clientX - touch.radiusX - $(this).width() + 'px');
//                        $(this).css('top', touch.clientY - touch.radiusY - $(this).height() + 'px');
//                        event.preventDefault();
//
//                    }, false);
//                }
                
                var dragItem;

                function setUpEventListeners() {
                    drag_items.each(function() {
                        var thisDrag = $(this);
                        thisDrag[0].addEventListener('dragstart', dragStart);
                        thisDrag[0].addEventListener('drag', drag);
                        thisDrag[0].addEventListener('dragend', dragEnd);
                        
//                        thisDrag[0].addEventListener('touchmove', dragStart);
//                        thisDrag[0].addEventListener('touchstart', dragStart);
//                        thisDrag[0].addEventListener('touchend', dragEnd);
                        
                    });

                    drop_items.each(function() {
                        var thisDrop = $(this);

                        thisDrop[0].addEventListener('dragenter', dragEnter);
                        thisDrop[0].addEventListener('dragover', dragOver);
                        thisDrop[0].addEventListener('dragleave', dragLeave);
                        thisDrop[0].addEventListener('drop', drop);
                        
//                        thisDrop[0].addEventListener('touchcancel', drop);
                    });
                }
                setUpEventListeners();

                //called as soon as the draggable starts being dragged
                //used to set up data and options
                function dragStart(event) {
                    var drag = event.target;
                    dragItem = event.target;
                    
                    console.log(event);
                    
                    //set the effectAllowed for the drag item
                    event.dataTransfer.effectAllowed = 'copy';
                    
                    var imageSrc = $(dragItem).prop('src');
                    var imageHTML = $(dragItem).prop('outerHTML');

                    //check for IE (it supports only 'text' or 'URL')
                    try {
                      event.dataTransfer.setData('text/uri-list', imageSrc);
                      event.dataTransfer.setData('text/html', imageHTML);
                    } catch (e) {
                      event.dataTransfer.setData('text', imageSrc);
                    }
                    
                    $(drag).addClass('drag-active');
                    
//                    var touch = event.targetTouches[0];
//                    $(this).addClass('draggable');
//                    $(this).css('left', touch.clientX - touch.radiusX - $(this).width() + 'px');
//                    $(this).css('top', touch.clientY - touch.radiusY - $(this).height() + 'px');
                }

                //called as the draggable enters a droppable 
                //needs to return false to make droppable area valid
                function dragEnter(event) {
                    var drop = this;
                    
                    //set the drop effect for this zone
                    event.dataTransfer.dropEffect = 'copy';
                    $(drop).addClass('drop-active');

                    event.preventDefault();
                    event.stopPropagation();
                }

                //called continually while the draggable is over a droppable 
                //needs to return false to make droppable area valid
                function dragOver(event) {
                    var drop = this;

                    //set the drop effect for this zone
                    event.dataTransfer.dropEffect = 'copy';
                    $(drop).addClass('drop-active');

                    event.preventDefault();
                    event.stopPropagation();
                }

                //called when the draggable was inside a droppable but then left
                function dragLeave(event) {
                    var drop = this;
                    $(drop).removeClass('drop-active');
                    
                }

                //called continually as the draggable is dragged
                function drag(event) {
                }

                //called when the draggable has been released (either on droppable or not)
                //may be called on invalid or valid drop
                function dragEnd(event) {
                    var drag = this;
                    $(drag).removeClass('drag-active');
                }

                //called when draggable is dropped on droppable 
                //final process, used to copy data or update UI on successful drop
                function drop(event) {
                    drop = this;
                    $(drop).removeClass('drop-active');
                    
                    var dataList, dataHTML, dataText;

                    //collect our data (based on what browser support we have)
                    try {
                      dataList = event.dataTransfer.getData('text/uri-list');
                      dataHTML = event.dataTransfer.getData('text/html');
                    } catch (e) {;
                      dataText = event.dataTransfer.getData('text');
                    }

                    //we have access to the HTML
                    if (dataHTML) {
                        $(drop).find('.drag-content').empty();
                        $(drop).find('.drop-content').hide();
                        $(drop).find('.drag-content').prepend(dataHTML);
                        var drag = $(drop).find('.drag');
                    }  else {
                        // only have access to text (old browsers + IE)
                        $(drop).find('.drag-content').empty();
                        $(drop).find('.drop-content').hide();
                        $(drop).find('.drag-content').prepend($(dragItem).clone());
                        var drag = $(drop).find('.drag');
                    }

                    //check if this element is in the right spot
                    checkCorrectDrop(drop, drag);
                    //see if the final image is complete
                    checkCorrectFinalImage();

                    event.preventDefault();
                    event.stopPropagation();
                }

                //check to see if this dropped item is in the correct spot
                function checkCorrectDrop(drop, drag) {
                    //check if this drop is correct
                    var imageValue = $(drag).attr('data-value');
                    var dropValue = $(drop).attr('data-value');

                    if (imageValue == dropValue) {
                        $(drop).removeClass('incorrect').addClass('correct');
                        $(drop).addClass('filled');
                        //make the dropped item no longer draggable (removing the attr)
                        $(drag).attr('draggable', 'false');

                        //hide the original drag item (set during dragStart), we don't need it anymore
                        //      $(dragItem).hide();

                    } else {
                        $(drop).removeClass('correct').addClass('incorrect');
                        $(drop).addClass('filled');
                    }
                }

                //checks to see if the dropped images are in the correct locations
                function checkCorrectFinalImage(){
                    var answeredItems = drop_items.filter('.filled'),
                        correctItems = drop_items.filter('.correct'),
                        incorrectItems = drop_items.filter('.incorrect');

                    if (answeredItems.length == drop_items.length){

                        if (correctItems.length == drop_items.length || correctItems.length >= incorrectItems.length) {
                            messageNotification.empty();

                            messageNotification.append('<div class="message-modal"><i class="fa fa-check-circle" aria-hidden="true"></i><h3>Great Job!</h3><p>You have successfully matched all items.</p><button class="reset-button">Try Again</button></div>');

                            buttonParent.addClass('notificiation-visible').fadeIn();

                            $('.reset-button').on('click', function() {
                                buttonParent.removeClass('notificiation-visible');
                                drop_items.removeClass('correct incorrect');
                                drop_items.removeClass('filled');
                                drop_items.find('.drag-content').empty();
                                drop_items.find('.drop-content').show();
                                messageNotification.empty();
                            });
                        } else {
                        }

                        if (incorrectItems.length == drop_items.length || incorrectItems.length >= correctItems.length ) {
                            messageNotification.empty();

                            messageNotification.append('<div class="message-modal"><i class="fas fa-times-circle" aria-hidden="true"></i></i><h3>Oh No!</h3><p>You have unsuccessfully matched all the items.</p><button class="reset-button">Try Again</button></div>');

                            buttonParent.addClass('notificiation-visible').fadeIn();

                            $('.reset-button').on('click', function() {
                                buttonParent.removeClass('notificiation-visible');
                                drop_items.removeClass('correct incorrect');
                                drop_items.removeClass('filled');
                                drop_items.find('.drag-content').empty();
                                drop_items.find('.drop-content').show();
                                messageNotification.empty();
                            });
                        } else {
                        }

                        // check for ie
                        var userAgent = window.navigator.userAgent;

                        if (userAgent.indexOf('MSIE') != -1) {
                            $('.ie-message').show();
                        }
                    }

                }
            }
        });
    });
