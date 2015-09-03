describe('SongQueueView', function() {
  var view, fakeSongs;

  beforeEach(function() {
    fakeSongs = new SongQueue([
      {
        artist: 'data',
        url: "https://s3-us-west-1.amazonaws.com/hr-mytunes/data/04+One+In+A+Million.mp3",
        title:'test song'
      },
      {
        artist: 'data',
        url: "https://s3-us-west-1.amazonaws.com/hr-mytunes/data/03+Age+Ain%27t+Nothing+But+A+Number.mp3",
        title:'test song 2'
      }
    ]);
  });

  it('creates SongQueueEntryViews for each queued song & renders them', function(){
    sinon.spy(SongQueueEntryView.prototype, 'render');
    view = new SongQueueView({collection: fakeSongs});
    view.render();
    expect(SongQueueEntryView.prototype.render).to.have.been.called;
  });

  it('renders when add or remove event fires from the song queue collection', function(){
    sinon.spy(SongQueueView.prototype, 'render');
    view = new SongQueueView({collection: fakeSongs});
    view.collection.add({
      artist: 'data',
      url: "https://s3-us-west-1.amazonaws.com/hr-mytunes/data/05+Hot+Like+Fire.mp3",
      title:'test song 3'
    });
    view.collection.pop();
    expect(view.render).to.have.been.called;
  });

});
