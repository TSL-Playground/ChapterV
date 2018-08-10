var prompts = [
/* 1. */ "Analogy",
/* 2. */ "Surface Features",
/* 3. */ "Deep Structure",
/* 4. */ "Explaining New Idea",
/* 5. */ "Negative Transfer",
/* 6. */ "Positive Transfer",
/* 7. */ "Critical Outcome of Analogy",
/* 8. */ "Unintended Deep Structure",
/* 9. */ "Bad Analogy",
/* 10. */ "Imprecise Analogies",
/* 11. */ "Problems Analogies can Solve",
/* 12. */ "Belonging",
/* 13. */ "Decreasing Negative Distracting Thoughts",
/* 14. */ "Positive Effect of Belonging",
/* 15. */ "Pointing Out Stereotypes",
/* 16. */ "Membership",
/* 17. */ "Individual's Self-Identification",
/* 18. */ "People's Attributions about Identity",
/* 19. */ "Not Identify with a Group",
/* 20. */ "Stereotype Threat",
/* 21. */ "Solution to Stereotype Threat",
/* 22. */ "Types of Belonging Interventions",
/* 23. */ "Forgo Membership",
/* 24. */ "Reframe Beliefs",
/* 25. */ "Belonging Booster",
/* 26. */ "Belonging Cycle",
/* 27. */ "Adopt Goals and Norms",
/* 28. */ "Belonging in Online Course",
/* 29. */ "Outcome of Belonging",
/* 30. */ "Risk of Belonging Intervention",
/* 31. */ "Risk of Targeted Belonging Intervention",
/* 32. */ "Bad Example of Belonging Intervention",
/* 33. */ "Problems Belonging can Solve",
/* 34. */ "Contrasting Cases",
/* 35. */ "Purpose of Contrasting Cases",
/* 36. */ "Perceptual Learning",
/* 37. */ "Way to Generate Contrasting Cases",
/* 38. */ "Assess Student's Precision",
/* 39. */ "Challenge of Self-Learning Contrasting Cases",
/* 40. */ "Meno's Paradox",
/* 41. */ "Risks of Contrasting Cases",
/* 42. */ "Problems Contrasting Cases Solve",
/* 43. */ "Deliberate Practice",
/* 44. */ "Performance Plateau",
/* 45. */ "Develop Exceptional Expertise",
/* 46. */ "Quantity of Practice",
/* 47. */ "Innate Ability",
/* 48. */ "Chunking in Deliberate Practice",
/* 49. */ "Proceduralization in Deliberate Practice",
/* 50. */ "Automatization in Deliberate Practice",
/* 51. */ "Knowledge Reorganization",
/* 52. */ "Conditions for Deliberate Practice",
/* 53. */ "Ways to Incentivize Deliberate Practice",
/* 54. */ "The Power Law of Practice",
/* 55. */ "Risk of Deliberate Practice",
/* 56. */ "Problems Deliberate Practice Solve",
/* 57. */ "How to Use Deliberate Practice",
/* 58. */ "Elaboration",
/* 59. */ "Declarative Information",
/* 60. */ "Working Memory",
/* 61. */ "Encoding and Retrieving Memory",
/* 62. */ "Use Elaboration in Learning",
/* 63. */ "Complementary Approaches to Elaboration"
]

