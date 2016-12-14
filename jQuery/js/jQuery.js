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

    /* jCanvas (Assignment 3 continued) */

    $('#clear_jCanvas').click(function(){
        $('#canvas_main').clearCanvas();
    });

    $('#button_draw_shapes').click(function(){
        $('#canvas_main').clearCanvas().drawRect({
            fillStyle: '#c33',
            x: 300, y: 90,
            width: 200,
            height: 180
        })
        .drawPolygon({
            strokeStyle: 'orange',
            strokeWidth: 4,
            x: 450, y: 200,
            radius: 150,
            sides: 3
        });
    });

    $('#shape_preferences').change(function(){
        if($('#shape_preferences').val() == 'triangle') {
            $('#canvas_main').clearCanvas().drawPolygon({
                strokeStyle: 'black',
                strokeWidth: 4,
                x: 200, y: 100,
                radius: 50,
                sides: 3
            });
        } else if ($('#shape_preferences').val() == 'rectangle') {
            $('#canvas_main').clearCanvas().drawRect({
                fillStyle: '#000',
                x: 150, y: 100,
                width: 200,
                height: 100
            });
        } else if ($('#shape_preferences').val() == 'circle') {
            $('#canvas_main').clearCanvas().drawArc({
                strokeStyle: '#000',
                strokeWidth: 5,
                x: 100, y: 100,
                radius: 50
            });
        } else {
            $('#canvas_main').clearCanvas().drawVector({
                strokeStyle: '#000',
                strokeWidth: 4,
                rounded: true,
                endArrow: true,
                arrowRadius: 15,
                arrowAngle: 80,
                x: 50, y: 50,
                a1: 180, l1: 100,
                a2: 90, l2: 100
            });
        }
    });

});
