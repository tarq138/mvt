$(document).ready(function(){

    if (!localStorage.getItem("language")) {
        var language = window.navigator ? (window.navigator.language ||
            window.navigator.systemLanguage ||
            window.navigator.userLanguage) : "ru";
        language = language.substr(0, 2).toLowerCase();
        localStorage.setItem("language", language)
    }
    changeLanguage(localStorage.getItem("language"))

    function changeLanguage(language) {
        console.log(language)
        $("body").removeAttr('class')
        $("body").addClass(language)
        localStorage.setItem("language", language)
    }
    $(".change-language").on('click', function(){
        changeLanguage($(this).attr("id"))
    })

    $('.send-feedback').on('click', function(){ 
        $.ajax({
            url:"sendemail.php",    //the page containing php script
            type: "post",    //request type,
            dataType: 'json',
            data: {
                name: $("#inputName").val(),
                email: $("#inputEmail").val(),
                address: $("#inputAddress").val(),
                message: $("#exampleFormControlTextarea").val()
            },
            success:function(result){
                $('.sended').removeClass("hide")
                $('.send-feedback').addClass("hide")
                setTimeout(() => $('.modal').modal('hide'), 1000);
            }
        });
    })

    $('.send-calculate').on('click', function(){ 
        $.ajax({
            url:"sendcalculate.php",    //the page containing php script
            type: "post",    //request type,
            dataType: 'json',
            data: {
                fromCounty: $("#fromCounty").val(),
                toCounty: $("#toCounty").val(),
                fromCity: $("#fromCity").val(),
                toCity: $("#toCity").val(),
                item: $("#item").val(),
                weight: $("#weight").val(),
                volume: $("#volume").val(),
                companyName: $("#companyName").val(),
                number: $("#number").val(),
                inputEmailCalc: $("#inputEmailCalc").val(),
                personName: $("#personName").val(),
                exampleFormControlTextareaCalc: $("#exampleFormControlTextareaCalc").val(),
            },
            success:function(result){
                $('.sended').removeClass("hide")
                $('.send-calculate').addClass("hide")
            }
        });
    })

    $('.send-calculate-en').on('click', function(){ 
        $.ajax({
            url:"sendcalculate.php",    //the page containing php script
            type: "post",    //request type,
            dataType: 'json',
            data: {
                fromCounty: $("#fromCountyEn").val(),
                toCounty: $("#toCountyEn").val(),
                fromCity: $("#fromCityEn").val(),
                toCity: $("#toCityEn").val(),
                item: $("#itemEn").val(),
                weight: $("#weightEn").val(),
                volume: $("#volumeEn").val(),
                companyName: $("#companyNameEn").val(),
                number: $("#numberEn").val(),
                inputEmailCalc: $("#inputEmailCalcEn").val(),
                personName: $("#personNameEn").val(),
                exampleFormControlTextareaCalc: $("#exampleFormControlTextareaCalcEn").val(),
            },
            success:function(result){
                $('.sended').removeClass("hide")
                $('.send-calculate-en').addClass("hide")
            }
        });
    })

    $('.btn.btn-sm').on('click', function(){ 
        $('.sended').addClass("hide")
        $('.send-feedback').removeClass("hide")
    })
})