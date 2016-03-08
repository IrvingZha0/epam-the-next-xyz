var pathname = window.location.pathname;
var array=pathname.split('/');
var id = array[array.length-1];
var url = '/api/articles/'+id;
// console.log(url);
$.ajax({
  url: url,
  success:function(data){
    /*console.log(data);*/
    var title = data.title;
    var summary = data.summary;
    var date = data.date;
    var author = data.author;
    var image = data.image;


    var imageTag = '<div>'+'<img src="'+image+'" width="1100" height="400">'+'</div>';
    var titleTag = '<h2>' + title + '</a></h2>';
    var summaryTag = '<h5 class="summary">' + summary + '</h5>';
    var dateTag = '<h5 class="date">' + date + '</h5>';
    var authorTag = '<h5 class="author">' + author + '</h5>';

    $(".article").append(imageTag);
    $(".article").append(titleTag);
    $(".article").append(summaryTag);
    $(".article").append(dateTag);
    $(".article").append(authorTag);
  },
  error:function(err){
    console.log(err);
  }


})