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
  "id": "Limits",
  "level": "1",
  "url": "Limits.html",
  "type": "Chapter",
  "number": "1",
  "title": "Limits",
  "body": " Limits  Consider the function   Notice that this function can't be evaluated at x=0 (i.e. 0 is not in its domain.) But, we could compute it for values of x *close* to 0. For example, fill in the sin(x)\/x column below for the column of x values given.         0.500     0.100     0.010     0.001      You'll notice that as the domain values (i.e. the values of ) approach , the values of approach . In fact, if we continue to fill out this chart with values of closer and closer to , we'll notice that gets closer and closer to . Of course, to be fair, at the moment we're only letting approach from the right hand (positive) side of .  If approaches as approaches a number from its right hand side, then we write *** which is pronounced 'The limit of is as approaches from the right.  "
},
{
  "id": "limit",
  "level": "2",
  "url": "Limits.html#limit",
  "type": "Definition",
  "number": "1.0.1",
  "title": "",
  "body": "If approaches as approaches a number from its right hand side, then we write *** which is pronounced 'The limit of is as approaches from the right. "
},
{
  "id": "Continuity",
  "level": "1",
  "url": "Continuity.html",
  "type": "Chapter",
  "number": "2",
  "title": "Continuity",
  "body": " Continuity  Stuff about continuity  "
},
{
  "id": "Topic-3",
  "level": "1",
  "url": "Topic-3.html",
  "type": "Chapter",
  "number": "3",
  "title": "Next Topic",
  "body": " Next Topic  Stuff about next topic  "
},
{
  "id": "Topic-4",
  "level": "1",
  "url": "Topic-4.html",
  "type": "Chapter",
  "number": "4",
  "title": "Next Topic",
  "body": " Next Topic  Stuff about next topic  "
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
