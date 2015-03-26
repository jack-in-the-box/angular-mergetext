describe('mergetext', function() {
  beforeEach(module('mergetext'));

  describe('Testing mergetext service', function() {
    var mergetextService;

    beforeEach(inject(function(mergetext) {
      mergetextService = mergetext;
    }));



    it('Simple diff un seul mot', function(){
      var oldText = 'Bonjour madame Michou';
      var newText = 'Bonjour monsieur Michou';
      var expectResult = 'Bonjour <ins>monsieur</ins><del>madame</del> Michou';

      expect(mergetextService.diffToHtml(mergetextService.diff(oldText, newText))).toEqual(expectResult);
    });

    it('Html diff', function(){
      var oldText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' + 
        'Quod, maxime? Quae praesentium, provident corporis quo dolor,' + 
        ' illo porro <strong>earum debitis</strong>, dolores alias laboriosam quisquam molestias.' + 
        ' Sequi nesciunt voluptates nisi similique.';
      var newText = 'Début Lorem ipsum dolor sit amet, Michou adipisicing elit. ' + 
        'Quod, maxime? Quae praesentium, lorem corporis quo dolor,' + 
        ' illo porro <strong>earum debitis</strong>, dolores alias laboriosam quisquam molestias.' + 
        ' Sequi nesciunt voluptates nisi similique.';

      var expectResult =  '<ins>Début </ins>Lorem ipsum dolor sit amet, ' + 
        '<ins>Michou</ins><del>consectetur</del> adipisicing elit. Quod, maxime? Quae praesentium, ' +
        '<ins>lorem</ins><del>provident</del> corporis quo dolor, illo porro <strong>earum debitis</strong>, ' + 
        'dolores alias laboriosam quisquam molestias. Sequi nesciunt voluptates nisi similique.';

      expect(mergetextService.diffToHtml(mergetextService.diff(oldText, newText))).toEqual(expectResult);
    });
  });
});
