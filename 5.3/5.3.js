(function () {
  "use strict";
  function passwordValidation(psw) {
    return psw.length > 7 ? "strong" : "weak";
  }

  function passwordValidation2(psw) {
    if (psw.length > 7) return "strong";
    else return "weak";
  }

  function passwordValidation3(psw) {
    if (psw.length > 7 && psw.length != 0) return "strong";
    else return "weak";
  }

  function advancedPasswordValidation(psw) {
    const firstTrinary = psw.length > 7 ? "Strong" : "Weak";
    const secondTrinary =
      psw.length > 7 && /[A-Z]/.test(psw) ? "Very Strong" : firstTrinary;
    return secondTrinary;
  }

  console.log(advancedPasswordValidation("psffffffffffW")); // very strong
  console.log(advancedPasswordValidation("psffffffffff")); // strong
  console.log(advancedPasswordValidation("psf")); // weak
})();
