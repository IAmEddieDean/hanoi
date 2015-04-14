'use strict';
var $source;
var $target;
$(document).ready(init);

function init(){
  initTowers();
  startGame();
   
  $('.tower').on('click', '.disc', select);
  $('.tower').on('click', null, drop);
}
function startGame(){
  $('#start').on('click', initTowers);
}
function initTowers(){
  $('.tower').empty();
  var level = $('#difficulty').val() * 1;
  for(var i = 0; i < level; i++){
    var $div = $('<div>');
    var width = ((i +1)*10);
    $div.attr('id', i);
    $div.text(i + 1);
    $div.addClass('disc');
    $div.css('width', width + '%');
    $('#t1').append($div);
  }
  
}
function select(){
  if ($(this).is(':first-child')){
    $source = $(this);
  }
  else {
    return;
  }
}
function drop(){
  $target = $(this);
  move();
}
function move(){
  var kiddies = $target.children('.disc')[0];
  if (kiddies && $source.attr('id') > kiddies.id){
    return;
  }
  $target.prepend($source);
}
