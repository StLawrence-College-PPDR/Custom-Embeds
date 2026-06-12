
let currentDroppable = null;

   
Obj1.onmousedown = function(event) {

      let shiftX = event.clientX - Obj1.getBoundingClientRect().left;
      let shiftY = event.clientY - Obj1.getBoundingClientRect().top;

      Obj1.style.position = 'absolute';
      Obj1.style.zIndex = 1000;
      document.body.append(Obj1);

      moveAt(event.pageX, event.pageY);

      function moveAt(pageX, pageY) {
        Obj1.style.left = pageX - shiftX + 'px';
        Obj1.style.top = pageY - shiftY + 'px';
      }

      function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);

        Obj1.hidden = true;
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        Obj1.hidden = false;

        if (!elemBelow) return;

        let droppableBelow = elemBelow.closest('.droppable');
        if (currentDroppable != droppableBelow) {
          if (currentDroppable) { // null when we were not over a droppable before this event
            leaveDroppable(currentDroppable);
          }
          currentDroppable = droppableBelow;
          if (currentDroppable) { // null if we're not coming over a droppable now
            // (maybe just left the droppable)
            enterDroppable(currentDroppable);
          }
        }
      }

      document.addEventListener('mousemove', onMouseMove);

      Obj1.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        Obj1.onmouseup = null;
      };
    };

Obj2.onmousedown = function(event) {

      let shiftX = event.clientX - Obj2.getBoundingClientRect().left;
      let shiftY = event.clientY - Obj2.getBoundingClientRect().top;

      Obj2.style.position = 'absolute';
      Obj2.style.zIndex = 1000;
      document.body.append(Obj2);

      moveAt(event.pageX, event.pageY);

      function moveAt(pageX, pageY) {
        Obj2.style.left = pageX - shiftX + 'px';
        Obj2.style.top = pageY - shiftY + 'px';
      }

      function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);

        Obj2.hidden = true;
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        Obj2.hidden = false;

        if (!elemBelow) return;

        let droppableBelow = elemBelow.closest('.droppable');
        if (currentDroppable != droppableBelow) {
          if (currentDroppable) { // null when we were not over a droppable before this event
            leaveDroppable(currentDroppable);
          }
          currentDroppable = droppableBelow;
          if (currentDroppable) { // null if we're not coming over a droppable now
            // (maybe just left the droppable)
            enterDroppable(currentDroppable);
          }
        }
      }

      document.addEventListener('mousemove', onMouseMove);

      Obj2.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        Obj2.onmouseup = null;
      };
    };

Obj3.onmousedown = function(event) {

      let shiftX = event.clientX - Obj3.getBoundingClientRect().left;
      let shiftY = event.clientY - Obj3.getBoundingClientRect().top;

      Obj3.style.position = 'absolute';
      Obj3.style.zIndex = 1000;
      document.body.append(Obj3);

      moveAt(event.pageX, event.pageY);

      function moveAt(pageX, pageY) {
        Obj3.style.left = pageX - shiftX + 'px';
        Obj3.style.top = pageY - shiftY + 'px';
      }

      function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);

        Obj3.hidden = true;
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        Obj3.hidden = false;

        if (!elemBelow) return;

        let droppableBelow = elemBelow.closest('.droppable');
        if (currentDroppable != droppableBelow) {
          if (currentDroppable) { // null when we were not over a droppable before this event
            leaveDroppable(currentDroppable);
          }
          currentDroppable = droppableBelow;
          if (currentDroppable) { // null if we're not coming over a droppable now
            // (maybe just left the droppable)
            enterDroppable(currentDroppable);
          }
        }
      }

      document.addEventListener('mousemove', onMouseMove);

      Obj3.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        Obj3.onmouseup = null;
      };
    };
Obj4.onmousedown = function(event) {

      let shiftX = event.clientX - Obj4.getBoundingClientRect().left;
      let shiftY = event.clientY - Obj4.getBoundingClientRect().top;

      Obj4.style.position = 'absolute';
      Obj4.style.zIndex = 1000;
      document.body.append(Obj4);

      moveAt(event.pageX, event.pageY);

      function moveAt(pageX, pageY) {
        Obj4.style.left = pageX - shiftX + 'px';
        Obj4.style.top = pageY - shiftY + 'px';
      }

      function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);

        Obj4.hidden = true;
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        Obj4.hidden = false;

        if (!elemBelow) return;

        let droppableBelow = elemBelow.closest('.droppable');
        if (currentDroppable != droppableBelow) {
          if (currentDroppable) { // null when we were not over a droppable before this event
            leaveDroppable(currentDroppable);
          }
          currentDroppable = droppableBelow;
          if (currentDroppable) { // null if we're not coming over a droppable now
            // (maybe just left the droppable)
            enterDroppable(currentDroppable);
          }
        }
      }

      document.addEventListener('mousemove', onMouseMove);

      Obj4.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        Obj4.onmouseup = null;
      };
    };
