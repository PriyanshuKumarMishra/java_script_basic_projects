class Add {
  constructor(...words) {
      this.words = words;
  }print(){
    var a='$';
    for (var i of this.words){
      a+=i
      a+='$'
    }
    console.log(a)
  }
  //your code goes here
}

var x = new Add("hehe", "hoho", "haha", "hihi", "huhu");
var y = new Add("this", "is", "awesome");
var z = new Add("lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing", "elit");
x.print();
y.print();
z.print();
