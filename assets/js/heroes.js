 //////DO NOT DELETE BELOW THIS LINE
 // JS from demos2
//  $(document).ready(function () {
//    $("button").click(function () {
//      $("article").toggle();
//    });
//  });
//  // The code below taken from Stack Overflow from same issue from someone else's problem.
//  //this will execute on page load(to be more specific when document ready event occurs)
//  if ($('.ty-compact-list').length > 3) {
//    $('.ty-compact-list:gt(2)').hide();
//    $('.btn-heroes-pages').show();
//  }
//  $('.btn-heroes-pages').on('click', function () {
//    //toggle elements with class .ty-compact-list that their index is bigger than 2
//    $('.ty-compact-list:gt(2)').toggle();
//    //change text of show more element just for demonstration purposes to this demo
//    $(this).text() === 'Show less' ? $(this).text('Show less') : $(this).text('Show more');
//  });


// $(document).ready(function () {
//   $("button").click(function () {
//     $("article").toggle();
//   });

//   //this will execute on page load (when document ready event occurs)
//   if ($('.ty-compact-list').length > 3) {
//     $('.ty-compact-list:gt(2)').hide();
//     $('.btn-heroes-pages').text('Show more');
//   }
  
//   $('.btn-heroes-pages').on('click', function () {
//     //toggle elements with class .ty-compact-list that their index is bigger than 2
//     $('.ty-compact-list:gt(2)').toggle();
//     //change text of show more element based on visibility of elements
//     if ($('.ty-compact-list:gt(2)').is(':visible')) {
//       $(this).text('Show less');
//     } else {
//       $(this).text('Show more');
//     }
//   });
// });


$(document).ready(function () {
  $("button").click(function () {
    $("article").toggle();
  });

  // Show more/less functionality
  var compactListItems = $('.ty-compact-list');
  var numToShow = 6;
  var button = $('.btn-heroes-pages');
  var numInList = compactListItems.length;

  compactListItems.hide();
  if (numInList > numToShow) {
    button.show();
  }

  compactListItems.slice(0, numToShow).show();

  button.on('click', function () {
    var showing = compactListItems.filter(':visible').length;
    compactListItems.slice(showing - 1, showing - 1 + numToShow).toggle();
    var nowShowing = compactListItems.filter(':visible').length;
    if (nowShowing < numInList) {
      button.text('Show more');
    } else {
      button.text('Show less');
    }
  });
});