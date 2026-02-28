// {Challenge_name, Challenge_link, Live_site, Code, Tech}
const fmContainer = [
  ["QR code component", "https://www.frontendmentor.io/challenges/qr-code-component-iux_sIO_H", "./qr-code-component/index.html", "https://github.com/hemanth110702/frontend-mentor-solutions/tree/main/qr-code-component", "HTML, CSS"],
  ["Space tourism multi-page website", "https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3", "./space-tourism-multipage-website/index.html", "https://github.com/hemanth110702/frontend-mentor-solutions/tree/main/space-tourism-multipage-website", "HTML, CSS, JS"],
  ["FAQ accordion card", "https://www.frontendmentor.io/challenges/faq-accordion-card-XlyjD0Oam", "./faq-accordian-card/index.html", "https://github.com/hemanth110702/frontend-mentor-solutions/tree/main/faq-accordian-card", "HTML, CSS, JS"],
  ["Rock, Paper, Scissors game", "https://www.frontendmentor.io/challenges/rock-paper-scissors-game-pTgwgvgH", "./rock-paper-scissors-game/index.html", "https://github.com/hemanth110702/frontend-mentor-solutions/tree/main/rock-paper-scissors-game", "HTML, CSS, JS"],
  ["Clipboard landing page", "https://www.frontendmentor.io/challenges/clipboard-landing-page-5cc9bccd6c4c91111378ecb9", "./clipboard-landing-page/index.html", "https://github.com/hemanth110702/frontend-mentor-solutions/tree/main/clipboard-landing-page", "HTML, CSS"],
  ["Manage landing page", "https://www.frontendmentor.io/challenges/manage-landing-page-SLXqC6P5", "./manage-landing-page/index.html", "https://github.com/hemanth110702/frontend-mentor-solutions/tree/main/manage-landing-page", "HTML, CSS, JS"],
  ["Agency landing page", "https://www.frontendmentor.io/challenges/agency-landing-page-7yVs3B6ef", "./agency-landing-page/index.html", "https://github.com/hemanth110702/frontend-mentor-solutions/tree/main/agency-landing-page", "HTML, CSS, JS"]
]

const tbodyRef = document.getElementById('index').getElementsByTagName('tbody')[0];

for (let i = 0; i < fmContainer.length; i++) {
  const row = tbodyRef.insertRow();
  row.innerHTML = `<td> ${i + 1} </td>
                    <td id='cname'> <a target="_blank" href="${fmContainer[i][1]}">${fmContainer[i][0]} </a> </td>
                    <td id='live'> <a target="_blank" href="${fmContainer[i][2]}"> Live </a> </td>
                    <td id='code'> <a target="_blank" href="${fmContainer[i][3]}"> Code </a> </td>
                    <td id='tech'> ${fmContainer[i][4]} </td>`
}






