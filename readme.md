Proof-of-Concept:  http://arkbg1.github.io/BitVote/
Code: https://github.com/o-jasper/VOTE_MINIONS
Propsal: http://forum.ethereum.org/discussion/941/bitvote-protecting-ethereum-from-social-attacks


BitVote Technical Summary
NOTE this is just a rough draft of summary and technical approach.
Goal
The idea is a voting system, that can make the desires and stake of the people heard, and that can help plan action toward such desires.
It may also be usable to represent the stake of the general public in Ethereum contracts, or even launch said contracts.
Voting system
There will be a voting system. It will be implemented on Ethereum, although measures may be needed for scalability and anonymity. (like hanging blocks, but mind that it isn't worked out) Likely it will go the DOUG way and add some modifiability to the system itself, although the security implications are great.
The system will probably also have delegation on it.
The current idea is that vote topics will control some of the aspects. In essence voting for a topic implies you agree with how that vote topic operates. However, this may sort-of have unforeseen consequences, so it is left open a bit.
Popularization
Success depends on popularization. Aaron Bale may be able to help this, i do not have that deep knowledge about how to do it, at least, beyond the people who can be technically convinced.
Another thing to help popularization, is to start early with a smaller community. For instance by ‘starting early’ ‘fake versions’ that allows people to interact with it early, test that a bit by implication. It may also help attract developers.
However the initial versions, security will not be very well tested(though learned from), and if a breach is suspected, the resulting votes may be ignored. Will attempt to account for them.
One important thing is how voters connect to the information out there. Voters cannot learn about everything, but they can know people who know people who have, and discussion can sort-of have a ‘signature’ from which some of them can smell bullshit to varying degrees. Their opinions in essence have to follow those lines, not via the television of MSM. As Aaron said ‘grandmas trust Bobby, he knows computers’.
1 human 1 ID
We will eventually need an ‘1 human ≈1 ID’ system. Of course many things on Ethereum may be interested in that! So likely, this part of the project will be very shared.
I suspect the best approaches to this relates very closely to reputation and trust systems, as humans are best at identifying other humans, and using tools to do so. I imagine some kind trust network system where people indicate other people as having some ID, and there is incentive for ‘detectives’ for identifying people with multiple identities.(and the system will work out a lot of consequences.)
Some initial ideas (may want to skip section)
I personally have an idea of making a reputation system in which every person indicates his opinion, and in order to look at the implications, ‘paths’ from person to person are reported to the Ethereum contract, which can then check them. This will give a lower bound on reputation whenever omission of edges is never beneficial.
Note that in such reputation system, bitvote inherently has its own ‘opinion’ about who has unique IDs. Really though this is just the estimate of the system, it is always that way, even with a ‘global reputation’ system.
The bitvote ‘opinion’ of unique IDs has roots in initial people creating it. However, maybe it may ‘change the roots’ over time spreading it out so there are fewer weak spots.. Any system when IDs point out IDs, the system will likely be incontrovertibly corrupted once it is beyond some point with regard to fake accounts. A challenge is to make this unlikely to happen and detectable (w/o false positive), so that people can simply start up a new version.
Other thoughts
Constituencies? If some vote is about something local, it may make sense to allow people from that constituency are accepted. (Note: i suppose currently, vote recipient contracts can reject votes, choosing a constituency)
Anonymity is not yet solved.
Scalability might be an issue. (hanging blocks may be able to help, not worked out)
Security of computers of participants is an issue in everything.
Stages in developing
A lot of these points are in fact simultaneous.
1: explore how to create it
This is a matter of figuring out of to fit the scalability, how to get the desired features, like anonymity, delegation, (voted upon)self-modification, and interaction with contracts the receive the votes.
It may also involve ‘theoretical work’.
Before finalizing how it will work in the live versions, PoC versions should be live. Even if they possibly do not run on the Ethereum backend yet. As said, votes on non-serious systems may not be taken seriously. Hopefully we will mostly be follow the system.
Point 4, the ‘1 person ≈ 1 ID’ this is very important here too.
2: create guis (continuous)
JS Ethereum API calls will be wrapped up into some functions that do stuff for you, and there will be a default one that used thedocument.getElementByID thing so you can just write html with the id=.. in the right places, making writing an interface easy for people who know html+css well.
Different guis may also be created to suit different people, and perhaps vote topics may have a gui that votes on itself.
One important point for Ethereum in general is that GUIs should not fool people into sending transactions they do not want to send.
3: popularize (continuous)
This is continuous and comes with the gui creation and getting people to help, work on it. Initially we probably want:
Developer types, and people who can properly theorize… Game theory, math, physics style.
People with ties to different communities.
We do not want an overly masculine group. Unfortunately, it seems plainly a fact that it is overwhelmingly men attracted to this stuff. But it is not like women do not care, or do not have useful input, and we do need them.
We do not want it to be ‘for nerds’.
Perhaps we could become ‘a victim of our own success’ we should perhaps avoid popularizing beyond what a server can handle, if we’re still in the stage of testing that way.
4: figure out ‘1 person ≈ 1 ID’
As said, many projects need this. (above i wrote about it)
5: improve security
Again, many projects need this. This is about stuff like private keys on separate devices,(‘hard wallet’) secondary computers aimed as security, brain/paper wallets, and ethereum contracts that attempt help this.
6: Living system (continuously, ‘afterward’)
As it is on Ethereum, it should in essence operate itself.
However, if there is still a worry something needs fixing with us in particular, at maximum, for six months we could have bitvote developers need fewer votes to get changes through. The intention is that this is not used. How long depends on how sure we feel, and how much we have tested in a similar environment as the release Ethereum, how many people reviewed it.
Otherwise, votes to self-change should need widespread acceptance, and it may even come with two voting rounds, where the vote only passes or the change is reverted if the second one doesn't pass as well. This, because self-change could potentially harm the thing if it goes wrong.

