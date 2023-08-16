const resultLuasContainer = document.querySelector("#result-luas-container");
const resultKelilingContainer = document.querySelector(
  "#result-keliling-container"
);
const btnResultLuas = document.querySelector("#result-luas");
const btnResultKeliling = document.querySelector("#result-keliling");
const resetBtns = document.querySelectorAll(".btn-reset");
const switchBtns = document.querySelectorAll(".btn-switch");

function hitungLuas() {
  let alas = document.querySelector("#alas").value;
  let tinggi = document.querySelector("#tinggi").value;

  // Cek apakah form sudah terisi semua
  if (alas == 0 || tinggi == 0) {
    alert("Tolong isi semua angka!");
    return;
  }

  resultLuasContainer.innerHTML = `<h3>Result :</h3>
            <p>L = 1/2 x a x t</p>
            <p>L = 1/2 x ${alas} x ${tinggi}</p>
            <p>L = ${0.5 * alas * tinggi}</p>`;
}

function hitungKeliling() {
  const sisiA = document.querySelector("#sisi-a").value;
  const sisiB = document.querySelector("#sisi-b").value;
  const sisiC = document.querySelector("#sisi-c").value;

  // Cek apakah form sudah terisi semua
  if (sisiA === "" || sisiB === "" || sisiC === "") {
    alert("Tolong isi semua angka!");
    return;
  }

  resultKelilingContainer.innerHTML = `<h3>Result :</h3>
            <p>K = S1 + S2 + S3</p>
            <p>K = ${sisiA} + ${sisiB} + ${sisiC}</p>
            <p>L = ${parseInt(sisiA) + parseInt(sisiB) + parseInt(sisiC)}</p>`;
}

function switchPage() {
  document.querySelector("#rumus-keliling").classList.toggle("hidden");
  document.querySelector("#hitung-keliling").classList.toggle("hidden");
  document.querySelector("#rumus-luas").classList.toggle("hidden");
  document.querySelector("#hitung-luas").classList.toggle("hidden");
  document.querySelector("#header-luas").classList.toggle("hidden");
  document.querySelector("#header-keliling").classList.toggle("hidden");
}

function resetResult() {
  resultKelilingContainer.innerHTML = "";
  resultLuasContainer.innerHTML = "";
}

btnResultLuas.addEventListener("click", (e) => {
  e.preventDefault();
  hitungLuas();
});

btnResultKeliling.addEventListener("click", (e) => {
  e.preventDefault();
  hitungKeliling();
});

switchBtns.forEach((switchBtn) =>
  switchBtn.addEventListener("click", switchPage)
);
resetBtns.forEach((resetBtn) =>
  resetBtn.addEventListener("click", resetResult)
);