var promptDesc = [
/* 1. */ "Finding the underlying similarity between diverse instances. Help people learn principles and apply those in new situation.",
/* 2. */ "Readily perceived properties in things. For example, 'Deluge is to Droplet as Beach is to Wave' share surface features because they all involve water.",
/* 3. */ "Properties in things that are not easily seen. For example, 'Deluge is to Droplet as Landslide is to Pebble' shares the same deep structure: a disaster can result from accumulation of many harmless events. This is the key of using analogies to learn: find common principle despite differences at the surface.",
/* 4. */ "A way to use analogies in learning is to explain a new idea by making an analogy  to a more familiar one. For example: teaching the idea of blood vessels by making reference to highways.",
/* 5. */ "Using something memorized but in the wrong situation. For example, a student learn how to solve a combinatoric problem that involves dice. They then assume that all problems that use dice in the problems mean that it's combinatorics problems (they use the object (dice) in the problem as the cue).",
/* 6. */ "People who appropriately apply what they had learned in a new situation. For example: instead of having only dice as the object in permutation problems, teacher can use cars, dice, balls, etc. so students won't associate only few objects to certain topics.",
/* 7. */ "The ability to transfer key concept to a new situation. Students will be able to solve new problems on their own, without teacher telling them which concept they should be using.",
/* 8. */ "One of the risks of using analogies is that students may find a deep structure that is unintended by the examples.",
/* 9. */ "Another risk of using analogies is not precisely aligning them. For example: People use the water filling a pipe when explaining electrical current. However, this can introduce misconception: students may conclude that the last bulb on a string of Christmas light will come on last, because the electricity (water) gets there last.",
/* 10. */ "Although using exact analogies are better, there is no need to avoid imprecise analogies as long as misleading aspects are pointed out.",
/* 11. */ "Students having difficult time understanding new concepts, students focus on details but missing the big idea/principle, students fail to use what they learned for new problems",
/* 12. */ "Perception of being accepted, valued, and included.",
/* 13. */ "Belonging can help learning by increasing effort and decreasing negative distracting thoughts.",
/* 14. */ "Engendering a sense of belonging can bolster motivation and engagement, as well as persistence in the face of difficulties.",
/* 15. */ "Highlighting that a person does not belong by pointing out stereotypes about gender/race can increase anxiety and depress learning and test performance.",
/* 16. */ "A characteristic of human affairs is the existence of social groups. Membership in some social groups, like Miracle Whip lovers, is unlikely to shape one's life outcomes; however, in some other groups can confer broad material advantages/disadvantages to learning.",
/* 17. */ "One way to attribute group membership is through self-identification. For example: one may says that they are a basketball player.",
/* 18. */ "Another way to attribute group membership is through other people's attributions about one's Identity. For example: person A may say person B is a basketball player.",
/* 19. */ "Sometimes people may not identify with a learning group. For example, a person may believe they does not belong in college, despite attending. This belief may be reinforced by others, such as unsupportive teachers.",
/* 20. */ "Sometimes there is a believe that being a member of one group excludes people from belonging to another group. For example: A woman wants to identify with both group 'women' and group 'good at math'. However, others think that a person cannot belong in both group. This can cause anxiety that may lead to poorer math performance.",
/* 21. */ "It's hard to identify the threats, so it's difficult to remove all triggers. In this situation, it may help to work at the level of people's beliefs rather than exhaustively changing the environment. One useful solution is to help people simply appreciate that they do belong.",
/* 22. */ "Changing students' attributions about whether they belong. This kinds are short but powerful, focusing on shifting individual's perceptions of their own belonging. Another is changing the environment and social structure to engender social connectedness and belonging.",
/* 23. */ "None of the effective belonging interventions will ask people to forgo membership in one group to belong to another. For example, one doesn't have to sacrifice one's identity as an athlete to be high achieving in school.",
/* 24. */ "To increase a sense of belonging, teacher can help students reframe beliefs about their place in a community, particularly when it comes to setbacks. People can misinterpret short-term failure as reflecting that they do not belong. Helping students reframe setbacks so they are not viewed as a reason for exclusion can be powerful.",
/* 25. */ "An activity that boost sense of belonging, such as reading survey results from more experienced people in the area, quotes and videos that can help new students. This 1-hour long intervention particularly helped minority group to reframe their interpretation of daily adversities of being in college.",
/* 26. */ "Past Experience can result in positive/neutral interpretation or negative interpretation. In the positive cycle: positive interpretation -> less stress -> greater success; in the negative cycle: negative interpretation -> more stress -> less success. However, psychological intervention can be done to break the negative cycle.",
/* 27. */ "To feel a sense of belonging in classroom, students need to adopt the goals and norms, so simply imposing them may not be sufficient. Students can work together to negotiate a set of classroom goals and rules for the year. ",
/* 28. */ "Close physical Proximity is limited and self-motivated persistence is required. some ways to support a sense of belonging is to emphasize dialog and discussion in class forums (making it central part of grades). Also, the instructor should appear active and visible, maybe through detailed feedback and facilitation.",
/* 29. */ "The key outcome are increased effort, greater persistence in the face of challenges, and decreased dwelling on whether one fits in or not. In turn, this can further yield important distal outcomes such as better learning and performance.",
/* 30. */ "Belonging interventions, if done poorly, can backfire. Some risks: poor role models, not feel authentic (which make the students feel they are being manipulated), calling attention to negative stereotypes in targeted interventions, or students may not want to belong to a particular group.",
/* 31. */ "Belonging interventions targeted to particular cultural groups may call attention to negative stereotypes or reinforce feelings of being different, making student feel less like they belong or feel like they need special help because of their cultural background.",
/* 32. */ "Several examples: make a classroom that tracks students by ability (students with higher grades get more advantages), this can cause students in low track feel they do not belong. Another example is getting rid of students' differences instead of helping students understand that their differences do not present a barrier for belonging or succeeding in class. (your drawing can be any examples!)",
/* 33. */ "Some examples: a students who doesn't participate in class, a student underperforms on tests compared to how he does in class, or a student feels out of place.",
/* 34. */ "Close examples that help people notice features they might otherwise overlook. The core learning mechanic is noticing the difference between two or more examples that seem the same at a glance.",
/* 35. */ "Learning by contrasting cases can increase the precision and usability of knowledge. Increasing the features that learners notice has benefits, including better abilities to recognize what is important, a better understanding of abstract ideas, and increased recognition of when to use a piece of knowledge.",
/* 36. */ "Contrasting cases arose from research on perceptual learning. People can learn to perceive the patterns and have meaningful interpretation of the examples.",
/* 37. */ "The simplest way to generate contrasting cases is to decide the features that learners need to notice and to pick contrasts on that feature. For examples, in a flower book, there are many daisy-like flowers. To help discern features, it can be showed that each flower have different shaped leaves, or different number of petals.",
/* 38. */ "A way to assess students' precision of noticing is to show a picture or figure of the topic. Wait a few minutes, then ask them to redraw the image. It will be easy to determine what they have learned to perceive by what features they include in their recreations.",
/* 39. */ "People naturally believe they perceive all that is before them; it never occurs to them that more information may be perceived. Also, even if people believe there is more to perceive, how could they possibly pick the right contrasting cases to highlight something they do not yet know?",
/* 40. */ "Where would you begin to look for something, if you did not already know what you are looking for.",
/* 41. */ "Bad cases and bad tasks. Bad cases make it difficult for students to discern intended features. For example, in the problem of comparing apples and oranges, there are so many differences it's hard to know which feature is important. Bad tasks do not point students toward the significance of the contrast. Students may find too many incidental differences and not consider the implications of what they find.",
/* 42. */ "Students misidentify examples or confuse one thing for another, students do not understand an explanation precisely, students fail to recognize where to use what they know.",
/* 43. */ "Deliberate practice is characterized by a high degree of focused effort to develop specific skills and concepts beyond one's current abilities.",
/* 44. */ "Deliberate practice contrasts with more common practice of simply participating in an activity to get better. For instance, playing basketball is one way to get better at basketball. However, just playing games leads to performance plateau. To escape from it, player have to step away from games and dedicate effort to improve specific shots or moves.",
/* 45. */ "Common findings across all types of expertise is that it takes about 10,000 hours of engagement to develop exceptional expertise. Famous scientists and artists did not produce their important works until they had been at it for a long time.",
/* 46. */ "Another findings across all types of expertise is that to become exceptional at something, quality of practice is also as important as quantity of practice. Deliberate practice involves focusing on what is beyond one's current skill set rather than just executing what one is already able to do.",
/* 47. */ "The evidence that expertise depends on practice and not innate ability comes from the fact that experts rarely show outsized performance on tasks unrelated to their expertise. ",
/* 48. */ "Grouping smaller units of information into larger ones. People can consciously hold and manipulate approximately seven pieces of information at any given time. By chunking, the pieces of information can gradually become larger so people can engage more information simultaneously.",
/* 49. */ "It's the first step of chunking, which is to use verbal control and explicit memory retrieval to guide the steps needed to execute a task. For example, when learning to drive, one might state the steps aloud or in one's head to guide action. ",
/* 50. */ "When people first start learning something, they may state the steps aloud or in one's head to guide action. Eventually, the steps become procedures that do not need conscious, verbal guidance to execute. Once procedures have been automatized, it's difficult for people to recover the original substeps.",
/* 51. */ "As people advance in a field they confront new problems, and the demands of those problems cause knowledge reorganization for better memory retrieval. Engaging in deliberate practice changes people's knowledge organization, making it more specialized for the tasks they regularly face.",
/* 52. */ "To be effective, some conditions need to be considered: well-chosen goals and tasks, rich feedback, effort and rest, and copious amounts of motivation. Having experts as a instructor will be very helpful in deliberate practice. ",
/* 53. */ "For example, rewarding the effort (not success) at trying difficult, bonus problems. ",
/* 54. */ "People usually show rapid improvement early, but then the gains attenuate. When just starting, there is tremendous room for improvement. However, the gains begin to taper because there are fewer and fewer inefficiencies to squeeze out of performance.",
/* 55. */ "It requires stepping away from the activities that make an endeavor enjoyable. For example, a guitar student might just want to play through all the songs instead of practicing finger drills. Also, it involves flexibility. People may become comfortable in their expertise and stop growing.",
/* 56. */ "Students hit a plateau and no longer improving. Even after many hours of homework, a student does not have a strong understanding of a topic.",
/* 57. */ "Focus on specific skills and be goal directed, and go beyond current skill.",
/* 58. */ "A way of learning that improves memory by making connections between new information and prior knowledge. Connecting new information to what people already know creates a memory, while repeating something over and over keeps it in people's mind fleetingly.",
/* 59. */ "Elaboration is a strategy specialized for memorizing declarative information - things about which one can talk.",
/* 60. */ "A memory system which enables the conscious manipulation of information, for example, when thinking through a problem. It has only temporary storage, so people need to keep refreshing the information.",
/* 61. */ "Since working memory storage is temporary, people have to file the information away for later use. The way to do it is by encoding the memory, and when the information is needed, the brain can retrieve the information from long-term memory storage.",
/* 62. */ "Elaboration is useful for memorizing meaningful material, including new vocabulary words, sentences, people's names, directions, or even phone numbers. If the goal is to memorize, elaborations do not need to be correct.",
/* 63. */ "Using relevant and precise elaborations, which can help create better retrieval paths. Receiving a relevant elaboration was more effective than generating self-elaboration. Chunking, which depends on uniting discrete ideas. Another one is connecting a topic to well-structured knowledge; for example, associate procedures with rooms in a house."
]
