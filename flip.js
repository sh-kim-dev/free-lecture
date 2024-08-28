let isFlipped = false;

function flipImage() {
    const letter = document.getElementById('letter');
    
    // 회전 상태에 따라 클래스 추가/제거
    if (isFlipped) {
        letter.classList.remove('rotate-360');
        letter.classList.add('rotate-0');
    } else {
        letter.classList.add('rotate-360');
        letter.classList.remove('rotate-0');
    }

    // 상태 반전
    isFlipped = !isFlipped;

    // 애니메이션 종료 후 최종 상태 설정
    letter.addEventListener('transitionend', () => {
        if (isFlipped) {
            letter.classList.remove('rotate-360');
            letter.classList.add('rotate-180');
        } else {
            letter.classList.remove('rotate-360', 'rotate-180');
            letter.classList.add('rotate-0');
        }
    }, { once: true }); // 한 번만 실행되도록 설정
}