Obj5.onmousedown = function(event) {

      let shiftX = event.clientX - Obj5.getBoundingClientRect().left;
      let shiftY = event.clientY - Obj5.getBoundingClientRect().top;

      Obj5.style.position = 'absolute';
      Obj5.style.zIndex = 1000;
      document.body.append(Obj5);

      moveAt(event.pageX, event.pageY);

      function moveAt(pageX, pageY) {
        Obj5.style.left = pageX - shiftX + 'px';
        Obj5.style.top = pageY - shiftY + 'px';
      }

      function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);

        Obj5.hidden = true;
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        Obj5.hidden = false;

        if (!elemBelow) return;

        let droppableBelow = elemBelow.closest('.droppable');
        if (currentDroppable != droppableBelow) {
          if (currentDroppable) { // null when we were not over a droppable before this event
            leaveDroppable(currentDroppable);
          }
          currentDroppable = droppableBelow;
          if (currentDroppable) { // null if we're not coming over a droppable now
            // (maybe just left the droppable)
            enterDroppable(currentDroppable);
          }
        }
      }

      document.addEventListener('mousemove', onMouseMove);

      Obj5.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        Obj5.onmouseup = null;
      };
    };
 Obj6.onmousedown = function(event) {

      let shiftX = event.clientX - Obj6.getBoundingClientRect().left;
      let shiftY = event.clientY - Obj6.getBoundingClientRect().top;

      Obj6.style.position = 'absolute';
      Obj6.style.zIndex = 1000;
      document.body.append(Obj6);

      moveAt(event.pageX, event.pageY);

      function moveAt(pageX, pageY) {
        Obj6.style.left = pageX - shiftX + 'px';
        Obj6.style.top = pageY - shiftY + 'px';
      }

      function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);

        Obj6.hidden = true;
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        Obj6.hidden = false;

        if (!elemBelow) return;

        let droppableBelow = elemBelow.closest('.droppable');
        if (currentDroppable != droppableBelow) {
          if (currentDroppable) { // null when we were not over a droppable before this event
            leaveDroppable(currentDroppable);
          }
          currentDroppable = droppableBelow;
          if (currentDroppable) { // null if we're not coming over a droppable now
            // (maybe just left the droppable)
            enterDroppable(currentDroppable);
          }
        }
      }

      document.addEventListener('mousemove', onMouseMove);

      Obj6.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        Obj6.onmouseup = null;
      };
    };


 Obj7.onmousedown = function(event) {

      let shiftX = event.clientX - Obj7.getBoundingClientRect().left;
      let shiftY = event.clientY - Obj7.getBoundingClientRect().top;

      Obj7.style.position = 'absolute';
      Obj7.style.zIndex = 1000;
      document.body.append(Obj7);

      moveAt(event.pageX, event.pageY);

      function moveAt(pageX, pageY) {
        Obj7.style.left = pageX - shiftX + 'px';
        Obj7.style.top = pageY - shiftY + 'px';
      }

      function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);

        Obj7.hidden = true;
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        Obj7.hidden = false;

        if (!elemBelow) return;

        let droppableBelow = elemBelow.closest('.droppable');
        if (currentDroppable != droppableBelow) {
          if (currentDroppable) { // null when we were not over a droppable before this event
            leaveDroppable(currentDroppable);
          }
          currentDroppable = droppableBelow;
          if (currentDroppable) { // null if we're not coming over a droppable now
            // (maybe just left the droppable)
            enterDroppable(currentDroppable);
          }
        }
      }

      document.addEventListener('mousemove', onMouseMove);

      Obj7.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        Obj7.onmouseup = null;
      };
    };
    
 Obj8.onmousedown = function(event) {

      let shiftX = event.clientX - Obj8.getBoundingClientRect().left;
      let shiftY = event.clientY - Obj8.getBoundingClientRect().top;

      Obj8.style.position = 'absolute';
      Obj8.style.zIndex = 1000;
      document.body.append(Obj8);

      moveAt(event.pageX, event.pageY);

      function moveAt(pageX, pageY) {
        Obj8.style.left = pageX - shiftX + 'px';
        Obj8.style.top = pageY - shiftY + 'px';
      }

      function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);

        Obj8.hidden = true;
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        Obj8.hidden = false;

        if (!elemBelow) return;

        let droppableBelow = elemBelow.closest('.droppable');
        if (currentDroppable != droppableBelow) {
          if (currentDroppable) { // null when we were not over a droppable before this event
            leaveDroppable(currentDroppable);
          }
          currentDroppable = droppableBelow;
          if (currentDroppable) { // null if we're not coming over a droppable now
            // (maybe just left the droppable)
            enterDroppable(currentDroppable);
          }
        }
      }

      document.addEventListener('mousemove', onMouseMove);

      Obj8.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        Obj8.onmouseup = null;
      };
    };

    
 Obj9.onmousedown = function(event) {

      let shiftX = event.clientX - Obj9.getBoundingClientRect().left;
      let shiftY = event.clientY - Obj9.getBoundingClientRect().top;

      Obj9.style.position = 'absolute';
      Obj9.style.zIndex = 1000;
      document.body.append(Obj9);

      moveAt(event.pageX, event.pageY);

      function moveAt(pageX, pageY) {
        Obj9.style.left = pageX - shiftX + 'px';
        Obj9.style.top = pageY - shiftY + 'px';
      }

      function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);

        Obj9.hidden = true;
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        Obj9.hidden = false;

        if (!elemBelow) return;

        let droppableBelow = elemBelow.closest('.droppable');
        if (currentDroppable != droppableBelow) {
          if (currentDroppable) { // null when we were not over a droppable before this event
            leaveDroppable(currentDroppable);
          }
          currentDroppable = droppableBelow;
          if (currentDroppable) { // null if we're not coming over a droppable now
            // (maybe just left the droppable)
            enterDroppable(currentDroppable);
          }
        }
      }

      document.addEventListener('mousemove', onMouseMove);

      Obj9.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        Obj9.onmouseup = null;
      };
    };

    
        Obj10.onmousedown = function(event) {

      let shiftX = event.clientX - Obj10.getBoundingClientRect().left;
      let shiftY = event.clientY - Obj10.getBoundingClientRect().top;

      Obj10.style.position = 'absolute';
      Obj10.style.zIndex = 1000;
      document.body.append(Obj10);

      moveAt(event.pageX, event.pageY);

      function moveAt(pageX, pageY) {
        Obj10.style.left = pageX - shiftX + 'px';
        Obj10.style.top = pageY - shiftY + 'px';
      }

      function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);

        Obj10.hidden = true;
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        Obj10.hidden = false;

        if (!elemBelow) return;

        let droppableBelow = elemBelow.closest('.droppable');
        if (currentDroppable != droppableBelow) {
          if (currentDroppable) { // null when we were not over a droppable before this event
            leaveDroppable(currentDroppable);
          }
          currentDroppable = droppableBelow;
          if (currentDroppable) { // null if we're not coming over a droppable now
            // (maybe just left the droppable)
            enterDroppable(currentDroppable);
          }
        }
      }

      document.addEventListener('mousemove', onMouseMove);

      Obj10.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        Obj10.onmouseup = null;
      };
    };

 Obj11.onmousedown = function(event) {

      let shiftX = event.clientX - Obj11.getBoundingClientRect().left;
      let shiftY = event.clientY - Obj11.getBoundingClientRect().top;

      Obj11.style.position = 'absolute';
      Obj11.style.zIndex = 1000;
      document.body.append(Obj11);

      moveAt(event.pageX, event.pageY);

      function moveAt(pageX, pageY) {
        Obj11.style.left = pageX - shiftX + 'px';
        Obj11.style.top = pageY - shiftY + 'px';
      }

      function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);

        Obj11.hidden = true;
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        Obj11.hidden = false;

        if (!elemBelow) return;

        let droppableBelow = elemBelow.closest('.droppable');
        if (currentDroppable != droppableBelow) {
          if (currentDroppable) { // null when we were not over a droppable before this event
            leaveDroppable(currentDroppable);
          }
          currentDroppable = droppableBelow;
          if (currentDroppable) { // null if we're not coming over a droppable now
            // (maybe just left the droppable)
            enterDroppable(currentDroppable);
          }
        }
      }

      document.addEventListener('mousemove', onMouseMove);

      Obj11.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        Obj11.onmouseup = null;
      };
    };


