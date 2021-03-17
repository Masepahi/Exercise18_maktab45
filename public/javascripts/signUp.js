// $(document).on('click', '#submitBtn', function(){
//     let userName = $('#userName').val();
//     let password = $('#password').val();
//     let rePassword = $('#rePassword').val();
//     let email = $('#email').val();

//     if (password === rePassword) {
//         $.ajax({
//             type: "POST",
//             url: "/auth/registration",
//             data: JSON.stringify({userName: userName, password: password, emailAddress: email}),
//             contentType: 'application/json',
//             success: function (response) {
//                 window.location.href('/auth/loginPage')
//             }
//         });
//     } else {
//         alert('Repeated password is not the same as password')
//     }

    
// })