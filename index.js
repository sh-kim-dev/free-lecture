const messages = [
    "풍성하고 따뜻한 한가위 되시길 바라며, 가족과 함께 행복한 시간 보내세요🎉",
    "보름달처럼 풍요롭고 따뜻한 추석 연휴 되시길 진심으로 기원합니다⭐️",
    // ... (나머지 메시지들)
];

let isAnimating = false; // 애니메이션 진행 상태 변수

function getRandomMessage() {
    const randomIndex = Math.floor(Math.random() * messages.length);
    return messages[randomIndex];
}

function showMessage(callback) {
    const randomMessage = getRandomMessage();
    const messageElement = document.querySelector('.p-message');
    messageElement.innerHTML = randomMessage;

    if(callback) {
        callback();
    }
}

function toggleVisibility(element, show) {
    element.classList.toggle('hidden', !show);
    element.classList.toggle('opened', show);
}

function typeMessage(callback) {
    if (isAnimating) return; // 애니메이션 중이면 함수를 종료합니다.
    isAnimating = true; // 애니메이션이 시작됨을 표시합니다.

    const randomMessage = getRandomMessage();
    const messageElement = document.querySelector('.p-message');
    messageElement.innerHTML = '';

    let i = 0;

    function typeNextCharacter() {
        if (i < randomMessage.length) {
            messageElement.innerHTML += randomMessage[i];
            i++;
            setTimeout(typeNextCharacter, 100);
        } else {
            isAnimating = false; // 애니메이션이 끝났음을 표시합니다.
            if (callback) {
                callback();
            }
        }
    }

    typeNextCharacter();
}

function renewMessage() {
    if (isAnimating) return; // 애니메이션 중이면 함수를 종료합니다.

    const letterElement = document.getElementById('letter');
    const nameElement = document.querySelector('.p-name');

    toggleVisibility(letterElement, false);
    toggleVisibility(nameElement, false);

    setTimeout(() => {
        typeMessage(() => {
            toggleVisibility(nameElement, true);
        });
        toggleVisibility(letterElement, true);
    }, 500);
}

window.onload = () => {
    renewMessage(); 
};
