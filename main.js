const LinksSocialMedia = {
  github: 'calangueras',
  youtube: 'UCgGFFaaCoOxmH2UAhQG1c0g',
  facebook: 'guilhermeaugustoca',
  instagram: 'calangueras',
  twitter: 'calangueras'
}

function changeLinksSocialMedia() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}

changeLinksSocialMedia()

function getGitHubProfilesInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`
  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      UserImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}
getGitHubProfilesInfos()
