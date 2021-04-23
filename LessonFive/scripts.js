        //makes sure that scripts don't start running
        //until the page has fully loaded
        $(document).ready(function(){
            //starts off by hiding ICANN and WWWC class' elements
            $(".ICANN").hide();
            $(".WWWC").hide();
            //clicking on the element with id=IETF shows IETF class' elements and hides the others'
            $("#IETF").click(function(){
                $(".IETF").show();
                $(".ICANN").hide();
                $(".WWWC").hide();
                $("#IETF").addClass("active");
                $("#ICANN").removeClass("active");
                $("#WWWC").removeClass("active");
            });
            //clicking on the element with id=ICANN shows ICANN class' elements and hides the others'
            $("#ICANN").click(function(){
                $(".ICANN").show();
                $(".IETF").hide();
                $(".WWWC").hide();
                $("#ICANN").addClass("active");
                $("#IETF").removeClass("active");
                $("#WWWC").removeClass("active");
            });
            //clicking on the element with id=WWWC shows the WWWC class' elements and hides the others'
            $("#WWWC").click(function(){
                $(".WWWC").show();
                $(".IETF").hide();
                $(".ICANN").hide();
                $("#WWWC").addClass("active");
                $("#ICANN").removeClass("active");
                $("#IETF").removeClass("active");
            });
        });