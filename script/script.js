/* eslint-disable */

$(function () {

    setInterval(fnSlide, 3000);

    function fnSlide() {
        $("#slide a").fadeOut(500);
        $("#slide a:nth-child(2)").fadeIn(1000,
            function () {
                $("#slide a:first-child").insertAfter("#slide a:last-child");
            });
    }

    // 1. 모든 a 요소 fadeOut
    // 2. 두 번째 a 요소 fadeIn
    // 3. insertAfter, 첫째 a 요소를 마지막으로 이동

}); // function
