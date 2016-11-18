/* Kevin Phillips
 * jQuery assignment
 * */
$(document).ready(function() {
    /*    $('#mobile').change(function() {
     // this will contain a reference to the checkbox
     if (this.checked) {
     // the checkbox is now checked
     alert("hi");
     } else {
     // the checkbox is now no longer checked
     }
     });*/

    /*    $('#mobile').change(function() {
     if($(this).is(":checked")) {
     var returnVal = confirm("Are you sure?");
     $(this).attr("checked", returnVal);
     }
     });*/

    $('#mobile').hide();

    $('#checkedYes').change(function(){
        if ($('#checkedYes').is(":checked")) {
            //alert("hi");
            $('#mobile').show();
                $("#phone").hover(function(){
                    $(this).css("background-color", "yellow");
                }, function(){
                    $(this).css("background-color", "lightcoral");
                });
        }else if ($('#checkedYes').not(":checked")){
            $('#mobile').hide();
        }
    });

    $('#prayer_phone').hide();
    $('#prayer_person').hide();
    $('#prayer_church').hide();
/*    $('#emails').hide();
    $('#submit').hide();*/


    $( "#phone_target" ).click(function() {
        $('#prayer_phone').show();
        $('#prayer_person').hide();
        $('#prayer_church').hide();
    });
    $( "#In_Person_target" ).click(function() {
        $('#prayer_person').show();
        $('#prayer_phone').hide();
        $('#prayer_church').hide();
    });
    $( "#At_Church_target" ).click(function() {
        $('#prayer_church').show();
        $('#prayer_phone').hide();
        $('#prayer_person').hide();
    });





    /*    $('#prayer_requests Phone').each(function() {
            if($(this).is(':selected'))*/

 /*           $('#prayer_requests').change(function(){
                if ($('#prayer_requests').val() == 'Phone') {
                    // $('.msg').html('Apples are a great seasonal choice!');
                    $('#phone_details').show();
                } else if ($('#prayer_requests').val() == 'Email') {
                    // $('.msg').html('Blueberries are my favorite!');
                } else if ($('#prayer_requests').val() == 'In-Person') {
                    // $('.msg').html('Our cherries are fresh, not from a can.');
                } else if ($('#prayer_requests').val() == 'At Church') {
                    // $('.msg').html('Happy Thanksgiving!');
                } else {
                    // $('.msg').html('Never heard of that filling. Better call and see if we have it.');
                }
            }); //end change
*/
});