Obj13.onmousedown = function(event) {

      let shiftX = event.clientX - Obj13.getBoundingClientRect().left;
      let shiftY = event.clientY - Obj13.getBoundingClientRect().top;

      Obj13.style.position = 'absolute';
      Obj13.style.zIndex = 1000;
      document.body.append(Obj13);

      moveAt(event.pageX, event.pageY);

      function moveAt(pageX, pageY) {
        Obj13.style.left = pageX - shiftX + 'px';
        Obj13.style.top = pageY - shiftY + 'px';
      }

      function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);

        Obj13.hidden = true;
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        Obj13.hidden = false;

        if (!elemBelow) return;

        let droppableBelow = elemBelow.closest('.droppable');
        if (currentDroppable != droppableBelow) {
          if (currentDroppable) { // null when we were not over a droppable before this event
            leaveDroppable(currentDroppable);
          }
          currentDroppable = droppableBelow;
          if (currentDroppable) { // null if we're not coming over a droppable now
            // (maybe just left the droppable)
            enterDroppable(currentDroppable);
          }
        }
      }

      document.addEventListener('mousemove', onMouseMove);

      Obj13.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        Obj13.onmouseup = null;
      };
    };

Obj14.onmousedown = function(event) {

      let shiftX = event.clientX - Obj14.getBoundingClientRect().left;
      let shiftY = event.clientY - Obj14.getBoundingClientRect().top;

      Obj14.style.position = 'absolute';
      Obj14.style.zIndex = 1000;
      document.body.append(Obj14);

      moveAt(event.pageX, event.pageY);

      function moveAt(pageX, pageY) {
        Obj14.style.left = pageX - shiftX + 'px';
        Obj14.style.top = pageY - shiftY + 'px';
      }

      function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);

        Obj14.hidden = true;
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        Obj14.hidden = false;

        if (!elemBelow) return;

        let droppableBelow = elemBelow.closest('.droppable');
        if (currentDroppable != droppableBelow) {
          if (currentDroppable) { // null when we were not over a droppable before this event
            leaveDroppable(currentDroppable);
          }
          currentDroppable = droppableBelow;
          if (currentDroppable) { // null if we're not coming over a droppable now
            // (maybe just left the droppable)
            enterDroppable(currentDroppable);
          }
        }
      }

      document.addEventListener('mousemove', onMouseMove);

      Obj14.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        Obj14.onmouseup = null;
      };
    };

Obj15.onmousedown = function(event) {

      let shiftX = event.clientX - Obj15.getBoundingClientRect().left;
      let shiftY = event.clientY - Obj15.getBoundingClientRect().top;

      Obj15.style.position = 'absolute';
      Obj15.style.zIndex = 1000;
      document.body.append(Obj15);

      moveAt(event.pageX, event.pageY);

      function moveAt(pageX, pageY) {
        Obj15.style.left = pageX - shiftX + 'px';
        Obj15.style.top = pageY - shiftY + 'px';
      }

      function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);

        Obj15.hidden = true;
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        Obj15.hidden = false;

        if (!elemBelow) return;

        let droppableBelow = elemBelow.closest('.droppable');
        if (currentDroppable != droppableBelow) {
          if (currentDroppable) { // null when we were not over a droppable before this event
            leaveDroppable(currentDroppable);
          }
          currentDroppable = droppableBelow;
          if (currentDroppable) { // null if we're not coming over a droppable now
            // (maybe just left the droppable)
            enterDroppable(currentDroppable);
          }
        }
      }

      document.addEventListener('mousemove', onMouseMove);

      Obj15.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        Obj15.onmouseup = null;
      };
    };

Obj16.onmousedown = function(event) {

      let shiftX = event.clientX - Obj16.getBoundingClientRect().left;
      let shiftY = event.clientY - Obj16.getBoundingClientRect().top;

      Obj16.style.position = 'absolute';
      Obj16.style.zIndex = 1000;
      document.body.append(Obj16);

      moveAt(event.pageX, event.pageY);

      function moveAt(pageX, pageY) {
        Obj16.style.left = pageX - shiftX + 'px';
        Obj16.style.top = pageY - shiftY + 'px';
      }

      function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);

        Obj16.hidden = true;
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        Obj16.hidden = false;

        if (!elemBelow) return;

        let droppableBelow = elemBelow.closest('.droppable');
        if (currentDroppable != droppableBelow) {
          if (currentDroppable) { // null when we were not over a droppable before this event
            leaveDroppable(currentDroppable);
          }
          currentDroppable = droppableBelow;
          if (currentDroppable) { // null if we're not coming over a droppable now
            // (maybe just left the droppable)
            enterDroppable(currentDroppable);
          }
        }
      }

      document.addEventListener('mousemove', onMouseMove);

      Obj16.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        Obj16.onmouseup = null;
      };
    };

Obj17.onmousedown = function(event) {

      let shiftX = event.clientX - Obj17.getBoundingClientRect().left;
      let shiftY = event.clientY - Obj17.getBoundingClientRect().top;

      Obj17.style.position = 'absolute';
      Obj17.style.zIndex = 1000;
      document.body.append(Obj17);

      moveAt(event.pageX, event.pageY);

      function moveAt(pageX, pageY) {
        Obj17.style.left = pageX - shiftX + 'px';
        Obj17.style.top = pageY - shiftY + 'px';
      }

      function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);

        Obj17.hidden = true;
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        Obj17.hidden = false;

        if (!elemBelow) return;

        let droppableBelow = elemBelow.closest('.droppable');
        if (currentDroppable != droppableBelow) {
          if (currentDroppable) { // null when we were not over a droppable before this event
            leaveDroppable(currentDroppable);
          }
          currentDroppable = droppableBelow;
          if (currentDroppable) { // null if we're not coming over a droppable now
            // (maybe just left the droppable)
            enterDroppable(currentDroppable);
          }
        }
      }

      document.addEventListener('mousemove', onMouseMove);

      Obj17.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        Obj17.onmouseup = null;
      };
    };

Obj18.onmousedown = function(event) {

      let shiftX = event.clientX - Obj18.getBoundingClientRect().left;
      let shiftY = event.clientY - Obj18.getBoundingClientRect().top;

      Obj18.style.position = 'absolute';
      Obj18.style.zIndex = 1000;
      document.body.append(Obj18);

      moveAt(event.pageX, event.pageY);

      function moveAt(pageX, pageY) {
        Obj18.style.left = pageX - shiftX + 'px';
        Obj18.style.top = pageY - shiftY + 'px';
      }

      function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);

        Obj18.hidden = true;
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        Obj18.hidden = false;

        if (!elemBelow) return;

        let droppableBelow = elemBelow.closest('.droppable');
        if (currentDroppable != droppableBelow) {
          if (currentDroppable) { // null when we were not over a droppable before this event
            leaveDroppable(currentDroppable);
          }
          currentDroppable = droppableBelow;
          if (currentDroppable) { // null if we're not coming over a droppable now
            // (maybe just left the droppable)
            enterDroppable(currentDroppable);
          }
        }
      }

      document.addEventListener('mousemove', onMouseMove);

      Obj18.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        Obj18.onmouseup = null;
      };
    };


