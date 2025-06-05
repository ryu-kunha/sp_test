// script.js

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('searchForm');
  const resultArea = document.getElementById('resultArea');

  form.addEventListener('submit', function (e) {
    e.preventDefault(); // 폼 기본 동작(새로고침) 방지

    const studentId = document.getElementById('studentId').value.trim();
    const studentName = document.getElementById('studentName').value.trim();

    // 간단한 유효성 검증
    if (!studentId || !studentName) {
      resultArea.textContent = '학번과 이름을 모두 입력해주세요.';
      resultArea.style.color = '#f00'; // 에러 시 빨간색
      return;
    }

    // 예시: 간단한 결과 메시지 출력
    resultArea.textContent = `🎯 ${studentName} (${studentId})님의 사다리 게임이 시작됩니다!`;
    resultArea.style.color = '#0f0'; // 성공 메시지 녹색
  });
});
