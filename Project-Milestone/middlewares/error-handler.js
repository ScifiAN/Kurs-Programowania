function handleErrors (error, req, res, next){
    console.log(error);
    if(error.code === 500){
        res.status(500).render('500');
    } else if (error.code === 404){
        return res.status(404).render('404')
    }
    next();
}

module.exports = handleErrors;