Obj19.onmousedown = function(event) {

      let shiftX = event.clientX - Obj19.getBoundingClientRect().left;
      let shiftY = event.clientY - Obj19.getBoundingClientRect().top;

      Obj19.style.position = 'absolute';
      Obj19.style.zIndex = 1000;
      document.body.append(Obj19);

      moveAt(event.pageX, event.pageY);

      function moveAt(pageX, pageY) {
        Obj19.style.left = pageX - shiftX + 'px';
        Obj19.style.top = pageY - shiftY + 'px';
      }

      function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);

        Obj19.hidden = true;
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        Obj19.hidden = false;

        if (!elemBelow) return;

        let droppableBelow = elemBelow.closest('.droppable');
        if (currentDroppable != droppableBelow) {
          if (currentDroppable) { // null when we were not over a droppable before this event
            leaveDroppable(currentDroppable);
          }
          currentDroppable = droppableBelow;
          if (currentDroppable) { // null if we're not coming over a droppable now
            // (maybe just left the droppable)
            enterDroppable(currentDroppable);
          }
        }
      }

      document.addEventListener('mousemove', onMouseMove);

      Obj19.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        Obj19.onmouseup = null;
      };
    };

Obj20.onmousedown = function(event) {

      let shiftX = event.clientX - Obj20.getBoundingClientRect().left;
      let shiftY = event.clientY - Obj20.getBoundingClientRect().top;

      Obj20.style.position = 'absolute';
      Obj20.style.zIndex = 1000;
      document.body.append(Obj20);

      moveAt(event.pageX, event.pageY);

      function moveAt(pageX, pageY) {
        Obj20.style.left = pageX - shiftX + 'px';
        Obj20.style.top = pageY - shiftY + 'px';
      }

      function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);

        Obj20.hidden = true;
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        Obj20.hidden = false;

        if (!elemBelow) return;

        let droppableBelow = elemBelow.closest('.droppable');
        if (currentDroppable != droppableBelow) {
          if (currentDroppable) { // null when we were not over a droppable before this event
            leaveDroppable(currentDroppable);
          }
          currentDroppable = droppableBelow;
          if (currentDroppable) { // null if we're not coming over a droppable now
            // (maybe just left the droppable)
            enterDroppable(currentDroppable);
          }
        }
      }

      document.addEventListener('mousemove', onMouseMove);

      Obj20.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        Obj20.onmouseup = null;
      };
    };

Obj21.onmousedown = function(event) {

      let shiftX = event.clientX - Obj21.getBoundingClientRect().left;
      let shiftY = event.clientY - Obj21.getBoundingClientRect().top;

      Obj21.style.position = 'absolute';
      Obj21.style.zIndex = 1000;
      document.body.append(Obj21);

      moveAt(event.pageX, event.pageY);

      function moveAt(pageX, pageY) {
        Obj21.style.left = pageX - shiftX + 'px';
        Obj21.style.top = pageY - shiftY + 'px';
      }

      function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);

        Obj21.hidden = true;
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        Obj21.hidden = false;

        if (!elemBelow) return;

        let droppableBelow = elemBelow.closest('.droppable');
        if (currentDroppable != droppableBelow) {
          if (currentDroppable) { // null when we were not over a droppable before this event
            leaveDroppable(currentDroppable);
          }
          currentDroppable = droppableBelow;
          if (currentDroppable) { // null if we're not coming over a droppable now
            // (maybe just left the droppable)
            enterDroppable(currentDroppable);
          }
        }
      }

      document.addEventListener('mousemove', onMouseMove);

      Obj21.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        Obj21.onmouseup = null;
      };
    };

Obj22.onmousedown = function(event) {

      let shiftX = event.clientX - Obj22.getBoundingClientRect().left;
      let shiftY = event.clientY - Obj22.getBoundingClientRect().top;

      Obj22.style.position = 'absolute';
      Obj22.style.zIndex = 1000;
      document.body.append(Obj22);

      moveAt(event.pageX, event.pageY);

      function moveAt(pageX, pageY) {
        Obj22.style.left = pageX - shiftX + 'px';
        Obj22.style.top = pageY - shiftY + 'px';
      }

      function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);

        Obj22.hidden = true;
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        Obj22.hidden = false;

        if (!elemBelow) return;

        let droppableBelow = elemBelow.closest('.droppable');
        if (currentDroppable != droppableBelow) {
          if (currentDroppable) { // null when we were not over a droppable before this event
            leaveDroppable(currentDroppable);
          }
          currentDroppable = droppableBelow;
          if (currentDroppable) { // null if we're not coming over a droppable now
            // (maybe just left the droppable)
            enterDroppable(currentDroppable);
          }
        }
      }

      document.addEventListener('mousemove', onMouseMove);

      Obj22.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        Obj22.onmouseup = null;
      };
    };

Obj23.onmousedown = function(event) {

      let shiftX = event.clientX - Obj23.getBoundingClientRect().left;
      let shiftY = event.clientY - Obj23.getBoundingClientRect().top;

      Obj23.style.position = 'absolute';
      Obj23.style.zIndex = 1000;
      document.body.append(Obj23);

      moveAt(event.pageX, event.pageY);

      function moveAt(pageX, pageY) {
        Obj23.style.left = pageX - shiftX + 'px';
        Obj23.style.top = pageY - shiftY + 'px';
      }

      function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);

        Obj23.hidden = true;
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        Obj23.hidden = false;

        if (!elemBelow) return;

        let droppableBelow = elemBelow.closest('.droppable');
        if (currentDroppable != droppableBelow) {
          if (currentDroppable) { // null when we were not over a droppable before this event
            leaveDroppable(currentDroppable);
          }
          currentDroppable = droppableBelow;
          if (currentDroppable) { // null if we're not coming over a droppable now
            // (maybe just left the droppable)
            enterDroppable(currentDroppable);
          }
        }
      }

      document.addEventListener('mousemove', onMouseMove);

      Obj23.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        Obj23.onmouseup = null;
      };
    };

