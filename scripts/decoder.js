var decode = function(n1, n2, n3, n4, n5) {
  var s1 = '0' + (n1 >>> 0).toString(2);
  var s2 = '000' + (n2 >>> 0).toString(2);
  var s3 = '0' + (n3 >>> 0).toString(2);
  var s4 = (n4 >>> 0).toString(2);
  var s5 = '0' + (n5 >>> 0).toString(2);
  //console.log(s1+s2+s3+s4+s5);
  var letters = [];
  letters.push(String.fromCharCode((parseInt(s1.substr(0,2),2) << 5) + 73));
  letters.push(String.fromCharCode((parseInt(s1.substr(2,2),2) >> 1) + 96));
  letters.push(String.fromCharCode((parseInt(s2.substr(0,3),2) << 4) + 109));
  letters.push(String.fromCharCode((parseInt(s2.substr(3,1)+s3.substr(0,1),2) << 4) + 65));
  letters.push(String.fromCharCode((parseInt(s3.substr(1,2),2) << 5) + 14));
  letters.push(String.fromCharCode((parseInt(s3.substr(3,1)+s4.substr(0,1),2) << 0) + 104));
  letters.push(String.fromCharCode((parseInt(s4.substr(1,2),2) << 1) + 104));
  letters.push(String.fromCharCode((parseInt(s4.substr(3,1)+s5.substr(0,2),2) << 5) + 74));
  letters.push(String.fromCharCode((parseInt(s5.substr(2,2),2) << 5) + 33));

  var output = '';
  for(var i = 0; i < letters.length; i++) {
    output += letters[i];
  }
  return output;
};

var getArgs = function() {
  var formElts = document.getElementsByTagName('input');
  var a = [];
  for(var i = 0; i < formElts.length-1; i++) {
    a.push(parseInt(formElts[i].value));
  }
  return a;
};

document.getElementById('sbutton').onclick = function() {
  var a = getArgs();
  var w = decode(a[0], a[1], a[2], a[3], a[4]);
  var p = document.createElement('p');
  var node = document.createTextNode("The password is " + w);
  p.appendChild(node);
  var d = document.getElementById('div1');
  d.appendChild(p);
};
