function showRecommendation() {
    const recommendations = [
        "Pažiūrėk gerą filmą",
        "Išeik pasivaikščioti",
        "Išgerk kavos",
        "Paskaityk knygą"
    ];

    const randomIndex = Math.floor(Math.random() * recommendations.length);

    document.getElementById("recommendation").textContent =
        recommendations[randomIndex];
}