Obj24.onmousedown = function(event) {

      let shiftX = event.clientX - Obj24.getBoundingClientRect().left;
      let shiftY = event.clientY - Obj24.getBoundingClientRect().top;

      Obj24.style.position = 'absolute';
      Obj24.style.zIndex = 1000;
      document.body.append(Obj24);

      moveAt(event.pageX, event.pageY);

      function moveAt(pageX, pageY) {
        Obj24.style.left = pageX - shiftX + 'px';
        Obj24.style.top = pageY - shiftY + 'px';
      }

      function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);

        Obj24.hidden = true;
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        Obj24.hidden = false;

        if (!elemBelow) return;

        let droppableBelow = elemBelow.closest('.droppable');
        if (currentDroppable != droppableBelow) {
          if (currentDroppable) { // null when we were not over a droppable before this event
            leaveDroppable(currentDroppable);
          }
          currentDroppable = droppableBelow;
          if (currentDroppable) { // null if we're not coming over a droppable now
            // (maybe just left the droppable)
            enterDroppable(currentDroppable);
          }
        }
      }

      document.addEventListener('mousemove', onMouseMove);

      Obj24.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        Obj24.onmouseup = null;
      };
    };

Obj25.onmousedown = function(event) {

      let shiftX = event.clientX - Obj25.getBoundingClientRect().left;
      let shiftY = event.clientY - Obj25.getBoundingClientRect().top;

      Obj25.style.position = 'absolute';
      Obj25.style.zIndex = 1000;
      document.body.append(Obj25);

      moveAt(event.pageX, event.pageY);

      function moveAt(pageX, pageY) {
        Obj25.style.left = pageX - shiftX + 'px';
        Obj25.style.top = pageY - shiftY + 'px';
      }

      function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);

        Obj25.hidden = true;
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        Obj25.hidden = false;

        if (!elemBelow) return;

        let droppableBelow = elemBelow.closest('.droppable');
        if (currentDroppable != droppableBelow) {
          if (currentDroppable) { // null when we were not over a droppable before this event
            leaveDroppable(currentDroppable);
          }
          currentDroppable = droppableBelow;
          if (currentDroppable) { // null if we're not coming over a droppable now
            // (maybe just left the droppable)
            enterDroppable(currentDroppable);
          }
        }
      }

      document.addEventListener('mousemove', onMouseMove);

      Obj25.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        Obj25.onmouseup = null;
      };
    };

Obj26.onmousedown = function(event) {

      let shiftX = event.clientX - Obj26.getBoundingClientRect().left;
      let shiftY = event.clientY - Obj26.getBoundingClientRect().top;

      Obj26.style.position = 'absolute';
      Obj26.style.zIndex = 1000;
      document.body.append(Obj26);

      moveAt(event.pageX, event.pageY);

      function moveAt(pageX, pageY) {
        Obj26.style.left = pageX - shiftX + 'px';
        Obj26.style.top = pageY - shiftY + 'px';
      }

      function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);

        Obj26.hidden = true;
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        Obj26.hidden = false;

        if (!elemBelow) return;

        let droppableBelow = elemBelow.closest('.droppable');
        if (currentDroppable != droppableBelow) {
          if (currentDroppable) { // null when we were not over a droppable before this event
            leaveDroppable(currentDroppable);
          }
          currentDroppable = droppableBelow;
          if (currentDroppable) { // null if we're not coming over a droppable now
            // (maybe just left the droppable)
            enterDroppable(currentDroppable);
          }
        }
      }

      document.addEventListener('mousemove', onMouseMove);

      Obj26.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        Obj26.onmouseup = null;
      };
    };


Obj27.onmousedown = function(event) {

      let shiftX = event.clientX - Obj27.getBoundingClientRect().left;
      let shiftY = event.clientY - Obj27.getBoundingClientRect().top;

      Obj27.style.position = 'absolute';
      Obj27.style.zIndex = 1000;
      document.body.append(Obj27);

      moveAt(event.pageX, event.pageY);

      function moveAt(pageX, pageY) {
        Obj27.style.left = pageX - shiftX + 'px';
        Obj27.style.top = pageY - shiftY + 'px';
      }

      function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);

        Obj27.hidden = true;
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        Obj27.hidden = false;

        if (!elemBelow) return;

        let droppableBelow = elemBelow.closest('.droppable');
        if (currentDroppable != droppableBelow) {
          if (currentDroppable) { // null when we were not over a droppable before this event
            leaveDroppable(currentDroppable);
          }
          currentDroppable = droppableBelow;
          if (currentDroppable) { // null if we're not coming over a droppable now
            // (maybe just left the droppable)
            enterDroppable(currentDroppable);
          }
        }
      }

      document.addEventListener('mousemove', onMouseMove);

      Obj27.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        Obj27.onmouseup = null;
      };
    };


Obj28.onmousedown = function(event) {

      let shiftX = event.clientX - Obj28.getBoundingClientRect().left;
      let shiftY = event.clientY - Obj28.getBoundingClientRect().top;

      Obj28.style.position = 'absolute';
      Obj28.style.zIndex = 1000;
      document.body.append(Obj28);

      moveAt(event.pageX, event.pageY);

      function moveAt(pageX, pageY) {
        Obj28.style.left = pageX - shiftX + 'px';
        Obj28.style.top = pageY - shiftY + 'px';
      }

      function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);

        Obj28.hidden = true;
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        Obj28.hidden = false;

        if (!elemBelow) return;

        let droppableBelow = elemBelow.closest('.droppable');
        if (currentDroppable != droppableBelow) {
          if (currentDroppable) { // null when we were not over a droppable before this event
            leaveDroppable(currentDroppable);
          }
          currentDroppable = droppableBelow;
          if (currentDroppable) { // null if we're not coming over a droppable now
            // (maybe just left the droppable)
            enterDroppable(currentDroppable);
          }
        }
      }

      document.addEventListener('mousemove', onMouseMove);

      Obj28.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        Obj28.onmouseup = null;
      };
    };

Obj29.onmousedown = function(event) {

      let shiftX = event.clientX - Obj29.getBoundingClientRect().left;
      let shiftY = event.clientY - Obj29.getBoundingClientRect().top;

      Obj29.style.position = 'absolute';
      Obj29.style.zIndex = 1000;
      document.body.append(Obj29);

      moveAt(event.pageX, event.pageY);

      function moveAt(pageX, pageY) {
        Obj29.style.left = pageX - shiftX + 'px';
        Obj29.style.top = pageY - shiftY + 'px';
      }

      function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);

        Obj29.hidden = true;
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        Obj29.hidden = false;

        if (!elemBelow) return;

        let droppableBelow = elemBelow.closest('.droppable');
        if (currentDroppable != droppableBelow) {
          if (currentDroppable) { // null when we were not over a droppable before this event
            leaveDroppable(currentDroppable);
          }
          currentDroppable = droppableBelow;
          if (currentDroppable) { // null if we're not coming over a droppable now
            // (maybe just left the droppable)
            enterDroppable(currentDroppable);
          }
        }
      }

      document.addEventListener('mousemove', onMouseMove);

      Obj29.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        Obj29.onmouseup = null;
      };
    };

