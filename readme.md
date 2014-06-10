 | <a href="http://youtube.com/">Video*</a>
 | <a href="http://arkbg1.github.io/BitVote/">Demo</a>
 | <a href="https://github.com/o-jasper/VOTE_MINIONS">Code</a>
 | <a href="http://forum.ethereum.org/discussion/941/bitvote-protecting-ethereum-from-social-attacks">SE Plan</a>
 | <a href="https://github.com/arkbg1/BitVote/blob/gh-pages/TechPlan.md">Tech Plan</a>
 | <a href="1MRCGygu7547srSatp2Va1gqco1H5uRf8S">Donate</a>
<br />
<br />

<h1>Bitvote</h1>

<p><strong>NOTE</strong> this is just an rough attempt at summing up the points and approach.</p>

<h2>Goal</h2>

<p>The idea is a voting system, that can make the desires and stake of the people
heard, and that can help plan action toward such desires.</p>

<p>It may also be usable to represent the stake of the general public in Ethereum
contracts, or even launch said contracts.</p>

<h3>Voting system</h3>

<p>There will be a voting system. It will be implemented on Ethereum, although
measures may be needed for scalability and anonymity.
(<a href="http://o-jasper.github.io/blog/2014/06/03/hanging_blocks.html">like hanging blocks</a>,
but mind that it isnt worked out)
Likely it will go the DOUG way and add some modifiabilty to the system itself,
although the security implications are great.</p>

<p>The system will probably also have delegation on it.</p>

<p>The current idea is that vote topics will control some of the aspects. In essence
voting for a topic implies you agree with how that vote topic operates. However,
this may sort-of have unforeseen consequences, so it is left open a bit.</p>

<h3>Popularization</h3>

<p>Success depends on popularization. Aaron Bale may be able to help this, i do not
have that deep knowledge about how to do it, at least, beyond the people who can
be technically convinced.</p>

<p>Another thing to help popularization, is to start early with a smaller
community. For instance by &lsquo;starting early&rsquo; &lsquo;fake versions&rsquo; that allows people
to interact with it early, test that a bit by implication. It may also help
attract developers.</p>

<p>However the initial versions, security will not be very well tested(though
learned from), and if a breach is suspected, the resulting votes may be ignored.
Will attempt to account for them.</p>

<p>One important thing is how voters connect to the information out there. Voters
cannot learn about everything, but they can know people who know people who
have, and discussion can sort-of have a &lsquo;signature&rsquo; from which some of them can
smell bullshit to varying degrees. Their opinions in essence have to follow
those lines, not via the television of MSM. As Aaron said &lsquo;grandmas trust Bobby,
he knows computers&rsquo;.</p>

<h3>1 human 1 ID</h3>

<p>We will eventually need an &lsquo;1 human &asymp;1 ID&rsquo; system. <em>Of course</em> many things
on Ethereum may be interested in that! So likely, this part of the project will
be very shared.</p>

<p>I suspect the best approaches to this relates very closely to reputation and
trust systems, as humans are best at identifying other humans, and using tools
to do so. I imagine some kind trust network system where people indicate other
people as having some ID, and there is incentive for &lsquo;detectives&rsquo; for
identifying people with multiple identities.(and the system will work out a lot
of consequences.)</p>

<h4>Some initial ideas (may want to skip section)</h4>

<p>I personally have an idea of making a reputation system in which every person
indicates his opinion, and in order to look at the implications, &lsquo;paths&rsquo; from
person to person are reported to the Ethereum contract, which can then check
them. This will give a lower bound on reputation whenever ommision of edges
is never beneficial.</p>

<p>Note that in such reputation system, bitvote inherently has its own &lsquo;opinion&rsquo;
about who has unique IDs. Really though this is just the estimate of the system,
it is <em>always</em> that way, even with a &lsquo;global reputation&rsquo; system.</p>

<p>The bitvote &lsquo;opinion&rsquo; of unique IDs has roots in initial people creating it.
However, maybe it may &lsquo;change the roots&rsquo; over time spreading it out so there
are fewer weak spots.. Any system when IDs point out IDs, the system will likely
be incontrovertably corrupted once it is beyond some point with regard to fake
accounts. A challenge is to make this unlikely to happen and detectable
(w/o false positive), so that people can simply start up a new version.</p>

