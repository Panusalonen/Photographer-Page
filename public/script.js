////// BASIC FUNCTIONALITY //////

$(document).ready(function(){
    $(this).scrollTop(0);
});
$(".bioImage2").on("mousedown", function(e) {
  e.preventDefault();
});

////// MODAL //////

var currElem;
var prevElem;
var nextElem;

$(function() {
  $("html").on("keydown", function(e) {
    if (e.which === 37) {
      var htmlImg =
        "<img id='modal-image2' src = '" + prevElem.attr("src") + "'>";
          $(".modalDiv").css({ display: "flex" });
          $(".modalDiv").html(htmlImg);
      currElem = prevElem;
      prevElem =
        $(currElem).prev().length
        ? $(currElem).prev()
        : $(".image-modal-div .modal-image:last-child");
      nextElem =
        $(currElem).next().length
        ? $(currElem).next()
        : $(".image-modal-div .modal-image:first-child");
    }
    if (e.which === 39) {
      var htmlImg =
        "<img id='modal-image2' src = '" + nextElem.attr("src") + "'>";
        $(".modalDiv").css({ display: "flex" });
        $(".modalDiv").html(htmlImg);
      currElem = nextElem;
      prevElem =
        $(currElem).prev().length
        ? $(currElem).prev()
        : $(".image-modal-div .modal-image:last-child");
      nextElem =
        $(currElem).next().length
        ? $(currElem).next()
        : $(".image-modal-div .modal-image:first-child");
    }
  });
});

////// IMAGE //////

$(".modal-image").on("click", e => {
    prevElem =
        $(e.target).prev().length
        ? $(e.target).prev()
        : $(".image-modal-div .modal-image:last-child");
    nextElem =
        $(e.target).next().length
        ? $(e.target).next()
        : $(".image-modal-div .modal-image:first-child");
    currElem =
        $(e.target);
    var htmlImg =
        "<img id='modal-image2' src = '" + $(e.target).attr("src") + "'>";
        $(".modalDiv").css({ display: "flex" });
        $(".modalDiv").html(htmlImg);
        $(".modalDiv").on("mousedown", function(e) {
            e.preventDefault();
            if (e.target !== this) {
                return;
            } else {
                console.log("we are here");
                e.target.style.display = "none";
        }
    });
});

////// VIDEO //////

$(".modal-video").on("click", e => {
    prevElem =
        $(e.target).prev().length
        ? $(e.target).prev()
        : $(".video-modal-div .modal-video:last-child");
    nextElem =
        $(e.target).next().length
        ? $(e.target).next()
        : $(".video-modal-div .modal-video:first-child");
    currElem = $(e.target);
    var htmlImg =
        "<img id='modal-video2' src = '" + $(e.target).attr("src") + "'>";
        $(".modalDiv").css({ display: "flex" });
        $(".modalDiv").html(htmlImg);
        $(".modalDiv").on("mousedown", function(e) {
            console.log(e.target, this);
            e.preventDefault();
            if (e.target !== this) {
                console.log("not the same");
                return;
            } else {
                console.log("we are here");
                e.target.style.display = "none";
        }
    });
});