Obj30.onmousedown = function(event) {

      let shiftX = event.clientX - Obj30.getBoundingClientRect().left;
      let shiftY = event.clientY - Obj30.getBoundingClientRect().top;

      Obj30.style.position = 'absolute';
      Obj30.style.zIndex = 1000;
      document.body.append(Obj30);

      moveAt(event.pageX, event.pageY);

      function moveAt(pageX, pageY) {
        Obj30.style.left = pageX - shiftX + 'px';
        Obj30.style.top = pageY - shiftY + 'px';
      }

      function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);

        Obj30.hidden = true;
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        Obj30.hidden = false;

        if (!elemBelow) return;

        let droppableBelow = elemBelow.closest('.droppable');
        if (currentDroppable != droppableBelow) {
          if (currentDroppable) { // null when we were not over a droppable before this event
            leaveDroppable(currentDroppable);
          }
          currentDroppable = droppableBelow;
          if (currentDroppable) { // null if we're not coming over a droppable now
            // (maybe just left the droppable)
            enterDroppable(currentDroppable);
          }
        }
      }

      document.addEventListener('mousemove', onMouseMove);

      Obj30.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        Obj30.onmouseup = null;
      };
    };

Obj31.onmousedown = function(event) {

      let shiftX = event.clientX - Obj31.getBoundingClientRect().left;
      let shiftY = event.clientY - Obj31.getBoundingClientRect().top;

      Obj31.style.position = 'absolute';
      Obj31.style.zIndex = 1000;
      document.body.append(Obj31);

      moveAt(event.pageX, event.pageY);

      function moveAt(pageX, pageY) {
        Obj31.style.left = pageX - shiftX + 'px';
        Obj31.style.top = pageY - shiftY + 'px';
      }

      function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);

        Obj31.hidden = true;
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        Obj31.hidden = false;

        if (!elemBelow) return;

        let droppableBelow = elemBelow.closest('.droppable');
        if (currentDroppable != droppableBelow) {
          if (currentDroppable) { // null when we were not over a droppable before this event
            leaveDroppable(currentDroppable);
          }
          currentDroppable = droppableBelow;
          if (currentDroppable) { // null if we're not coming over a droppable now
            // (maybe just left the droppable)
            enterDroppable(currentDroppable);
          }
        }
      }

      document.addEventListener('mousemove', onMouseMove);

      Obj31.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        Obj31.onmouseup = null;
      };
    };

Obj32.onmousedown = function(event) {

      let shiftX = event.clientX - Obj32.getBoundingClientRect().left;
      let shiftY = event.clientY - Obj32.getBoundingClientRect().top;

      Obj32.style.position = 'absolute';
      Obj32.style.zIndex = 1000;
      document.body.append(Obj32);

      moveAt(event.pageX, event.pageY);

      function moveAt(pageX, pageY) {
        Obj32.style.left = pageX - shiftX + 'px';
        Obj32.style.top = pageY - shiftY + 'px';
      }

      function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);

        Obj32.hidden = true;
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        Obj32.hidden = false;

        if (!elemBelow) return;

        let droppableBelow = elemBelow.closest('.droppable');
        if (currentDroppable != droppableBelow) {
          if (currentDroppable) { // null when we were not over a droppable before this event
            leaveDroppable(currentDroppable);
          }
          currentDroppable = droppableBelow;
          if (currentDroppable) { // null if we're not coming over a droppable now
            // (maybe just left the droppable)
            enterDroppable(currentDroppable);
          }
        }
      }

      document.addEventListener('mousemove', onMouseMove);

      Obj32.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        Obj32.onmouseup = null;
      };
    };

Obj33.onmousedown = function(event) {

      let shiftX = event.clientX - Obj33.getBoundingClientRect().left;
      let shiftY = event.clientY - Obj33.getBoundingClientRect().top;

      Obj33.style.position = 'absolute';
      Obj33.style.zIndex = 1000;
      document.body.append(Obj33);

      moveAt(event.pageX, event.pageY);

      function moveAt(pageX, pageY) {
        Obj33.style.left = pageX - shiftX + 'px';
        Obj33.style.top = pageY - shiftY + 'px';
      }

      function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);

        Obj33.hidden = true;
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        Obj33.hidden = false;

        if (!elemBelow) return;

        let droppableBelow = elemBelow.closest('.droppable');
        if (currentDroppable != droppableBelow) {
          if (currentDroppable) { // null when we were not over a droppable before this event
            leaveDroppable(currentDroppable);
          }
          currentDroppable = droppableBelow;
          if (currentDroppable) { // null if we're not coming over a droppable now
            // (maybe just left the droppable)
            enterDroppable(currentDroppable);
          }
        }
      }

      document.addEventListener('mousemove', onMouseMove);

      Obj33.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        Obj33.onmouseup = null;
      };
    };

Obj34.onmousedown = function(event) {

      let shiftX = event.clientX - Obj34.getBoundingClientRect().left;
      let shiftY = event.clientY - Obj34.getBoundingClientRect().top;

      Obj34.style.position = 'absolute';
      Obj34.style.zIndex = 1000;
      document.body.append(Obj34);

      moveAt(event.pageX, event.pageY);

      function moveAt(pageX, pageY) {
        Obj34.style.left = pageX - shiftX + 'px';
        Obj34.style.top = pageY - shiftY + 'px';
      }

      function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);

        Obj34.hidden = true;
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        Obj34.hidden = false;

        if (!elemBelow) return;

        let droppableBelow = elemBelow.closest('.droppable');
        if (currentDroppable != droppableBelow) {
          if (currentDroppable) { // null when we were not over a droppable before this event
            leaveDroppable(currentDroppable);
          }
          currentDroppable = droppableBelow;
          if (currentDroppable) { // null if we're not coming over a droppable now
            // (maybe just left the droppable)
            enterDroppable(currentDroppable);
          }
        }
      }

      document.addEventListener('mousemove', onMouseMove);

      Obj34.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        Obj34.onmouseup = null;
      };
    };

