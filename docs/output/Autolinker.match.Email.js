Ext.data.JsonP.Autolinker_match_Email({"tagname":"class","name":"Autolinker.match.Email","autodetected":{},"files":[{"filename":"Email.js","href":"Email.html#Autolinker-match-Email"}],"extends":"Autolinker.match.Match","members":[{"name":"email","tagname":"cfg","owner":"Autolinker.match.Email","id":"cfg-email","meta":{"required":true}},{"name":"matchedText","tagname":"cfg","owner":"Autolinker.match.Match","id":"cfg-matchedText","meta":{"required":true}},{"name":"constructor","tagname":"method","owner":"Autolinker.match.Match","id":"method-constructor","meta":{}},{"name":"getAnchorHref","tagname":"method","owner":"Autolinker.match.Email","id":"method-getAnchorHref","meta":{}},{"name":"getAnchorText","tagname":"method","owner":"Autolinker.match.Email","id":"method-getAnchorText","meta":{}},{"name":"getEmail","tagname":"method","owner":"Autolinker.match.Email","id":"method-getEmail","meta":{}},{"name":"getMatchedText","tagname":"method","owner":"Autolinker.match.Match","id":"method-getMatchedText","meta":{}},{"name":"getType","tagname":"method","owner":"Autolinker.match.Email","id":"method-getType","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-Autolinker.match.Email","short_doc":"Represents a Email match found in an input string which should be Autolinked. ...","component":false,"superclasses":["Autolinker.match.Match"],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/Autolinker.match.Match' rel='Autolinker.match.Match' class='docClass'>Autolinker.match.Match</a><div class='subclass '><strong>Autolinker.match.Email</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/Email.html#Autolinker-match-Email' target='_blank'>Email.js</a></div></pre><div class='doc-contents'><p>Represents a Email match found in an input string which should be Autolinked.</p>\n\n<p>See this class's superclass (<a href=\"#!/api/Autolinker.match.Match\" rel=\"Autolinker.match.Match\" class=\"docClass\">Autolinker.match.Match</a>) for more details.</p>\n</div><div class='members'><div class='members-section'><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Required config options</h3><div id='cfg-email' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Autolinker.match.Email'>Autolinker.match.Email</span><br/><a href='source/Email.html#Autolinker-match-Email-cfg-email' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Autolinker.match.Email-cfg-email' class='name expandable'>email</a> : String<span class=\"signature\"><span class='required' >required</span></span></div><div class='description'><div class='short'><p>The email address that was matched.</p>\n</div><div class='long'><p>The email address that was matched.</p>\n</div></div></div><div id='cfg-matchedText' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Autolinker.match.Match' rel='Autolinker.match.Match' class='defined-in docClass'>Autolinker.match.Match</a><br/><a href='source/Match.html#Autolinker-match-Match-cfg-matchedText' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Autolinker.match.Match-cfg-matchedText' class='name expandable'>matchedText</a> : String<span class=\"signature\"><span class='required' >required</span></span></div><div class='description'><div class='short'><p>The original text that was matched.</p>\n</div><div class='long'><p>The original text that was matched.</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Autolinker.match.Match' rel='Autolinker.match.Match' class='defined-in docClass'>Autolinker.match.Match</a><br/><a href='source/Match.html#Autolinker-match-Match-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Autolinker.match.Match-method-constructor' class='name expandable'>Autolinker.match.Email</a>( <span class='pre'>cfg</span> ) : <a href=\"#!/api/Autolinker.match.Match\" rel=\"Autolinker.match.Match\" class=\"docClass\">Autolinker.match.Match</a><span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>cfg</span> : Object<div class='sub-desc'><p>The configuration properties for the Match instance, specified in an Object (map).</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Autolinker.match.Match\" rel=\"Autolinker.match.Match\" class=\"docClass\">Autolinker.match.Match</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getAnchorHref' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Autolinker.match.Email'>Autolinker.match.Email</span><br/><a href='source/Email.html#Autolinker-match-Email-method-getAnchorHref' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Autolinker.match.Email-method-getAnchorHref' class='name expandable'>getAnchorHref</a>( <span class='pre'></span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the anchor href that should be generated for the match. ...</div><div class='long'><p>Returns the anchor href that should be generated for the match.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href=\"#!/api/Autolinker.match.Match-method-getAnchorHref\" rel=\"Autolinker.match.Match-method-getAnchorHref\" class=\"docClass\">Autolinker.match.Match.getAnchorHref</a></p></div></div></div><div id='method-getAnchorText' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Autolinker.match.Email'>Autolinker.match.Email</span><br/><a href='source/Email.html#Autolinker-match-Email-method-getAnchorText' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Autolinker.match.Email-method-getAnchorText' class='name expandable'>getAnchorText</a>( <span class='pre'></span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the anchor text that should be generated for the match. ...</div><div class='long'><p>Returns the anchor text that should be generated for the match.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href=\"#!/api/Autolinker.match.Match-method-getAnchorText\" rel=\"Autolinker.match.Match-method-getAnchorText\" class=\"docClass\">Autolinker.match.Match.getAnchorText</a></p></div></div></div><div id='method-getEmail' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Autolinker.match.Email'>Autolinker.match.Email</span><br/><a href='source/Email.html#Autolinker-match-Email-method-getEmail' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Autolinker.match.Email-method-getEmail' class='name expandable'>getEmail</a>( <span class='pre'></span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the email address that was matched. ...</div><div class='long'><p>Returns the email address that was matched.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getMatchedText' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Autolinker.match.Match' rel='Autolinker.match.Match' class='defined-in docClass'>Autolinker.match.Match</a><br/><a href='source/Match.html#Autolinker-match-Match-method-getMatchedText' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Autolinker.match.Match-method-getMatchedText' class='name expandable'>getMatchedText</a>( <span class='pre'></span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the original text that was matched. ...</div><div class='long'><p>Returns the original text that was matched.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getType' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Autolinker.match.Email'>Autolinker.match.Email</span><br/><a href='source/Email.html#Autolinker-match-Email-method-getType' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Autolinker.match.Email-method-getType' class='name expandable'>getType</a>( <span class='pre'></span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns a string name for the type of match that this class represents. ...</div><div class='long'><p>Returns a string name for the type of match that this class represents.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href=\"#!/api/Autolinker.match.Match-method-getType\" rel=\"Autolinker.match.Match-method-getType\" class=\"docClass\">Autolinker.match.Match.getType</a></p></div></div></div></div></div></div></div>","meta":{}});