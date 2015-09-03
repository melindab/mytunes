// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    this.on('add', function(song) {
      console.log(song);
      if (this.length === 1) {
        this.playFirst();
      }
    }, this);

    this.on('ended', function() { 
      this.dequeue();
      if (this.length > 0) {
        this.playFirst();
      }
    }, this);

    this.on('dequeue', function() { 
      this.dequeue();
    }, this);
  },
  
  enqueue: function(song) {  
      this.push(song);
  },

  dequeue: function() {
    this.shift();
  },

  playFirst: function() {
    this.at(0).play();
  },

  playNextSong: function() {
    this.at(1).play();
  }


});
