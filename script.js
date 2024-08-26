const messages = [
    "풍성하고 따뜻한 한가위 되시길 바라며, 가족과 함께 행복한 시간 보내세요🎉",
    "보름달처럼 풍요롭고 따뜻한 추석 연휴 되시길 진심으로 기원합니다⭐️",
    "가족과 함께하는 따뜻한 추석 명절, 행복과 건강 가득하시길 바랍니다🎉",
    "즐거운 추석 명절 보내시고, 모든 일들이 순조롭게 풀리시길 바랍니다🙏",
    "추석 연휴 동안 푹 쉬시고, 재충전하시어 건강하게 돌아오세요🎉",
    "풍성한 한가위 보내시고, 가족들과 함께 행복한 추억 많이 만드세요⭐️",
    "한가위 보름달처럼 밝고 풍요로운 명절 보내시길 바랍니다🌕",
    "추석 명절 동안 가족들과 따뜻한 시간 보내시고 건강 잘 챙기세요🌕",
    "행복한 추석 되시길 바라며, 모든 소망이 이루어지시길 기원합니다🙏",
    "따뜻하고 행복한 추석 보내시고, 늘 건강하시길 진심으로 바랍니다💪",
    "추석 연휴 동안 가족과 함께하는 소중한 시간 만끽하시길 바랍니다🎉",
    "풍성한 추석 보내시고, 가족들과 함께하는 시간 행복으로 가득하세요❤️",
    "한가위 명절, 가족들과 함께 따뜻하고 즐거운 시간 보내세요❤️",
    "추석 명절 동안 마음 편히 쉬시고, 행복한 연휴 보내시길 바랍니다❤️",
    "추석 연휴 동안 재충전하시고, 건강한 모습으로 다시 뵙길 바랍니다☺️",
    "풍요로운 한가위 되시고, 가족들과 행복한 시간 많이 보내세요🎉",
    "즐거운 추석 명절 보내시고, 평안하고 행복한 시간 되시길 바랍니다🥳",
    "따뜻한 명절 보내시고, 가족과 함께 행복한 추석 되시길 바랍니다🥳",
    "추석 연휴 동안 편안하게 쉬시고, 가족들과 즐거운 시간 보내세요❤️",
    "한가위 보름달처럼 마음도 풍성해지는 따뜻한 명절 보내세요❤️",
    "추석 명절 잘 보내시고, 가족들과 함께 행복한 시간 만드세요❤️",
    "풍성한 한가위 되시고, 모든 일들이 잘 풀리시길 기원합니다🙏",
    "따뜻하고 행복한 추석 보내시고, 가족들과 소중한 시간 보내세요❤️",
    "즐거운 추석 명절 되시길 바라며, 건강과 행복이 가득하시길 바랍니다🙏",
    "추석 연휴 동안 충분히 쉬시고, 행복한 시간 보내시길 바랍니다❤️",
    "풍요롭고 따뜻한 한가위 되시길 바라며, 가족들과 행복한 시간 되세요🙌",
    "보름달처럼 밝고 풍요로운 추석 연휴 되시길 진심으로 기원합니다🙏",
    "가족과 함께하는 따뜻한 한가위, 행복과 건강 가득하시길 바랍니다❤️",
    "즐거운 추석 명절 보내시고, 모든 소망이 이루어지시길 바랍니다❤️",
    "따뜻하고 행복한 한가위 보내시고, 항상 건강하시길 바랍니다💪"
];

/**
 * 랜덤 인사말 가져오는 함수
*/
function getRandomMessage() {
    const randomIndex = Math.floor(Math.random() * messages.length);
    return messages[randomIndex];
}

/**
 * 주어진 HTML 요소에서 타이핑 효과를 시뮬레이션하는 함수
 * 
 * 이 함수는 '.p-message' 클래스를 가진 요소를 대상으로 하며, 요소의 innerHTML에 
 * 한 번에 한 글자씩 추가하여 타이핑 효과를 시뮬레이션합니다. 타이핑 속도는 
 * setTimeout 함수를 사용해 100밀리초의 지연을 두고 조절됩니다.
 * 모든 텍스트가 타이핑되면, 콜백 함수가 실행됩니다.
 */
function typeMessage(text, callback) {
    const messageElement = document.querySelector('.p-message');
    messageElement.innerHTML = '';
    let i = 0;

    function typeNextCharacter() {
        if (i < text.length) {
            messageElement.innerHTML += text[i];
            i++;
            setTimeout(typeNextCharacter, 100);
        } else if (callback) {
            callback();
        }
    }

    typeNextCharacter();
}

/**
 * 주어진 요소의 가시성을 토글하는 함수
 * 
 * 이 함수는 'hidden' 클래스와 'opened' 클래스를 토글하여 요소의 가시성을 제어합니다.
 * 
 * 'show'가 true이면 'opened' 클래스를 추가하고 'hidden' 클래스를 제거하여 요소를 표시하고,
 * 'show'가 false이면 'hidden' 클래스를 추가하고 'opened' 클래스를 제거하여 요소를 숨깁니다.
 */
function toggleVisibility(element, show) {
    element.classList.toggle('hidden', !show);
    element.classList.toggle('opened', show);
}
 
/**
 * 새로운 메시지를 표시하는 함수
 * 
 * 이 함수는 먼저 '.letter'와 '.p-name' 클래스를 가진 요소를 찾아 현재 표시된 메시지와 이름을 숨깁니다.
 * 이후, 짧은 지연(500ms) 후에 새로운 메시지를 타이핑하고, 타이핑이 완료되면 이름을 다시 표시합니다.
 * 
 * 1. 현재 메시지와 이름을 숨깁니다.
 * 2. 500ms 지연 후에 새로운 메시지를 타이핑하고, 타이핑이 완료되면 이름을 표시합니다.
 */
function showNewMessage() {
    const letterElement = document.querySelector('.letter');
    const nameElement = document.querySelector('.p-name');

    // 현재 메시지를 숨김
    toggleVisibility(letterElement, false);
    toggleVisibility(nameElement, false);

    // 새로운 메시지를 타이핑 후 이름을 표시
    setTimeout(() => {
        typeMessage(getRandomMessage(), () => {
            toggleVisibility(nameElement, true);
        });
        toggleVisibility(letterElement, true);
    }, 500);
}

/**
 * 초기 상태 설정
 * 
 * 페이지 로드 시 첫 번째 메시지 표시합니다.
 */
window.onload = () => {
    showNewMessage(); 
};
