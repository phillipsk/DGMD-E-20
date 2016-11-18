/* Kevin Phillips
 * jQuery assignment
 * */
$(document).ready(function() {

    $('#mobile').hide();

    $('#checkedYes').change(function () {
        if ($('#checkedYes').is(":checked")) {
            //alert("hi");
            $('#mobile').show();
            $("#phone").hover(function () {
                $(this).css("background-color", "yellow");
            }, function () {
                $(this).css("background-color", "lightcoral");
            });
        } else if ($('#checkedYes').not(":checked")) {
            $('#mobile').hide();
        }
    });


    /* My second form not related to the "grading form" I merely used and additional form
     * here to convey my knowledge of jQuery
     * */

    $('#prayer_phone').hide();
    $('#prayer_person').hide();
    $('#prayer_church').hide();
    $('#maincontent p:first').removeClass('addColor');


    $("#phone_target").click(function () {
        $('#prayer_phone').show();
        $('#maincontent p:first').addClass('addColor');
        $('#prayer_person').hide();
        $('#prayer_church').hide();
    });
    $("#In_Person_target").click(function () {
        $('#prayer_person').show();
        $('#prayer_person').css('font-size', '.7em');
        $('#prayer_person').css('font-family', 'Droid Arabic Naskh');
        $('#maincontent p:first').removeClass('addColor');
        $('#prayer_phone').hide();
        $('#prayer_church').hide();
    });
    $("#At_Church_target").hover(function () {
            $('#prayer_church').show();
            $('#maincontent p:first').removeClass('addColor');
            $('#prayer_person').hide();
            $('#prayer_phone').hide();
            $('#At_Church_target').css('color', 'blue');
            $('#prayer_church').css('color', 'green');
        },
        function () {
            $('#prayer_church').hide();
            $('#At_Church_target').css('color', 'black');
        });

/* My own events */

    $('#Location_preferences').change(function () {
        if ($('#Location_preferences').val() == 'library') {
            $('li:even').css('font-size','2em');
        } else if ($('#Location_preferences').val() == 'college') {
            $('li:odd').css('font-size','2em');
            $('li:even').css('font-size','1em');
        } else if ($('#Location_preferences').val() == 'home') {
            $('li:odd').css('text-transform','uppercase');
        } else if ($('#Location_preferences').val() == 'other') {
            $('li:even').css('font-size','1em');
        } else {
        }
    });


});
