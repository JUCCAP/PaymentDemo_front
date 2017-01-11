var paymentCtrl = angular.module('paymentDemo.controller', []);

paymentCtrl.controller('TransactionsCtrl', ['$scope','Transaction',
	function($scope,Transaction) {
    Transaction.query({},function(data){
      $scope.transactions = data;
    },function(error){
      toastr.error("UPS");
    });


}]);
paymentCtrl.controller('NewTransactionCtrl', ['$scope','Transaction',
	function($scope,Transaction) {
    $scope.new_transaction = {};

    $scope.SetPayment=function(type){
      $scope.payment=type;
      if(type=='cash')
        $scope.new_transaction.payment_type='cash';
    }

    $scope.CheckCard = function(){
      if($scope.new_transaction.card.length==16){
        if($scope.new_transaction.card.charAt(0)=='4'){
          $scope.new_transaction.payment_type='visa';
        }else if($scope.new_transaction.card.charAt(0)=='5'){
          $scope.new_transaction.payment_type='master';
        }else{
          $scope.new_transaction.payment_type=null;
          toastr.error("Tarjeta inválida, por favor utiliza VISA o MasterCard, gracias.");
        }
      }
    }
    var Validate = function(){
      status = true;
      var new_t = $scope.new_transaction;
      if(!(new_t.client && new_t.client!='')){
        status=false;
        toastr.error("Es necesario proporcionar el nombre del cliente");
      }
      if(!(new_t.email && new_t.email!='')){
        status=false;
        toastr.error("Es necesario proporcionar el email del cliente");
      }
      if(!(new_t.reference && new_t.reference!='')){
        status=false;
        toastr.error("Es necesario proporcionar la referencia");
      }
      if(!(new_t.amount && new_t.amount!='' && new_t.amount>0)){
        status=false;
        toastr.error("Es necesario proporcionar el total a transferir y que sea mayor a cero");
      }
      if($scope.payment){
        if(!(new_t.payment_type && new_t.payment_type=='cash')){
          if(!(new_t.card && new_t.card!='' && new_t.card.length==16)){
            status=false;
            toastr.error("Es necesario proporcionar una tarjeta válida");
          }
        }
      }else{
        status=false;
        toastr.error("Es necesario seleccionar un tipo de pago");
      }
      return status;
    }
    $scope.Submit=function(){
      if(Validate()){
        Transaction.save($scope.new_transaction,function(success){
          toastr.success("Transacción registrada correctamente");
          $scope.new_transaction={};
        },function(error){
          if(error.data.code=="E_VALIDATION")
            toastr.error("Estás intentando registrar una referencia existente, cambia la referencia e inténtalo de nuevo por favor.");
          else {
            toastr.error("Parece que hubo un error, revisa la información e inténtalo de nuevo, gracias.");
          }
        });
      }
    }
}]);