Obj35.onmousedown = function(event) {

      let shiftX = event.clientX - Obj35.getBoundingClientRect().left;
      let shiftY = event.clientY - Obj35.getBoundingClientRect().top;

      Obj35.style.position = 'absolute';
      Obj35.style.zIndex = 1000;
      document.body.append(Obj35);

      moveAt(event.pageX, event.pageY);

      function moveAt(pageX, pageY) {
        Obj35.style.left = pageX - shiftX + 'px';
        Obj35.style.top = pageY - shiftY + 'px';
      }

      function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);

        Obj35.hidden = true;
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        Obj35.hidden = false;

        if (!elemBelow) return;

        let droppableBelow = elemBelow.closest('.droppable');
        if (currentDroppable != droppableBelow) {
          if (currentDroppable) { // null when we were not over a droppable before this event
            leaveDroppable(currentDroppable);
          }
          currentDroppable = droppableBelow;
          if (currentDroppable) { // null if we're not coming over a droppable now
            // (maybe just left the droppable)
            enterDroppable(currentDroppable);
          }
        }
      }

      document.addEventListener('mousemove', onMouseMove);

      Obj35.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        Obj35.onmouseup = null;
      };
    };

Obj36.onmousedown = function(event) {

      let shiftX = event.clientX - Obj36.getBoundingClientRect().left;
      let shiftY = event.clientY - Obj36.getBoundingClientRect().top;

      Obj36.style.position = 'absolute';
      Obj36.style.zIndex = 1000;
      document.body.append(Obj36);

      moveAt(event.pageX, event.pageY);

      function moveAt(pageX, pageY) {
        Obj36.style.left = pageX - shiftX + 'px';
        Obj36.style.top = pageY - shiftY + 'px';
      }

      function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);

        Obj36.hidden = true;
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        Obj36.hidden = false;

        if (!elemBelow) return;

        let droppableBelow = elemBelow.closest('.droppable');
        if (currentDroppable != droppableBelow) {
          if (currentDroppable) { // null when we were not over a droppable before this event
            leaveDroppable(currentDroppable);
          }
          currentDroppable = droppableBelow;
          if (currentDroppable) { // null if we're not coming over a droppable now
            // (maybe just left the droppable)
            enterDroppable(currentDroppable);
          }
        }
      }

      document.addEventListener('mousemove', onMouseMove);

      Obj36.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        Obj36.onmouseup = null;
      };
    };

Obj37.onmousedown = function(event) {

      let shiftX = event.clientX - Obj37.getBoundingClientRect().left;
      let shiftY = event.clientY - Obj37.getBoundingClientRect().top;

      Obj37.style.position = 'absolute';
      Obj37.style.zIndex = 1000;
      document.body.append(Obj37);

      moveAt(event.pageX, event.pageY);

      function moveAt(pageX, pageY) {
        Obj37.style.left = pageX - shiftX + 'px';
        Obj37.style.top = pageY - shiftY + 'px';
      }

      function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);

        Obj37.hidden = true;
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        Obj37.hidden = false;

        if (!elemBelow) return;

        let droppableBelow = elemBelow.closest('.droppable');
        if (currentDroppable != droppableBelow) {
          if (currentDroppable) { // null when we were not over a droppable before this event
            leaveDroppable(currentDroppable);
          }
          currentDroppable = droppableBelow;
          if (currentDroppable) { // null if we're not coming over a droppable now
            // (maybe just left the droppable)
            enterDroppable(currentDroppable);
          }
        }
      }

      document.addEventListener('mousemove', onMouseMove);

      Obj37.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        Obj37.onmouseup = null;
      };
    };

Obj38.onmousedown = function(event) {

      let shiftX = event.clientX - Obj38.getBoundingClientRect().left;
      let shiftY = event.clientY - Obj38.getBoundingClientRect().top;

      Obj38.style.position = 'absolute';
      Obj38.style.zIndex = 1000;
      document.body.append(Obj38);

      moveAt(event.pageX, event.pageY);

      function moveAt(pageX, pageY) {
        Obj38.style.left = pageX - shiftX + 'px';
        Obj38.style.top = pageY - shiftY + 'px';
      }

      function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);

        Obj38.hidden = true;
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        Obj38.hidden = false;

        if (!elemBelow) return;

        let droppableBelow = elemBelow.closest('.droppable');
        if (currentDroppable != droppableBelow) {
          if (currentDroppable) { // null when we were not over a droppable before this event
            leaveDroppable(currentDroppable);
          }
          currentDroppable = droppableBelow;
          if (currentDroppable) { // null if we're not coming over a droppable now
            // (maybe just left the droppable)
            enterDroppable(currentDroppable);
          }
        }
      }

      document.addEventListener('mousemove', onMouseMove);

      Obj38.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        Obj38.onmouseup = null;
      };
    };

Obj39.onmousedown = function(event) {

      let shiftX = event.clientX - Obj39.getBoundingClientRect().left;
      let shiftY = event.clientY - Obj39.getBoundingClientRect().top;

      Obj39.style.position = 'absolute';
      Obj39.style.zIndex = 1000;
      document.body.append(Obj39);

      moveAt(event.pageX, event.pageY);

      function moveAt(pageX, pageY) {
        Obj39.style.left = pageX - shiftX + 'px';
        Obj39.style.top = pageY - shiftY + 'px';
      }

      function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);

        Obj39.hidden = true;
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        Obj39.hidden = false;

        if (!elemBelow) return;

        let droppableBelow = elemBelow.closest('.droppable');
        if (currentDroppable != droppableBelow) {
          if (currentDroppable) { // null when we were not over a droppable before this event
            leaveDroppable(currentDroppable);
          }
          currentDroppable = droppableBelow;
          if (currentDroppable) { // null if we're not coming over a droppable now
            // (maybe just left the droppable)
            enterDroppable(currentDroppable);
          }
        }
      }

      document.addEventListener('mousemove', onMouseMove);

      Obj39.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        Obj39.onmouseup = null;
      };
    };

Obj40.onmousedown = function(event) {

      let shiftX = event.clientX - Obj40.getBoundingClientRect().left;
      let shiftY = event.clientY - Obj40.getBoundingClientRect().top;

      Obj40.style.position = 'absolute';
      Obj40.style.zIndex = 1000;
      document.body.append(Obj40);

      moveAt(event.pageX, event.pageY);

      function moveAt(pageX, pageY) {
        Obj40.style.left = pageX - shiftX + 'px';
        Obj40.style.top = pageY - shiftY + 'px';
      }

      function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);

        Obj40.hidden = true;
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        Obj40.hidden = false;

        if (!elemBelow) return;

        let droppableBelow = elemBelow.closest('.droppable');
        if (currentDroppable != droppableBelow) {
          if (currentDroppable) { // null when we were not over a droppable before this event
            leaveDroppable(currentDroppable);
          }
          currentDroppable = droppableBelow;
          if (currentDroppable) { // null if we're not coming over a droppable now
            // (maybe just left the droppable)
            enterDroppable(currentDroppable);
          }
        }
      }

      document.addEventListener('mousemove', onMouseMove);

      Obj40.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        Obj40.onmouseup = null;
      };
    };

