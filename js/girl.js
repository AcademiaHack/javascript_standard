var Girl = (function(){

  var Girl = function(container, data){
    this.id = container.data('girl');

    if(data) {
      this.init(data);
      this.draw();
    } else {
      this.getData();
    }
  }

  Girl.prototype.init = function(data) {
    this.name = data.name;
    this.avatar = data.avatar;
    this.gender = data.gender;
    this.age = data.age;
    this.container = container;
  };

  Girl.prototype.getData = function(){
    $.ajax({
      type:'get',
      url: 'tinder.com/girls/' + this.id,
      success: function(data){
        this.init(data);
        this.draw();
      },
      error: function(xhr){

      }
    });
  };

  Girl.prototype.draw = function() {
    return this.container.html(
      $("<div/>",{class:"col-md-5"}).append(
        $("<div/>",{class:"row"}).append(
          $("<div/>",{class:"col-md-12 text-center"}).html(
            this.name
          )
        ),
        $("<div/>").addClass("row").append(
          $("<div/>").addClass("col-md-12 text-center").append(
            $("<img/>").addClass('girl-avatar').attr("src",this.avatar)
          )
        )
      )
    )

    //SEGUIR MAQUETANDO EL WIDGET EN JS
  };

  return Girl;
})();
