function Login() {

    let username = prompt('사용자의 이름을 입력해주세요.', '');
    if (username == 'a') {
            let password = prompt('비밀번호를 입력해 주세요', '');
            if (password == 'lee7992') {
                alert('안녕하세요');
                alert('건희님');
            }
            else if (password == '' || password == null) {
                alert('취소되었습니다');
                alert('다시 입력해주세요')
            }
            else {
                alert('인증에 실패했습니다');
            }
            console.log(username, password);
        }
            
    else if (username == '' || username == null) {
        alert('이름을 다시 입력해주세요');
    }
    else {
        alert('인증에 실패했습니다');
    }
}
//Login();