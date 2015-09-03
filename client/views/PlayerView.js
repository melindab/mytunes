// PlayerView.js - Defines a backbone view class for the music player.
var PlayerView = Backbone.View.extend({


  // This physically plays the song
  
  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  el: '<audio controls autoplay />',

  initialize: function() {
  },

  //events relate to DOM elements

  events: {
    'ended': function() {
      this.model.ended();
    }
  },



  setSong: function(song){
    this.model = song;
    this.render();
  },

  render: function(){
    return this.$el.attr('src', this.model ? this.model.get('url') : '');
  }

});
