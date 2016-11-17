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

});
