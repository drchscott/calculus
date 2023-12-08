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
  "title": "Properties",
  "body": " Properties  A careful observer will notice that in the previous sections, we only looked at a handful of domain values to essentially make a guess as to where the function is headed. Consider, for example, our friend . Look at the table we made at the beginning of the first section. We stopped looking once we let get down to . But what about even closer? Like or or ? Maybe waaaay down there starts getting wonky. Maybe. So, right now we're just guessing that . Educated guessing ... yes. But still just guessing. We'd like to start moving past just guessing. We start doing that in this section. We start by looking at a couple of functions whose limits are not in question.  First, consider a constant function like . No matter what you put in for , it gives us . So, there's no question what it's approaching regardless of where we let go. It's always giving . So, we have ...    If is constant, say for some number , and is any number, Then .    Secondly, consider the function . Well, this function just does whatever does. So, where goes, so does . Thus, we have ...    If and is any number, Then .    It is our good fortune that limits behave according to the following theorem.    If and and and are any two numbers and the right hand side of the following equalities are defined, Then , , and .    It is also the case that if all of the are replaced with either or , then the theorem is still correct.  Often, people cite this basic properties theorem by saying, \"the limit of a sum is the sum of the limits, the limit of a product is the product of the limits, and the limit of a ratio is the ratio of the limits\".  Please note that, from the conditions of the theorem, if the right hand side of any of the equalities in this theorem can not be computed, then the theorem is not making a statement (i.e. isn't valid, isn't a thing). For example, if in the theorem, then we certainly are not claiming that since the right hand side of this equality is which isn't even a thing to claim something is.  Use to compute , , and .  Using , we quickly deduce the following quick conclusions (called \"corollaries\" by mathematicians).      If is a nonzero rational number and is a nonzero number at which is defined, then .    If and are polynomials and , then .      Finally, we provide here a short list of known limits for use in subsequent sections.      If is any number, then .    If is any number, then .    If is any number, then .    If , then .      "
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
  "body": " Chain Rule  The derivative has one more, arguably more fundamental, basic property that is generally referred to as the chain rule.   Chain Rule   If is differentiable at and is differentiable at , then     Let's try it out.   "
},
{
  "id": "thm-chainRule",
  "level": "2",
  "url": "sec-chainRule.html#thm-chainRule",
  "type": "Theorem",
  "number": "3.4.1",
  "title": "Chain Rule.",
  "body": " Chain Rule   If is differentiable at and is differentiable at , then    "
},
{
  "id": "sec-inverseFunctions",
  "level": "1",
  "url": "sec-inverseFunctions.html",
  "type": "Section",
  "number": "4.1",
  "title": "Inverse Functions",
  "body": " Inverse Functions  The chain rule from yields an assortment of powerful corollaries.    If is invertible (i.e. 1-1) and differentiable on an interval, then     We don't dwell much on proof in this text but, can you see the proof here? When we use the name \"corollary\" for a mathematical statement, we are stating that the proof follows quickly from previous theorems. Consequently, corollaries provide a gentle introduction to the idea of proof writing. So, it seems appropriate at this stage to be, at least occasionally, discussing such proofs. In this case, the corollary above follows quickly from the chain rule. Why? Notice that by the definition of inverse functions, we have that . Now, use the chain rule to help with differentiating both sides of this equation and see what you get.  It's important to note here that, like the basic properties of differentiation from previous sections, this is once again saying that if you know the derivative of one function ( in this case), then you get for free the derivative of another function ( in this case). Let's try it out.   If you are not remembering \/ missing some trig stuff, the last equality above may throw you a bit. Bear in mind, that that is a trig fact and not calculus per se. Still, if you don't recall that composing a trig function with an inverse trig function leads to an algebraic expression (e.g. ), then this might be a good time to at least review \/ look at composed with and composed with   "
},
{
  "id": "cor-inverseFunctionDerivatives",
  "level": "2",
  "url": "sec-inverseFunctions.html#cor-inverseFunctionDerivatives",
  "type": "Corollary",
  "number": "4.1.1",
  "title": "",
  "body": "  If is invertible (i.e. 1-1) and differentiable on an interval, then    "
},
{
  "id": "sec-implicitFunctions",
  "level": "1",
  "url": "sec-implicitFunctions.html",
  "type": "Section",
  "number": "4.2",
  "title": "Implicit Functions",
  "body": " Implicit Functions  I'm thinking of a function with domain variable, say . Let's call it . Suppose that I told you that . Notice that here I have not *explicitly* defined in terms of . Can you compute the derivative of ? Probably you realize that by dividing both sides by , you find the *explicit* expression so that you can then compute the derivative directly .  But, sometimes equations can be very complicated and finding such explicit expressions for the function implied there just might not be possible. So, suppose we pretend for a moment that we can't solve explicitly for . I know, we can and we did just above. But, play along like we can't. Is there nothing we can do to get information about ? Well, there is. Since you know that is *some* function of , that means that is a product of two functions of (namely and ) We also know from previous sections how to differentiate a product. So, differentiation both sides of the equation gives . Solving for gives . This doesn't give explicitly yet since we don't know explicitly yet. But, if someone came along and told us that , notice that this conclusion gives us immediately that .  Of course, it may never happen that you explicitly know what is so that getting an explicit description of might not be possible. So, does this mean we have no information about ? Quite the contrary. Suppose for example that due to some physical knowledge of the situation represented by the equation, we knew that the function had the value at (i.e. ). Then the equation we found, , tells us that . So, we know the slope of the tangent line to the graph of at even though we have no explicit formula helping us to graph . Now that we have the slope of the tangent line, , and the point on the graph it passes through, , we can write an equation for the tangent line:   "
},
{
  "id": "sec-introToOptimization",
  "level": "1",
  "url": "sec-introToOptimization.html",
  "type": "Section",
  "number": "4.3",
  "title": "Intro to Optimization",
  "body": " Intro to Optimization  Probably the most far reaching application of calculus is optimization. When we say *optimization*, we are referring to the common applied task of finding the highs and lows of a given circumstance. For example, business people are always looking for maximum profits or minimum costs. Engineers are often looking for maximum stress on something so they can build the right structure. Etc. Optimzation is an important issue in almost every sort of endeavor.  To move forward, let's set down some language often used in optimization. For us, it's easiest to talk about this in the context of a function since generally we use functions to describe circumstances to which mathematics applies. When we say *local* or alternatively *relative* maximum, we mean a value the function obtains at some location in its domain that is larger than or equal to any other value it obtains in some interval (possible a very small interval) containing the location. In otherwords, the function is maximal at that point in that little neighborhood but might get bigger outside of the neighborhood. Local \/ relative minimum is analogously defined. When we say *global* or *absolute* maximum, we mean a value the function obtains at some location in its domain and that value is larger than or equal to any other value the function obtains in its domain. Global \/ Absolute minimum is analogously defined. When we say the function obtains an *optimum* or *extreme* value, we are just indicating that it obtains a max or min but aren't specifying which one. Let's look at and example to practice the language. Consider the graph of given below.   This function has domain . You'll notice that by the definitions given above it has a *local* min at 2. Notice the language here. There is a local min *at* 2. That local min *is* . Let's explore further. Can you find a global min? What is it and where does it happen? Well, yes ... there is one. It happens *at* and it *is* (i.e. ). Okay, finish it out on your own. Do you find any other extremes? There are two more. Can you say what they are and also where they occur?  So, how does calculus help find these optimums? Take a look at the graph above. Consider the open interval from -1 to 2 (i.e. ). You'll notice there are no optimums on that interval. Indeed, if you look at any point on the graph in that interval you'll see that there are larger values just to the left of it and smaller values just to the right of it. If you haven't looked ... look. Look, for example, at on the graph.   Look at the values of the function to the left and right of this point. Like any other value of the function in this interval (from to ), the value of the function is *not* optimal in any way (i.e. it has larger results to the left and smaller ones to the right). So, if we are looking for optimums, this interval can be ignored. There are no optimums there. Now, how could calculus help us spot this useless interval? Do you see any calculus connection in this interval. Here, let's plot the tangent line at in case the connection isn't evident.   What do you notice about the slope of that tangent line? Yes, it's negative. In other words, is negative. In fact, you can see that the derivative (i.e. slopes of tangent lines) are negative in that entire subinterval from -1 to 2. The derivative being negative there ensures that the function is strictly decreasing, always has negative slope and so the function can't obtain an optimum there. Similarly, you can see that the derivative is always positive from -3 to -1 so the function doesn't have an optimum in that open interval and the derivative is always positive from 2 to 3 so there is no optimum in that open interval. That quickly leaves only and as places where optimums can occur. This leads to what we call a first derivative analysis theorem.    If for all in an open interval OR for all in an open interval, Then does not have an optimum on that open interval.    Suppose for example that we hadn't yet studied the function above and someone just hands us . Let's do a first derivative analysis on it without even creating the graph. So, . We see that this derivative is at and . And on the open intervals and we see that is either always positive or always negative so the theorem above concludes that there are no optimums there. Thus, the only *possible* places for optimums are and . It's really that simple. Having narrowed down to just that handful of options, we can study the behavior or the function on either side of those locations to conclude if we have an optimum there and if so, what kind.  "
},
{
  "id": "thm-firstDerivativeAnalysis",
  "level": "2",
  "url": "sec-introToOptimization.html#thm-firstDerivativeAnalysis",
  "type": "Theorem",
  "number": "4.3.1",
  "title": "",
  "body": "  If for all in an open interval OR for all in an open interval, Then does not have an optimum on that open interval.   "
},
{
  "id": "sec-theExtremeValueTheorem",
  "level": "1",
  "url": "sec-theExtremeValueTheorem.html",
  "type": "Section",
  "number": "4.4",
  "title": "Extreme Value Theorem",
  "body": " Extreme Value Theorem  The function we worked with in the previous section had both an absolute max and an absolute min. So, is that true for every function? Can you picture a function that doesn't have an absolute max or an absolute min? Consider this function defined on the closed interval  Does this function have an absolute max? Let's plot it to see if we can understand the question better.   Now that we see its graph, what do you think? Does it *obtain* an absolute max? You might say, \"Well, yeah. Isn't it 2? Right there at ?\" But... no. At the value of the function is . It never actually obtains the value 2. In fact, no matter where you evaluate this function, there are always larger values that the function obtains. So, what went wrong? A little thought leads us to conclude that it is that annoying discontinuity at 1 that is the problem. So, maybe as long as a function is continuous, we can avoid situations where the function does not obtain its absolute max. So, suppose we have *better* behaved, continuous function similar to the one we're studying. For example, suppose that we just use the nice continuous function . Now, that one is continous everywhere so it shouldn't have a problem. Right? Not so fast. Suppose we define it on the partially open interval instead of the closed interval . Then we get this graph   Once again, we see that the function does not obtain an absolute maximum. The problem this time is that the domain interval has that darned open end. At this point, you may be thinking that there might be tons of ways a function could have problems that prevent extremes from being obtained. Fortunately, that's not really the case. The two problems identified above are the only real issues. In fact, we have ...   The Extreme Value Theorem   If is continuous on a closed interval, Then obtains an global max and a global min on that interval.    Notice that this theorem makes finding optimums pretty easy. Namely, if you have a continuous function on a closed interval, it guarantees that the function WILL obtain an absolute max and an absolute min on that interval. So, we can just do a first derivative analysis to narrow our options down to a few critical numbers in the domain (i.e. eliminate open intervals where optimums can't happen), evaluate our function at those places and the largest result must be the absolute max and the smallest the absolute min.  "
},
{
  "id": "thm-extremeValueTheorem",
  "level": "2",
  "url": "sec-theExtremeValueTheorem.html#thm-extremeValueTheorem",
  "type": "Theorem",
  "number": "4.4.1",
  "title": "The Extreme Value Theorem.",
  "body": " The Extreme Value Theorem   If is continuous on a closed interval, Then obtains an global max and a global min on that interval.   "
},
{
  "id": "sec-modeling",
  "level": "1",
  "url": "sec-modeling.html",
  "type": "Section",
  "number": "4.5",
  "title": "Modeling",
  "body": " Modeling  The goal of this text is to keep the calculus presentation as lean and clear as possible. But, ultimately, I feel that some nod has to be given to seeing how the rest of the world ends up seeing value in calculus. So, in this section let's quit doing math for a bit and instead look at some other kind of work and see how it can benefit from calculus. The general notion here is that of \"modeling\". This sort of process is very natural for us humans. The idea is that we have a problem in one sphere of interest and it turns out that we can create a version of that problem in some other sphere of interest -- think making maps of the world on paper so you can roll the world up and take it with you. So, we're taking the interest in travelling about the world and modeling it using paper and drawings. In that way, we can work on travel problems by doing stuff with paper and such instead of actually being out there in the world moving around. How useful the information is depends on how good the model is and how well we can work with it. The development of math has substantially been driven by the fact that so many spheres of interest lend themselves to good mathematical models.  Let's avoid getting too complicated but also make sure we don't produce something trivial. We do this to avoid having to learn a lot of new ideas from some other sphere of interest from which we can then draw a model.  Sooooo.... suppose we are a specialized shipping company and we need to design a cylindrical container. We have a company that wants containers to ship a precious substance in cylindrical containers using a specific kind of metal. The dimensions of the container don't much matter to them but they want the containers to have a volume of 1000 cubic centimeters. After talking with our production department, we learn that making the top and bottom of the cylindrical container is a bit more expensive at 2 cents per square centimeter while the side only costs 1.5 cents per square centimeter. So, what dimensions should we use?  Well, generally when people say \"cylindrical containers\" they mean right circular cyclinders so they could be described with 2 dimensions. For example, we could use the radius of the circular ends and the height of the container. Hmmmm... but, if we have one of those dimensions, it occurs to us that the other dimension would be determined since the container is supposed to have volume . After all, from our geometry background, we know that if we denote the radius with an and the height with an , then volume is given by . So, for us, we have That means that for any given radius, we have This is good news because it means we're down to just one variable... .  Now, we're trying to deal with costs. So, let's make a function for cost based on our variable . We'll do it in terms of cents since that is how the problem was described to us. Well, the area of the top and bottom combined is . Since the cost for those is 2 cents per , we see that the top and bottom contribute cents to the cost. Now, if you lay out the side of the cylinder flat, you see it is a rectangle with dimensions and circumference of the circle making the top and bottom of the cylinder, . So, the area of the side of the cylinder is the product of those two dimensions giving an area of That area only costs 1 cent per so it contributes cents to the cost. Finally, we have a cost function. Let's denote cost with a so that now we have Even more, we know that the domain we want to use is any positive (i.e. the open interval ).  That's it! We've created a mathematical model of the original problem. From here on, the work is done with familiar mathamematics. We're simply using optimization skills from previous experience. As a matter of completeness, let's work through the math. So... From this, we see that only when which means To the left of that , isn't 0, so it's either positive or negative and we can easily evaluate at some point to the left and see that it is negative. So, decreases until it reaches . Similarly, to the right of that , we see that is positive so increases. Thus, by first derivative analysis, we see that is minimal at .  We can now report that to minimize cost in this situation, we should use which means for a minimal cost of approximately cents.  "
},
{
  "id": "sec-areaProblem",
  "level": "1",
  "url": "sec-areaProblem.html",
  "type": "Section",
  "number": "5.1",
  "title": "Area Problem",
  "body": " Area Problem  For a given function defined on a closed interval, let's try to find the area that its graph traps above the axis minus the area it traps below the axis. For example, if we plot on we get   Notice that this graph traps some area above the axis (in a triangle with legs of length 2 and 2 over ) and some area below the axis (in a triangle with legs of length 1 and 1 over ). Do you see them? Here, let's highlight them.   If we subtract the area below from the area above we get . Of course, that is a case where we have well established formulas for calculating areas (triangles in this case). What if the graph produces shapes for which we do *not* have familiar geometric formulas. Consider, for example, on the interval .   Now what? That's the area problem. Namely, find a way to compute area trapped above the axis minus the area trapped below the axis for a given function. This area trapped above minus area trapped below needs some notation and language. So....   Definition of Integral   For a function definied on a closed interval that produces familiar geometric shapes whose areas we know, we denote the area trapped above the axis minus the area trapped below the axis by and we refer to this as *the integral of on *.    A little thought suggests that, for familiar geometric shapes, integrals have the following *linearity* properties. And when ,   "
},
{
  "id": "def-integralNotation",
  "level": "2",
  "url": "sec-areaProblem.html#def-integralNotation",
  "type": "Definition",
  "number": "5.1.1",
  "title": "Definition of Integral.",
  "body": " Definition of Integral   For a function definied on a closed interval that produces familiar geometric shapes whose areas we know, we denote the area trapped above the axis minus the area trapped below the axis by and we refer to this as *the integral of on *.   "
},
{
  "id": "sec-RiemannsSolution",
  "level": "1",
  "url": "sec-RiemannsSolution.html",
  "type": "Section",
  "number": "5.2",
  "title": "Riemann’s Solution",
  "body": " Riemann's Solution  Historically, the mathematician Bernhard Riemann is credited with the approach \/ solution to the area problem presented in this section. To see how it works, we'll do a case study on something for which we know the answer. That way, when we apply Riemann's approach, we'll know whether it's working or not. So, let's look at on . Notice that this gives a triangle above the axis with leg lengths 2 and 2 so that the triangle has area 2.   Riemann's idea is to chop the interval into equally sized subintervals. For example, if we chop it into 4 subintervals, each subinterval would have size . The subintervals would be and . For each subinterval, Riemann evaluated the function ( for us) somewhere in each subinterval and used that evaluation as the height of a rectangle and the subinterval as the base of the rectangle. For simplicity, let's evaluate our function at the right endpoints of the subintervals. So, here's what we have.   Now, unlike the area under the curve, these rectangles *are* familiar geometric shapes so we can compute their areas. Even better, if we add up all of their areas, it will give us an *approximate* value of the area under the curve. Of course, it will be off by some amount since we can clearly see that the rectangles stick outside of the area in question. Still ... it gives some approximation. So, let's compute it. Each rectangle has the same size base of and the heights are and . One quick note: Instead of writing things like as , I'm leaving it in terms of the subinterval size . That will be helpful later so avoid reducing such things for now. So, the approximate area as given by these rectangular areas is So? Not bad. We know the actual, exact, area is 2 but this process estimated it at 2.5. How could we improve? The answer is, hopefully, very apparent. Namely, we could just up the number of subintervals. When we do that, the size of the subintervals shrinks so that the rectangles are thinner (more like pins). So, the amount of the rectangle poking out of the actual area will be less. In other words, the estimate by using them *should* be more accurate. Let's check! Let's chop the interval into 8 equal subintervals this time. So each subinterval will have size this time.   Now, let's add up all those rectangular areas. Using these 8 smaller subintervals gives the more accurate estimate 2.25 instead of 2.5 that we got with the 4 larger subintervals. So, we have every reason to expect if we continue to use more and more subintervals of equal size (so thinner and thinner rectangles) that we'll get more and more accurate estimates of the area.  As a final note, you'll see that we wrote and for these estimates. Using the is a nod to Riemann and the 4 and 8 are just indicating how many subintervals we use. Generally, we refer to these approximations as *Riemann sums*.  "
},
{
  "id": "sec-defOfIntegral",
  "level": "1",
  "url": "sec-defOfIntegral.html",
  "type": "Section",
  "number": "5.3",
  "title": "Definition",
  "body": " Definition  Riemann's solution from the previous section suggests that we would get more and more accurate estimates if we computed etc. That way we'd be using thinner and thinner approximating rectangles. But, each time we do a Riemann sum, it's a lot of work. So, let's try something. Suppose we don't specify exactly how many rectangles to use. Just let denote a positive number so that is denoting the Riemann sum for that many rectanges. As gets larger, the rectangles should get thinner and should be a better and better approximation to the area. Can we get written without specifying the exact value of ? Well, let's try.  For the moment, let's stay focused on the simple example from the previous section (i.e. on ). First, we note that the interval we're working over runs from to . So, it has size 2-0 = 2. Chopping that into n equal subintervals means that each subinterval will have size (1\/n)th the size of the whole interval so each one will have size . Now that we know the size of the subintervals and we also know that the first one starts at the left end of the whole interval (i.e. at 0 in this case), we see that the subintervals we're using are Thus, the right endpoints of the subintervals where we'll be evaluating in order to get the heights of our rectanges are So, finally, we can compute We take a moment now to note some facts about sums like the one that shows up here. Namely,   Special Sums                        We present these summation facts without proof here. But, please note, they are fairly straightforward to verify. One can find many nice treatments online and generally if this text is being used for teaching a course, one should expect to see some presentation of one or more verifications in class. The first of them is particularly evident and is often attributed to the hisotric luminary mathematician, Karl Gauss.  With these summation facts in place, we can continue the work above. So, if we want , it's super easy now as we see that it is . Even more, it is now very clear that the more and more (thinner and thinner) rectangles we use, the more this is looking like .   Definition of Integral   For a continuous function definied on a closed interval , we define     At the risk of being more verbose that consistent with the goals of this text, let's put down what looks like in general. So, for a function on an interval we see that the size of the interval is so that when we divide it into equal size subintervals, each has size . Since our interval starts at , we see that the first subinterval ends at , the second subinterval ends at , the third one ends at and so on until we finally reach the end of the last, th, subinterval at . We evaluate at each of these subinterval endpoints and multiply each of those evaluations by the size of the subintervals to get the area of each approximating rectangle and add those areas up to get . In other words, the most general form of the Riemann sums is   "
},
{
  "id": "thm-sumFormulas",
  "level": "2",
  "url": "sec-defOfIntegral.html#thm-sumFormulas",
  "type": "Lemma",
  "number": "5.3.1",
  "title": "Special Sums.",
  "body": " Special Sums                       "
},
{
  "id": "def-integral",
  "level": "2",
  "url": "sec-defOfIntegral.html#def-integral",
  "type": "Definition",
  "number": "5.3.2",
  "title": "Definition of Integral.",
  "body": " Definition of Integral   For a continuous function definied on a closed interval , we define    "
},
{
  "id": "sec-fullExample",
  "level": "1",
  "url": "sec-fullExample.html",
  "type": "Section",
  "number": "5.4",
  "title": "A Full Example",
  "body": " A Full Example  Let's do a rather full example. So, let's avoid simple intervals starting at and functions that have easy geometric formulas for the areas. A good starting example that isn't too crazy is on . For reference, here's the graph.   Let's compute the th Riemann sum. Now, as . So we have ...   It is, perhaps, terrifying to think about the computations involved in computing integrals for more interesting functions. After all, the computations above for just the relatively simple function are already pretty extensive. Well, the good news is that the linearity properties we discussed for integrals when the function's graph produces familiar geometric figures *still* work for the more general continuous functions for which we use the limit of Riemann sums for computation.   Basic Properties of Integrals           If , Then        "
},
{
  "id": "thm-propertiesOfIntegral",
  "level": "2",
  "url": "sec-fullExample.html#thm-propertiesOfIntegral",
  "type": "Theorem",
  "number": "5.4.1",
  "title": "Basic Properties of Integrals.",
  "body": " Basic Properties of Integrals           If , Then       "
},
{
  "id": "sec-fundamentalTheoremofCalculus",
  "level": "1",
  "url": "sec-fundamentalTheoremofCalculus.html",
  "type": "Section",
  "number": "6.1",
  "title": "The Theorem",
  "body": " The Theorem  Even with the basic properties theorem , there are still very few integrals we can find exactly. This next theorem resolves that problem in a dramatic and fairly comprehensive way.   The Fundamental Theorem of Calculus (FTC)   If is continuous on and there, then     In other words, all we really need to understand is differentiation. Integrals are just an application of differentiation! So long as we can get good at moving *backwards* through differentiation to *pre* or *anti* derivatives, we can get the value of integrals exactly and quickly. For example, let's look at from the earlier section. A little thought reveals that So, is an antiderivative of and according to the FTC, we have Just as we found with the limit of Riemann sums earlier!  "
},
{
  "id": "thm-fundamentalTheoremOfCalculus",
  "level": "2",
  "url": "sec-fundamentalTheoremofCalculus.html#thm-fundamentalTheoremOfCalculus",
  "type": "Theorem",
  "number": "6.1.1",
  "title": "The Fundamental Theorem of Calculus (FTC).",
  "body": " The Fundamental Theorem of Calculus (FTC)   If is continuous on and there, then    "
},
{
  "id": "sec-antiderivatives",
  "level": "1",
  "url": "sec-antiderivatives.html",
  "type": "Section",
  "number": "6.2",
  "title": "Antiderivatives",
  "body": " Antiderivatives  Due to the FTC, we now see that moving backwards through differentiation (finding antiderivatives) is important. It may not have occurred to you but while functions have only one derivative, they have more than one antiderivative. Whaaaa??? Sure, notice that and also . So, there is some sort of *collection* of antiderivatives for a given function. To denote this collection of antiderivatives, we adopt a new notation.    We use to denote the collection of *all* antiderivatives for     Unfortunately, this uses the notation we used earlier for integrals. That's a historic fact and we have no power to change it. It differs in that the notation doesn't use the endpoints of any definite interval (i.e. we are just using instead of ). For that reason, some people add to the confusion by referring to the collection of all antiderivatives as the \"indefinite integral\". But, it is important to remember, this symbol denotes a collection of functions. It is not simply one function and it is certainly not an integral.  Perhaps the next most natural thing to wonder is, \"How wild and weird does the full collection of antiderivatives for a given function get?\" Well, the good news is ... not very weird.    If is continuous on an interval and is an antiderivative there, then where is any constant    So, the collection of all antiderivatives of a given function can be found by just finding *one* antiderivative and then adding to it any constant you wish. That's all of them. So, for example, we have   Since we have the FTC, it is clear that getting good at finding antiderivatives is critical. Even more, this theorem now points out we really just need to find one of them. So, how do we get good at finding one antiderivative for a given function? Well, it takes practice. That is generally taken up in a subsequent calculus course. But, let's take a little bit of time to improve our skills at least a little bit. Remember, when you are looking at a function and are hoping to find where it came from via differentiation, you should be looking at the function for *clues* as to what differentiation properties may have been used to get you there. For example, consider something like Where could this have come from? Well, it's a product of two functions ( and ). So, look back at differentiation properties and see if any of them result in a product of functions. You'll quickly notice that the chain rule gives you a product. Specifically, . So, it's reasonable to expect that you got to via the chain rule! If so, what functions are playing the roles of and . Well, the only *inside* function to a composition here is . So that might be . It's inside . So, is apparently the which means that could be . In all, it looks like we may have differentiated (i.e. ). Let's check! Bingo! We got it. We can now say that   "
},
{
  "id": "thm-indefiniteIntegral",
  "level": "2",
  "url": "sec-antiderivatives.html#thm-indefiniteIntegral",
  "type": "Definition",
  "number": "6.2.1",
  "title": "",
  "body": "  We use to denote the collection of *all* antiderivatives for    "
},
{
  "id": "thm-antiderivatives",
  "level": "2",
  "url": "sec-antiderivatives.html#thm-antiderivatives",
  "type": "Theorem",
  "number": "6.2.2",
  "title": "",
  "body": "  If is continuous on an interval and is an antiderivative there, then where is any constant   "
},
{
  "id": "sec-areas",
  "level": "1",
  "url": "sec-areas.html",
  "type": "Section",
  "number": "7.1",
  "title": "Areas",
  "body": " Areas  Our study of integrals was motivated by the area problem so it feels necessary to at least note that in a fairly broad sense, we've solved the area problem. Consider, for example, and . Let's graph them both together.   Take a look at that oddly shaped area trapped between the two curves. Can we calculate that area? Sure. We have the skills now. Notice that the area occurs over the interval . The curve on top is ,   An antiderivative of is so that according to the FTC, the area under that curve is . The curve on the bottom is ,   An antiderivative of is so that according to the FTC, the area under that curve is . So, the area trapped between is . -- very quick to calculutate with the skills we now have.  In general, it is apparent that if the graph of some function, say , is above the graph of some other function, say , over an interval of , say then the area trapped between them can be calculated as   "
},
{
  "id": "sec-instantaneousVelocity",
  "level": "1",
  "url": "sec-instantaneousVelocity.html",
  "type": "Section",
  "number": "7.2",
  "title": "Velocity",
  "body": " Velocity  Early in this text, we motivated the definition of the derivative by studying the tangent problem. But, that is not the only historical context in which the derivative arises. For example, suppose we have a function, say , that is giving us how far away we are from some location at a given time, say . For sake of argument, suppose that at 1 o'clock we have where the here is miles. In other words, at 1 o'clock we are 50 miles from where we started. Now, suppose we also know that . In other words, at 2 o'clock we are 120 miles from home. Under these circumstances, if someone asked, \"How fast are you going?\", what would you say? Well, that probably pops to mind quickly. Namely, 60 mph (i.e. miles per hour). How'd we get that? Really think about it. We found the distance travelled by looking at the 110 and the 50 to realize we'd gone 60 miles (i.e. we subtracted the from the ) and that it had taken from 1 o'clock to 2 o'clock which is 1 hour (i.e. 2 o'clock - 1 o'clock). Ok... but does that mean we were doing 60mph right at 1 o'clock? Hmmm... not necessarily. After all, we might have been moving a bit slower at 1 o'clock and then sped up a bit before 2 o'clock. So, this is more like an average. So, what if we knew also that ? Well, that gives So now are we convinced that we were doing 60mph at 1 o'clock? Still no. But, since only a half hour passed after 1 o'clock, this average feels more like it might represent how fast we were going right at 1 o'clock. So, let's take even a shorter time span after 1 o'clock. Suppose we check how far we've gone after just 6 minutes (i.e. 1\/10 of an hour). What if that gave . Now we have Now that's only been 6 minutes. So, there wasn't a lot of time for the speed to change. So, the speed at 1 o'clock may have been pretty close to 60. But, it was *still* 6 minutes. So, suppose that is a very teeeensy piece of an hour. Even less than the 6 minutes. Maybe is like 1\/1000000 of an hour. Now, suppose it turns out that Now what do we figure the speed was at 1 o'clock? Well, a millionth of an hour is a tiny fraction of a second so there wasn't much time for the speed to change so it is pretty reasonable to expect that our speed at 1 o'clock was, in fact, 60mph. Notice that what we've been doing is computing for smaller and smaller values of . In other words, it is apparent that the speed right at 1 o'clock is Of course, this is just the derivative of at . This is generally called *instantaneous velocity* (which just means velocity at a specific time). For any function that gives how far away we are from a given position (i.e. a *displacement* function), we see that intantaneous velocity at any given time is . So, our knowledge of differentiation now gives us the skills to compute velocities when we have a displacement function.  "
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
