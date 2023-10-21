function calculateAge() {
    const birthdate = new Date(document.getElementById("birthdate").value);
    const today = new Date();
    const ageInMilliseconds = today - birthdate;
    const ageInSeconds = ageInMilliseconds / 1000;
    const ageInMinutes = ageInSeconds / 60;
    const ageInHours = ageInMinutes / 60;
    const ageInDays = ageInHours / 24;
    const ageInMonths = ageInDays / 30.4375; // An average month length
    const ageInYears = ageInMonths / 12;

    const ageYears = Math.floor(ageInYears);
    const ageMonths = Math.floor(ageInMonths) - (ageYears * 12);
    const ageDays = Math.floor(ageInDays) - (ageYears * 365) - (ageMonths * 30);

    document.getElementById("result").innerHTML = `Your age is ${ageYears} years, ${ageMonths} months, and ${ageDays} days.`;
}