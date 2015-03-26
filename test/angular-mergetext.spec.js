describe('mergetext', function() {
  beforeEach(module('mergetext'));

  describe('Testing mergetext service', function() {
    var mergetextService;

    beforeEach(inject(function(mergetext) {
      mergetextService = mergetext;
    }));

    it('should work', function(){
      var test = mergetextService.test()
      expect(test).toBe(true);
    });

  });
});
