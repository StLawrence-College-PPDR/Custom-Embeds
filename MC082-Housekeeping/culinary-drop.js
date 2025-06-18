jQuery(document).ready(function($) {
    
    var parent = $('#drag1');

    var stop = true;
    $(".drag-item").on("drag", function (e) {

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


    $(".drag-item").on("dragend", function (e) {
         stop = true;
    });

    var scroll = function (step) {
        var scrollY = $(window).scrollTop();
        $(window).scrollTop(scrollY + step);
        if (!stop) {
            setTimeout(function () { scroll(step) }, 20);
        }
    }
    
    if (parent.length > 0) {
        var drag_items = parent.find('.drag-item'),
            drop_items = parent.find('.drop');

        var updateScrollPos = function(e) {
            $('html').css('cursor', 'row-resize');
            $(window).scrollTop($(window).scrollTop() + (clickY - e.pageY));
        }

        var dragItem;

        function setUpEventListeners() {
            drag_items.each(function() {
                var thisDrag = $(this);
                thisDrag[0].addEventListener('dragstart', dragStart);
                thisDrag[0].addEventListener('drag', drag);
                thisDrag[0].addEventListener('dragend', dragEnd);

            });

            drop_items.each(function() {
                var thisDrop = $(this);
                thisDrop[0].addEventListener('dragenter', dragEnter);
                thisDrop[0].addEventListener('dragover', dragOver);
                thisDrop[0].addEventListener('dragleave', dragLeave);
                thisDrop[0].addEventListener('drop', drop);
            });
        }
        setUpEventListeners();

        //called as soon as the draggable starts being dragged
        //used to set up data and options
        function dragStart(event) {
            var drag = event.target;
            var dragID = drag.attr('id');
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
            $(drag).remove();

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
                $(drop).prepend(dataHTML);
                var drag = $(drop).find('.drag-item:first-child');
            }  else {
                // only have access to text (old browsers + IE)
                $(drop).prepend(dataHTML);
                var drag = $(drop).find('.drag-item:first-child');
            }
            
            // Begins checking the drag and drop ingredients, measurements, and cooking methods. 
            checkIngredient(drop, drag);
            
            event.preventDefault();
            event.stopPropagation();
            
        }
        
        function checkIngredient(drop, drag) {
            var dropValue = $(drop).attr('data-value'),
                
                imageValue = $(drag).attr('data-value'),
                imageAmount = $(drag).attr('data-amount'),
                imageOrder = $(drag).attr('data-order'),
                imageMeasure = $(drag).attr('data-measurement'),
                
                imageTemp = '',
                imageTime = '',
                
                amount = '',
                measure = '',
                time = '',
                temp = '',
                
                measureButton = $(drop).find( '.measurement-button' ),
                cookingButton = $(drop).find( '.cooking-button' ),
                
                dragID = $(drag).attr('id'),
                
                stage1 = $('.dropped').find('.drop[data-value="1"]'),
                stage2 = $('.dropped').find('.drop[data-value="2"]'),
                stage3 = $('.dropped').find('.drop[data-value="3"]'),
                stage4 = $('.dropped').find('.drop[data-value="4"]'),
                stage5 = $('.dropped').find('.drop[data-value="5"]'),
                stage6 = $('.dropped').find('.drop[data-value="6"]'),
                stage7 = $('.dropped').find('.drop[data-value="7"]'),
                
                st1 = "Roux",
                st2 = "Louisiana Holy Trinity",
                st3 = "Aromatics",
                st4 = "Broth",
                st5 = "Vegetables, Meat/Seafood, Herbs & Spices",
                st6 = "Season & Taste",
                st7 = "Garnish";
            
            // The drag and drop values are checked and matched. Each drag has its own drop field and selectors. This avoids propagation of values. If correct, continues to measurement and amount checking. Each change function collects the users inputted values for temperature, time, measurement, and amount. if = correct, else = wrong.
            
            if (imageValue == dropValue) {
                $('.dropped').append('<i class="fas fa-check"></i>');
                setInterval(correctAnimation,800);

                function correctAnimation(){ 
                    $('.dropped').find('i').fadeOut('fast');
                }
            
                $(drop).find('.measurement-selector').fadeIn();
                $(drop).find('.measurement-label').append($(drag).attr('alt'));

                $( '.amount-data' ).change(function () {
                    var categoryA = "";

                    $(drop).find( '.amount-data option:selected' ).each( function(){
                        categoryA += $( this ).text();
                    });

                    $(drop).find('.amount-placeholder').attr('data-value', categoryA);

                }).change();

                $( '.measure-data' ).change(function () {
                    var categoryM = '';

                    $(drop).find( '.measure-data option:selected' ).each( function(){
                        categoryM += $( this ).text();
                    });

                    $(drop).find('.measurement-placeholder').attr('data-value', categoryM);

                }).change();
                
                $( '.temperature-data' ).change(function () {
                    var categoryTemp = "";

                    $(drop).find( '.temperature-data option:selected' ).each( function(){
                        categoryTemp += $( this ).text();
                    });

                    $(drop).find('.temp-placeholder').attr('data-value', categoryTemp);

                }).change();

                $( '.time-data' ).change(function () {
                    var categoryTime = '';

                    $(drop).find( '.time-data option:selected' ).each( function(){
                        categoryTime += $( this ).text();
                    });

                    $(drop).find('.time-placeholder').attr('data-value', categoryTime);

                }).change();
                
                // The measure button collects the correct measurement and amount from the dropped item. It recognizes what cooking stage the user is in and then sets the correct cooking temperature and time. If not at the right cooking stage, drop and drag instance is removed.  if = correct, else = wrong.
                
                measureButton.click(function(){
                    measure = $(drop).find('.measurement-placeholder').attr('data-value'),
                    amount = $(drop).find('.amount-placeholder').attr('data-value');
                    
                    if (amount == imageAmount && measure == imageMeasure) {
                        $(drop).prepend('<i class="fas fa-check"></i>');
                        $('.material-item').has('#' + dragID).remove();
                        $(drag).attr('draggable', 'false');

                        $('.dropped').append('<i class="fas fa-check"></i>');
                        setInterval(correctAnimation,800);

                        function correctAnimation(){ 
                            $('.dropped').find('i').fadeOut('fast');
                        }
                        
                        switch (true) {
                            case (stage7.length  ==  1  && stage6.length == 0):
                                imageTime = "1 Min",
                                imageTemp = "Off";

                                $(drag).attr('data-time', imageTime);
                                $(drag).attr('data-temp', imageTemp);
                                $(drop).find('.cooking-selector').fadeIn();
                                $(drop).find('.cooking-label').append(st7);
                            break; 

                            case (stage6.length  ==  1  && stage5.length == 0):
                                imageTime = "1 Min",
                                imageTemp = "Simmer";

                                $(drag).attr('data-time', imageTime);
                                $(drag).attr('data-temp', imageTemp);
                                $(drop).find('.cooking-selector').fadeIn();
                                $(drop).find('.cooking-label').append(st6);
                            break; 

                            case (stage5.length  ==  1  && stage4.length == 0):
                                imageTime = "30 Min",
                                imageTemp = "Medium";

                                $(drag).attr('data-time', imageTime);
                                $(drag).attr('data-temp', imageTemp);
                                $(drop).find('.cooking-selector').fadeIn();
                                $(drop).find('.cooking-label').append(st5);
                            break; 

                            case (stage4.length  ==  1  && stage3.length == 0):
                                imageTime = "5 Min",
                                imageTemp = "Medium";

                                $(drag).attr('data-time', imageTime);
                                $(drag).attr('data-temp', imageTemp);
                                $(drop).find('.cooking-selector').fadeIn();
                                $(drop).find('.cooking-label').append(st4);
                            break; 

                            case (stage3.length  ==  1 && stage2.length == 0):
                                imageTime = "1 Min",
                                imageTemp = "Medium";

                                $(drag).attr('data-time', imageTime);
                                $(drag).attr('data-temp', imageTemp);
                                $(drop).find('.cooking-selector').fadeIn();
                                $(drop).find('.cooking-label').append(st3);
                            break;  

                            case (stage2.length  ==  1 && stage1.length == 0):
                                imageTime = "5 Min",
                                imageTemp = "Low";

                                $(drag).attr('data-time', imageTime);
                                $(drag).attr('data-temp', imageTemp);
                                $(drop).find('.cooking-selector').fadeIn();
                                $(drop).find('.cooking-label').append(st2);
                            break; 

                            case (stage1.length  ==  1):
                                imageTime = "5 Min",
                                imageTemp = "Low";

                                $(drag).attr('data-time', imageTime);
                                $(drag).attr('data-temp', imageTemp);
                                $(drop).find('.cooking-selector').fadeIn();
                                $(drop).find('.cooking-label').append(st1);
                            break; 

                            default:
                                $(drag).remove();
                                $(drop).remove();
                        }
                        
                        $(drop).find('.measurement-selector').fadeOut('fast');
                        $(drop).find('.measurement-label').empty();
                        
                    } else {
                        $(drop).prepend('<i class="fas fa-times"></i>');

                        $('.reset-message').fadeIn('slow');
                        $('.reset').prepend('<span class="remove-message"><h3 class="mb30">Oh no!</h3><p>That amount looks a little off.</p><button class="clean-button fit" data-dismiss="modal">Continue Cooking</button></span>');

                        $('.clean-button').click(function() {
                            $('.reset-message').fadeOut('slow');
                            $('.remove-message').remove();
                        });

                        setInterval(correctAnimation,800);

                        function correctAnimation(){
                            $(drop).find('i').fadeOut('fast');
                        }
                        
//                        $(drop).find('.drag-item').remove();
                    }
                });
                
                // The cooking button collects the users inputted time and temp values and compares it to the set stage values in the measurement function above. If not correct drag and drop instance is removed. if = correct, else = wrong.
                
                cookingButton.click(function(){
                    imageTime = $(drag).attr('data-time'),
                    imageTemp = $(drag).attr('data-temp'),
                    time = $(drop).find('.time-placeholder').attr('data-value'),
                    temp = $(drop).find('.temp-placeholder').attr('data-value');
                    
                    if (time == imageTime && temp == imageTemp) {

                        $('.dropped').append('<i class="fas fa-check"></i>');
                        setInterval(correctAnimation,800);

                        function correctAnimation(){ 
                            $('.dropped').find('i').fadeOut('fast');
                        }
                        
                        $(drop).find('.cooking-selector').fadeOut('fast');
                        $(drop).find('.cooking-label').empty();
                        
                        if (stage7.length  ==  1  && stage6.length == 0) {
                            $('.reset-message').fadeIn('slow');
                            $('.reset').prepend('<span class="remove-message"><h3 class="mb30">Woohoo!</h3><p>All of the guests are so pleased with Louisiana Shrimp Gumbo <i>Congrats, you have completed culinary basics. </i></p></span>');

                            $('.clean-button').click(function() {
                                $('.reset-message').fadeOut('slow');
                                $('.remove-message').remove();
                            });

                            $(drag).remove();
                            $(drop).remove();
                        } else {
                            $(drag).remove();
                            $(drop).remove();
                        }
                    } else {
                        $(drop).prepend('<i class="fas fa-times"></i>');

                        $('.reset-message').fadeIn('slow');
                        $('.reset').prepend('<span class="remove-message"><h3 class="mb30">Oh no!</h3><p>Woops! That is not the right temperature.</p><button class="clean-button fit" data-dismiss="modal">Continue Cooking</button></span>');

                        $('.clean-button').click(function() {
                            $('.reset-message').fadeOut('slow');
                            $('.remove-message').remove();
                        });

                        setInterval(correctAnimation,800);

                        function correctAnimation(){
                            $(drop).find('i').fadeOut('fast');
                        }
                        
                        $(drop).find('.drag-item').remove();
                    }

                });
                
            } else {
                
                $(drop).prepend('<i class="fas fa-times"></i>');

                $('.reset-message').fadeIn('slow');
                $('.reset').prepend('<span class="remove-message"><h3 class="mb30">Oh no!</h3><p>Hmm... that ingredient does not meet the requirements of your guests or perhaps you are adding it into the pot to soon...</p><button class="clean-button fit" data-dismiss="modal">Continue Cooking</button></span>');

                $('.clean-button').click(function() {
                    $('.reset-message').fadeOut('slow');
                    $('.remove-message').remove();
                });

                setInterval(correctAnimation,800);

                function correctAnimation(){
                    $(drop).find('i').fadeOut('fast');
                }
                
                $(drop).find('.drag-item').remove();
            }
        }
    }
});