Obj41.onmousedown = function(event) {

      let shiftX = event.clientX - Obj41.getBoundingClientRect().left;
      let shiftY = event.clientY - Obj41.getBoundingClientRect().top;

      Obj41.style.position = 'absolute';
      Obj41.style.zIndex = 1000;
      document.body.append(Obj41);

      moveAt(event.pageX, event.pageY);

      function moveAt(pageX, pageY) {
        Obj41.style.left = pageX - shiftX + 'px';
        Obj41.style.top = pageY - shiftY + 'px';
      }

      function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);

        Obj41.hidden = true;
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        Obj41.hidden = false;

        if (!elemBelow) return;

        let droppableBelow = elemBelow.closest('.droppable');
        if (currentDroppable != droppableBelow) {
          if (currentDroppable) { // null when we were not over a droppable before this event
            leaveDroppable(currentDroppable);
          }
          currentDroppable = droppableBelow;
          if (currentDroppable) { // null if we're not coming over a droppable now
            // (maybe just left the droppable)
            enterDroppable(currentDroppable);
          }
        }
      }

      document.addEventListener('mousemove', onMouseMove);

      Obj41.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        Obj41.onmouseup = null;
      };
    };

Obj42.onmousedown = function(event) {

      let shiftX = event.clientX - Obj42.getBoundingClientRect().left;
      let shiftY = event.clientY - Obj42.getBoundingClientRect().top;

      Obj42.style.position = 'absolute';
      Obj42.style.zIndex = 1000;
      document.body.append(Obj42);

      moveAt(event.pageX, event.pageY);

      function moveAt(pageX, pageY) {
        Obj42.style.left = pageX - shiftX + 'px';
        Obj42.style.top = pageY - shiftY + 'px';
      }

      function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);

        Obj42.hidden = true;
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        Obj42.hidden = false;

        if (!elemBelow) return;

        let droppableBelow = elemBelow.closest('.droppable');
        if (currentDroppable != droppableBelow) {
          if (currentDroppable) { // null when we were not over a droppable before this event
            leaveDroppable(currentDroppable);
          }
          currentDroppable = droppableBelow;
          if (currentDroppable) { // null if we're not coming over a droppable now
            // (maybe just left the droppable)
            enterDroppable(currentDroppable);
          }
        }
      }

      document.addEventListener('mousemove', onMouseMove);

      Obj42.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        Obj42.onmouseup = null;
      };
    };

Obj43.onmousedown = function(event) {

      let shiftX = event.clientX - Obj43.getBoundingClientRect().left;
      let shiftY = event.clientY - Obj43.getBoundingClientRect().top;

      Obj43.style.position = 'absolute';
      Obj43.style.zIndex = 1000;
      document.body.append(Obj43);

      moveAt(event.pageX, event.pageY);

      function moveAt(pageX, pageY) {
        Obj43.style.left = pageX - shiftX + 'px';
        Obj43.style.top = pageY - shiftY + 'px';
      }

      function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);

        Obj43.hidden = true;
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        Obj43.hidden = false;

        if (!elemBelow) return;

        let droppableBelow = elemBelow.closest('.droppable');
        if (currentDroppable != droppableBelow) {
          if (currentDroppable) { // null when we were not over a droppable before this event
            leaveDroppable(currentDroppable);
          }
          currentDroppable = droppableBelow;
          if (currentDroppable) { // null if we're not coming over a droppable now
            // (maybe just left the droppable)
            enterDroppable(currentDroppable);
          }
        }
      }

      document.addEventListener('mousemove', onMouseMove);

      Obj43.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        Obj43.onmouseup = null;
      };
    };


    function enterDroppable(elem) {
      elem.style.background = 'pink';
    }

    function leaveDroppable(elem) {
      elem.style.background = '';
    }

    Obj1.ondragstart = function() {
      return false;
    };
    Obj2.ondragstart = function() {
      return false;
    };
    Obj3.ondragstart = function() {
      return false;
    };
    Obj4.ondragstart = function() {
      return false;
    };
    Obj5.ondragstart = function() {
      return false;
    };
    Obj6.ondragstart = function() {
      return false;
    };
    Obj7.ondragstart = function() {
      return false;
    };
    Obj8.ondragstart = function() {
      return false;
    };    
    Obj9.ondragstart = function() {
      return false;
    };
    Obj10.ondragstart = function() {
      return false;
    };
    Obj11.ondragstart = function() {
      return false;
    };
    Obj13.ondragstart = function() {
      return false;
    };
    Obj14.ondragstart = function() {
      return false;
    };
    Obj15.ondragstart = function() {
      return false;
    };
    Obj16.ondragstart = function() {
      return false;
    };
    Obj17.ondragstart = function() {
      return false;
    };
    Obj18.ondragstart = function() {
      return false;
    };
    Obj19.ondragstart = function() {
      return false;
    };
    Obj20.ondragstart = function() {
      return false;
    };
    Obj21.ondragstart = function() {
      return false;
    };
    Obj22.ondragstart = function() {
      return false;
    };
    Obj23.ondragstart = function() {
      return false;
    };
    Obj24.ondragstart = function() {
      return false;
    };
    Obj25.ondragstart = function() {
      return false;
    };
    Obj26.ondragstart = function() {
      return false;
    };
    Obj27.ondragstart = function() {
      return false;
    };
    Obj28.ondragstart = function() {
      return false;
    };
    Obj29.ondragstart = function() {
      return false;
    };
    Obj30.ondragstart = function() {
      return false;
    };
    Obj31.ondragstart = function() {
      return false;
    };
    Obj32.ondragstart = function() {
      return false;
    };
    Obj33.ondragstart = function() {
      return false;
    };
    Obj34.ondragstart = function() {
      return false;
    };
    Obj35.ondragstart = function() {
      return false;
    };
    Obj36.ondragstart = function() {
      return false;
    };
    Obj37.ondragstart = function() {
      return false;
    };
    Obj38.ondragstart = function() {
      return false;
    };
    Obj39.ondragstart = function() {
      return false;
    };
    Obj40.ondragstart = function() {
      return false;
    };
    Obj41.ondragstart = function() {
      return false;
    };
    Obj42.ondragstart = function() {
      return false;
    };
    Obj43.ondragstart = function() {
      return false;
    };
