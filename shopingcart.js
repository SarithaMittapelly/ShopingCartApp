
var app=angular.module('myapp',[]);
app.controller('mycontroller',function($scope,getData){
    var promise=getData.getItems();
    promise.success(function(res){
        $scope.items=res.Items;

    });
    var total=0;
    $('#cart').on('click','.clickable-row',function(e){
        var ele=$(this).find('.ng-binding:last');
        var value=ele.attr('value');
        $(this).find('.ng-binding').toggleClass('xyz');
        if (!ele.hasClass('xyz'))
            total=parseInt(total)-parseInt(value);
        else
        if(ele.hasClass('xyz'))
            total=parseInt(total)+parseInt(value);

        $('#total').html('$ '+total+'.00');
    })
});

app.factory('getData',function($http){
    return{
        getItems:function(){
            return $http.get('items.json');
        }
    }
})

