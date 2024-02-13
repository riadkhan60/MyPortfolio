function calculateAge(birthDate) {
  const today = new Date();
  const birthDateObj = new Date(birthDate);
  console.log(birthDateObj)
  let age = today.getFullYear() - birthDateObj.getFullYear();
  const monthDiff = today.getMonth() - birthDateObj.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDateObj.getDate())) {
    age--;
  }
  return age;
}

// Example usage
const myBirthDate = "2000-12-01";
export const myAge = calculateAge(myBirthDate); 
