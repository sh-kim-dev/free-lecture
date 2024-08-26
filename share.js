/**
 * 웹 페이지를 공유하는 함수
 * 
 * 이 함수는 Web Share API를 사용하여 현재 페이지의 제목, 텍스트, URL을 공유합니다.
 * 
 * 1. 사용자의 브라우저가 Web Share API를 지원하는지 확인합니다.
 * 2. 지원하는 경우, 공유할 데이터(제목, 텍스트, URL)를 정의하고 navigator.share() 메서드를 통해 공유를 시도합니다.
 * 3. 공유가 성공하면 콘솔에 '공유 성공!' 메시지를 출력합니다.
 * 4. 공유에 실패할 경우, 오류 메시지를 콘솔에 출력합니다.
 * 5. 사용자의 브라우저가 Web Share API를 지원하지 않는 경우, 경고 창을 통해 사용자에게 알립니다.
 */
function shareMessage() {
    if (navigator.share) {
        try {
            const shareData = {
                title: 'Web Share Example',
                text: 'Check out this web share example!',
                url: window.location.href,
            };

            navigator.share(shareData)
                .then(() => console.log('공유 성공!'))
                .catch(error => console.error('공유 실패:', error.message));
        } catch (error) {
            console.error('공유 실패:', error.message);
        }
    } else {
        alert('해당 브라우저에서 Web Share API가 동작하지 않습니다.');
    }
}

