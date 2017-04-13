var AppController = (function () {
    function AppController($scope) {
        "ngInject";
        this.$scope = $scope;
        this.title = 'AppController';
    }
    AppController.prototype.$onInit = function () {
        console.log(this.$scope);
    };
    return AppController;
}());
export { AppController };
