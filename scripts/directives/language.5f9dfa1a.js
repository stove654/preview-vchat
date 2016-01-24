'use strict';

/**
 * @ngdoc overview
 * @name restTabApp
 * @description
 * # restTabApp
 *
 * Main module of the application.
 */
angular.module('starter')
  .directive('selectLanguage', function() {
    return {
      restrict: 'AE',
      replace: true,
      templateUrl: 'scripts/directives/select_language.html',
      controller: function($scope, $translate, localStorageService) {

        $scope.locales = [
          {
            name: 'English',
            img: './images/en.99f4dffe.png',
            locate: 'en'
          },
          {
            name: 'Tiếng Việt',
            img: './images/vi.5b0b4a80.png',
            locate: 'vi'
          }
        ];

        $scope.selectLangId = function (lang) {
          $scope.selectedLang = lang;
          $translate.use($scope.selectedLang.locate);
          localStorageService.set('language', lang)
        };

        var _init = function () {
          if (localStorageService.get('language')) {
            $scope.selectedLang = localStorageService.get('language');
          } else {
            $scope.selectedLang = $scope.locales[0]
          }
          $translate.use($scope.selectedLang.locate);
        };
        _init();
      }
    };
  });