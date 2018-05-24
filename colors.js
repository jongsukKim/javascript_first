// jQuery가 반복문을 대신 해준다.
var links = {
  setColor : function(color) {
    // var alist = document.querySelectorAll('a');
    // var i = 0;
    // while(i < alist.length){
    //   alist[i].style.color = color;
    //   i += 1;
    // }
    //jQuery는 $로 시작한다.
    //모든 a tag를 jQuery로 제어한다는 뜻이다.
    $('a').css('color', color);
  }
}
var body = {
  setColor : function(color) {
    // document.querySelector('body').style.color = color;
    $('body').css('color', color);
  },
  setBackgroundColor : function(color) {
    // document.querySelector('body').style.backgroundColor = color;
    $('body').css('backgroundColor', color);
  }
}
function nightDayHandler(self){
  var target = document.querySelector('body');
  if(self.value === 'night'){
    body.setBackgroundColor('black');
    body.setColor('white');
    self.value = 'day';

    links.setColor('powderblue');
  } else {
    body.setBackgroundColor('white');
    body.setColor('black');
    self.value = 'night';

    links.setColor('red');
  }
}
