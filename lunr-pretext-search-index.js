var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "preface",
  "level": "1",
  "url": "preface.html",
  "type": "Preface",
  "number": "",
  "title": "Preface",
  "body": " The purpose of this text is to provide a distinctly lean presentation of traditional Calculus 1 material.  The philosophy here is, in brief, that the core ideas of limit > derivative > integral are easy to understand and that understanding them happens for the largest audience by keeping the matter as direct and uncluttered as possible. Further, anciliary concepts can be easily picked up once that core is in place and consequencly should not be presented initially since they simply clutter the presentation and produce possible distraction that reduces the chance that the critical core is understood.  For future development, the plan is to flesh out the text by providing incremental introduction of Python \/ Sage coding so that students learn basic 3rd generation coding principles while also providing themselves the tools to visualize the core concepts in action via many of the powerful anciliary ideas including applications to many scientific disciplines  "
},
{
  "id": "section-title",
  "level": "1",
  "url": "section-title.html",
  "type": "Section",
  "number": "1.1",
  "title": "Section title",
  "body": " Section title  Hello  "
},
{
  "id": "colophon-1",
  "level": "1",
  "url": "colophon-1.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
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
