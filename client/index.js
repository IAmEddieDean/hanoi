'use strict';
var moveCount = 0;

$(document).ready(init);




function init(){
  initTowers();
  startGame();
  
  $('.tower').on('click', '.tower', select);
  $('.tower').on('click', '.tower', drop);
}
function startGame(){
  $('#start').on('click', initTowers);
}
function initTowers(){
  var level = $('#difficulty').val() * 1;
  for(var i = 0; i < level; i++){
    var $div = $('<div>');
    //var width = (((i +1)/10)*100);
    $div.data('index', i);
    $div.addClass('disc');
    //$div.css('width', width + '%');
    $('#t1').append($div);
  }
  
}
function select(){
  var $source = $(this).first-child;
  console.log($source);
}
