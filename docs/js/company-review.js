$(document).ready(function(){


/***************************
  обрезка текста
******************************/
  var reviews = [];
  
  const LENGTH_LIMIT_SHORT = 375,
        LENGTH_LIMIT_TINY = 175;

  const TYPE_REGULAR = 2,
        TYPE_SHORT = 1,
        TYPE_TINY = 0;


  $('.company-review-text').each( function(i){
    reviews[i] = {}

    reviews[i].id = i;
    reviews[i].element = $(this);
    reviews[i].text = $(this).text();
    reviews[i].unfolded = false;

    if(reviews[i].text.length <= LENGTH_LIMIT_TINY)
      reviews[i].basicType = TYPE_TINY;
    else if(reviews[i].text.length <= LENGTH_LIMIT_SHORT)
      reviews[i].basicType = TYPE_SHORT;
    else
      reviews[i].basicType = TYPE_REGULAR;

    reviews[i].displayMode = reviews[i].basicType;

    reviews[i].moreDOM = $(this).next('.link-more');
    reviews[i].switchTo = changeDisplayMode;
    reviews[i].unfold = unfold;
    reviews[i].fold = fold;

    reviews[i].moreDOM.on('click', function(e){
      e.preventDefault();
      if(!reviews[i].unfolded)
        reviews[i].unfold();
      else
        reviews[i].fold();
    });
  });

  function unfold(){
    this.unfolded = true;
    this.element.text(this.text);
    this.moreDOM.text("Скрыть");
  }

  function fold(){
    this.unfolded = false;
    switch(this.basicType){
      case TYPE_REGULAR:
        if(this.displayMode==TYPE_SHORT){
          this.element.text(this.shortText);
        }else if (this.displayMode==TYPE_TINY){
          this.element.text(this.tinyText);
        }
        break;
      case TYPE_SHORT:
        if (this.displayMode==TYPE_TINY){
          this.element.text(this.tinyText);
        }
        break;
    }
    this.moreDOM.text("Ещё");
  }

  function changeDisplayMode(mode){
    if(this.displayMode == mode)
      return;

    if(this.basicType == TYPE_TINY){
      this.displayMode = mode;
      return;
    }

    switch(mode){

      case TYPE_REGULAR:
        this.unfolded = false;
        this.moreDOM.text("Ещё");

        this.element.text(this.text);
        this.moreDOM.addClass('link-more--hide');
        break;

      case TYPE_SHORT:
        if(this.unfolded)
          break;
        if(this.basicType==TYPE_SHORT){
          this.element.text(this.text);
          this.moreDOM.addClass('link-more--hide');
        }
        else if(this.basicType==TYPE_REGULAR){

          if(this.shortText == null)
            this.shortText = trimText(this.text, LENGTH_LIMIT_SHORT);

          this.element.text(this.shortText);
          this.moreDOM.removeClass('link-more--hide');
        }
        break;

      case TYPE_TINY:
      default:
        if(this.unfolded)
          break;
        if(this.tinyText == null)
            this.tinyText = trimText(this.text, LENGTH_LIMIT_TINY);

        this.element.text(this.tinyText);
        this.moreDOM.removeClass('link-more--hide');
        break;

    }

    this.displayMode = mode;
  }

  function trimText(text, limit){
    return text.trim().substring(0, limit - 6)                                
                .split(" ").slice(0, -1).join(" ") + " … ";
  }

  var oldDisplayMode = TYPE_REGULAR;

  $(window).resize(function(){

    var bodyWidth = $('body').innerWidth();
    var newDisplayMode;

    if ( bodyWidth < 768)
      newDisplayMode = TYPE_TINY;
    else if ( bodyWidth < 1440 )
      newDisplayMode = TYPE_SHORT;
    else
      newDisplayMode = TYPE_REGULAR;
    
    if(newDisplayMode != oldDisplayMode){
      $.each(reviews, function(i, review){
        review.switchTo(newDisplayMode);
      });
    }

    oldDisplayMode = newDisplayMode;
      
  });  
     
  $(window).trigger('resize'); 


});