<h3>Other thoughts</h3>

<ul>
<li><p>Constituencies? If some vote is about something local, it may make sense to
allow people from that constituancy are accepted. (Note: i suppose currently,
vote recipient contracts can reject votes, choosing a constituancy)</p></li>
<li><p>Anonymity is not yet solved.</p></li>
<li><p>Scalability might be an issue. (<a href="http://o-jasper.github.io/blog/2014/06/03/hanging_blocks.html">hanging blocks</a> may be able to help, not worked out)</p></li>
<li><p>Security of computers of participants is an issue in everything.</p></li>
</ul>


<h2>Stages in developing</h2>

<p>A lot of these points are in fact simultanious.</p>

<h4>1: explore how to create it</h4>

<p>This is a matter of figuring out of to fit the scalability, how to get the
desired features, like anonymity, delegation, (voted upon)self-modification,
and interaction with contracts the receive the votes.</p>

<p>It may also involve &lsquo;theoretical work&rsquo;.</p>

<p>Before finalizing how it will work in the live versions, PoC versions
<em>should be</em> live. Even if they possibly do not run on the Ethereum backend yet.
As said, votes on non-serious systems may not be taken seriously. Hopefully we will
mostly be follow the system.</p>

<p>Point 4, the &lsquo;1person &asymp; 1ID&rsquo; this is very important here too.</p>

<h4>2: create guis (continuous)</h4>

<p>JS Ethereum API calls will be wrapped up into some functions that do stuff for
you, and there will be a default one that used the <code>document.getElementByID</code>
thing so you can just write html with the <code>id=..</code> in the right places, making
writing an interface easy for people who know html+css well.</p>

<p>Different guis may also be created to suit different people, and perhaps vote
topics may have a gui that votes on itself.</p>

<p>One important point for Ethereum <em>in general</em> is that GUIs should not fool
people into sending transactions they do not want to send.</p>

<h4>3: popularize (continuous)</h4>

<p>This is continuous and comes with the gui creation and getting people to help,
work on it. Initially we probably want:</p>

<ul>
<li><p>Developer types, and people who can <em>properly</em> theorize&hellip; Game theory, math,
physics style.</p></li>
<li><p>People with ties to different communities.</p></li>
<li><p>We do not want an overly masculine group. Unfortunately, it seems plainly a
fact that it is overwhelmingly men attracted to this stuff. But it is not like
women do not care, or do not have useful input, and we do need them.</p>

<p>We do not want it to be &lsquo;for nerds&rsquo;.</p></li>
</ul>


<p>Perhaps we could become &lsquo;a victim of our own success&rsquo; we should perhaps avoid
popularizing beyond what a server can handle, if we&rsquo;re still in the stage of
testing that way.</p>

<h4>4: figure out &lsquo;1 person &asymp; 1 ID&rsquo;</h4>

<p>As said, <em>many</em> projects need this. (above i wrote about it)</p>

<h4>5: improve security</h4>

<p>Again, <em>many</em> projects need this. This is about stuff like private keys on
separate devices,(&lsquo;hard wallet&rsquo;) secondary computers aimed as security,
brain/paper wallets, and ethereum contracts that attempt help this.</p>

<h4>6: Living system (continuously, &lsquo;afterward&rsquo;)</h4>

<p>As it is on Ethereum, it should in essence operate itself.</p>

<p>However, if there is still a worry something needs fixing with us in particular,
at maximum, for six months we could have bitvote developers need fewer votes to
get changes through. The intention is that this is not used.
How long depends on how sure we feel, and how much we have tested in a similar
environment as the release Ethereum, how many people reviewed it.</p>

<p>Otherwise, votes to self-change should need widespread acceptance,
and it may even come with two voting rounds, where the vote only passes or the
change is reverted if the second one doesnt pass aswel. This, because
self-change could potentially harm the thing if it goes wrong.</p>
