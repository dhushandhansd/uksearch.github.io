let searchBox = document.getElementById('search')
let searchButton = document.getElementById('search-btn')

searchButton.addEventListener('click', () => {
    if(searchBox.value == null || searchBox.value == '') {
        alert('Please type something in the Search Box')
    } else {
        alert('Your Query : '+searchBox.value)
        alert('iframe does not work so this is the End')
        let rawQuery = searchBox.value
        rawQuery.replace(/\s/g, '+')
        let postQuery = 'www.google.com/?q=' + rawQuery
        sessionStorage.setItem('searchquery',postQuery)
        window.location.href = 'results.html'
    }
})


let webView = document.getElementById('web-view')

function result() {
    let searchQuery = sessionStorage.getItem('searchquery')
    webView.setAttribute('src',searchQuery)
}

let apple = document.getElementById('apple-btn')
let google = document.getElementById('google-btn')
let facebook = document.getElementById('facebook-btn')
let youtube = document.getElementById('youtube-btn')
let discord = document.getElementById('discord-btn')
let dell = document.getElementById('dell-btn')
let ces = document.getElementById('ces-btn')

apple.addEventListener('click', () => {
    sessionStorage.setItem('searchquery','www.apple.com')
    window.location.href = 'results.html'
})

google.addEventListener('click', () => {
    sessionStorage.setItem('searchquery','www.google.com')
    window.location.href = 'results.html'
})

facebook.addEventListener('click', () => {
    sessionStorage.setItem('searchquery','www.facebook.com')
    window.location.href = 'results.html'
})

youtube.addEventListener('click', () => {
    sessionStorage.setItem('searchquery','www.youtube.com')
    window.location.href = 'results.html'
})

discord.addEventListener('click', () => {
    sessionStorage.setItem('searchquery','www.discord.com')
    window.location.href = 'results.html'
})

dell.addEventListener('click', () => {
    sessionStorage.setItem('searchquery','www.dell.com')
    window.location.href = 'results.html'
})

ces.addEventListener('click', () => {
    sessionStorage.setItem('searchquery','www.cesit.com')
    window.location.href = 'results.html'
})