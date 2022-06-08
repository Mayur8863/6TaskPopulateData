const Blog = require("../models/userBlogModel");
const userBlogGet = (req,res)=>{
    res.send("Blog get")
}
const userBlogPost = (req,res)=>{
    const blog = new Blog({
        title : req.body.title,
        postedBy : req.body.postedbyId,
        comments : [{
            text : req.body.comment,
            postedBy : req.body.commentbyId
        }
    ]
    })
    blog.save(function(error) {
        if (!error) {
            Blog.find({})
                .populate('postedBy')
                .populate({
                    path : 'comments',
                    populate : {
                        path : 'postedBy'
                    }
                })
                .exec((error, blogs)=> {
                    if(error) return res.send(`err ${error}`);
                    res.send(blogs);
                })
            }  
    });
    // .then(result =>{
    //     res.json(result);
    // })
    // .catch(err=>{
    //     res.json(err);
    // })
}

module.exports={
    userBlogGet:userBlogGet,
    userBlogPost:userBlogPost,
}