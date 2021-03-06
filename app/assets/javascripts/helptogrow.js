$( document ).ready(function() {

  $(".govuk-error-summary, .govuk-error-message").hide();

  // form validation for select-software-category page
  $('.select-software-category').on("click", function() {
    if (!$("input[name='select-software-category']:checked").val()) {
      $("div").closest(".govuk-form-group").addClass("govuk-form-group--error");
      $(".govuk-error-summary, .govuk-error-message").show();
      return false;
    }
  });

  // form validation for select-crm-software page
  $('.select-crm-software').on("click", function() {
    if (!$("input[name='select-software']:checked").val()) {
      $("div").closest(".govuk-form-group").addClass("govuk-form-group--error");
      $(".govuk-error-summary, .govuk-error-message").show();
      return false;
    }
  });

  // form validation for new to software page
  $('.select-software-purchase').on("click", function() {
    if (!$("input[name='new-to-software']:checked").val()) {
      $("div").closest(".govuk-form-group").addClass("govuk-form-group--error");
      $(".govuk-error-summary, .govuk-error-message").show();
      return false;
    }
  });

  // form validation for new to software page
  $('.select-existing-customer').on("click", function() {
    if (!$("input[name='existing-customer']:checked").val()) {
      $("div").closest(".govuk-form-group").addClass("govuk-form-group--error");
      $(".govuk-error-summary, .govuk-error-message").show();
      return false;
    }
  });

  // form validation for major upgrade page
  $('.major-upgrade').on("click", function() {
    if (!$("input[name='major-upgrade']:checked").val()) {
      $("div").closest(".govuk-form-group").addClass("govuk-form-group--error");
      $(".govuk-error-summary, .govuk-error-message").show();
      return false;
    }
  });

  // form validation for addons page
  $('.add-ons').on("click", function() {
    if (!$("input[name='add-on']:checked").val()) {
      $("div").closest(".govuk-form-group").addClass("govuk-form-group--error");
      $(".govuk-error-summary, .govuk-error-message").show();
      return false;
    }
  });

  // form validation for account software page
  $('.account-software').on("click", function() {
    if (!$("input[name='select-software']:checked").val()) {
      $("div").closest(".govuk-form-group").addClass("govuk-form-group--error");
      $(".govuk-error-summary, .govuk-error-message").show();
      return false;
    }
  });

  // form validation for select ecommerce page
  $('.select-ecommerce').on("click", function() {
    if (!$("input[name='select-software']:checked").val()) {
      $("div").closest(".govuk-form-group").addClass("govuk-form-group--error");
      $(".govuk-error-summary, .govuk-error-message").show();
      return false;
    }
  });

  // form validation for company size page
  // $('.company-size').on("click", function() {
  //   if (!$("input[name='company-size']:checked").val()) {
  //     $("div").closest(".govuk-form-group").addClass("govuk-form-group--error");
  //     $(".govuk-error-summary, .govuk-error-message").show();
  //     return false;
  //   }
  // });

  // form validation for company size page
  // $('.company-house').on("click", function() {
  //   if (!$("input[name='company-number']:checked").val()) {
  //     $("div").closest(".govuk-form-group").addClass("govuk-form-group--error");
  //     $(".govuk-error-summary, .govuk-error-message").show();
  //     return false;
  //   }
  // });

  // form validation for company size page
    $('.company-size').on("click", function(event) {
      if (!$("input[name='companies-size']").val()) {
        $("div").closest(".govuk-form-group").addClass("govuk-form-group--error");
        $(".govuk-error-summary, .govuk-error-message").show();
        return false;
      }
    });

    $("#companies-size").keypress(function (e) {
      if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
          return false;
     }
    });


  // form validation for company house number page
  $('.company-house-number').on("click", function(event) {
    if (!$("input[name='companies-house-number']").val()) {
      $("div").closest(".govuk-form-group").addClass("govuk-form-group--error");
      $(".govuk-error-summary, .govuk-error-message").show();
      return false;
    }
  });


  $("#companies-house-number").keypress(function (e) {
    if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
        return false;
   }
  });


  // form validation for fca number page
  $('.fca-number').on("click", function() {
    if (!$("input[name='fca-number']").val()) {
      $("div").closest(".govuk-form-group").addClass("govuk-form-group--error");
      $(".govuk-error-summary, .govuk-error-message").show();
      return false;
    }
  });

  // form validation for applicant name page
  $('.applicant-name').on("click", function() {
    if (!$("input[name='applicant-name']").val()) {
      $("div").closest(".govuk-form-group").addClass("govuk-form-group--error");
      $(".govuk-error-summary, .govuk-error-message").show();
      return false;
    }
  });

  // form validation for applicant business role page
  $('.business-role').on("click", function() {
    if (!$("input[name='business-role']").val()) {
      $("div").closest(".govuk-form-group").addClass("govuk-form-group--error");
      $(".govuk-error-summary, .govuk-error-message").show();
      return false;
    }
  });

  // form validation for applicant work email page
  // $('.work-email').on("click", function() {
  //   if (!$("input[name='email']").val()) {
  //     $("div").closest(".govuk-form-group").addClass("govuk-form-group--error");
  //     $(".govuk-error-summary, .govuk-error-message").show();
  //     return false;
  //   }
  // });




  // form validation for indessa check
  $('#experian-check').on("click", function() {
    window.alert({number: companies-house-number});
    // var companyNumber = {{'companies-house-number'}};
    /*if (companyNumber == '22222' {
      location.href = '../token-not-issued.html';
    } else {
      location.href = '../token-issued.html';
    }*/
  });


  $('.work-email').click(function(e) {
    var sEmail = $("input[name='email']").val();
    if ($.trim(sEmail).length == 0) {
        // alert('Please enter valid email address');
        $("input:text").val("Not an email address");
        e.preventDefault();
    }
    if (validateEmail(sEmail)) {
        console.log('Email is valid');
    }
    else {
        $("div").closest(".govuk-form-group").addClass("govuk-form-group--error");
        $(".govuk-error-summary, .govuk-error-message").show();
        $("input:text").val("Not an email address");
        e.preventDefault();
    }
});

  $('.phone-number').click(function(e) {
    if ($('input[name=\'phone\']').val().length !== 0) {

    } else {
      $('div').closest('.govuk-form-group').addClass('govuk-form-group--error')
      $('.govuk-error-summary, .govuk-error-message').show()
      $('input:text').val('Enter your phone number')
      e.preventDefault()
    }
  })



