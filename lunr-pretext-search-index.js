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
  "id": "thm-AFewKnownLimits",
  "level": "2",
  "url": "limitProps.html#thm-AFewKnownLimits",
  "type": "Theorem",
  "number": "1.3.8",
  "title": "",
  "body": "    If is any number, then .    If is any number, then .    If is any number, then .    If , then .     "
},
{
  "id": "defContinuitySection",
  "level": "1",
  "url": "defContinuitySection.html",
  "type": "Section",
  "number": "2.1",
  "title": "Definition",
  "body": " Definition  Consider ...     First discontinuity example     Which, for the record, happens to be the graph of the following function   Using the limit notation developed to this point, we notice that . As it happens for this function though, we notice that this does not match the value of . That is, for this particular function at the domain value , we have Visually (i.e. looking at the graph of ), this shows up as some sort of \"break\" in the graph of at . In such cases, we say that has a \"discontinuity\" at . Precisely, we have  When it is the case that , we say that is \"continuous at \". Otherwise, we say that is \"discontinuous at \".  It is worth noting here that some discontinuities are \"removable\" and some are not. Consider . This familiar function has the graph     Bad discontinuity example     At , this function has no limit of any kind (and isn't even defined) at . Even worse, if we chose to define a function that was for all and set it to be *something* at , there is nothing we could set it to in order to make it continuous since has no limit at . So, this discontinuity at is quite bad.  On the other hand, looking at the graph at the start of the section, if we had just defined that function to be instead of , then would have been continuous at and, as apparent from the graph, everywhere else between and . Such discontinuities are often called \"removable\". So, we'd say that for the function at the start of the section, the discontinuity at is \"removable\".  "
},
{
  "id": "figure-1",
  "level": "2",
  "url": "defContinuitySection.html#figure-1",
  "type": "Figure",
  "number": "2.1.1",
  "title": "",
  "body": "   First discontinuity example    "
},
{
  "id": "defContinuity",
  "level": "2",
  "url": "defContinuitySection.html#defContinuity",
  "type": "Definition",
  "number": "2.1.2",
  "title": "",
  "body": "When it is the case that , we say that is \"continuous at \". Otherwise, we say that is \"discontinuous at \". "
},
{
  "id": "figure-2",
  "level": "2",
  "url": "defContinuitySection.html#figure-2",
  "type": "Figure",
  "number": "2.1.3",
  "title": "",
  "body": "   Bad discontinuity example    "
},
{
  "id": "basicPropsOfContinuity",
  "level": "1",
  "url": "basicPropsOfContinuity.html",
  "type": "Section",
  "number": "2.2",
  "title": "Basic Properties",
  "body": " Basic Properties  In light of the definition of continuity from the previous section, we see that and are really saying ...   Rational functions, , , and are all continuous wherever they are defined.   The basic limit properties then yield the following   If and are both continuous at a given , then and are all continuous at that . Further, if also then is continuous at .   So, for example, if we want to calculate the limit of at , it's very easy since we know from the corollary above that , which is simply is continuous at . Thus   "
},
{
  "id": "thm-AFewKnownContinuities",
  "level": "2",
  "url": "basicPropsOfContinuity.html#thm-AFewKnownContinuities",
  "type": "Theorem",
  "number": "2.2.1",
  "title": "",
  "body": " Rational functions, , , and are all continuous wherever they are defined.  "
},
{
  "id": "cor-basicContinuityProps",
  "level": "2",
  "url": "basicPropsOfContinuity.html#cor-basicContinuityProps",
  "type": "Corollary",
  "number": "2.2.2",
  "title": "",
  "body": " If and are both continuous at a given , then and are all continuous at that . Further, if also then is continuous at .  "
},
{
  "id": "otherPropsOfContinuity",
  "level": "1",
  "url": "otherPropsOfContinuity.html",
  "type": "Section",
  "number": "2.3",
  "title": "Intermediate Values",
  "body": " Intermediate Values  Recall the graph of this function from the first section of this chapter.   Notice that it has the value at (i.e. ) and it has the value at (i.e. ). But, does it ever have the value (i.e. is there a domain value for which )? Imagine a horizontal line on the graph at a height of and you'll see that the answer is \"no\". So, why not? What goes wrong that this function has the value and but never not has the intermediate value ? Hopefully the answer is apparent. Namely, the function has a discontinuity so there is a \"break\" \/ \"jump\" over some of the intermediate values like . One of the nice properties of functions that are continuous on an interval of numbers (i.e. continous at every number in an interval) is that it obtains all of its intermediate values. Specifically, we have the following theorem known by mathematicians as the \"Intermediate Value Theorem (IVT)\".   If is continuous on an interval (whether open, half open, or closed) and and are two values that obtains and finally happens to be a number between (i.e. intermediate to) and , then there is some in so that .   Consider for example the function above but this time defined with . Here, let's plot it.   Now, if you look at any two values the function obtains, you'll see that every value in between them is also obtained by the function. In other words, point one finger at a number on the vertical axis that the function obtains and also point a finger at another number on the vertical axis that the function obtains and then consider any number in between. Look over at the graph and you'll see that the function also obtains that value. Why? Well, we removed the disontinuity so now this function is continuous on the interval so we have the IVT.  "
},
{
  "id": "thm-IVT",
  "level": "2",
  "url": "otherPropsOfContinuity.html#thm-IVT",
  "type": "Theorem",
  "number": "2.3.1",
  "title": "",
  "body": " If is continuous on an interval (whether open, half open, or closed) and and are two values that obtains and finally happens to be a number between (i.e. intermediate to) and , then there is some in so that .  "
},
{
  "id": "sec-tangentProblem",
  "level": "1",
  "url": "sec-tangentProblem.html",
  "type": "Section",
  "number": "3.1",
  "title": "Tangent Problem",
  "body": " Tangent Problem  Consider this graph of .   In addition to , a couple of lines are plotted here. They both pass through the point on the graph. Notice that the black line is special in a particular way. Namely, it just \"touches\" the graph at without \"cutting\" through the graph. If you used any other line passing touching (i.e. touch but use a different slope) like the dashed line, then it \"cuts through\". You should recall from your precalculus experience that lines like the black one here are called \"tangent\" lines. Tangent lines to graphs are very important to applied scientists such as physicists. It would be nice to write an equation for this tangent line but you'll notice that we can't quite do that. Why? Well, after a little thought you hopefully realized that while we have a point that the line passes through , we would need either another point the line passes through or the slope of the line in order to write an equation for it. But, we have neither. So, the tangent line is just an idea and not something we can concretely describe at this point. Our goal is to solve this \"tangent line problem\" by finding a way to compute the slope of lines tangent to graphs so that we can write equations for them.  So... how? How did historical mathematical luminaries such as Isaac Newton solve this tangent line problem? Well, suppose for a moment that instead of looking at the tangent line, we look at a line passing through and a point on the graph just a teensy bit to the right or left of . So, suppose is a teensy number. We could adjust by that amount and look up at the graph to the point . For example, we could take giving us the point on the graph . The line going through the two points and has a slope (rise\/run) equal to (i.e. ). So, that line *can* be plotted since we have both a slope, ), and a point the line passes through, . Here, let's plot that line as a dashed line and show it along with the tangent line.   You'll notice that while this dashed line is not quite the tangent line, it is ... close. We could get even closer by choosing a point even closer to . In other words, make smaller (either a teensier positive or negative number). For smaller and smaller values of , the resulting lines should look more and more line the tangent line. For example, suppose we take like and . Those give lines with the following slopes         .75  2.75    0.5  2.5    0.1  2.1    0.01  2.01     If we plot all of these lines, here is what they look like     So, what do we think the slope of the tangent line is likely to be? It's apparent that if we let continue to shrink, the associated lines have slopes that are getting closer and closer to . Plotting the line through with slope gives us exactly the tangent line depicted in black. So, at least for the function and the point on its graph, we've solved the tangent line problem!  Implement the same solution but this time look at a different point on the graph of (e.g. maybe or ) etc.)  "
},
{
  "id": "example-7",
  "level": "2",
  "url": "sec-tangentProblem.html#example-7",
  "type": "Example",
  "number": "3.1.1",
  "title": "",
  "body": "Implement the same solution but this time look at a different point on the graph of (e.g. maybe or ) etc.) "
},
{
  "id": "sec-definitionOfDerivative",
  "level": "1",
  "url": "sec-definitionOfDerivative.html",
  "type": "Section",
  "number": "3.2",
  "title": "Definition",
  "body": " Definition  The tangent problem solution from the previous section motivates us to define a function in the following way.  For a fucntion defined on an interval and a point in that interval, we define for any for which this limit exists. We call this function the \"derivative\" of and for any where its defined, we say that is \"differentiable\" there. The derivative function is sometimes denoted .  For example, suppose the function is just a constant like . Think about the graph of that function. It's just a flat line at a height of . Consequently, regardless of the value of , the tangent line is flat (i.e. slope), so when is constant, we get for all values of . We note here that when the expression for the definition of is particularly simple, we often lazily just write the expression down instead of the name of the function. So, for example, we could write .  Here's another example. Consider . The graph of is a straight line with slope . So, this is any easy one to get the derivative at any value of . Namely, for , we have (i.e. ) for any value of .  So, those two examples don't require the use of any of our new limit finding skills. They are obvious from geometry. But, In the previous section, we did some of these computations for . Looking back, you'll recall we found . Even more, if you worked through the example there doing both of the given values, you would have found that and . So, based on those facts, can you speculate on a general expression for ? Well, let's use our limit finding skills to compute for a very broad range of values all at once. So, suppose is, generically, a number in the domain of . Now,   Notice here that the derivative function requires computing a limit using the value . So, the domain of the derivative is, at most, the domain of . So, does that mean that it is always the case that for every in the domain of , we can find ? No. Unfortunately not. Consider for example . Let's graph this function near .     Think for a moment of the point on this graph. It is not entirely clear what the tangent line there should be. There are lots of lines touching that point that don't \"cut\" through the graph and could be possible tangent lines. It's apparent that for the slope of the tangent line is and for the slope of the tangent line is . But what about at ? Well, let's compute using the definition.   We looked at this limit in the chapter on limits. It turns out that it doesn't exist as we found but unfortunately . So, does not exist \/ is not defined when . Apparently, that is generally the case when \"cusps\" like this exist in the graph.  There is another circumstance where one can see that derivatives do not exist. Specifically, if you look at a function that has a discontinuity somehwere, you would observe that the derivative does not exist there. For example, look at the function which is graphed here.   Suppose we try to find its derivative at (i.e. slope of the tangent line to ). To see what it should be from the definition, let's add tiny positive values of like and to . These give and . Let's plot those and see what the lines through those points and look like.   We see here that the limit of those slopes is positively infinite. In other words, it doesn't exist. In general it is true that a failure of continuity at a point means that the function can't be differentiated there. Stated more directly we have ...    If is differentiable at a given value in its domain, then it must be continous there too.    "
},
{
  "id": "def-derivative",
  "level": "2",
  "url": "sec-definitionOfDerivative.html#def-derivative",
  "type": "Definition",
  "number": "3.2.1",
  "title": "",
  "body": "For a fucntion defined on an interval and a point in that interval, we define for any for which this limit exists. We call this function the \"derivative\" of and for any where its defined, we say that is \"differentiable\" there. The derivative function is sometimes denoted . "
},
{
  "id": "thm-differentiableImpliesContinuous",
  "level": "2",
  "url": "sec-definitionOfDerivative.html#thm-differentiableImpliesContinuous",
  "type": "Theorem",
  "number": "3.2.2",
  "title": "",
  "body": "  If is differentiable at a given value in its domain, then it must be continous there too.   "
},
{
  "id": "sec-propertiesOfDerivative",
  "level": "1",
  "url": "sec-propertiesOfDerivative.html",
  "type": "Section",
  "number": "3.3",
  "title": "Basic Properties",
  "body": " Basic Properties  So, in previous sections, we figured out a few derivatives like , and . Now what? Well, careful application of the definition of derivative would also give the following     and     Even better, derivative is as robust a concept as limit in that it yields the following basic properties theorem.      If and are any numbers and and are differentiable at , then .    If and are differentiable at , then .    If and are differentiable at and , then .      Perhaps the first obvious thing we can prove from these basic facts is that . How? Do you see it? Well, notice that times . So, the product property 2 of derivatives in the theorem above applies here giving . Similarly we could get . Do you see a pattern: , , , etc. In greatest generality, we have    If is defined on a given open interval, then there    More dramatic is that using the few derivatives we know and this basic properties theorem, we are now able to differentiate a large swath of functions. Let's throw one together like We now can compute   "
},
{
  "id": "thm-knownDerivatives",
  "level": "2",
  "url": "sec-propertiesOfDerivative.html#thm-knownDerivatives",
  "type": "Theorem",
  "number": "3.3.1",
  "title": "",
  "body": "   and    "
},
{
  "id": "thm-derivativeBasicProperties",
  "level": "2",
  "url": "sec-propertiesOfDerivative.html#thm-derivativeBasicProperties",
  "type": "Theorem",
  "number": "3.3.2",
  "title": "",
  "body": "    If and are any numbers and and are differentiable at , then .    If and are differentiable at , then .    If and are differentiable at and , then .     "
},
{
  "id": "thm-derivativeOfPowerFunctions",
  "level": "2",
  "url": "sec-propertiesOfDerivative.html#thm-derivativeOfPowerFunctions",
  "type": "Theorem",
  "number": "3.3.3",
  "title": "",
  "body": "  If is defined on a given open interval, then there   "
},
{
  "id": "sec-chainRule",
  "level": "1",
  "url": "sec-chainRule.html",
  "type": "Section",
  "number": "3.4",
  "title": "Chain Rule",
  "body": " Chain Rule  The derivative has one more, arguably more fundamental, basic property.    If is differentiable at and is differentiable at , then     This critical, fundamental property, of the derivative is know as the Chain Rule. Let's try it out.   "
},
{
  "id": "thm-chainRule",
  "level": "2",
  "url": "sec-chainRule.html#thm-chainRule",
  "type": "Theorem",
  "number": "3.4.1",
  "title": "",
  "body": "  If is differentiable at and is differentiable at , then    "
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
