const Sinupbutton = document.querySelector('#btn_signup')
Sinupbutton.addEventListener('click', sign_up)
function sign_up() {
    let new_id = $('#new_user_id').val();
    let new_pw = $('#new_password').val();
    let new_nick_name = $('#new_nickname').val();
    if (new_id == "") {
        alert("email 주소가 비어있습니다.")
        $("#new_id").focus()
        return;
    }
    if (!is_id(new_id)) {
        alert("email 형식을 확인 해주세요. 2-10자")
        $("#new_id").focus()
        return;
    }

    if (new_nick_name == "") {
        alert("nick_name 칸이 비어있습니다.")
        $("#new_nick_name").focus()
        return;
    }
    if (!is_nick_name(new_nick_name)) {
        alert("nick_name 형식을 확인 해주세요. 2-10자")
        $("#new_nick_name").focus()
        return;
    }

    if (new_pw == "") {
        alert("비밀번호 칸이 비어있습니다.")
        $("#new_pw").focus()
        return;
    }
    if (!is_pw(new_pw)) {
        alert("비밀번호의 형식을 확인해주세요. 8-20자")
        $("#new_pw").focus()
        return;
    }

    $.ajax({
        type: "POST",
        url: "/api/signup",
        data: {
            new_id_give : new_id,
            new_pw_give : new_pw,
            new_nick_name_give : new_nick_name
        },
        success: function (response) {
            alert(response['msg'])
            window.location.replace(response['url'])
        }
    });
}

function is_id(asValue) {
    var can_input = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,30}$/i;
    return can_input.test(asValue);
}


function is_pw(asValue) {
    var can_input = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z!@#$%^&*]{8,20}$/;
    return can_input.test(asValue);
}

function is_nick_name(asValue) {
    var can_input = /^(?=.*[a-zA-Z])[-a-zA-Z0-9_.]{2,10}$/;
    return can_input.test(asValue);
}



