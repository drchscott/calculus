var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "preface",
  "level": "1",
  "url": "preface.html",
  "type": "Preface",
  "number": "",
  "title": "Preface",
  "body": " The purpose of this text is to provide a distinctly lean presentation of traditional Calculus 1 material.  The philosophy here is, in brief, that the core ideas of limit > derivative > integral are easy to understand and that understanding them happens for the largest audience by keeping the matter as direct and uncluttered as possible. Further, anciliary concepts can be easily picked up once that core is in place and consequencly should not be presented initially since they clutter the presentation and produce possible distraction that reduces the chance that the critical core is understood.  For future development, the plan is to flesh out the text by providing incremental introduction of Python \/ Sage coding so that students learn basic 3rd generation coding principles while also providing themselves the tools to visualize the core concepts in action via many of the powerful anciliary ideas including applications to many scientific disciplines  "
},
{
  "id": "Introduction",
  "level": "1",
  "url": "Introduction.html",
  "type": "Section",
  "number": "1.1",
  "title": "Introduction",
  "body": " Introduction  Consider the function   Notice that this function can't be evaluated at x=0 (i.e. 0 is not in its domain.) But, we could compute it for values of x *close* to 0. For example, consider the following table for sin(x)\/x.         0.500  0.958851    0.100  0.998334    0.010  0.999983    0.001  0.999999     Look at this table. As we move the values closer to , what are the values getting closer to? It's apparent that as approaches , that approaches . Of course, to be fair, at the moment we're only letting approach from the right hand (positive) side of . Let's create some notation to record this kind of information.  If approaches a number, say , as approaches a number from its right hand side, then we write which is pronounced \"The limit of is as approaches from the right\". We also say that has a right hand limit of at . Analogously, If approaches a number, say as approaches from its left hand side, then we write which is pronounced \"The limit of is as approaches from the left\". Again, we also say that has a left hand limit of at .  It is critical to note here that we are using the word \"approach\" in the definition above to indicate that we simply take values of the domain variable *close* to but not equal to it. In computing limits, we do not use . We're just identifying what is becoming as *approaches* . In fact, in many cases such as , we can't even compute the function at .  For from above, make a table like the one above but this time use 4 or 5 domain values approaching from the left. Use the notation from the definition above to write your conclusion about the left hand limit.  Finally, since it will often be the case that both the left hand and right hand limit come out the same (but not always) for a function, we just drop the and in that case. In other words ...  In case both the left hand and right hand limit of a function are the same (i.e. ), then we simply write without any reference to or . In this case we say that has a limit of at .  For , notice that once again is not in its domain. Make tables for left and right hand approaches to and use proper notation as defined above to write your conclusions about right hand limit, left hand limit and limit.  "
},
{
  "id": "sideLimit",
  "level": "2",
  "url": "Introduction.html#sideLimit",
  "type": "Definition",
  "number": "1.1.1",
  "title": "",
  "body": "If approaches a number, say , as approaches a number from its right hand side, then we write which is pronounced \"The limit of is as approaches from the right\". We also say that has a right hand limit of at . Analogously, If approaches a number, say as approaches from its left hand side, then we write which is pronounced \"The limit of is as approaches from the left\". Again, we also say that has a left hand limit of at . "
},
{
  "id": "example-1",
  "level": "2",
  "url": "Introduction.html#example-1",
  "type": "Example",
  "number": "1.1.2",
  "title": "",
  "body": "For from above, make a table like the one above but this time use 4 or 5 domain values approaching from the left. Use the notation from the definition above to write your conclusion about the left hand limit. "
},
{
  "id": "limit",
  "level": "2",
  "url": "Introduction.html#limit",
  "type": "Definition",
  "number": "1.1.3",
  "title": "",
  "body": "In case both the left hand and right hand limit of a function are the same (i.e. ), then we simply write without any reference to or . In this case we say that has a limit of at . "
},
{
  "id": "example-2",
  "level": "2",
  "url": "Introduction.html#example-2",
  "type": "Example",
  "number": "1.1.4",
  "title": "",
  "body": "For , notice that once again is not in its domain. Make tables for left and right hand approaches to and use proper notation as defined above to write your conclusions about right hand limit, left hand limit and limit. "
},
{
  "id": "basicLimitProps",
  "level": "1",
  "url": "basicLimitProps.html",
  "type": "Section",
  "number": "1.2",
  "title": "Basic Limit Properties",
  "body": " Basic Limit Properties  Coming soon ...  "
},
{
  "id": "Continuity",
  "level": "1",
  "url": "Continuity.html",
  "type": "Chapter",
  "number": "2",
  "title": "Continuity",
  "body": " Continuity  Stuff about continuity  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
