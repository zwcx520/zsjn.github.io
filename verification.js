$('#login-button').click(function (event) {
    let userName = document.getElementById("userName").value;
    let pwd = document.getElementById("pwd").value;
    if (userName == "彭雅韵" && pwd == "pyy") {
        
        event.preventDefault();
        $('form').fadeOut(2500);
        $('.wrapper').addClass('form-success');
        setTimeout(function () {
            location.href = "https://jnjn.netlify.app/";
        }, 1000);
    } else {
        alert("用户名或密码不正确！");
    }
});
