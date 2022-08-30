let i = 0;
function viewCount(req,res,next) {
    i++;
    console.log(i);
    next()
}
module.exports = viewCount;