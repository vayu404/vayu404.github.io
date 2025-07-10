function openProjectModal(projectId) {
  const content = {
    1: "우리은행 Fisa 프로젝트",
    2: "혈당 관리 어플리케이션",
    3: "IoT 기반 낙상 감지 지팡이"
  };
  document.getElementById("projectModalContent").innerText = content[projectId];
  document.getElementById("projectModal").style.display = "block";
}

function openGithubModal(projectId) {
  const content = {
    1: "준비 중",
    2: "준비 중",
    3: "준비 중"
  };
  document.getElementById("githubModalContent").innerText = content[projectId];
  document.getElementById("githubModal").style.display = "block";
}

function closeModal(modalId) {
  document.getElementById(modalId).style.display = "none";
}

