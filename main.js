let input = document.querySelector(".get-repos input");
let send_button = document.getElementsByTagName("span")[0];
let reposData = document.querySelector(".show-data ");


send_button.onclick = function () {
    sendinput()
}
function sendinput() {
    if (input.value == "") {
        reposData.innerHTML = "<span>Please Write Github Username.</span>";
    } else {
        fetch(`https://api.github.com/users/${input.value}/repos`)
            .then((response) => response.json())
            .then((repositories) => {
                reposData.innerHTML = "";
                repositories.forEach(repos => {
                    let main_div = document.createElement("div");
                    let repos_vlaue = document.createTextNode(repos.name);
                    main_div.appendChild(repos_vlaue);
                    
                    let URl = document.createElement("a");
                    let url_text = document.createTextNode("visit");
                    URl.href = `https://github.com/${input.value}/${repos.name}`
                    URl.setAttribute('target', '_blank');
                    URl.appendChild(url_text);
                    main_div.appendChild(URl)

                    let stars = document.createElement("span");
                    let stars_text = document.createTextNode(`stars ${repos.stargazers_count}`) 

                    stars.appendChild(stars_text)
                    main_div.appendChild(stars)

                    main_div.className = 'repo-box';

                    reposData.appendChild(main_div)
            });
        })
    } 
}