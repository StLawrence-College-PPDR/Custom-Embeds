/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${beginButton}", "click", function(sym, e) {
         sym.play(1001);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${restartButton}", "click", function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5500, function(sym, e) {
         sym.play(4500);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Holly}", "click", function(sym, e) {
         sym.play(5501);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${scene1BackButton}", "click", function(sym, e) {
         sym.play(1000);
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10000, function(sym, e) {
         sym.play(9000);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${scene2BackButton}", "click", function(sym, e) {
         sym.play(2000);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 12500, function(sym, e) {
         sym.play(11501);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${boxAndBedGraphic}", "click", function(sym, e) {
         sym.play(10001);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${boxGraphic}", "click", function(sym, e) {
         sym.play(12501);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${scene3BackButton}", "click", function(sym, e) {
         sym.play(8000);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${scene4BackButton}", "click", function(sym, e) {
         sym.play(11500);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 16500, function(sym, e) {
         sym.play(15500);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${HollyGrandmaFront}", "click", function(sym, e) {
         
         sym.play(16501);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${scene5BackButton}", "click", function(sym, e) {
         sym.play(15500);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 20000, function(sym, e) {
         sym.play(19000);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${HollyFront2}", "click", function(sym, e) {
         sym.play(20001);

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-9128925");