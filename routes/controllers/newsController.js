const newsService = require('../../services/newsService');

const renderHome = (req, res) => {
    let articles = [],
        message = ''
       
   
        newsService.getNews().then(response => {
            articles = response.articles;
        })
        .catch(err => {
            message = 'Error when retrieving articles from NewsAPI';
        })
        .then(() => {
            res.render('home', {
                title: 'News page',
                heading: 'Die 20 aktuellsten Links zu dem gewählten Thema',
                homeActive: true,
                articles, 
                message
            });
        });
};

module.exports = {
    renderHome
};