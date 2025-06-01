function copyContractText() {
  const el = document.getElementById("copyContract");
  navigator.clipboard.writeText(el.innerText).then(() => {
    el.classList.add("copied");
    setTimeout(() => {
      el.classList.remove("copied");
    }, 1500); // Slightly faster copy feedback
  });
}
