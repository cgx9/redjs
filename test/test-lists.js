const Redjs = require('..');
const redjs = new Redjs()
const assert = require('assert');

describe('Lists', function() 
{

	/* LPUSH */
  	describe('lpush list1 var2 var1', function() {
	    it('should return 2', function( done ) {
	    	redjs.lpush('list1', 'var2', 'var1')
	    	.then( function(r){
	    		assert.equal(r, 2);
	    		done()
	    	})
	    	.catch( done )
	    });
  	});

  	/* LLEN */
 	describe('llen list1', function() {
	    it('should return 2', function( done ) {
	    	redjs.llen('list1')
	    	.then( function(r){
	    		assert.equal(r, 2);
	    		done()
	    	})
	    	.catch( done )
	    });
  	});

 	/* RPOP */
	describe('rpop list1', function() {
	    it('should return var2', function( done ) {
	    	redjs.rpop('list1')
	    	.then( function(r){
	    		assert.equal(r, 'var2');
	    		done()
	    	})
	    	.catch( done )
	    });
  	});	

  	describe('llen list1', function() {
	    it('should return 1', function( done ) {
	    	redjs.llen('list1')
	    	.then( function(r){
	    		assert.equal(r, 1);
	    		done()
	    	})
	    	.catch( done )
	    });
  	});


  	/* LPOP */
	describe('lpush list1 var0', function() {
	    it('should return 2', function( done ) {
	    	redjs.lpush('list1', 'var0')
	    	.then( function(r){
	    		assert.equal(r, 2);
	    		done()
	    	})
	    	.catch( done )
	    });
  	});	

  	describe('lpop list1', function() {
	    it('should return var0', function( done ) {
	    	redjs.lpop('list1')
	    	.then( function(r){
	    		assert.equal(r, 'var0');
	    		done()
	    	})
	    	.catch( done )
	    });
  	});

  	describe('llen list1', function() {
	    it('should return 1', function( done ) {
	    	redjs.llen('list1')
	    	.then( function(r){
	    		assert.equal(r, 1);
	    		done()
	    	})
	    	.catch( done )
	    });
  	});

  	/* RPUSH */
  	describe('rpush list2 var1 var2', function() {
	    it('should return 2', function( done ) {
	    	redjs.rpush('list2', 'var1', 'var2')
	    	.then( function(r){
	    		assert.equal(r, 2);
	    		done()
	    	})
	    	.catch( done )
	    });
  	});

  	/* LINDEX */
  	describe('lindex list2 0', function() {
	    it('should return var1', function( done ) {
	    	redjs.lindex('list2', 0)
	    	.then( function(r){
	    		assert.equal(r, 'var1');
	    		done()
	    	})
	    	.catch( done )
	    });
  	});
  	describe('lindex list2 -1', function() {
	    it('should return var2', function( done ) {
	    	redjs.lindex('list2', -1)
	    	.then( function(r){
	    		assert.equal(r, 'var2');
	    		done()
	    	})
	    	.catch( done )
	    });
  	});
  	
  	describe('lindex list2 -3', function() {
	    it('should return null', function( done ) {
	    	redjs.lindex('list2', -3)
	    	.then( function(r){
	    		assert.equal(r, null);
	    		done()
	    	})
	    	.catch( done )
	    });
  	});

  	describe('lindex list2 3', function() {
	    it('should return null', function( done ) {
	    	redjs.lindex('list2', 3)
	    	.then( function(r){
	    		assert.equal(r, null);
	    		done()
	    	})
	    	.catch( done )
	    });
  	});

  	/* LSET */
  	describe('lset list2 1 toto', function() {
	    it('should return "OK"', function( done ) {
	    	redjs.lset('list2', 1, 'toto')
	    	.then( function(r){
	    		assert.equal(r, 'OK');
	    		done()
	    	})
	    	.catch( done )
	    });
  	});

  	describe('lindex list2 1', function() {
	    it('should return "toto"', function( done ) {
	    	redjs.lindex('list2', 1)
	    	.then( function(r){
	    		assert.equal(r, 'toto');
	    		done()
	    	})
	    	.catch( done )
	    });
  	});

  	describe('lset list2 -1 tutu', function() {
	    it('should return "OK"', function( done ) {
	    	redjs.lset('list2', 1, "tutu")
	    	.then( function(r){
	    		assert.equal(r, 'OK');
	    		done()
	    	})
	    	.catch( done )
	    });
  	});

  	describe('lindex list2 -1', function() {
	    it('should return "tutu"', function( done ) {
	    	redjs.lindex('list2', 1)
	    	.then( function(r){
	    		assert.equal(r, 'tutu');
	    		done()
	    	})
	    	.catch( done )
	    });
  	});

  	describe('lset list2 3 tutu', function() {
	    it('should return "out of range" error', function( done ) {
	    	redjs.lset('list2', 3, "tutu")
	    	.then( function(r){
	    		done("response does not contains error: "+r)	
	    	})
	    	.catch( function(err){
	    		if (err.toString().toLowerCase().indexOf('out of range') >= 0)
	    			done()
	    		else
	    			done(err)
	    	})
	    });
  	});


  	// * LINSERT */
  	
  	describe('linsert list3 AFTER toto var00', function() {
	    it('should return -1 beacause key does not exist', function( done ) {
	    	redjs.linsert('list3', "AFTER", "toto", "var00")
	    	.then( function(r){
	    		assert.equal(r, -1);
	    		done()
	    	})
	    	.catch( done )
	    });
  	});

  	describe('rpush list3 var1 var2 var3 var4', function() {
	    it('should return 4', function( done ) {
	    	redjs.rpush('list3', "var1", "var2", "var3", "var4")
	    	.then( function(r){
	    		assert.equal(r, 4);
	    		done()
	    	})
	    	.catch( done )
	    });
  	});
  	describe('linsert list3 BEFORE var2 var1.1', function() {
	    it('should return 5', function( done ) {
	    	redjs.linsert('list3', "BEFORE", "var2", "var1.1")
	    	.then( function(r){
	    		assert.equal(r, 5);
	    		done()
	    	})
	    	.catch( done )
	    });
  	});
  	describe('lindex list3 1', function() {
	    it('should return var1.1', function( done ) {
	    	redjs.lindex('list3', 1)
	    	.then( function(r){
	    		assert.equal(r, "var1.1");
	    		done()
	    	})
	    	.catch( done )
	    });
  	});

  	describe('linsert list3 BEFORE var1 var0', function() {
	    it('should return 6', function( done ) {
	    	redjs.linsert('list3', "BEFORE", "var1", "var0")
	    	.then( function(r){
	    		assert.equal(r, 6);
	    		done()
	    	})
	    	.catch( done )
	    });
  	});
  	describe('lindex list3 0', function() {
	    it('should return var0', function( done ) {
		    redjs.lindex('list3', 0)
		    .then( function(r){
		    	assert.equal(r, "var0");
		    	done()
		    })
		    .catch( done )
	    });
  	});


  	describe('linsert list3 AFTER var4 var4.1', function() {
	    it('should return 7', function( done ) {
	    	redjs.linsert('list3', "AFTER", "var4", "var4.1")
	    	.then( function(r){
	    		assert.equal(r, 7);
	    		done()
	    	})
	    	.catch( done )
	    });
  	});

  	describe('lindex list3 6', function() {
	    it('should return var1.1', function( done ) {
	    	redjs.lindex('list3', 6)
	    	.then( function(r){
	    		assert.equal(r, "var4.1");
	    		done()
	    	})
	    	.catch( done )
	    });
  	});

  	describe('linsert list3 AFTER toto var00', function() {
	    it('should return -1 beacause pivot does not exist', function( done ) {
	    	redjs.linsert('list3', "AFTER", "toto", "var00")
	    	.then( function(r){
	    		assert.equal(r, -1);
	    		done()
	    	})
	    	.catch( done )
	    });
  	});

});
