angular.module('MyApp')
  .controller('MainCtrl', ['$scope', 'Show', function($scope, Show) {

  

    $scope.sites = ['Addenbrookes Hospital', 'Queen Elizabeth Hospital Birningham', 'Ipswich Hospital', 'Great Ormond Street Hospital', 'Imperial College Healthcare NHS Trust',
      'University College London', 'Royal London Hospital', 'Oxford University Hospital', 'James Cook University Hospital', 'Queen Hospital Romford', 'Nottingham University Hospitals',
      'Royal Sussex Hospital Brighton', 'Chapel Allerton Hospital Leeds', 'Tallaght Hospital', 'Cork University Hospital', 'Hanusch Hospital', 'Charles University Prague',
      'University Hospital of Ludwigschafen', 'University of Luebek', 'The University Medical Center Groningen', 'University of Maastricht', 'University of Barcelona', 'Universitat Autonoma de Barcelona',
      'University Hospital Basel', 'University of Pennsylvania', 'Cleveland Clinic Foundation', 'University of Pittsburgh', 'University of Utah', 'New York Hospital for Special Surgery', 
      'McMaster University Hamilton', 'Mount Sinai Hospital Toronto', 'Royal Adelaide Hospital', 'Canberra Hospital', 'North Shore Hospital', 
      'Auckland City Hospital', 'Waikato Hospital', 'Kitano Hospital', 'Chiba Hospital', 'University of Miyazaki', 'Okayama University', 'Teikyo University'];

    $scope.types = ['Unanswered', 'Answered']

   
    $scope.headingTitle = 'Queries';

    $scope.shows = Show.query();

     $scope.filterByType = function(type) { 
        $scope.shows = Show.query({ type : type }); 
        $scope.headingTitle =  type + " Queries"; 
    }; 


    $scope.filterBySite = function(site) {
      $scope.shows = Show.query({ site: site });
      $scope.headingTitle = site;
    };

   
  }]);