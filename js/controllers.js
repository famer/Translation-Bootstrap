var translationBootstrapApp = angular.module('translationBootstrapApp', []);

translationBootstrapApp.controller('TranslationListCtrl', function ($scope) {
  $scope.translations = [
    {
	'name': 'Hello',
	'default': 'hello',
	'snippet': 'Greeting in lanaguages',
	'list': {
		"en": "hello",
		"sp": "hola",
		"cz": "ahoj"
	},
	'image': 'hello.png'
     
},
    {'name': 'Cancel',
     'snippet': 'Cancel message',
	'default': 'Cancel',
	'list': {
		"en": "Cancel",
		"sp": "Cancela",
		"cz": "Cansile"
	},
	'image': 'cancel.png'
},
    {'name': 'OK',
     'snippet': 'Agreement message for modal dialogues',
	'default': 'OK',
	'list': {
		"en": "OK",
		"sp": "OKi",
		"cz": "Ano"
	},
	'image': 'ok.png'
	}
  ];
})
.filter('highlight', function($sce) {
  return function(text, phrase) {
    if (phrase) text = text.replace(new RegExp('('+phrase+')', 'gi'),
      '<span class="ui-match">$1</span>')

    return $sce.trustAsHtml(text)
  }
});