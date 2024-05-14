var $grid = $('.grid').isotope({
    itemSelector: '.card__room',
    layoutMode: 'fitRows',
    filter: ''
  });
  
  var filterFns = {


  };
  // bind filter button click
  $('.filters-button-group button').on('click',  function () {
    
    var filterValue = $(this).attr('data-filter');
    // use filterFn if matches value
    filterValue = filterFns[filterValue] || filterValue;
    $grid.isotope({ filter: filterValue });
  });
  // change is-checked class on buttons
  $('.button-group').each(function (i, buttonGroup) {
    var $buttonGroup = $(buttonGroup);
    $buttonGroup.on('click', 'button', function () {
      $buttonGroup.find('.is-checked').removeClass('is-checked');
      $(this).addClass('is-checked');
    });
  });

  $(window).on('scroll', function () {
    if ($(window).scrollTop() > 10) {
      $('.header').addClass('scrolled');
    } else {
      $('.header').removeClass('scrolled');
    }
  })

  $('input:not([type="checkbox"]), textarea').on('focus', function() {
    if ($(this).val().trim() !== '') {
      $(this).closest('.form-group').addClass('filled');
    }
}).on('blur', function() {
    if ($(this).val().trim() === '') {
      $(this).closest('.form-group').removeClass('filled');
    }
}).on('input', function() {
    if ($(this).val().trim() !== '') {
      $(this).closest('.form-group').addClass('filled');
    } else {
      $(this).closest('.form-group').removeClass('filled');
    }
});


  $('.password-toggler').on('click', function() {
    var inputField = $(this).siblings('input');
    var newType = inputField.attr('type') === 'password' ? 'text' : 'password';
    inputField.attr('type', newType);
    $(this).toggleClass('shown');
  });

$('#filter-btn').on('click', function() {

$(this).toggleClass('reverse');
  $('.filter-wrap').slideToggle(300);
  $('body').toggleClass('overflow-hidden');
})