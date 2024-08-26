/**
 * 배경 음악(BGM)을 제어하는 함수
 * 
 * 이 함수는 버튼 클릭 시 배경 음악을 재생하거나 일시정지합니다.
 * 
 * 1. 현재 재생 상태를 추적하는 전역 변수 `isPlaying`을 사용하여, 음악이 재생 중인지 여부를 확인합니다.
 * 2. `isPlaying`이 true이면 음악을 일시정지하고, 버튼 텍스트를 '재생'으로 변경합니다.
 * 3. `isPlaying`이 false이면 음악을 재생하고, 버튼 텍스트를 '일시중지'로 변경합니다.
 * 4. `isPlaying` 변수를 현재 상태의 반대로 갱신하여 다음 클릭에 대비합니다.
 */
let isPlaying = false;

function controlBgm() {
    const bgmElement = document.getElementById('btn-bgm');
    const bgm = document.getElementById('audio-bgm');
    
    if (isPlaying) {
        bgm.pause();
        bgmElement.innerText = '재생';
    } else {
        bgm.play();
        bgmElement.innerText = '일시중지';
    }

    isPlaying = !isPlaying;   
}
