window.onload = function() {

var pathname = window.location.pathname;
var id=pathname.substring(pathname.length-1);

  $.ajax({
    url: '/api/articles'+'/'+id,
  }).done(function(data){
    //console.log(data);
    $.each(data, function(i, value){

       var url = value.url;

       var title = value.title;
       var summary = value.summary;
       var date = value.date;
       var author = value.author;
       var image = value.image;


       // for system time : var myDate = new Date(date);
       var imageTag = '<div>'+'<img src="'+image+'" width="1100" height="400">'+'</div>';
       var titleTag = '<h2>' + title + '</a></h2>';
       var summaryTag = '<p class="summary">' + summary + '</p>';
       var dateTag = '<p class="date">' + date + '</p>';
       var authorTag = '<p class="author">' + author + '</p>';
       // var dateTag = '<div>'+ date + '</div>';
       // var dateTag = '<div>'+ myDate.getDate() + '-' + (myDate.getMonth()+1) + '-' + myDate.getFullYear() + '</div>';
       //console.log($("#article-"+i));
       $(".article").append(imageTag);
       $(".article").append(titleTag);
       $(".article").append(summaryTag);
       $(".article").append(dateTag);
       $(".article").append(authorTag);


    });
  });
}

