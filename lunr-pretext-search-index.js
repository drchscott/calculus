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
  "id": "mainIdea",
  "level": "1",
  "url": "mainIdea.html",
  "type": "Section",
  "number": "1.1",
  "title": "The Main Idea",
  "body": " The Main Idea  Consider the function   Notice that this function can't be evaluated at x=0 (i.e. 0 is not in its domain.) But, we could compute it for values of x *close* to 0. For example, consider the following table for sin(x)\/x.         0.500  0.958851    0.100  0.998334    0.010  0.999983    0.001  0.999999     Look at this table. As we move the values closer to , what are the values getting closer to? It's apparent that as approaches , that approaches . Of course, to be fair, at the moment we're only letting approach from the right hand (positive) side of . Let's create some notation to record this kind of information.  If approaches a number, say , as approaches a number from its right hand side, then we write which is pronounced \"The limit of is as approaches from the right\". We also say that has a right hand limit of at . Analogously, If approaches a number, say as approaches from its left hand side, then we write which is pronounced \"The limit of is as approaches from the left\". Again, we also say that has a left hand limit of at .  So now, with this new notation, it seems reasonable to write   It is critical to note here that we are using the word \"approach\" in the definition above to indicate that we simply take values of the domain variable *close* to but not equal to it. In computing limits, we do not use . We're just identifying what is becoming as *approaches* . In fact, in many cases such as , we can't even compute the function at .  For from above, make a table like the one above but this time use 4 or 5 domain values approaching from the left. Use the notation from the definition above to write your conclusion about the left hand limit.  Finally, since it will often be the case that both the left hand and right hand limit come out the same (but not always) for a function, we just drop the and in that case. In other words ...  In case both the left hand and right hand limit of a function are the same (i.e. ), then we simply write without any reference to or . In this case we say that has a limit of at .  For , notice that once again is not in its domain. Make tables for left and right hand approaches to and use proper notation as defined above to write your conclusions about right hand limit, left hand limit and limit.  "
},
{
  "id": "sideLimit",
  "level": "2",
  "url": "mainIdea.html#sideLimit",
  "type": "Definition",
  "number": "1.1.1",
  "title": "",
  "body": "If approaches a number, say , as approaches a number from its right hand side, then we write which is pronounced \"The limit of is as approaches from the right\". We also say that has a right hand limit of at . Analogously, If approaches a number, say as approaches from its left hand side, then we write which is pronounced \"The limit of is as approaches from the left\". Again, we also say that has a left hand limit of at . "
},
{
  "id": "remark-1",
  "level": "2",
  "url": "mainIdea.html#remark-1",
  "type": "Remark",
  "number": "1.1.2",
  "title": "",
  "body": "It is critical to note here that we are using the word \"approach\" in the definition above to indicate that we simply take values of the domain variable *close* to but not equal to it. In computing limits, we do not use . We're just identifying what is becoming as *approaches* . In fact, in many cases such as , we can't even compute the function at . "
},
{
  "id": "example-1",
  "level": "2",
  "url": "mainIdea.html#example-1",
  "type": "Example",
  "number": "1.1.3",
  "title": "",
  "body": "For from above, make a table like the one above but this time use 4 or 5 domain values approaching from the left. Use the notation from the definition above to write your conclusion about the left hand limit. "
},
{
  "id": "limit",
  "level": "2",
  "url": "mainIdea.html#limit",
  "type": "Definition",
  "number": "1.1.4",
  "title": "",
  "body": "In case both the left hand and right hand limit of a function are the same (i.e. ), then we simply write without any reference to or . In this case we say that has a limit of at . "
},
{
  "id": "example-2",
  "level": "2",
  "url": "mainIdea.html#example-2",
  "type": "Example",
  "number": "1.1.5",
  "title": "",
  "body": "For , notice that once again is not in its domain. Make tables for left and right hand approaches to and use proper notation as defined above to write your conclusions about right hand limit, left hand limit and limit. "
},
{
  "id": "infinityLimits",
  "level": "1",
  "url": "infinityLimits.html",
  "type": "Section",
  "number": "1.2",
  "title": "Infinity Stuff",
  "body": " Infinity Stuff  Consider the function . What can you say about ? Well, let's make a table and see.         1.000  1    0.100  10    0.010  100    0.001  1000     So, it's pretty apparent that as , the function isn't headed toward any number. So, there is no limit. Said differently, the right hand limit of does not exist at . So, the limit notation we've created so far isn't useful. However, it would be useful to record this information. To do that, we write . Please note here that this notation is *not* saying that a limit exists. It just is language explaining *how* it doesn't exist.  Make another table for but this time with value of approaching from the left. What do you see? What is a reasonable way to use limit notation and the symbol to express what you find?  When grows positively without bound as goes to from the right, we write . Also, when grows positively without bound as goes to from the left, we write . Similarly, when grows negatively without bound as goes to from the right, we write and when grows negatively without bound as goes to from the left, we write . As with actual limits, if we omit the and then we are saying that the behavior is the same from both directions.  We also use the symbol as a *place* to let the domain variable *approach*. When we let get arbitrarily positively large, we write So, for example, consider our friend . If you make a table for this taking larger and larger positive values of , you'll see that approaches . So, in that case, we can write .  Make another table for but this time with value of getting negatively large without bound (e.g. ). What do you see? What is a reasonable way to use limit notation and the symbol to express what you find?  To express a limit when we let the domain variable grow positively without bound, we write and to express a limit when we let the domain variable grow negatively without bound, we write .  Use limit notation and the infinity symbol to express what is happening to as grows positively without bound.  "
},
{
  "id": "example-3",
  "level": "2",
  "url": "infinityLimits.html#example-3",
  "type": "Example",
  "number": "1.2.1",
  "title": "",
  "body": "Make another table for but this time with value of approaching from the left. What do you see? What is a reasonable way to use limit notation and the symbol to express what you find? "
},
{
  "id": "defInfinityLimits1",
  "level": "2",
  "url": "infinityLimits.html#defInfinityLimits1",
  "type": "Definition",
  "number": "1.2.2",
  "title": "",
  "body": "When grows positively without bound as goes to from the right, we write . Also, when grows positively without bound as goes to from the left, we write . Similarly, when grows negatively without bound as goes to from the right, we write and when grows negatively without bound as goes to from the left, we write . As with actual limits, if we omit the and then we are saying that the behavior is the same from both directions. "
},
{
  "id": "example-4",
  "level": "2",
  "url": "infinityLimits.html#example-4",
  "type": "Example",
  "number": "1.2.3",
  "title": "",
  "body": "Make another table for but this time with value of getting negatively large without bound (e.g. ). What do you see? What is a reasonable way to use limit notation and the symbol to express what you find? "
},
{
  "id": "defInfinityLimits2",
  "level": "2",
  "url": "infinityLimits.html#defInfinityLimits2",
  "type": "Definition",
  "number": "1.2.4",
  "title": "",
  "body": "To express a limit when we let the domain variable grow positively without bound, we write and to express a limit when we let the domain variable grow negatively without bound, we write . "
},
{
  "id": "example-5",
  "level": "2",
  "url": "infinityLimits.html#example-5",
  "type": "Example",
  "number": "1.2.5",
  "title": "",
  "body": "Use limit notation and the infinity symbol to express what is happening to as grows positively without bound. "
},
{
  "id": "limitProps",
  "level": "1",
  "url": "limitProps.html",
  "type": "Section",
  "number": "1.3",
  "title": "Limit Properties",
  "body": " Limit Properties  A careful observer will notice that in the previous sections, we only looked at a handful of domain values to essentially make a guess as to where the function is headed. Consider, for example, our friend . Look at the table we made at the beginning of the first section. We stopped looking once we let get down to . But what about even closer? Like or or ? Maybe waaaay down there starts getting wonky. Maybe. So, right now we're just guessing that . Educated guessing ... yes. But still just guessing. We'd like to start moving past just guessing. We start doing that in this section. We start by looking at a couple of functions whose limits are not in question.  First, consider a constant function like . No matter what you put in for , it gives us . So, there's no question what it's approaching regardless of where we let go. It's always giving . So, we have ...    If is constant, say for some number , and is any number, Then .    Secondly, consider the function . Well, this function just does whatever does. So, where goes, so does . Thus, we have ...    If and is any number, Then .    It is our good fortune that limits behave according to the following theorem.    If and and and are any two numbers and the right hand side of the following equalities are defined, Then , , and .    It is also the case that if all of the are replaced with either or , then the theorem is still correct.  Often, people cite this basic properties theorem by saying, \"the limit of a sum is the sum of the limits, the limit of a product is the product of the limits, and the limit of a ratio is the ratio of the limits\".  Please note that, from the conditions of the theorem, if the right hand side of any of the equalities in this theorem can not be computed, then the theorem is not making a statement (i.e. isn't valid, isn't a thing). For example, if in the theorem, then we certainly are not claiming that since the right hand side of this equality is which isn't even a thing to claim something is.  Use to compute , , and .  Using , we quickly deduce the following quick conclusions (called \"corollaries\" by mathematicians).      If is a nonzero rational number and is a nonzero number at which is defined, then .    If and are polynomials and , then .      Finally, we provide here a short list of known limits for use in subsequent sections.      If is any number, then .    If is any number, then .    If is any number, then .    If , then .      "
},
{
  "id": "thm-limitOfConstants",
  "level": "2",
  "url": "limitProps.html#thm-limitOfConstants",
  "type": "Theorem",
  "number": "1.3.1",
  "title": "",
  "body": "  If is constant, say for some number , and is any number, Then .   "
},
{
  "id": "thm-limitOfIdentity",
  "level": "2",
  "url": "limitProps.html#thm-limitOfIdentity",
  "type": "Theorem",
  "number": "1.3.2",
  "title": "",
  "body": "  If and is any number, Then .   "
},
{
  "id": "thm-limitBasicProperties",
  "level": "2",
  "url": "limitProps.html#thm-limitBasicProperties",
  "type": "Theorem",
  "number": "1.3.3",
  "title": "",
  "body": "  If and and and are any two numbers and the right hand side of the following equalities are defined, Then , , and .   "
},
{
  "id": "remark-2",
  "level": "2",
  "url": "limitProps.html#remark-2",
  "type": "Remark",
  "number": "1.3.4",
  "title": "",
  "body": "It is also the case that if all of the are replaced with either or , then the theorem is still correct. "
},
{
  "id": "remark-3",
  "level": "2",
  "url": "limitProps.html#remark-3",
  "type": "Remark",
  "number": "1.3.5",
  "title": "",
  "body": "Please note that, from the conditions of the theorem, if the right hand side of any of the equalities in this theorem can not be computed, then the theorem is not making a statement (i.e. isn't valid, isn't a thing). For example, if in the theorem, then we certainly are not claiming that since the right hand side of this equality is which isn't even a thing to claim something is. "
},
{
  "id": "example-6",
  "level": "2",
  "url": "limitProps.html#example-6",
  "type": "Example",
  "number": "1.3.6",
  "title": "",
  "body": "Use to compute , , and . "
},
{
  "id": "limitCorollaries",
  "level": "2",
  "url": "limitProps.html#limitCorollaries",
  "type": "Corollary",
  "number": "1.3.7",
  "title": "",
  "body": "    If is a nonzero rational number and is a nonzero number at which is defined, then .    If and are polynomials and , then .     "
},
{
  "id": "thm-aFewKnownLimits",
  "level": "2",
  "url": "limitProps.html#thm-aFewKnownLimits",
  "type": "Theorem",
  "number": "1.3.8",
  "title": "",
  "body": "    If is any number, then .    If is any number, then .    If is any number, then .    If , then .     "
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
