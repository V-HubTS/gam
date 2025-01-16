document.addEventListener('DOMContentLoaded', () => {
    const links = [
        // Add your link objects here, like { name: "Game 1", url: "https://example.com/game1" }
    ];

    const gameLinks = document.getElementById('game-links');
    links.forEach(link => {
        const listItem = document.createElement('li');
        const anchor = document.createElement('a');
        anchor.href = link.url;
        anchor.textContent = link.name;
        listItem.appendChild(anchor);
        gameLinks.appendChild(listItem);
    });
});
