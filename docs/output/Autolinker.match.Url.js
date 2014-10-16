Ext.data.JsonP.Autolinker_match_Url({"tagname":"class","name":"Autolinker.match.Url","autodetected":{},"files":[{"filename":"Url.js","href":"Url.html#Autolinker-match-Url"}],"extends":"Autolinker.match.Match","members":[{"name":"matchedText","tagname":"cfg","owner":"Autolinker.match.Match","id":"cfg-matchedText","meta":{"required":true}},{"name":"protocolRelativeMatch","tagname":"cfg","owner":"Autolinker.match.Url","id":"cfg-protocolRelativeMatch","meta":{"required":true}},{"name":"stripPrefix","tagname":"cfg","owner":"Autolinker.match.Url","id":"cfg-stripPrefix","meta":{"required":true}},{"name":"url","tagname":"cfg","owner":"Autolinker.match.Url","id":"cfg-url","meta":{"required":true}},{"name":"checkForProtocolRegex","tagname":"property","owner":"Autolinker.match.Url","id":"property-checkForProtocolRegex","meta":{"protected":true}},{"name":"protocolRelativeRegex","tagname":"property","owner":"Autolinker.match.Url","id":"property-protocolRelativeRegex","meta":{"private":true}},{"name":"urlPrefixRegex","tagname":"property","owner":"Autolinker.match.Url","id":"property-urlPrefixRegex","meta":{"private":true}},{"name":"constructor","tagname":"method","owner":"Autolinker.match.Match","id":"method-constructor","meta":{}},{"name":"getAnchorHref","tagname":"method","owner":"Autolinker.match.Url","id":"method-getAnchorHref","meta":{}},{"name":"getAnchorText","tagname":"method","owner":"Autolinker.match.Url","id":"method-getAnchorText","meta":{}},{"name":"getMatchedText","tagname":"method","owner":"Autolinker.match.Match","id":"method-getMatchedText","meta":{}},{"name":"getType","tagname":"method","owner":"Autolinker.match.Url","id":"method-getType","meta":{}},{"name":"getUrl","tagname":"method","owner":"Autolinker.match.Url","id":"method-getUrl","meta":{}},{"name":"removeTrailingSlash","tagname":"method","owner":"Autolinker.match.Url","id":"method-removeTrailingSlash","meta":{"private":true}},{"name":"stripProtocolRelativePrefix","tagname":"method","owner":"Autolinker.match.Url","id":"method-stripProtocolRelativePrefix","meta":{"private":true}},{"name":"stripUrlPrefix","tagname":"method","owner":"Autolinker.match.Url","id":"method-stripUrlPrefix","meta":{"private":true}}],"alternateClassNames":[],"aliases":{},"id":"class-Autolinker.match.Url","short_doc":"Represents a Url match found in an input string which should be Autolinked. ...","component":false,"superclasses":["Autolinker.match.Match"],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/Autolinker.match.Match' rel='Autolinker.match.Match' class='docClass'>Autolinker.match.Match</a><div class='subclass '><strong>Autolinker.match.Url</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/Url.html#Autolinker-match-Url' target='_blank'>Url.js</a></div></pre><div class='doc-contents'><p>Represents a Url match found in an input string which should be Autolinked.</p>\n\n<p>See this class's superclass (<a href=\"#!/api/Autolinker.match.Match\" rel=\"Autolinker.match.Match\" class=\"docClass\">Autolinker.match.Match</a>) for more details.</p>\n</div><div class='members'><div class='members-section'><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Required config options</h3><div id='cfg-matchedText' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Autolinker.match.Match' rel='Autolinker.match.Match' class='defined-in docClass'>Autolinker.match.Match</a><br/><a href='source/Match.html#Autolinker-match-Match-cfg-matchedText' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Autolinker.match.Match-cfg-matchedText' class='name expandable'>matchedText</a> : String<span class=\"signature\"><span class='required' >required</span></span></div><div class='description'><div class='short'><p>The original text that was matched.</p>\n</div><div class='long'><p>The original text that was matched.</p>\n</div></div></div><div id='cfg-protocolRelativeMatch' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Autolinker.match.Url'>Autolinker.match.Url</span><br/><a href='source/Url.html#Autolinker-match-Url-cfg-protocolRelativeMatch' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Autolinker.match.Url-cfg-protocolRelativeMatch' class='name expandable'>protocolRelativeMatch</a> : Boolean<span class=\"signature\"><span class='required' >required</span></span></div><div class='description'><div class='short'>true if the URL is a protocol-relative match. ...</div><div class='long'><p><code>true</code> if the URL is a protocol-relative match. A protocol-relative match is a URL that starts with '//',\nand will be either http:// or https:// based on the protocol that the site is loaded under.</p>\n</div></div></div><div id='cfg-stripPrefix' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Autolinker.match.Url'>Autolinker.match.Url</span><br/><a href='source/Url.html#Autolinker-match-Url-cfg-stripPrefix' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Autolinker.match.Url-cfg-stripPrefix' class='name expandable'>stripPrefix</a> : Boolean<span class=\"signature\"><span class='required' >required</span></span></div><div class='description'><div class='short'>true if 'http://' or 'https://' and/or the 'www.' should be stripped from the beginning of URL links' text,\nfalse oth...</div><div class='long'><p><code>true</code> if 'http://' or 'https://' and/or the 'www.' should be stripped from the beginning of URL links' text,\n<code>false</code> otherwise.</p>\n</div></div></div><div id='cfg-url' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Autolinker.match.Url'>Autolinker.match.Url</span><br/><a href='source/Url.html#Autolinker-match-Url-cfg-url' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Autolinker.match.Url-cfg-url' class='name expandable'>url</a> : String<span class=\"signature\"><span class='required' >required</span></span></div><div class='description'><div class='short'><p>The url that was matched.</p>\n</div><div class='long'><p>The url that was matched.</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-checkForProtocolRegex' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Autolinker.match.Url'>Autolinker.match.Url</span><br/><a href='source/Url.html#Autolinker-match-Url-property-checkForProtocolRegex' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Autolinker.match.Url-property-checkForProtocolRegex' class='name expandable'>checkForProtocolRegex</a> : RegExp<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>A regular expression used to check if the url is missing a protocol (in which case, 'http://'\nwill be added). ...</div><div class='long'><p>A regular expression used to check if the <a href=\"#!/api/Autolinker.match.Url-cfg-url\" rel=\"Autolinker.match.Url-cfg-url\" class=\"docClass\">url</a> is missing a protocol (in which case, 'http://'\nwill be added).</p>\n<p>Defaults to: <code>/^[A-Za-z]{3,9}:/</code></p></div></div></div><div id='property-protocolRelativeRegex' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Autolinker.match.Url'>Autolinker.match.Url</span><br/><a href='source/Url.html#Autolinker-match-Url-property-protocolRelativeRegex' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Autolinker.match.Url-property-protocolRelativeRegex' class='name expandable'>protocolRelativeRegex</a> : RegExp<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>The regular expression used to remove the protocol-relative '//' from the url string, for purposes\nof getAnchorText. ...</div><div class='long'><p>The regular expression used to remove the protocol-relative '//' from the <a href=\"#!/api/Autolinker.match.Url-cfg-url\" rel=\"Autolinker.match.Url-cfg-url\" class=\"docClass\">url</a> string, for purposes\nof <a href=\"#!/api/Autolinker.match.Url-method-getAnchorText\" rel=\"Autolinker.match.Url-method-getAnchorText\" class=\"docClass\">getAnchorText</a>. A protocol-relative URL is, for example, \"//yahoo.com\"</p>\n<p>Defaults to: <code>/^\\/\\//</code></p></div></div></div><div id='property-urlPrefixRegex' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Autolinker.match.Url'>Autolinker.match.Url</span><br/><a href='source/Url.html#Autolinker-match-Url-property-urlPrefixRegex' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Autolinker.match.Url-property-urlPrefixRegex' class='name expandable'>urlPrefixRegex</a> : RegExp<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>A regular expression used to remove the 'http://' or 'https://' and/or the 'www.' from URLs. ...</div><div class='long'><p>A regular expression used to remove the 'http://' or 'https://' and/or the 'www.' from URLs.</p>\n<p>Defaults to: <code>/^(https?:\\/\\/)?(www\\.)?/i</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Autolinker.match.Match' rel='Autolinker.match.Match' class='defined-in docClass'>Autolinker.match.Match</a><br/><a href='source/Match.html#Autolinker-match-Match-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Autolinker.match.Match-method-constructor' class='name expandable'>Autolinker.match.Url</a>( <span class='pre'>cfg</span> ) : <a href=\"#!/api/Autolinker.match.Match\" rel=\"Autolinker.match.Match\" class=\"docClass\">Autolinker.match.Match</a><span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>cfg</span> : Object<div class='sub-desc'><p>The configuration properties for the Match instance, specified in an Object (map).</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Autolinker.match.Match\" rel=\"Autolinker.match.Match\" class=\"docClass\">Autolinker.match.Match</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getAnchorHref' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Autolinker.match.Url'>Autolinker.match.Url</span><br/><a href='source/Url.html#Autolinker-match-Url-method-getAnchorHref' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Autolinker.match.Url-method-getAnchorHref' class='name expandable'>getAnchorHref</a>( <span class='pre'></span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the anchor href that should be generated for the match. ...</div><div class='long'><p>Returns the anchor href that should be generated for the match.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href=\"#!/api/Autolinker.match.Match-method-getAnchorHref\" rel=\"Autolinker.match.Match-method-getAnchorHref\" class=\"docClass\">Autolinker.match.Match.getAnchorHref</a></p></div></div></div><div id='method-getAnchorText' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Autolinker.match.Url'>Autolinker.match.Url</span><br/><a href='source/Url.html#Autolinker-match-Url-method-getAnchorText' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Autolinker.match.Url-method-getAnchorText' class='name expandable'>getAnchorText</a>( <span class='pre'></span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the anchor text that should be generated for the match. ...</div><div class='long'><p>Returns the anchor text that should be generated for the match.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href=\"#!/api/Autolinker.match.Match-method-getAnchorText\" rel=\"Autolinker.match.Match-method-getAnchorText\" class=\"docClass\">Autolinker.match.Match.getAnchorText</a></p></div></div></div><div id='method-getMatchedText' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Autolinker.match.Match' rel='Autolinker.match.Match' class='defined-in docClass'>Autolinker.match.Match</a><br/><a href='source/Match.html#Autolinker-match-Match-method-getMatchedText' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Autolinker.match.Match-method-getMatchedText' class='name expandable'>getMatchedText</a>( <span class='pre'></span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the original text that was matched. ...</div><div class='long'><p>Returns the original text that was matched.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getType' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Autolinker.match.Url'>Autolinker.match.Url</span><br/><a href='source/Url.html#Autolinker-match-Url-method-getType' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Autolinker.match.Url-method-getType' class='name expandable'>getType</a>( <span class='pre'></span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns a string name for the type of match that this class represents. ...</div><div class='long'><p>Returns a string name for the type of match that this class represents.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href=\"#!/api/Autolinker.match.Match-method-getType\" rel=\"Autolinker.match.Match-method-getType\" class=\"docClass\">Autolinker.match.Match.getType</a></p></div></div></div><div id='method-getUrl' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Autolinker.match.Url'>Autolinker.match.Url</span><br/><a href='source/Url.html#Autolinker-match-Url-method-getUrl' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Autolinker.match.Url-method-getUrl' class='name expandable'>getUrl</a>( <span class='pre'></span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the url that was matched, assuming the protocol to be 'http://' if the match\nwas missing a protocol. ...</div><div class='long'><p>Returns the url that was matched, assuming the protocol to be 'http://' if the match\nwas missing a protocol.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-removeTrailingSlash' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Autolinker.match.Url'>Autolinker.match.Url</span><br/><a href='source/Url.html#Autolinker-match-Url-method-removeTrailingSlash' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Autolinker.match.Url-method-removeTrailingSlash' class='name expandable'>removeTrailingSlash</a>( <span class='pre'>anchorText</span> ) : String<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Removes any trailing slash from the given anchorText, in preparation for the text to be displayed. ...</div><div class='long'><p>Removes any trailing slash from the given <code>anchorText</code>, in preparation for the text to be displayed.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>anchorText</span> : String<div class='sub-desc'><p>The text of the anchor that is being generated, for which to remove any trailing\n  slash ('/') that may exist.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>The <code>anchorText</code>, with the trailing slash removed.</p>\n</div></li></ul></div></div></div><div id='method-stripProtocolRelativePrefix' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Autolinker.match.Url'>Autolinker.match.Url</span><br/><a href='source/Url.html#Autolinker-match-Url-method-stripProtocolRelativePrefix' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Autolinker.match.Url-method-stripProtocolRelativePrefix' class='name expandable'>stripProtocolRelativePrefix</a>( <span class='pre'>text</span> ) : String<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Strips any protocol-relative '//' from the anchor text. ...</div><div class='long'><p>Strips any protocol-relative '//' from the anchor text.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>text</span> : String<div class='sub-desc'><p>The text of the anchor that is being generated, for which to strip off the\n  protocol-relative prefix (such as stripping off \"//\")</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>The <code>anchorText</code>, with the protocol-relative prefix stripped.</p>\n</div></li></ul></div></div></div><div id='method-stripUrlPrefix' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Autolinker.match.Url'>Autolinker.match.Url</span><br/><a href='source/Url.html#Autolinker-match-Url-method-stripUrlPrefix' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Autolinker.match.Url-method-stripUrlPrefix' class='name expandable'>stripUrlPrefix</a>( <span class='pre'>text</span> ) : String<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Strips the URL prefix (such as \"http://\" or \"https://\") from the given text. ...</div><div class='long'><p>Strips the URL prefix (such as \"http://\" or \"https://\") from the given text.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>text</span> : String<div class='sub-desc'><p>The text of the anchor that is being generated, for which to strip off the\n  url prefix (such as stripping off \"http://\")</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>The <code>anchorText</code>, with the prefix stripped.</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});