function validateEmail(sEmail) {
  var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
  if (filter.test(sEmail)) {
      return true;
  }
  else {
      return false;
  }
}



// form validation for terms and conditions page
  $('.terms-policy-update').submit(function () {
    var sEmail = $("input[name='work-email']").val()

    if ($('input:checkbox', this).length !== $('input:checked', this).length) {
      // alert('0')
      if (!validateEmail(sEmail) && ($("input[name='phone-number']").val().length >= 2)) {
        // alert('error1')
        $('div').closest('.govuk-form-group').addClass('govuk-form-group--error')
        $('.govuk-error-summary, #terms-policy').show()
        $('#error-summary-title-sme-details, #errorphonenumber, #erroremail').hide()
      }

      if (!validateEmail(sEmail) && ($("input[name='phone-number']").val().length === 0)) {
        // alert('error2')
        $('div').closest('.govuk-form-group').addClass('govuk-form-group--error')
        $('.govuk-error-summary, #terms-policy, #erroremail, #errorphonenumber').show()
        $('#error-summary-title-sme-details').hide()
      }

      if (validateEmail(sEmail) && ($("input[name='phone-number']").val().length >= 2)) {
        // alert('error3')
        $('div').closest('.govuk-form-group').addClass('govuk-form-group--error')
        $('.govuk-error-summary, #terms-policy').show()
        $('#error-summary-title-sme-details').hide()
      }
      return false
    }

    if ($('input:checkbox', this).length === $('input:checked', this).length) {

      if (!validateEmail(sEmail) && ($("input[name='phone-number']").val().length === 0)) {
        // alert('error4')
        $('div').closest('.govuk-form-group').addClass('govuk-form-group--error')
        $('#error-summary-title-sme-details, #erroremail, #errorphonenumber').show()
        $('#error-summary-title').hide()
        return false
      }
    }

  });




  $('.terms-policy-update1').submit(function () {

    if ($('input[name=terms-policy]:checked').length !== 3) {
      $('div').closest('.govuk-form-group').addClass('govuk-form-group--error')
      $('.govuk-error-summary, .govuk-error-message').show()
      return false
    }

    /*else if ($('input[name=optional]:checked').length === 0) {
      alert('email')
      return false
    }*/

  })

  /*$('.marketing').submit(function () {

    if ($('input[name=terms-policy]:checked').length !== 3) {
      alert('policy')
    } else if ($('input[name=optional]:checked').length === 0) {
      alert('email')
      return false
    }

  })*/


  // form validation for terms and conditions page
  $('.terms-policy').submit(function() {
    if ($('input:checkbox', this).length == $('input:checked', this).length ) {
            // alert("all checkboxes have been checked");
    } else {
          $("div").closest(".govuk-form-group").addClass("govuk-form-group--error");
          $(".govuk-error-summary, .govuk-error-message").show();
          return false;
    }
 });

  // form validation for filterTable page
  $('.select-product').on("click", function() {
    if (!$("input[name='product-name']:checked").val()) {
      $("div").closest(".filter-table").addClass("govuk-form-group--error");
      $(".govuk-error-summary, .govuk-error-message").show();
      return false;
    }
  });

});
