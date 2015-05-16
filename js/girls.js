var Girls = (function(){

  var Girls = function(container, data){
    this.container = container;

    if(data) {
      this.init(data);
      this.draw();
    } else {
      this.getData();
    }
  }

  Girls.prototype.init = function(data) {
    var girl;
    this.girls = [];

    for(var i = 0; i < data.length; i ++) {
        girl = new Girl(data[i]);
        this.girls.push(girl);
    }
  };

  Girls.prototype.getData = function(){
    $.ajax({
      type:'get',
      url: 'tinder.com/girls/',
      success: function(data){
        this.init(data);
        this.draw();
      },
      error: function(xhr){

      }
    });
  };

  Girls.prototype.draw = function() {
    this.container.html('');
    for(var i = 0; i < this.girls.length; i++) {
      this.container.append(girls[i].draw());
    }
    return this.container;
  };

  return Girl;
})();
