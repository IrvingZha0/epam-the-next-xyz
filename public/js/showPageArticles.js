window.onload = function() {

  $.ajax({
    url: "/api/articles"
  }).done(function(data){
    //console.log(data);
    $.each(data, function(i, value){
       var url = value.url;
       var title = value.title;
       var summary = value.summary;
       var date = value.date;
       var author = value.author;
       var image = value.image;
       var id = value._id;

       // for system time : var myDate = new Date(date);
       var imageTag = '<div>'+'<img src="'+image+'" width="365" height="210px">'+'</div>';
       var titleTag = '<h4><a href="http://localhost:1337/article/' + id + '">' + title + '</a></h4>';
       // console.log(titleTag);
       // console.log(i);
       var summaryTag = '<p class="summary">' + summary + '</p>';
       var dateTag = '<p class="date">' + date + '</p>';
       var authorTag = '<p class="author">' + author + '</p>';
       // var dateTag = '<div>'+ date + '</div>';
       // var dateTag = '<div>'+ myDate.getDate() + '-' + (myDate.getMonth()+1) + '-' + myDate.getFullYear() + '</div>';
       //console.log($("#article-"+i));
       $(".article-"+i).append(imageTag);
       $(".article-"+i).append(titleTag);
       $(".article-"+i).append(summaryTag);
       $(".article-"+i).append(dateTag);
       $(".article-"+i).append(authorTag);


    });
  });
}

