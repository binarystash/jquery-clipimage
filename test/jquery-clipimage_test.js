(function($) {
  /*
    ======== A Handy Little QUnit Reference ========
    http://api.qunitjs.com/

    Test methods:
      module(name, {[setup][ ,teardown]})
      test(name, callback)
      expect(numberOfAssertions)
      stop(increment)
      start(decrement)
    Test assertions:
      ok(value, [message])
      equal(actual, expected, [message])
      notEqual(actual, expected, [message])
      deepEqual(actual, expected, [message])
      notDeepEqual(actual, expected, [message])
      strictEqual(actual, expected, [message])
      notStrictEqual(actual, expected, [message])
      throws(block, [expected], [message])
  */

  module('jQuery#clipimage', {
    // This will run before each test in this module.
    setup: function() {
      this.elems = $('#qunit-fixture').children();
    }
  });

  test('is_detection_correct', function() {
   
    if ( this.elems.find("img").clipimage("isCanvasSupported") ) {
      expect(1);
      strictEqual(this.elems.find("img").clipimage().parent().find("canvas").length, 1, 'should be canvas');
    }
    else if ( this.elems.find("img").clipimage("isVmlSupported") ) {
      expect(1);
	$("img").hide();
      strictEqual(this.elems.find("img").clipimage().parent().children().not("img").length, 1, 'should be VML');
    }
  });

}(jQuery));
