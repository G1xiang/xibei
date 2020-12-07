var {src,dest,series,parallel,watch}=require('gulp')
var clean=require('gulp-clean')

function cleanTask(){
    return src('./dist/*',{allowEmpty:true})
    .pipe(clean());
}

module.exports={
    dev:series(cleanTask()),
    build:series()
}